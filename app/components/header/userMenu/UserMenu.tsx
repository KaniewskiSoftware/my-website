"use client";

import Avatar from "../../Avatar";
import BurgerButton from "./BurgerButton";
import MenuItem from "./MenuItem";
import MobileNav from "./MobileNav";

interface UserMenuProps {
  toggleMenu: () => void;
  closeMenu: () => void;
  isOpen: boolean;
}

const UserMenu: React.FC<UserMenuProps> = ({
  toggleMenu,
  closeMenu,
  isOpen,
}) => {
  return (
    <div>
      <BurgerButton onClick={toggleMenu} isOpen={isOpen} />
      {isOpen && (
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
          <MobileNav onClick={closeMenu} />
          <div className="flex flex-col items-center justify-center">
            <div className="mt-4 mb-2">
              <Avatar big />
            </div>
            <div className="mt-auto">
              <MenuItem onClick={() => {}} label="Log In" />
              <MenuItem onClick={() => {}} label="Register" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default UserMenu;
