import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Request } from 'express';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { IAppConfiguration } from '@/config/interfaces';

@Injectable()
export class RefreshGuard implements CanActivate {
  private readonly secret;

  constructor(
    private readonly configService: ConfigService<IAppConfiguration>,
    private readonly jwtService: JwtService
  ) {
    this.secret = this.configService.get('jwtRefreshSecretKey');
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);

    if (!token) throw new UnauthorizedException('UNAUTHORIZED');

    try {
      request['user'] = await this.jwtService.verifyAsync(token, {
        secret: this.secret,
      });
    } catch (e) {
      throw new UnauthorizedException('UNAUTHORIZED');
    }

    return true;
  }

  private extractTokenFromHeader(request: Request) {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Refresh' ? token : undefined;
  }
}
