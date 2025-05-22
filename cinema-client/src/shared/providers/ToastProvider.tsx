"use client"

import { Toaster } from "../components"

export function ToastProvider() {
    return <Toaster position="bottom-right" duration={6000} />
}