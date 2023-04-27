"use client";

import { useContext } from "react";
import { HeaderContext } from "@/app/components/header/header.context";
import Avatar from "../../Avatar";
import BurgerButton from "./BurgerButton";
import MenuItem from "./MenuItem";
import MobileNav from "./MobileNav";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import useLoginModal from "@/app/hooks/useLoginModal";

const UserMenu = () => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const { state } = useContext(HeaderContext);
  return (
    <div>
      <BurgerButton />
      {state.isOpen && (
        <div
          className="
            flex
            flex-auto
            absolute
            top-15
            right-0
            tn:rounded-bl-xl
            overflow-hidden
            bg-primary-400
            text-center
            "
        >
          <MobileNav />
          <div className="flex flex-col items-center justify-center">
            <div className="mt-4 mb-2">
              <Avatar big />
            </div>
            <div className="mt-auto">
              <MenuItem onClick={loginModal.onOpen} label="Log In" />
              <MenuItem onClick={registerModal.onOpen} label="Sign Up" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default UserMenu;
