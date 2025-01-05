import React from "react";
import { IoIosArrowDropright } from "react-icons/io";
import Link from "next/link";
import { ImageKepalaSekolah } from "../get.image";

export const SambutanKepalaSekolah = () => {
  return (
    <div className="w-full bg-primaryColor py-20">
      <div className="mx-auto flex w-full max-w-6xl flex-col-reverse justify-between gap-10 px-8 md:flex-row lg:px-0">
        <div className="w-full md:w-2/3">
          <h1 className="text-base font-bold text-background lg:text-lg">
            Sambutan Kepala Sekolah
          </h1>
          <h2 className="mb-12 text-2xl font-bold text-background md:text-4xl lg:text-5xl">
            Bapak Bacharudin Jusuf
          </h2>
          <p className="mb-8 text-base font-normal text-background lg:text-lg">
            Kami percaya bahwa pendidikan adalah investasi terbaik untuk masa
            depan. Oleh karena itu, kami terus berupaya meningkatkan kualitas
            pendidikan di sekolah kami. Terima kasih atas kunjungan Anda. Semoga
            website ini bermanfaat bagi kita semua.
          </p>
          <Link
            href="/kepalasekolah/sambutan"
            prefetch={false}
            className="flex w-fit items-center gap-2 rounded-lg bg-background px-6 py-3 text-base font-medium text-primaryColor duration-300 hover:bg-secondColor hover:text-background md:text-lg"
          >
            Selengkapnya <IoIosArrowDropright size={20} />
          </Link>
        </div>
        <div className="w-fit overflow-hidden md:w-1/3">
          <ImageKepalaSekolah />
        </div>
      </div>
    </div>
  );
};
