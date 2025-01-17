import Link from "next/link";
import React from "react";
import { IoIosArrowDropright } from "react-icons/io";

export const LinkBtn = ({ href, theme, text }) => {
  //theme primary || secondary
  return (
    <Link
      href={href}
      className={`flex w-fit items-center gap-2 rounded-lg px-3 py-2 text-base font-medium duration-300 md:text-lg md:font-semibold lg:px-6 ${
        theme === "primary"
          ? `bg-primaryColor text-background hover:bg-secondColor`
          : `border-2 border-primaryColor bg-background text-primaryColor hover:border-background hover:bg-frColor hover:text-background`
      }`}
    >
      {text} <IoIosArrowDropright size={20} />
    </Link>
  );
};
