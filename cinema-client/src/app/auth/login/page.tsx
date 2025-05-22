import { LoginForm } from "@/features/auth";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Войти в аккаунт аккаунт',
}

export default function LoginPage() {
    return (
        <LoginForm />
    );
}