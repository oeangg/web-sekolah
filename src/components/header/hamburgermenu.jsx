"use client";

import React from "react";

export const HamburgerMenu = ({ onClick, isMobile }) => {
  return (
    <button
      onClick={onClick}
      className="flex h-9 w-9 flex-col items-center justify-center gap-[6px] rounded-md border-2 border-primaryColor p-2 font-semibold text-primaryColor md:hidden"
    >
      <span
        className={`h-[1.8px] w-5 rounded-sm bg-primaryColor transition-all duration-300 ease-out ${isMobile ? `translate-y-[7px] rotate-45` : `-translate-y-0`}`}
      ></span>
      <span
        className={`h-[1.8px] w-5 rounded-sm bg-primaryColor transition-all duration-300 ease-out ${
          isMobile ? `opacity-0` : `opacity-100`
        } `}
      ></span>
      <span
        className={`h-[1.8px] w-5 rounded-sm bg-primaryColor transition-all duration-300 ease-out ${isMobile ? `-translate-y-2 -rotate-45` : `-translate-y-0`}`}
      ></span>
    </button>
  );
};
