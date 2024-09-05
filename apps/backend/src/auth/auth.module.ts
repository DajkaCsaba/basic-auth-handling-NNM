import { Module } from '@nestjs/common';
import { DbModule } from '@/db/db.module';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { AuthManager } from '@/auth/auth.manager';
import { JwtService } from '@nestjs/jwt';
import { JwtGuard } from '@/auth/guards/jwt.guard';
import { AuthMapper } from '@/auth/auth.mapper';
import { MailModule } from '@/mail/mail.module';

@Module({
  imports: [DbModule, MailModule],
  controllers: [AuthController],
  providers: [AuthService, AuthMapper, AuthManager, JwtService, JwtGuard],
  exports: [AuthService, AuthMapper, AuthManager, JwtService, JwtGuard],
})
export class AuthModule {}
