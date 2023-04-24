"use client";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Avatar from "../../Avatar";

interface BurgerButtonProps {
  onClick: () => void;
  isOpen: boolean;
}

const BurgerButton: React.FC<BurgerButtonProps> = ({ onClick, isOpen }) => {
  return (
    <button
      className="p-2  cursor-pointer hover:bg-primary-300"
      onClick={onClick}
    >
      <span className="flex flex-row items-center gap-1.5 p-1.5 border border-white rounded-full">
        {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        <Avatar />
      </span>
    </button>
  );
};
export default BurgerButton;
