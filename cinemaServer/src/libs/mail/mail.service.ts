import { MailerService } from "@nestjs-modules/mailer";
import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { ConfirmTemplate } from "./templates/email.confirm.template";
import { render } from "@react-email/components";

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

  private sendMail(email: string, subject: string, html: string) {
    return this.mailerConfig.sendMail({
      to: email,
      subject,
      html,
    });
  }
}
