"use client"

import { LoginSchema, TypeLoginSchema } from "@/features/schemes";
import { Button, Form, FormControl, FormField, FormItem, FormLabel, FormMessage, Input } from "@/shared/components";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { AuthWrapper } from "./AuthWrapper";



const initialForm: TypeLoginSchema = {
    name: "",
    email: "",
    password: ""
}

export function LoginForm() {
    const form = useForm<TypeLoginSchema>({
        resolver: zodResolver(LoginSchema),
        defaultValues: initialForm
    })

    const submit = (values: TypeLoginSchema) => {
        console.log(values)
    }

    return (
        <AuthWrapper
            heading="Войти"
            description="Чтобы войти на сайт введите ваш email и пароль"
            backButtonLabel="Ещё нет аккаунта? Регистрация"
            backButtonHref="/auth/register"
            isShowSocial
        >
            <Form {...form}>
                <form onSubmit={form.handleSubmit(submit)}
                    className="grid gap-2 space-y-2"
                >
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Имя</FormLabel>
                                <FormControl>
                                    <Input placeholder="Имя" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Почта</FormLabel>
                                <FormControl>
                                    <Input placeholder="ivan@example.com" type="email" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Пароль</FormLabel>
                                <FormControl>
                                    <Input placeholder="******" type="password" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit">Вход</Button>
                </form>
            </Form>
        </AuthWrapper>
    )
}