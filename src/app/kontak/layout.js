import { HeaderPage } from "@/components/header.page";
import { TransitionYBottomToTop } from "@/components/motion/transition";
import React from "react";

export default function Layout({ children }) {
  return (
    <div className="mb-20 grid grid-cols-1 gap-10 bg-background">
      <HeaderPage title="Kontak Kami" />
      <div className="mx-auto w-full max-w-6xl space-y-10 px-4 md:px-0">
        <TransitionYBottomToTop>
          <p className="px-4 text-center text-base font-normal md:px-16">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            quas, illo qui enim, impedit explicabo tempora debitis at eos
            voluptate consequuntur aliquid, sunt earum est odio accusantium quae
            facilis quis. Corrupti ullam exercitationem animi esse dignissimos
            necessitatibus quasi, ducimus eligendi.
          </p>
        </TransitionYBottomToTop>

        {children}
      </div>
    </div>
  );
}
