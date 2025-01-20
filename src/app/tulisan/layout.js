import { HeaderPage } from "@/components/header.page";
import React from "react";

export default function layout({ children }) {
  return (
    <div className="mb-20 grid grid-cols-1 gap-10">
      <HeaderPage title="Daftar Tulisan" />
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </div>
  );
}
