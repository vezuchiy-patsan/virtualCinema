import { Button } from "@/shared/components";
import { FaGoogle, FaYandex } from "react-icons/fa";

export function AuthSocial() {
    return (
        <>
            <div className="grid grid-cols-2">
                <Button variant="outline">
                    <FaGoogle className="mr-2 size-4" />
                    Google
                </Button>
                <Button variant="outline">
                    <FaYandex className="mr-2 size-4" />
                    Яндекс
                </Button>
            </div>
            <div className="relative mb-2 space-y-4">
                <div className="absolute top-[9px] inset-0 flex items-center">
                    <span className="w-full border-t"></span>
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground"> ИЛИ</span>
                </div>
            </div>
        </>
    )
}