'use client'
import React from "react";
import { IconType } from "react-icons";

export interface ButtonProps {
  label: string | JSX.Element;
  onClick: (evt: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  icon?: IconType;
}

const FilterButton: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  icon: Icon,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        relative
        disabled:opacity-70
        disabled:cursor-not-allowed
        rounded-xl
        hover:cursor-pointer
        hover:opacity-80
        transition
        p-4
        pl-8
        pr-8
        bg-white
        border-neutral-400
        border-[1px]
        text-sm
        font-semibold
        text-center
      `}
    >
      {
        Icon && <Icon size={24} className="
         absolute
         left-4
         top-3
        "/>
      }
      {label}
    </button>
  );
};

export default FilterButton;
