import { Header } from "@/components/header/header.app";
import { HeaderPage } from "@/components/header.page";
import React from "react";
import { Footer } from "@/components/footer/footer.app";

export default function Layout({ children }) {
  return (
    <div className="grid grid-cols-1 gap-8">
      <Header />
      <HeaderPage title="Profil Sekolah" />
      <div className="mx-auto w-full max-w-6xl">{children}</div>
      <Footer />
    </div>
  );
}
