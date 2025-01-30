import { HeaderPage } from "@/components/header.page";
import { SidebarProfil } from "@/components/sidebar.profil";
import React from "react";

export default function Layout({ children }) {
  return (
    <div className="mb-20 grid grid-cols-1 gap-10">
      <HeaderPage title="Profil Sekolah" />
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 md:flex-row md:px-0">
        <div className="w-full md:basis-3/4">{children}</div>
        <div className="w-full md:basis-1/4">
          <SidebarProfil />
        </div>
      </div>
    </div>
  );
}
