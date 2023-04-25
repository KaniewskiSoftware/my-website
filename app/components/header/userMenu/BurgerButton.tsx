"use client";

import { useContext } from "react";
import { HeaderContext } from "@/context/header.context";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Avatar from "../../Avatar";

const BurgerButton = () => {
  const { state, dispatch } = useContext(HeaderContext);
  return (
    <button
      className="p-2  cursor-pointer hover:bg-primary-300"
      onClick={() => dispatch({ type: "TOGGLE" })}
    >
      <span className="flex flex-row items-center gap-1.5 p-1.5 border border-white rounded-full">
        {state.isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        <Avatar />
      </span>
    </button>
  );
};
export default BurgerButton;
