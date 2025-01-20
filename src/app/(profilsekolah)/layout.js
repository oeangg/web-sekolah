import { HeaderPage } from "@/components/header.page";
import { SidebarProfil } from "@/components/sidebar.profil";
import React from "react";

export default function Layout({ children }) {
  return (
    <div className="mb-20 grid grid-cols-1 gap-10">
      <HeaderPage title="Profil Sekolah" />
      <div className="mx-auto flex w-full max-w-6xl flex-row gap-10">
        <div className="w-full basis-3/4">{children}</div>
        <div className="w-full basis-1/4">
          <SidebarProfil />
        </div>
      </div>
    </div>
  );
}
