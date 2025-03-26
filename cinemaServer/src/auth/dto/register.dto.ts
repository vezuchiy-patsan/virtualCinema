import {
	IsEmail,
	IsNotEmpty,
	IsString,
	MinLength,
	Validate,
} from 'class-validator';
import { IsPasswordsMatchingConstraint } from 'libs/common/decorators/is-password-matching-decorator';

export class RegisterDto {
	name: string;

	@IsString({ message: 'Email должен быть строкой.' })
	@IsEmail({}, { message: 'Некорректный формат email.' })
	@IsNotEmpty({ message: 'Email обязателен для заполнения.' })
	email: string;

	@IsString({ message: 'Пароль должен быть строкой.' })
	@IsNotEmpty({ message: 'Пароль обязателен для заполнения.' })
	@MinLength(6, { message: 'Пароль должен содержать минимум 6 символов.' })
	password: string;

	@IsString({ message: 'Пароль подтверждения должен быть строкой.' })
	@IsNotEmpty({ message: 'Пароль подтверждения не должен быть пустым.' })
	@Validate(IsPasswordsMatchingConstraint, {
		message: 'Пароли не совпали.',
	})
	passwordRepeat: string;
}
