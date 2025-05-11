import { AuthWrapper } from "./AuthWrapper";

export function RegisterForm() {
    return (
        <AuthWrapper
            heading="Регистрация"
            description="Чтобы войти на сайт введите ваш email и пароль"
            backButtonLabel="Уже есть аккаунт? Войдите"
            backButtonHref="/auth"
            isShowSocial
        >
            RegisterForm
        </AuthWrapper>
    )
}