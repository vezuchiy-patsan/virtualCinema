import { PrismaService } from "@/prisma/prisma.service";
import { Injectable, NotFoundException } from "@nestjs/common";
import { AuthMethod } from "@prisma/client";
import { hash } from "argon2";
import { UpdateUserDto } from "./dto/update-user.dto";

@Injectable()
export class UserService {
  public constructor(private readonly prismaService: PrismaService) {}

  public async findById(id: string) {
    const user = await this.prismaService.user.findUnique({
      where: {
        id,
      },
      include: {
        accounts: true,
      },
    });

    if (!user)
      throw new NotFoundException(
        "Пользователь не найдён, проверьте пожалуйста данные."
      );

    return user;
  }

  public async findByEmail(email: string) {
    const user = await this.prismaService.user.findUnique({
      where: {
        email,
      },
      include: {
        accounts: true,
      },
    });

    return user;
  }

  public async create(
    email: string,
    password: string,
    displayName: string,
    picture: string,
    method: AuthMethod,
    isVerified: boolean
  ) {
    const user = await this.prismaService.user.create({
      data: {
        email,
        password: password ? await hash(password) : "",
        displayName,
        picture,
        method,
        isVerified,
      },
      include: {
        accounts: true,
      },
    });

    return user;
  }

  public async update(userId: string, dto: UpdateUserDto) {
    const { email, name: displayName, isTwoFactorEnabled } = dto;

    const updatedUser = await this.prismaService.user.update({
      where: {
        id: userId,
      },
      data: {
        email,
        displayName,
        isTwoFactorEnabled,
      },
    });
    return updatedUser;
  }
}
