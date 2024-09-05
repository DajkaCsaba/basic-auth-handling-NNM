import {
  BadRequestException,
  Injectable,
  Logger,
  UnauthorizedException,
} from '@nestjs/common';
import bcryptjs from 'bcryptjs';
import { LoginInput } from '@/auth/inputs/login.input';
import { AuthService } from '@/auth/auth.service';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { IAppConfiguration } from '@/config/interfaces';
import { TokenUser, UserDAO, UserDTO } from '@/auth/auth.types';
import { AuthMapper } from '@/auth/auth.mapper';
import { CryptoService } from '@/common/services/crypto.service';
import { SetPasswordInput } from '@/auth/inputs/set-password.input';
import { RequestModifyPasswordInput } from '@/auth/inputs/request-modify-password.input';
import { MailManager } from '@/mail/mail.manager';
import { errorToken } from '@renter/common';
import { TOKEN_EXPIRE_TIME_MS } from './auth.constants';
import { RegisterInput } from './inputs/register.input';
import { Maybe } from '@/common/common.type';

@Injectable()
export class AuthManager {
  private readonly logger = new Logger(AuthManager.name);
  private readonly jwtSecret: string;
  private readonly refreshSecret: string;
  private readonly frontendBaseUrl: string;

  constructor(
    private readonly authService: AuthService,
    private readonly authMapper: AuthMapper,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService<IAppConfiguration>,
    private readonly cryptoService: CryptoService,
    private readonly mailManager: MailManager
  ) {
    this.jwtSecret = this.configService.get('jwtSecretKey')!;
    this.refreshSecret = this.configService.get('jwtRefreshSecretKey')!;
    this.frontendBaseUrl = this.configService.get('frontendBaseUrl')!;
  }

  async register(input: RegisterInput): Promise<UserDTO> {
    await this.validateUserUniqueness(input.email);
    const { email, password, ...rest } = input;
    const dao: UserDAO = await this.authService.register({
      ...rest,
      email: this.cryptoService.encrypt(email),
      password: bcryptjs.hashSync(password),
    });
    return this.authMapper.DAOToDTO(dao);
  }

  async login(input: LoginInput) {
    const user: UserDAO = await this.validateUser(input.email);
    await this.validatePassword(user, input);

    const payload: TokenUser = {
      id: user.id,
    };

    const token = await this.jwtService.signAsync(payload, {
      expiresIn: '1h',
      secret: this.jwtSecret,
    });

    const refreshToken = await this.jwtService.signAsync(payload, {
      expiresIn: '7d',
      secret: this.refreshSecret,
    });

    return {
      user: {
        id: user.id,
      },
      backendToken: token,
      refreshToken: refreshToken,
      tokenExpireIn: new Date(Date.now() + TOKEN_EXPIRE_TIME_MS),
    };
  }

  async findCurrentUser(user: TokenUser): Promise<Maybe<UserDTO>> {
    const dao = await this.authService.findUser({ id: user.id });
    return dao ? this.authMapper.DAOToDTO(dao) : null;
  }

  async refreshToken(user: TokenUser) {
    const payload = { id: user.id };
    const token = await this.jwtService.signAsync(payload, {
      expiresIn: '1h',
      secret: this.jwtSecret,
    });

    const refreshToken = await this.jwtService.signAsync(payload, {
      expiresIn: '7d',
      secret: this.refreshSecret,
    });

    return {
      backendToken: token,
      refreshToken: refreshToken,
      tokenExpireIn: new Date(Date.now() + TOKEN_EXPIRE_TIME_MS),
    };
  }

  async createSetPasswordLink(email: string) {
    const token = await this.jwtService.signAsync(
      { email: this.cryptoService.encrypt(email) },
      {
        expiresIn: '1d',
        secret: this.jwtSecret,
      }
    );
    await this.authService.saveResetPasswordToken(email, token);
    return `${this.frontendBaseUrl}/set-password/${token}`;
  }

  async setPassword(input: SetPasswordInput) {
    let payload;
    try {
      payload = await this.jwtService.verifyAsync(input.token, {
        secret: this.jwtSecret,
      });
    } catch (e) {
      this.logger.error(e);
      throw new UnauthorizedException(errorToken.InvalidToken);
    }

    const isExists = await this.authService.isUserExist({
      email: payload.email,
      resetPasswordToken: input.token,
    });

    if (!isExists) {
      this.logger.error(
        'Invalid token provided, the payload is: \n' +
          JSON.stringify({ payload }, null, 2)
      );
      throw new BadRequestException(errorToken.InvalidToken);
    }

    await this.authService.setPassword(payload.email, input.password);
  }

  async requestPasswordModify(input: RequestModifyPasswordInput) {
    const encryptedMail = this.cryptoService.encrypt(input.email);
    const user = await this.validateUser(input.email);

    const token = await this.jwtService.signAsync(
      { email: encryptedMail },
      { expiresIn: '1h', secret: this.jwtSecret }
    );

    const origin = this.configService.get('frontendBaseUrl');
    const linkResetPassword = `${origin}/set-password/${token}`;

    this.authService.saveResetPasswordToken(input.email, token);

    this.mailManager.sendResetPasswordMail(
      input.email,
      user.firstName,
      linkResetPassword
    );
  }

  // Mark: PRIVATE

  private async validateUser(email: string) {
    const user = await this.authService.findUser({
      email: this.cryptoService.encrypt(email),
    });

    if (!user) {
      this.logger.error(`Not found user with email: [ ${email} ]`);
      throw new BadRequestException(errorToken.InvalidCredentials);
    }

    return user;
  }

  private async validateUserUniqueness(email: string) {
    const user = await this.authService.isUserExist({ email });

    if (user) {
      this.logger.error(`The email address already taken: [ ${email} ]`);
      throw new BadRequestException(errorToken.UserAlreadyExists);
    }
  }

  private async validatePassword(dao: UserDAO, input: LoginInput) {
    const validPassword = await bcryptjs.compare(input.password, dao.password);

    if (!validPassword) {
      this.logger.error('Invalid password');
      throw new BadRequestException(errorToken.InvalidCredentials);
    }
  }
}
