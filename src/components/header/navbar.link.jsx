import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";

export const NavbarLink = () => {
  return (
    <div>
      <div className="cursor-pointer md:hidden">
        <GiHamburgerMenu size={28} />
      </div>
      <ul className="hidden gap-6 text-base font-semibold md:flex">
        <li>
          <Link href="">Beranda</Link>
        </li>
        <li>
          <Link href="">Profil</Link>
        </li>
        <li>
          <Link href="">Kegiatan</Link>
        </li>
        <li>
          <Link href="">Gallery</Link>
        </li>
        <li>
          <Link href="">P.P.D.B</Link>
        </li>
        <li>
          <Link href="">Kontak Kami</Link>
        </li>
      </ul>
    </div>
  );
};
