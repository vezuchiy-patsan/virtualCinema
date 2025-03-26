import { Module } from "@nestjs/common";

import { UserService } from "@/user/user.service";

import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { GoogleRecaptchaModule } from "@nestlab/google-recaptcha";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { getRecaptchaConfig } from "config/recaptcha.config";

@Module({
  imports: [
    GoogleRecaptchaModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: getRecaptchaConfig,
      inject: [ConfigService],
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, UserService],
})
export class AuthModule {}
