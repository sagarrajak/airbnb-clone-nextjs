'use client'

import React, { useCallback, useEffect, useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import Button from '../Button';

export interface ModelProps {
    isOpen: boolean;
    onClose?: () => void;
    onSubmit?: () => void;
    title?: string;
    body?: React.ReactElement | string;
    footer?: React.ReactElement;
    actionLabel?: string;
    disabled?: boolean;
    secondaryAction?: () => void;
    secondarylabel?: string;
}

const Modal: React.FC<ModelProps> = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  footer,
  actionLabel,
  disabled,
  secondaryAction,
  secondarylabel,
}) => {
  const [isModelVisible, setIsModelVisible] = useState<boolean>(isOpen);

  useEffect(() => {
    setIsModelVisible(true);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (disabled) return;
    setIsModelVisible(false);
    setTimeout(() => {
      if (onClose) onClose();
    }, 300);
  }, [disabled, setIsModelVisible, onClose]);

  const handleSubmit = useCallback(() => {
    if (disabled) return;
    if (onSubmit)
      onSubmit();
  }, [disabled, onSubmit]);

  const handleSecondaryAction = useCallback(() => {
    if (disabled) return;
    if (secondaryAction) secondaryAction();
  }, [disabled, secondaryAction]);

  if (!isOpen) 
    return <></>

  return (
    <div
      className="
      justify-center
      items-center
      flex
      overflow-y-auto
      overflow-x-hidden
      w-full
      h-full
      fixed
      z-50
      inset-0
      outline-none
      focus:outline-none
      bg-neutral-800/70
    "
    >
      <div
        className="
        w-full
        relative
        md:w-4/6
        lg:w-3/6
        xl:w-2/5
        my-6
        mx-auto
        h-full
        lg:h-auto
        md:h-auto
      "
      >
        {/* Content */}
        <div
          className={`
          translate
          duration-300
          h-full
          ${isOpen ? `translate-y-0` : "translate-y-full"}
          ${isOpen ? "opacity-100" : "opacity-0"}
        `}
        >
          <div
            className="
          translate
          h-full
          lg:h-auto
          md:h-auto
          border-0
          rounded-lg
          shadow-lg
          relative
          flex
          flex-col
          w-full
          bg-white
          outline-none
          focus:outline-none
        "
          >
            {/* Header */}
            <div
              className="
            flex
            items-center
            p-6
            rounded-t
            justify-center
            border-b-[1px]
          "
            >
              <button
                className="
              p-1
              border-0
              hover:opacity-70
              transition
              absolute
              left-9
            "
              >
                <IoMdClose size={18} />
              </button>
              <div
                className="
                    text-lg
                    font-semibold
                  "
              >
                {title}
              </div>
            </div>
            {/* Body  */}
            <div
              className="
              relative 
              p-6
              flex-auto
            "
            >
              {body}
            </div>
            {/* FOOTER */}
            <div
              className="
                flex
                flex-col
                gap-2
                p-6
              "
            >
              <div
                className="
                  flex
                  flex-row
                  items-center 
                  gap-4
                  w-full
                "
              >
                {secondarylabel && secondaryAction && (<Button
                  label={secondarylabel}
                  onClick={handleSecondaryAction}
                  disabled={disabled}
                  outline
                />)}
                <Button 
                  label={actionLabel || ''} 
                  onClick={handleSubmit} 
                  disabled={disabled} 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal