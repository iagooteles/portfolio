import { cn } from "@/app/lib/utils";

type SectionTitleProps = {
    title: string;
    subtitle: string;
    className?: string
}

export const SectionTitle = ({
    title,
    subtitle,
    className
}: SectionTitleProps) => {
    return (
        <div className={cn("flex flex-col gap-4", className)}>
            <span className="font-mono text-md text-violet-500">{`../${subtitle}`}</span>
            <h3 className="text-3xl font-medium">{title}</h3>
        </div>
    )
}
