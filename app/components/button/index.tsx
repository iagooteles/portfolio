import { cn } from "@/app/lib/utils"
import { ButtonHTMLAttributes } from "react"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({children, className, ...props}: ButtonProps) => {
    return (
        <button
            className={cn(
                "bg-violet-900 py-4 px-4 rounded-lg flex items-center gap-2 hover:bg-violet-500 transition-all disabled:opacity"
            )}
            {...props}
        >
            {children}
        </button>
    )
}