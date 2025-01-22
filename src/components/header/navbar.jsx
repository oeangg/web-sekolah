import React from "react";

import { IoSearchOutline } from "react-icons/io5";
import { NavbarLink } from "./navbar.link";
import { HamburgerMenu } from "./hamburgermenu";
import { LogoSekolah } from "./logo";

export const Navbar = ({ handleClick, onClick, isMobile }) => {
  return (
    <nav className="relative flex w-full max-w-6xl items-center justify-between gap-4 px-4 md:mx-auto md:px-0">
      <LogoSekolah />
      <HamburgerMenu onClick={handleClick} isMobile={isMobile} />
      <NavbarLink isMobile={isMobile} onClick={onClick} />
      {/* search button */}
      <button className="hidden cursor-pointer rounded-lg border border-background bg-primaryColor px-4 py-2 text-background duration-300 ease-in-out hover:bg-frColor md:block">
        <IoSearchOutline size={22} />
      </button>
    </nav>
  );
};
