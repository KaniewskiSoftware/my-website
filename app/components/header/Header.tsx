"use client";

import { useState } from "react";
import Logo from "./Logo";
import Nav from "./Nav";
import UserMenu from "./userMenu/UserMenu";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };
  return (
    <header className="flex justify-between items-center px-2 w-full bg-primary-400 text-white sm:pl-6 sm:pr-4 sm:text-lg">
      <Logo />
      <Nav />
      <UserMenu toggleMenu={toggleMenu} closeMenu={closeMenu} isOpen={isOpen} />
    </header>
  );
};
export default Header;
