"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "./dropdown-menu"
import { Button } from "./button"




export function ToggleThemes() {
    const { setTheme } = useTheme()

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="absolute right-5 top-5" asChild>
                <Button variant="outline" size="icon">
                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                    Светлая
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                    Тёмная
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
