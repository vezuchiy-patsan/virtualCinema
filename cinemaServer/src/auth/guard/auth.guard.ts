import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from "@nestjs/common";
import { User } from "@prisma/client";

import { UserService } from "@/user/user.service";
import { Request } from "express";

interface RequestWithUser extends Request {
  user: User;
}

@Injectable()
export class AuthGuard implements CanActivate {
  public constructor(private readonly userService: UserService) {}

  public async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest() as RequestWithUser;

    if (typeof request.session.userId === "undefined")
      throw new UnauthorizedException(
        "Пользователь не авторизован. Пожалуйста, войдите в систему, чтобы получить доступ."
      );

    const user = await this.userService.findById(request.session.userId);

    request.user = user;

    return true;
  }
}
