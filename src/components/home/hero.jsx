import React from "react";
import { HeroImage1, HeroImage2, HeroImage3 } from "../image";
import { LinkBtn } from "../UI/link.btn";

export const HeroSection = () => {
  return (
    <section className="mx-auto mb-10 flex max-w-6xl flex-col gap-4 px-8 pt-20 lg:h-svh lg:flex-row-reverse lg:justify-between lg:px-0">
      <div className="grid h-full w-full grid-cols-2 py-10">
        <div className="relative h-full w-full overflow-hidden rounded-l-[64px] border-r-4 border-r-background">
          <HeroImage1 />
        </div>
        <div className="grid h-full w-full grid-rows-2">
          <div className="relative w-full overflow-hidden rounded-tr-[64px] border-b-4 border-l-4 border-b-background border-l-background">
            <HeroImage2 />
          </div>
          <div className="relative w-full overflow-hidden rounded-br-[64px] border-l-4 border-t-4 border-l-background border-t-background">
            <HeroImage3 />
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-center lg:px-0">
        <h1 className="w-full -space-y-1 text-base font-medium text-thirdColor lg:text-lg lg:font-semibold">
          Selamat Datang di
        </h1>
        <h2 className="mb-10 w-full bg-gradient-to-r from-primaryColor to-secondColor bg-clip-text text-3xl font-black text-transparent sm:text-4xl md:text-5xl lg:text-6xl">
          Sekolah Negeri Indonesia
        </h2>

        <p className="mb-10 text-base font-normal leading-5 sm:text-lg">
          Sekolah dengan fasilitas modern dan guru inspiratif, dapat membantu
          anak Anda tumbuh menjadi pribadi yang mandiri dan percaya diri
        </p>
        <div className="flex gap-3">
          <LinkBtn href="/profil" theme="primary" text="Profil Sekolah" />
          <LinkBtn href="/kontak" theme="secondary" text="Kontak Kami" />
        </div>
      </div>
    </section>
  );
};
