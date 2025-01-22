import React from "react";
import { usePathname } from "next/navigation";
import { NavItems } from "@/data/navlink";
import Link from "next/link";

export const NavbarLink = ({ isMobile, onClick }) => {
  const pathname = usePathname();
  return (
    <ul
      onClick={onClick}
      className={`transition-allduration-300 gap-6 bg-background text-base font-normal ease-in-out md:flex ${isMobile ? `absolute left-0 right-0 top-0 -z-50 flex h-screen w-screen flex-col items-center justify-center` : `hidden`}`}
    >
      {NavItems.map((link, i) => (
        <li key={i}>
          <Link
            href={link.href}
            className={`hover:border-b-[3px] hover:border-secondColor ${pathname === link.href ? `text-primaryColor` : `text-foreground`}`}
          >
            {link.text}
          </Link>
        </li>
      ))}
    </ul>
  );
};
