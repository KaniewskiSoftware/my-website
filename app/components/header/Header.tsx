"use client";

import Logo from "./Logo";
import Nav from "./Nav";
import UserMenu from "./userMenu/UserMenu";
import { HeaderContextProvider } from "@/app/components/header/header.context";
import { SafeUser } from "@/app/types";

interface HeaderProps {
  currentUser?: SafeUser | null;
}

const Header: React.FC<HeaderProps> = ({ currentUser }) => {
  return (
    <HeaderContextProvider>
      <header
        className="
          flex
          justify-between
          items-center
          px-2
          w-full
          bg-primary-400
          text-white
          sm:pl-6
          sm:pr-4
          sm:text-lg
        "
      >
        <Logo />
        <Nav />
        <UserMenu currentUser={currentUser} />
      </header>
    </HeaderContextProvider>
  );
};
export default Header;
