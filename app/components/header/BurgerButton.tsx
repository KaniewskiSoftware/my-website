"use client";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

interface BurgerButtonProps {
  onClick: () => void;
  isOpen: boolean;
}

const BurgerButton: React.FC<BurgerButtonProps> = ({ onClick, isOpen }) => {
  return (
    <button className="sm:hidden p-4 hover:bg-primary-300" onClick={onClick}>
      {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
    </button>
  );
};
export default BurgerButton;
