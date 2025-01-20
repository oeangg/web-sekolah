import React from "react";
import { LinkNavFooter } from "../UI/link.nav";

export const LinkMenu = () => {
  return (
    <div className="block space-y-2 text-base font-normal text-slate-300">
      <LinkNavFooter href="/home" text="Beranda" />
      <LinkNavFooter href="/profil" text="Profil" />
      <LinkNavFooter href="/kefiatan" text="Kegiatan" />
      <LinkNavFooter href="/gallery" text="Gallery" />
      <LinkNavFooter href="/kontak" text="Kontak Kami" />
    </div>
  );
};
