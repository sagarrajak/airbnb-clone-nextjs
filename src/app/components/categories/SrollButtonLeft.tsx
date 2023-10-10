import React from "react";
import { RiArrowDropLeftLine } from "react-icons/ri";
export interface ButtonProps {
  disabled?: boolean;
  onClick?: (evt: any) => void;
}

const ScrollButtonLeft = React.forwardRef(
  ({ disabled, onClick }: ButtonProps, ref: any) => {
    return (
      <button
        ref={ref}
        className="
        w-[30px]
        h-[30px]
        border
        border-gray-400
        rounded-full
        hover:shadow-lg
        hover:shadow-gray-400
        hover:w-[31px]
        hover:h-[31px]
        transition
        md:visible
    "
        disabled={disabled}
        onClick={onClick}
      >
        <RiArrowDropLeftLine size={30} />
      </button>
    );
  }
);

ScrollButtonLeft.displayName = "ScrollButtonLeft";

export default ScrollButtonLeft;
