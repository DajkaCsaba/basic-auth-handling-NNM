import { Module } from '@nestjs/common';
import { MailManager } from '@/mail/mail.manager';
import { MailService } from '@/mail/mail.service';
import { MailerModule } from '@nestjs-modules/mailer';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { IAppConfiguration } from '@/config/interfaces';
import { PugAdapter } from '@nestjs-modules/mailer/dist/adapters/pug.adapter';

@Module({
  imports: [
    MailerModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (config: ConfigService<IAppConfiguration>) => ({
        transport: {
          host: config.get('smtpHost'),
          port: config.get('smtpPort'),
          auth: {
            user: config.get('smtpUser'),
            pass: config.get('smtpPassword'),
          },
        },
        template: {
          dir: process.cwd() + '/apps/backend/src/mail/templates',
          adapter: new PugAdapter(),
          options: {
            strict: true,
          },
        },
      }),
    }),
  ],
  providers: [MailService, MailManager],
  exports: [MailService, MailManager],
})
export class MailModule {}
