import Link from "next/link";
import React from "react";
import { IoIosArrowDropright } from "react-icons/io";
import { IoChevronBackCircleOutline } from "react-icons/io5";

export const LinkBtn = ({ href, theme, text }) => {
  //theme primary || secondary
  return (
    <Link
      href={href}
      className={`flex w-fit items-center gap-2 rounded-lg px-2 py-2 text-base font-medium duration-300 md:text-lg md:font-semibold lg:px-6 ${
        theme === "primary"
          ? `bg-primaryColor text-background hover:bg-frColor`
          : `border border-primaryColor bg-background text-primaryColor hover:border-secondColor hover:bg-secondColor hover:text-background`
      }`}
    >
      {text} <IoIosArrowDropright size={20} />
    </Link>
  );
};

export const LinkBack = ({ href }) => {
  return (
    <Link
      href={href}
      className="flex items-center justify-end text-xs font-light italic tracking-wide text-primaryColor underline"
    >
      <IoChevronBackCircleOutline size={14} />
      Back to Home
    </Link>
  );
};
