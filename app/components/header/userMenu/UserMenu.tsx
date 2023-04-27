"use client";

import { signOut } from "next-auth/react";
import { useContext } from "react";

import { HeaderContext } from "@/app/components/header/header.context";
import Avatar from "../../Avatar";
import BurgerButton from "./BurgerButton";
import MenuItem from "./MenuItem";
import MobileNav from "./MobileNav";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import useLoginModal from "@/app/hooks/useLoginModal";
import { SafeUser } from "@/app/types";

interface UserMenuProps {
  currentUser?: SafeUser | null;
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const { state } = useContext(HeaderContext);
  return (
    <div>
      <BurgerButton userImage={currentUser?.image} />
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
            {currentUser ? (
              <>
                <div className="mt-4 mb-2">
                  <Avatar big src={currentUser?.image} />
                </div>
                <div className="mt-auto">
                  <MenuItem onClick={() => {}} label="My Account" />
                  <MenuItem
                    onClick={() => {
                      signOut();
                    }}
                    label="Log Out"
                  />
                </div>
              </>
            ) : (
              <>
                <div className="mt-4 mb-2">
                  <Avatar big />
                </div>
                <div className="mt-auto">
                  <MenuItem onClick={loginModal.onOpen} label="Log In" />
                  <MenuItem onClick={registerModal.onOpen} label="Sign Up" />
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
export default UserMenu;
