import { Header } from "@/components/header/header.app";
import { HeaderPage } from "@/components/header.page";
import { SidebarProfil } from "@/components/sidebar.profil";
import React from "react";
import { Footer } from "@/components/footer/footer.app";

export default function Layout({ children }) {
  return (
    <div className="grid grid-cols-1 gap-8">
      <Header />
      <HeaderPage title="Profil Sekolah" />
      <div className="mx-auto flex w-full max-w-6xl flex-row gap-6">
        <div className="w-full basis-3/4">{children}</div>
        <div className="w-full basis-1/4">
          <SidebarProfil />
        </div>
      </div>
      <Footer />
    </div>
  );
}
