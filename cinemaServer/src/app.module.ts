import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

import { AuthModule } from "./auth/auth.module";
import { UserModule } from "./user/user.module";
import { IS_DEV_ENV } from "libs/common/utils/is-dev-util";
import { PrismaModule } from "./prisma/prisma.module";
import { ProviderModule } from './auth/provider/provider.module';
import { MailModule } from "./libs/mail/mail.module";
import { EmailConfirmModule } from './auth/email-confirm/email-confirm.module';
import { PasswordRecoveryModule } from './auth/password-recovery/password-recovery.module';
import { TwoFactorAuthModule } from './auth/two-factor-auth/two-factor-auth.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      ignoreEnvFile: !IS_DEV_ENV,
      isGlobal: true,
    }),
    PrismaModule,
    AuthModule,
    UserModule,
    ProviderModule,
    MailModule,
    EmailConfirmModule,
    PasswordRecoveryModule,
    TwoFactorAuthModule,
  ],
})
export class AppModule {}
