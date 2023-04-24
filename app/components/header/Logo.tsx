"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();
  return (
    <div className="relative w-[66.48px] h-[48px] xl:w-[83.1px] xl:h-[60px]">
      <Image
        className="cursor-pointer p-2.5"
        src="/images/logo.png"
        alt="Logo"
        fill
        sizes="66.5px, (max-width: 1280px) 83.1px"
        priority
      />
    </div>
  );
};
export default Logo;
