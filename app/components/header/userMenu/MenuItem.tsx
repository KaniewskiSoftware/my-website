"use client";

interface MenuItemProps {
  onClick: () => void;
  label: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ onClick, label }) => {
  return (
    <button
      onClick={onClick}
      className="
            w-full
            px-4
            py-3
            m-0
            hover:bg-primary-300
            transition
            cursor-pointer
          "
    >
      {label}
    </button>
  );
};
export default MenuItem;
