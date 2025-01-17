import React from "react";
import Link from "next/link";

export const LinkImage = ({ href, children }) => {
  return (
    <Link
      href={href}
      className="text-slate-400 duration-300 hover:text-secondColor"
    >
      {children}
    </Link>
  );
};
