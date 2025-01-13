"use client";

import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const NavbarLink = () => {
  const pathname = usePathname();

  return (
    <div>
      <div className="cursor-pointer md:hidden">
        <GiHamburgerMenu size={28} />
      </div>
      <ul className="hidden gap-6 text-base font-semibold md:flex">
        <li>
          <Link
            href="/"
            className={`hover:border-b-[3px] hover:border-secondColor ${pathname === "/" ? `text-primaryColor` : `text-foreground`}`}
          >
            Beranda
          </Link>
        </li>
        <li>
          <Link
            href="/profil"
            className={`hover:border-b-[3px] hover:border-secondColor ${
              pathname === "/profil" ||
              pathname === "/sejarah" ||
              pathname === "/visimisi" ||
              pathname === "/guru" ||
              pathname === "/sambutan" ||
              pathname === "/kepalasekolah" ||
              pathname === "/fasilitas"
                ? `text-primaryColor`
                : `text-foreground`
            }`}
          >
            Profil
          </Link>
        </li>
        <li>
          <Link
            href="/kegiatan"
            className={`hover:border-b-[3px] hover:border-secondColor ${
              pathname === "/kegiatan" ? `text-primaryColor` : `text-foreground`
            }`}
          >
            Kegiatan
          </Link>
        </li>
        <li>
          <Link
            href="/gallery"
            className={`hover:border-b-[3px] hover:border-secondColor ${
              pathname === "/gallery" ? `text-primaryColor` : `text-foreground`
            }`}
          >
            Gallery
          </Link>
        </li>
        <li>
          <Link
            href="/ppdb"
            className={`hover:border-b-[3px] hover:border-secondColor ${pathname === "/ppdb" ? `text-primaryColor` : `text-foreground`} `}
          >
            P.P.D.B
          </Link>
        </li>
        <li>
          <Link
            href="/kontak"
            className={`hover:border-b-[3px] hover:border-secondColor ${pathname === "/kontak" ? `text-primaryColor` : `text-foreground`}`}
          >
            Kontak Kami
          </Link>
        </li>
      </ul>
    </div>
  );
};
