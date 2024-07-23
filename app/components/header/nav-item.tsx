import { cn } from "@/app/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItemProps = {
    label: string
    href: string
}

export const NavItem = ({label, href}: NavItemProps) => {
    const pathname = usePathname();

    const isActive = pathname === href;

    return (
        <Link href={href} className={cn(
            "text-gray-400 flex items-center gap-2 font-medium font-mono hover:text-violet-700 hover:scale-110 transition-all",
            isActive && "text-gray-50"
        )}>
            <span className="text-violet-700">→</span>
            {label}
        </Link>
    )
}
