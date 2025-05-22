"use client"

import { useForm } from "react-hook-form";
import { AuthWrapper } from "./AuthWrapper";
import { RegisterSchema, TypeRegisterSchema } from "@/features/schemes";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Form, FormControl, FormField, FormItem, FormLabel, FormMessage, Input } from "@/shared/components";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { toast } from "sonner";

const initialForm: TypeRegisterSchema = {
    name: "",
    email: "",
    password: "",
    passwordRepeat: ""
}

export function RegisterForm() {
    const { theme } = useTheme();
    const [recaptcha, setRecaptcha] = useState<string | null>();


    const form = useForm<TypeRegisterSchema>({
        resolver: zodResolver(RegisterSchema),
        defaultValues: initialForm
    })

    const submit = (values: TypeRegisterSchema) => {
        if (recaptcha) {
            console.log(values);
            return;
        }
        toast.error("Пожалуйста, завершите ReCaptcha!");
    }


    return (
        <AuthWrapper
            heading="Регистрация"
            description="Чтобы войти на сайт введите ваш email и пароль"
            backButtonLabel="Уже есть аккаунт? Войдите"
            backButtonHref="/auth/login"
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
                    <FormField
                        control={form.control}
                        name="passwordRepeat"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Подвердите</FormLabel>
                                <FormControl>
                                    <Input placeholder="******" type="password" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className="flex justify-center">
                        <ReCAPTCHA key={`recaptcha-${theme}`} sitekey={process.env.GOOGLE_RECAPTCHA_SITE_KEY!} onChange={setRecaptcha} theme={theme === "light" ? "light" : 'dark'} />
                    </div>
                    <Button type="submit" >Создать аккаунт</Button>
                </form>
            </Form>
        </AuthWrapper>
    )
}