import React from "react";
import Link from "next/link";

export const LinkImage = ({ href, children }) => {
  return (
    <Link
      href={href}
      className="text-slate-300 duration-300 hover:rotate-12 hover:text-secondColor"
    >
      {children}
    </Link>
  );
};
