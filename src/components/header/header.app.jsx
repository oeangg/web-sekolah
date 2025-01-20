"use client";

import React, { useEffect, useState } from "react";
import { Navbar } from "./nav";

export const Header = () => {
  const [header, setHeader] = useState(false);

  //jika layar di  scroll maka sticky navbar
  const scrollNavBar = () => {
    if (window.scrollY > 100) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollNavBar);

    return () => {
      window.addEventListener("scroll", scrollNavBar);
    };
  }, []);

  return (
    <header
      className={`z-50 flex w-full items-center bg-bgNavbar text-textNavbar transition-all duration-300 ease-in-out ${
        header ? `fixed h-[70px] shadow-md` : `fixed h-24`
      }`}
    >
      <Navbar />
    </header>
  );
};
