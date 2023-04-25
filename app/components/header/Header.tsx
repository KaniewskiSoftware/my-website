"use client";

import { useState } from "react";
import Logo from "./Logo";
import Nav from "./Nav";
import UserMenu from "./userMenu/UserMenu";
import { HeaderContextProvider } from "@/context/header.context";

const Header = () => {
  return (
    <HeaderContextProvider>
      <header className="flex justify-between items-center px-2 w-full bg-primary-400 text-white sm:pl-6 sm:pr-4 sm:text-lg">
        <Logo />
        <Nav />
        <UserMenu />
      </header>
    </HeaderContextProvider>
  );
};
export default Header;
