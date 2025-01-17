import React from "react";
import Link from "next/link";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

export const LinkNavFooter = ({ href, text }) => {
  return (
    <Link
      href={href}
      className="flex items-center gap-2 hover:font-semibold hover:text-thirdColor"
    >
      <MdKeyboardDoubleArrowRight size={20} /> {text}
    </Link>
  );
};
