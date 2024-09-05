import { Injectable, Logger } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { ConfigService } from '@nestjs/config';
import { IAppConfiguration } from '@/config/interfaces';
import nodemailer from 'nodemailer';

@Injectable()
export class MailService {
  private readonly logger = new Logger(MailService.name);
  private readonly from;

  constructor(
    private readonly mailerService: MailerService,
    private readonly configService: ConfigService<IAppConfiguration>
  ) {
    this.from = this.configService.get('pageMail');
  }

  async sendMail(mailOptions: nodemailer.SendMailOptions) {
    try {
      this.logger.log(
        `Sending email to ${mailOptions.to} with subject ${mailOptions.subject}`
      );

      await this.mailerService.sendMail({
        from: this.from,
        to: mailOptions.to,
        subject: mailOptions.subject,
        html: mailOptions.html as string | Buffer,        
      });
      this.logger.log(`Email sent successfully to ${mailOptions.to}`);
    } catch (error) {
      this.logger.error(`Failed to send email to ${mailOptions.to}`);
      this.logger.error(error);
    }
  }
}
