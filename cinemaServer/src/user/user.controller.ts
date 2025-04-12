import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
} from "@nestjs/common";

import { UserService } from "./user.service";
import { Authorization } from "@/auth/decorators/auth.decorator";
import { Authorized } from "@/auth/decorators/authorized.decorator";
import { UserRole } from "@prisma/client";
import { UpdateUserDto } from "./dto/update-user.dto";

@Controller("users")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Authorization()
  @HttpCode(HttpStatus.OK)
  @Get("profile")
  public async findProfile(@Authorized("id") userId: string) {
    return this.userService.findById(userId);
  }

  @Authorization()
  @HttpCode(HttpStatus.OK)
  @Patch("profile")
  public async updateProfile(
    @Authorized("id") userId: string,
    @Body() dto: UpdateUserDto
  ) {
    return this.userService.update(userId, dto);
  }

  @Authorization(UserRole.ADMIN)
  @HttpCode(HttpStatus.OK)
  @Get("by-id/:id")
  public async findById(@Param("id") id: string) {
    return this.userService.findById(id);
  }
}
