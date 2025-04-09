import { forwardRef, Module } from "@nestjs/common";

import { UserService } from "@/user/user.service";

import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { GoogleRecaptchaModule } from "@nestlab/google-recaptcha";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { getRecaptchaConfig } from "config/recaptcha.config";
import { ProviderModule } from "./provider/provider.module";
import { getProvidersConfig } from "config/providers.config";
import { EmailConfirmModule } from "./email-confirm/email-confirm.module";
import { MailService } from "@/libs/mail/mail.service";

@Module({
  imports: [
    ProviderModule.registerAsync({
      imports: [ConfigModule],
      useFactory: getProvidersConfig,
      inject: [ConfigService],
    }),
    GoogleRecaptchaModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: getRecaptchaConfig,
      inject: [ConfigService],
    }),
    forwardRef(() => EmailConfirmModule),
  ],
  controllers: [AuthController],
  providers: [AuthService, UserService],
  exports: [AuthService],
})
export class AuthModule {}
