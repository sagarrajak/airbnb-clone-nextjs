'use client'

export interface MenuItemProps {
    onClick: () => void;
    label: string;
}

export const MenuItem: React.FC<MenuItemProps> = ({
    onClick,
    label
}) => {
    return <>
        <div
            className="
             px-4
             py-3
             hover:bg-neutral-100
             transition
            font-semibold
            "
        >
            {label}
        </div>
    </>
}