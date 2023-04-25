"use client";

import { HeaderContext } from "@/context/header.context";
import { useContext } from "react";
import Link from "next/link";

const MobileNav = () => {
  const { dispatch } = useContext(HeaderContext);
  return (
    <nav className="sm:hidden border-r-2 border-white">
      <ul onClick={() => dispatch({ type: "CLOSE" })} className="text-center">
        <li>
          <Link href="/portfolio" className="nav-link">
            Portfolio
          </Link>
        </li>
        <li>
          <Link href="/about" className="nav-link">
            About
          </Link>
        </li>
        <li>
          <Link href="/blog" className="nav-link">
            Blog
          </Link>
        </li>
        <li>
          <Link href="/contact" className="nav-link">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default MobileNav;
