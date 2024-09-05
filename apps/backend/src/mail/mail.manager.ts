import { Injectable } from '@nestjs/common';
import { MailService } from '@/mail/mail.service';
import nodemailer from 'nodemailer';
import resetPasswordTemplate from './templates/resetPassword.template.pug';

@Injectable()
export class MailManager {
  constructor(private readonly mailService: MailService) {}

  async sendResetPasswordMail(
    to: string,
    name: string,
    linkResetPassword: string
  ) {
    const subject = 'CompanyNameHere User Account';
    const html = resetPasswordTemplate({ subject, name, linkResetPassword });

    const mailOptions: nodemailer.SendMailOptions = {
      to,
      subject,
      html,
    };

    await this.mailService.sendMail(mailOptions);
  }
}
