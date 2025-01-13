import { Header } from "@/components/header/header.app";
import { HeaderPage } from "@/components/header.page";
import React from "react";
import { Footer } from "@/components/footer/footer.app";

export default function Layout({ children }) {
  return (
    <div className="grid grid-cols-1 gap-10 bg-background">
      <Header />
      <div className="mb-16 mt-52 w-full">
        <div className="mx-auto w-full max-w-6xl space-y-10">
          <h2 className="w-full text-center text-3xl font-extrabold">
            Kontak Kami
          </h2>
          <p className="px-16 text-center text-base font-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            quas, illo qui enim, impedit explicabo tempora debitis at eos
            voluptate consequuntur aliquid, sunt earum est odio accusantium quae
            facilis quis. Corrupti ullam exercitationem animi esse dignissimos
            necessitatibus quasi, ducimus eligendi.
          </p>

          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
}
