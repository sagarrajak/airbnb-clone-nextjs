"use client";

import React, { useCallback, useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import Button from "../Button";

export interface BaseModelProps {
  isOpen: boolean;
  onClose?: () => void;
  title?: string;
  body?: React.ReactElement | string;
  footer?: React.ReactElement;
  disabled?: boolean;
}

const BaseModel: React.FC<BaseModelProps> = ({
  isOpen,
  onClose,
  title,
  body,
  footer,
  disabled,
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

  if (!isOpen) return <></>;

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
        sm:w-full
        md:w-[50rem]
        sm:h-[80%]
        my-6
        mx-auto
      "
      >
        {/* Content */}
        <div
          className={`
          translate
          duration-300
          h-full
          ${isModelVisible ? `translate-y-0` : "translate-y-full"}
          ${isModelVisible ? "opacity-100" : "opacity-0"}
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
                onClick={handleClose}
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
              {footer}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BaseModel;
