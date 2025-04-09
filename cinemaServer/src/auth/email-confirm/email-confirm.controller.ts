import { Body, Controller, HttpCode, HttpStatus, Post, Req } from "@nestjs/common";
import { EmailConfirmService } from "./email-confirm.service";
import { Request } from "express";
import { ConfirmDto } from "./dto/confirm.dto";

@Controller("auth/email-confirm")
export class EmailConfirmController {
  constructor(private readonly emailConfirmService: EmailConfirmService) {}

  @Post()
  @HttpCode(HttpStatus.OK)
  public async newVerification(@Req() req: Request, @Body() dto: ConfirmDto) {
    return this.emailConfirmService.newVerification(req, dto);
  }
}
