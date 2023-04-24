"use client";

import { useCallback, useState } from "react";
import BurgerButton from "./BurgerButton";
import Logo from "./Logo";
import MobileNav from "./MobileNav";
import Nav from "./Nav";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen((prev) => !prev);
  };

  const closeNav = () => {
    setIsOpen(false);
  };
  return (
    <header className="relative flex justify-between items-center px-2 w-full bg-primary-400 text-white lg:pl-6 lg:pr-4 xl:text-lg">
      <Logo />
      <Nav />
      <BurgerButton onClick={toggleNav} isOpen={isOpen} />
      <MobileNav onClick={closeNav} isOpen={isOpen} />
    </header>
  );
};
export default Header;
