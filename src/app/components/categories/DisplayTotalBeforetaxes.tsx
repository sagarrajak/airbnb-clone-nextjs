import React from "react";
import Toggle from "../Toggle";

export interface ButtonProps {
  label: string | JSX.Element;
  onClick: (evt: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
}

function DisplayTotalBeforetaxes({ label, onClick, disabled }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
      disabled:opacity-70
      disabled:cursor-not-allowed
      rounded-xl
      hover:cursor-pointer
      hover:opacity-80
      transition
      p-4
      pl-6
      pr-6
      bg-white
      border-neutral-400
      border-[1px]
      text-sm
      font-semibold
      text-center
      flex
      flex-row
      justify-between
      w-[17rem]
      flex-1
      relative
    `}
    >
      <div>{label}</div>
      <div
        className="
         absolute
         top-3
         right-[1.2rem]
        "
      >
        <Toggle />
      </div>
    </button>
  );
}

export default DisplayTotalBeforetaxes;
