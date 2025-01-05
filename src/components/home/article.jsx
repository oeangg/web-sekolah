import React from "react";
import Link from "next/link";
import { IoIosArrowDropright } from "react-icons/io";
import { ListArticle } from "../get.list.data";
import { HeadTitle } from "../title";

export const Article = () => {
  return (
    // <div className="w-full bg-twBlue py-12">
    <div className="mx-auto flex w-full flex-col gap-5 px-8 lg:px-0">
      <HeadTitle text="Tulisan Terbaru" />
      <ListArticle />
      <div className="flex justify-end">
        <Link
          href="/tulisan"
          className="flex w-fit items-center gap-2 rounded-lg border border-primaryColor bg-transparent px-4 py-2 text-base font-medium text-primaryColor duration-300 hover:bg-primaryColor hover:text-background md:text-lg"
        >
          Selengkapnya <IoIosArrowDropright size={20} />
        </Link>
      </div>
    </div>
    // </div>
  );
};
