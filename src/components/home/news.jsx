import React from "react";
import { ListNews } from "../data";
import { HeadTitle } from "../UI/head.title";
import { LinkBtn } from "../UI/link.btn";

export const News = () => {
  return (
    <div className="mx-auto flex w-full flex-col gap-5 px-8 lg:px-0">
      <HeadTitle text="Berita Terbaru" />
      <ListNews />
      <div className="flex justify-end">
        <LinkBtn href="/tulisan" theme="secondary" text="Selengkapnya" />
      </div>
    </div>
  );
};
