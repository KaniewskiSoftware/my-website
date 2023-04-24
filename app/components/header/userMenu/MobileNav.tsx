"use client";

import Link from "next/link";

interface MobileNavProps {
  onClick: () => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ onClick }) => {
  return (
    <nav className="sm:hidden border-r-2 border-white">
      <ul onClick={onClick} className="text-center">
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
