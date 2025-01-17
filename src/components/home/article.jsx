import React from "react";

import { ListArticle } from "../data";
import { HeadTitle } from "../UI/head.title";
import { LinkBtn } from "../UI/link.btn";

export const Article = () => {
  return (
    // <div className="w-full bg-twBlue py-12">
    <div className="mx-auto flex w-full flex-col gap-5 px-8 lg:px-0">
      <HeadTitle text="Tulisan Terbaru" />
      <ListArticle />
      <div className="flex justify-end">
        <LinkBtn href="/tulisan" theme="secondary" text="Selengkapnya" />
      </div>
    </div>
    // </div>
  );
};
