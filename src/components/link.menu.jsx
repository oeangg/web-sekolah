import React from "react";
import Link from "next/link";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

export const LinkMenu = () => {
  return (
    <div className="block space-y-2 text-base font-normal">
      <Link href="/home" className="flex items-center gap-2">
        <MdKeyboardDoubleArrowRight size={20} /> Beranda
      </Link>
      <Link href="/home" className="flex items-center gap-2">
        <MdKeyboardDoubleArrowRight size={20} /> Profil
      </Link>
      <Link href="/home" className="flex items-center gap-2">
        <MdKeyboardDoubleArrowRight size={20} /> Kegiatan
      </Link>
      <Link href="/home" className="flex items-center gap-2">
        <MdKeyboardDoubleArrowRight size={20} /> Gallery
      </Link>
      <Link href="/home" className="flex items-center gap-2">
        <MdKeyboardDoubleArrowRight size={20} /> Kontak Kami
      </Link>
    </div>
  );
};
