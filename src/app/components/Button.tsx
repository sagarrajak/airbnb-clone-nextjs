import React from 'react'
import { IconType } from 'react-icons';

export interface ButtonProps {
    label: string;
    onClick: (evt: React.MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean
    outline?: boolean
    small?: boolean
    icon?: IconType
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  icon,
  outline,
  small,
}) => {
  return (
    <button
      className={`
        relative
        disabled:opacity-70
        disabled:cursor-not-allowed
        rounded-lg
        hover:cursor-pointer
        
      `}>
    {label}
    </button>
  );
};

export default Button