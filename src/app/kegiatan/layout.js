import { Header } from "@/components/header/header";
import { HeaderPage } from "@/components/header.page";
import React from "react";

export default function layout({ children }) {
  return (
    <div>
      <Header />
      <HeaderPage title="Kegiatan Siswa" />
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </div>
  );
}
