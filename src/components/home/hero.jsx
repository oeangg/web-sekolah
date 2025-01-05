import React from "react";
import { IoIosArrowDropright } from "react-icons/io";
import Link from "next/link";
import { HeroImage1, HeroImage2, HeroImage3 } from "../get.image";

export const HeroSection = () => {
  return (
    <section className="mx-auto mb-10 flex max-w-6xl flex-col gap-4 pt-20 lg:h-svh lg:flex-row-reverse lg:justify-between">
      <div className="flex h-full w-full flex-col items-center justify-center px-4 py-10 lg:px-0">
        <div className="h-1/2 w-full overflow-hidden rounded-3xl">
          <HeroImage1 />
        </div>
        <div className="flex h-1/2 w-full">
          <div className="w-1/2 overflow-hidden rounded-3xl border-y-8 border-r-4 border-background">
            <HeroImage2 />
          </div>
          <div className="w-1/2 overflow-hidden rounded-3xl border-y-8 border-l-4 border-background">
            <HeroImage3 />
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-center px-4 lg:px-0">
        <h1 className="w-full -space-y-1 text-base font-medium text-foreground lg:text-lg lg:font-semibold">
          Selamat Datang di
        </h1>
        <h2 className="mb-10 w-full text-3xl font-black text-primaryColor sm:text-4xl md:text-5xl lg:text-6xl">
          Sekolah Negeri Indonesia
        </h2>

        <p className="mb-10 text-base font-normal leading-5 sm:text-lg">
          Sekolah dengan fasilitas modern dan guru inspiratif, dapat membantu
          anak Anda tumbuh menjadi pribadi yang mandiri dan percaya diri
        </p>
        <div className="flex gap-3">
          <Link
            href="/profil"
            prefetch={false}
            className="flex w-fit items-center gap-2 rounded-lg bg-primaryColor px-3 py-3 text-base font-medium text-background duration-300 hover:bg-secondColor md:text-lg md:font-semibold lg:px-6"
          >
            Profil Sekolah <IoIosArrowDropright size={20} />
          </Link>
          <Link
            href="/ppdb"
            prefetch={false}
            className="flex w-fit items-center gap-2 rounded-lg border-2 border-primaryColor bg-transparent px-3 py-3 text-base font-medium text-primaryColor duration-300 hover:border-background hover:bg-secondColor hover:text-background md:text-lg md:font-semibold lg:px-6"
          >
            Kontak Kami <IoIosArrowDropright size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
};
