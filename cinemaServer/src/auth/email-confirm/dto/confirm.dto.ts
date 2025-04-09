import { IsNotEmpty, IsString } from "class-validator";

export class ConfirmDto {
  @IsString({ message: "Токен должен быть строкой." })
  @IsNotEmpty({ message: "Токен не может быть пустым" })
  token: string;
}
