"use client";

import Image from "next/image";

interface AvatarProps {
  big?: boolean; //size as a number generates problem. Probably something with /app. Check for solutions later.
}

const Avatar: React.FC<AvatarProps> = ({ big }) => {
  return (
    <div
      className={
        big ? "relative w-[60px] h-[60px]" : "relative w-[25px] h-[25px]"
      }
    >
      <Image
        className="rounded-full"
        fill
        sizes="60px"
        alt="avatar"
        src="/images/placeholder.jpg"
      />
    </div>
  );
};
export default Avatar;
