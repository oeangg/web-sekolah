"use client";

import React, { useEffect, useState } from "react";
import { Navbar } from "./navbar";

export const Header = () => {
  const [header, setHeader] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleClick = () => {
    setIsMobile(!isMobile);
  };

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

    window.addEventListener(
      "resize",
      () => window.innerWidth >= 768 && setIsMobile(false),
    );

    return () => {
      window.addEventListener("scroll", scrollNavBar);
      window.addEventListener(
        "resize",
        () => window.innerWidth >= 768 && setIsMobile(false),
      );
    };
  }, []);

  return (
    <header
      className={`z-50 flex w-full bg-bgNavbar text-textNavbar transition-all duration-300 ease-in-out ${
        header ? `fixed h-[70px] shadow-md` : `fixed h-24`
      }`}
    >
      <Navbar
        onClick={() => setIsMobile(false)}
        isMobile={isMobile}
        handleClick={handleClick}
      />
    </header>
  );
};
