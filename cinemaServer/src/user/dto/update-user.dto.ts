import { IsBoolean, IsEmail, IsNotEmpty, IsString } from "class-validator";

export class UpdateUserDto {
  @IsString({ message: "Имя должно быть строкой." })
  @IsNotEmpty({ message: "Имя обязательно для заполнения." })
  name: string;

  @IsString({ message: "Email должен быть строкой." })
  @IsEmail({}, { message: "Некорретктный формат email." })
  @IsNotEmpty({ message: "Email обязателен для заполнения." })
  email: string;

  @IsBoolean({
    message: "Двухфакторная аутентификация должна быть булевым значением.",
  })
  isTwoFactorEnabled: boolean;
}
