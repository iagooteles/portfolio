type TechBadgeProps = {
    name: string;
}

export const TechBadge = ({name}: TechBadgeProps) => {
    return (
        <span className="bg-violet-900 text-sm py-1 px-3 rounded-lg ">
            {name}
        </span>
    )
}