import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { User } from "@prisma/client";

export const Authorized = createParamDecorator(
  (data: Extract<keyof User, "id">, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const user = request.user;

    if (data === "id" && user) {
      return user[data]; 
    } else {
      return user; 
    }
  }
);
