import { applyDecorators, UseGuards } from "@nestjs/common";
import { UserRole } from "@prisma/client";
import { ROLES } from "./roles.decorator";
import { AuthGuard } from "../guards/auth.guard";
import { RolesGuard } from "../guards/roles.guard";

export function Authorization(...roles: UserRole[]) {
  if (roles.length > 0) {
    return applyDecorators(ROLES(...roles), UseGuards(AuthGuard, RolesGuard));
  }
  return applyDecorators(UseGuards(AuthGuard));
}
