"use client";

import React from "react";
import Link from "next/link";
import { HeadTitle } from "./UI/head.title";
import { usePathname } from "next/navigation";

export const SidebarProfil = () => {
  const pathname = usePathname();

  return (
    <div className="grid w-full grid-cols-1 gap-4">
      <HeadTitle text="Tentang Sekolah" />
      <ul className="grid w-full grid-cols-1 gap-3 text-base font-light">
        <li className="w-full border-b border-b-slate-200 py-1">
          <Link href="/profil" className="hover:font-medium">
            Profil
          </Link>
        </li>

        <li
          className={`w-full border-b py-1 ${pathname === "/sejarah" ? `border-b-primaryColor font-medium text-primaryColor` : `border-b-slate-200`}`}
        >
          <Link href="/sejarah" className="hover:font-medium">
            Sejarah
          </Link>
        </li>

        <li
          className={`w-full border-b py-1 ${pathname === "/visimisi" ? `border-b-primaryColor font-medium text-primaryColor` : `border-b-slate-200`}`}
        >
          <Link href="/visimisi" className="hover:font-medium">
            Visi dan Misi
          </Link>
        </li>
        <li
          className={`w-full border-b py-1 ${pathname === "/sambutan" ? `border-b-primaryColor font-medium text-primaryColor` : `border-b-slate-200`}`}
        >
          <Link href="/sambutan" className="hover:font-medium">
            Sambutan Kepala Sekolah{" "}
          </Link>
        </li>
        <li
          className={`w-full border-b py-1 ${pathname === "/kepalasekolah" ? `border-b-primaryColor font-medium text-primaryColor` : `border-b-slate-200`}`}
        >
          <Link href="/kepalasekolah" className="hover:font-medium">
            Profil Kepala Sekolah
          </Link>
        </li>
        <li
          className={`w-full border-b py-1 ${pathname === "/guru" ? `border-b-primaryColor font-medium text-primaryColor` : `border-b-slate-200`}`}
        >
          <Link href="/guru" className="hover:font-medium">
            Profil Guru
          </Link>
        </li>
        <li
          className={`w-full border-b py-1 ${pathname === "/fasilitas" ? `border-b-primaryColor font-medium text-primaryColor` : `border-b-slate-200`}`}
        >
          <Link href="/fasilitas" className="hover:font-medium">
            Fasilitas
          </Link>
        </li>
      </ul>
    </div>
  );
};
