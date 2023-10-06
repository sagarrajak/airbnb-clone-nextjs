import React from 'react'
import { RiArrowDropLeftLine } from "react-icons/ri";
export interface ButtonProps {
    disabled?: boolean;
    onClick?: (evt: any) => void;
}

function ScrollButtonLeft({disabled, onClick}: ButtonProps) {
  return (
    <button className="
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
        <RiArrowDropLeftLine size={30}/>
    </button>
  )
}

export default ScrollButtonLeft