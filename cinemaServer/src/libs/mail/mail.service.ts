import { MailerService } from "@nestjs-modules/mailer";
import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { ConfirmTemplate } from "./templates/email.confirm.template";
import { render } from "@react-email/components";
import { ResetPasswordTemplate } from "./templates/reset-password.template";
import { TwoFactor } from "./templates/two-factor-auth.template";

@Injectable()
export class MailService {
  public constructor(
    private readonly mailerConfig: MailerService,
    private readonly configService: ConfigService
  ) {}

  public async sendConfirmEmail(email: string, token: string) {
    const domain = this.configService.getOrThrow<string>("ALLOWED_ORIGIN");
    const html = await render(ConfirmTemplate({ domain, token }));

    return this.sendMail(email, "Подтверждение почты", html);
  }

  public async sendPasswordResetEmail(email: string, token: string) {
    const domain = this.configService.getOrThrow<string>("ALLOWED_ORIGIN");
    const html = await render(ResetPasswordTemplate({ domain, token }));

    return this.sendMail(email, "Сброс пароля", html);
  }

  public async sendTwoFactorTokenEmail(email: string, token: string) {
    const html = await render(TwoFactor({ token }));

    return this.sendMail(email, "Подтверждение вашей личности", html);
  }

  private sendMail(email: string, subject: string, html: string) {
    return this.mailerConfig.sendMail({
      to: email,
      subject,
      html,
    });
  }
}
