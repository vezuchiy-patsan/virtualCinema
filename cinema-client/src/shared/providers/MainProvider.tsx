'use client'

import { type PropsWithChildren } from "react";
import { TanStackQueryProvider } from "./TanStackQueryProvider";
import { ThemeProvider } from "./ThemeProvider";
import { ToastProvider } from "./ToastProvider";

export function MainProvider({ children }: PropsWithChildren<unknown>) {
    return (
        <TanStackQueryProvider>
            <ThemeProvider
                attribute="class"
                defaultTheme="system"
                storageKey="virtual-theme"
                enableSystem
                disableTransitionOnChange>
                <ToastProvider />
                {children}
            </ThemeProvider>
        </TanStackQueryProvider>
    )
}