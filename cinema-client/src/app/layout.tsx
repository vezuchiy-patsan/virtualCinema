import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/shared/styles/globals.css";
import { MainProvider } from "@/shared/providers";
import { ToggleThemes } from "@/shared/components";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    absolute: "Виртуальный кинотеатр",
    template: '%s | VirtualCinema'
  },
  description: "Виртуальный кинотеатр - веб-приложение для просмотра видео с друзьями",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MainProvider>
          <div className="relative flex min-h-screen flex-col">
            <ToggleThemes />
            <div className="flex h-screen w-full items-center justify-center">{children}</div>
          </div>
        </MainProvider>
      </body>
    </html>
  );
}
