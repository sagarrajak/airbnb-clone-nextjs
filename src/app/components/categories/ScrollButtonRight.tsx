import React from 'react'
import { RiArrowDropRightLine } from "react-icons/ri";
export interface ButtonProps {
  disabled?: boolean;
  onClick?: (evt: any) => void;
}

function ScrollButtonRight({ disabled, onClick }: ButtonProps) {
  return (
    <button
      className="
        w-[30px]
        h-[30px]
        border
        border-black
        rounded-full
        hover:shadow-lg
        hover:shadow-gray-400
        hover:w-[31px]
        hover:h-[31px]
        transition
    "
      disabled={disabled}
      onClick={onClick}
    >
      <RiArrowDropRightLine size={30} />
    </button>
  );
}

export default ScrollButtonRight