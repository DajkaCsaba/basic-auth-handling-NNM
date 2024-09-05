import {
  CanActivate,
  ExecutionContext,
  Injectable,
  Logger,
  UnauthorizedException,
} from '@nestjs/common';
import { Request } from 'express';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { IAppConfiguration } from '@/config/interfaces';
import { Reflector } from '@nestjs/core';
import { IS_PUBLIC_METADATA_KEY } from '@/auth/decorators/public.decorator';

@Injectable()
export class JwtGuard implements CanActivate {
  private readonly logger = new Logger(JwtGuard.name);
  private readonly secret;

  constructor(
    private readonly configService: ConfigService<IAppConfiguration>,
    private readonly jwtService: JwtService,
    private readonly reflector: Reflector
  ) {
    this.secret = this.configService.get('jwtSecretKey');
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const isPublic = this.reflector.getAllAndOverride<boolean>(
      IS_PUBLIC_METADATA_KEY,
      [context.getHandler(), context.getClass()]
    );

    if (isPublic) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);

    if (!token) throw new UnauthorizedException('UNAUTHORIZED');

    try {
      request['user'] = await this.jwtService.verifyAsync(token, {
        secret: this.secret,
      });
    } catch (e) {
      this.logger.error(e);
      throw new UnauthorizedException('UNAUTHORIZED');
    }

    return true;
  }

  private extractTokenFromHeader(request: Request) {
    if (!request.headers.authorization) {
      throw new UnauthorizedException('UNAUTHORIZED');
    }
    const [type, token] = request.headers.authorization.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}
