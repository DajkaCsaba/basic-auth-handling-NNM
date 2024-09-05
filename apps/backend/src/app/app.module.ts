import { DbModule } from '@/db/db.module';
import { AuthModule } from '@/auth/auth.module';
import { MailModule } from '@/mail/mail.module';
import { ConfigModule } from '@nestjs/config';
import { CommonModule } from '@/common/common.module';
import { loadAppConfiguration } from '@/config/app-configuration.loader';
import { Module } from '@nestjs/common';
import { AllExceptionsFilter } from '@/app/all-exception.filter';
import appConfigurationSchema from '@/config/app-configuration.schema';

@Module({
  imports: [
    DbModule,
    AuthModule,
    MailModule,
    CommonModule,
    ConfigModule.forRoot({
      envFilePath: ['.env', '.env.local', '.env.development'],
      load: [loadAppConfiguration],
      validationSchema: appConfigurationSchema,
      isGlobal: true,
    }),
  ],
  providers: [AllExceptionsFilter],
  controllers: [],
  exports: [AllExceptionsFilter],
})
export class AppModule {}
