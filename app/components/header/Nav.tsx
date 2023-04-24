"use client";

import Link from "next/link";

const Nav = () => {
  return (
    <nav className="hidden sm:block">
      <ul className="flex">
        <li>
          <Link href="/" className="nav-link px-4">
            Home
          </Link>
        </li>
        <li>
          <Link href="/portfolio" className="nav-link px-4">
            Portfolio
          </Link>
        </li>
        <li>
          <Link href="/about" className="nav-link px-4">
            About
          </Link>
        </li>
        <li>
          <Link href="/blog" className="nav-link px-4">
            Blog
          </Link>
        </li>
        <li>
          <Link href="/contact" className="nav-link px-4">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
