import React from "react";
import { FaBookReader } from "react-icons/fa";
import { SosmedLink } from "./sosmed";
import { LinkMenu } from "./link.menu";
import { TautanMenu } from "./tautan.menu";
import { KontakKami } from "./kontak.kami";

export const Footer = () => {
  return (
    <footer className="w-full bg-frColor">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-8 py-32 text-background sm:flex-row">
        <div className="flex w-full flex-col items-center justify-center gap-8 md:w-2/6 md:border-r-2 md:border-r-slate-400">
          <div className="flex w-full flex-col items-center gap-2">
            <FaBookReader size={64} className="text-thirdColor" />
            <h2 className="text-lg font-bold">Sekolah Negeri Indonesia</h2>
          </div>
          <SosmedLink />
        </div>

        <div className="grid w-full grid-cols-1 gap-10 md:w-4/6 md:grid-cols-2 lg:grid-cols-3 lg:gap-4">
          <div className="w-full space-y-5">
            <h2 className="text-xl font-extrabold md:text-2xl">Link Menu</h2>
            <LinkMenu />
          </div>
          <div className="w-full space-y-5">
            <h2 className="text-xl font-extrabold md:text-2xl">Tautan</h2>
            <TautanMenu />
          </div>
          <div className="w-full space-y-5">
            <h2 className="text-xl font-extrabold md:text-2xl">Kontak Kami</h2>
            <KontakKami />
          </div>
        </div>
      </div>
      <div className="w-full pb-14 text-thirdColor">
        <p className="text-center text-xs font-medium md:text-sm">
          Copyright &#169;2024 Sekolah Negeri Indonesia
        </p>
      </div>
    </footer>
  );
};
