import React from "react";
import { FaBookReader } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { NavbarLink } from "./navbar.link";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 lg:px-0">
      <Link href="/">
        <div className="flex items-center justify-center gap-2">
          <FaBookReader size={36} className="text-primaryColor" />
          <div className="-space-y-2 uppercase">
            <p className="text-lg font-medium">Sekolah</p>
            <p className="text-lg font-bold">Indonesia </p>
          </div>
        </div>
      </Link>
      <NavbarLink />
      <div className="hidden cursor-pointer text-primaryColor md:block">
        <IoSearchOutline size={22} />
      </div>
    </nav>
  );
};
