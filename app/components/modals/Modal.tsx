"use client";

import { useCallback, useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import Button from "../Button";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
  disabled?: boolean;
  title: string;
  body?: React.ReactNode;
  footer?: React.ReactNode;
  actionLabel: string;
  secondaryAction?: () => void;
  secondaryActionLabel?: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  disabled,
  title,
  body,
  footer,
  actionLabel,
  secondaryAction,
  secondaryActionLabel,
}) => {
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (disabled) return;

    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [disabled, onClose]);

  const handleSubmit = useCallback(() => {
    if (disabled) return;

    onSubmit();
  }, [disabled, onSubmit]);

  const handleSecondaryAction = useCallback(() => {
    if (disabled || !secondaryAction) return;

    secondaryAction();
  }, [disabled, secondaryAction]);

  if (!isOpen) return null;

  return (
    // Overlay
    <div
      className="
            fixed
            inset-0
            flex
            items-center
            justify-center
            overflow-x-hidden
            overflow-y-auto
            bg-neutral-700
            bg-opacity-60
            outline-none
            focus:outline-none
            z-50
        "
    >
      {/* Wrapper */}
      <div
        className="
          relative
          w-full
          h-full
          md:h-auto
          md:w-4/6
          lg:w-3/6
          xl:w-2/5
          my-6
          mx-auto
        "
      >
        {/* Content */}
        <div
          className={`
                duration-300
                h-full
                ${showModal ? "opacity-100" : "opacity-0"}
                ${showModal ? "translate-y-0" : "translate-y-full"}
            `}
        >
          {/* Card */}
          <article
            className="
              w-full
              h-[fit-content]
              md:h-auto
              relative
              flex
              flex-col
              border-2
              border-secondary-600
              rounded-lg
              shadow-lg
              bg-white
              text-text
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
                  relative
                  border-b-[1px]
                "
            >
              <button
                onClick={handleClose}
                className="
                  p-2
                  border-[1px]
                  border-text
                  rounded-full
                  hover:opacity-70
                  transition
                  absolute
                  right-9
                "
              >
                <IoMdClose size={18} />
              </button>
              <h2 className="text-lg font-semibold">{title}</h2>
            </div>
            {/* Body */}
            {body && <div className="relative p-6 flex-auto">{body}</div>}
            {/* Footer */}
            <div
              className="
                flex
                flex-col
                p-6
                gap-2
              "
            >
              <div
                className="
                  flex
                  items-center
                  gap-4
                  w-full
                  pb-5
                  border-b-[1px]
                "
              >
                {secondaryAction && secondaryActionLabel && (
                  <Button
                    outline
                    disabled={disabled}
                    label={secondaryActionLabel}
                    onClick={handleSecondaryAction}
                  />
                )}
                <Button
                  disabled={disabled}
                  label={actionLabel}
                  onClick={handleSubmit}
                />
              </div>
              {footer}
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};
export default Modal;
