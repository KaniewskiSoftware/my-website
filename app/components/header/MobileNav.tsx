"use client";

import Link from "next/link";

interface MobileNavProps {
  onClick: () => void;
  isOpen: boolean;
}

const MobileNav: React.FC<MobileNavProps> = ({ onClick, isOpen }) => {
  return (
    <nav
      className={`${
        isOpen ? "block" : "hidden"
      } absolute top-12 right-0 w-[40vw] rounded-bl-xl overflow-hidden bg-primary-400`}
    >
      <ul onClick={onClick} className="text-center">
        <li>
          <Link href="/" className="nav-link">
            Home
          </Link>
        </li>
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
