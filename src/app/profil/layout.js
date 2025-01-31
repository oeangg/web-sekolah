import { Header } from "@/components/header/header.app";
import { HeaderPage } from "@/components/header.page";
import React from "react";
import { Footer } from "@/components/footer/footer.app";
import { TransitionYBottomToTop } from "@/components/motion/transition";

export default function Layout({ children }) {
  return (
    <div className="mb-20 grid grid-cols-1 gap-10">
      <HeaderPage title="Profil Sekolah" />

      <div className="mx-auto w-full max-w-6xl px-4 md:px-0">{children}</div>
    </div>
  );
}
