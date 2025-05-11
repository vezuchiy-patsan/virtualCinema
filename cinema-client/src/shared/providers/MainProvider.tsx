'use client'

import { type PropsWithChildren } from "react";
import { TanStackQueryProvider } from "./TanStackQueryProvider";
import { ThemeProvider } from "./ThemeProvider";

export function MainProvider({ children }: PropsWithChildren<unknown>) {
    return (
        <TanStackQueryProvider>
            <ThemeProvider
                attribute="class"
                defaultTheme="system"
                storageKey="virtual-theme"
                enableSystem
                disableTransitionOnChange>
                {children}
            </ThemeProvider>
        </TanStackQueryProvider>
    )
}