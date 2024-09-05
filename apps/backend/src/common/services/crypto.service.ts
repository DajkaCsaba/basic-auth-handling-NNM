import * as crypto from 'crypto';
import {
  Inject,
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { IAppConfiguration } from '@/config/interfaces';
import bcryptjs from 'bcryptjs';
import { v4 } from 'uuid';

const ENCODING = 'hex';

@Injectable()
export class CryptoService {
  private readonly logger = new Logger('CryptoService');

  private readonly IV: string;
  private readonly KEY: string;

  constructor(
    private configService: ConfigService<IAppConfiguration>,
    @Inject('uuidV4Generator') private readonly uuidV4Generator: typeof v4
  ) {
    this.KEY = this.configService.getOrThrow('cryptoKey');
    this.IV = this.configService.getOrThrow('cryptoIV');
  }

  private readonly SALT = this.configService.get('hashSalt');

  hashPassword(pw: string): string {
    return this.hasher(pw);
  }

  private hasher(str: string): string {
    return crypto
      .createHash('sha256')
      .update(this.SALT + str)
      .digest('hex');
  }

  quickHash(data: string): string {
    return crypto.createHash('sha1').update(data).digest('base64');
  }

  encrypt(data: string): string {
    try {
      const cipher = crypto.createCipheriv(
        'aes-256-cbc',
        this.KEY,
        Buffer.from(this.IV, ENCODING)
      );

      let encrypted = cipher.update(data, 'utf-8', ENCODING);
      encrypted += cipher.final(ENCODING);

      return encrypted;
    } catch (error) {
      this.logger.error('Error at encoding: ', error);
      throw new InternalServerErrorException();
    }
  }

  decrypt(encryptedData: string): string {
    try {
      const decipher = crypto.createDecipheriv(
        'aes-256-cbc',
        this.KEY,
        Buffer.from(this.IV, ENCODING)
      );

      let decrypted = decipher.update(encryptedData, 'hex', 'utf-8');
      decrypted += decipher.final('utf-8');

      return decrypted;
    } catch (error) {
      this.logger.error('Error at decoding: ', error);
      throw new InternalServerErrorException();
    }
  }

  generateRandomPassword = () => {
    const password = Math.random().toString(36).slice(-10);
    return bcryptjs.hashSync(password);
  };

  uuidv4(): string {
    return this.uuidV4Generator();
  }
}
