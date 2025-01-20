import { HeaderPage } from "@/components/header.page";
import React from "react";

export default function Layout({ children }) {
  return (
    <div className="mb-20 grid grid-cols-1 gap-10">
      <HeaderPage title="P.P.D.B" />
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </div>
  );
}
