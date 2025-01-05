import React from "react";
import Link from "next/link";
import { HeadTitle } from "../title";
import { ListAnnounce } from "../get.list.data";
import { IoIosArrowDropright } from "react-icons/io";

export const Announce = () => {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-5 px-8 lg:px-0">
      <HeadTitle text="Pengumuman" />
      <ListAnnounce />
      <div className="flex justify-end">
        <Link
          href="/tulisan"
          className="flex w-fit items-center gap-2 rounded-lg border border-primaryColor bg-transparent px-4 py-2 text-base font-medium text-primaryColor duration-300 hover:bg-primaryColor hover:text-background md:text-lg"
        >
          Selengkapnya <IoIosArrowDropright size={20} />
        </Link>
      </div>
    </div>
  );
};
