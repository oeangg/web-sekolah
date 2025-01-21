import React from "react";

import { Articles } from "@/data/article";
import { HeadTitle } from "../UI/head.title";
import { LinkBtn } from "../UI/link.btn";
import { ImgTulisan } from "../image";
import { CardBlog } from "../UI/card";

export const Article = () => {
  return (
    // <div className="w-full bg-twBlue py-12">
    <div className="mx-auto flex w-full flex-col gap-5 px-8 lg:px-0">
      <HeadTitle text="Tulisan Terbaru" />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {Articles.map((ar) => (
          <CardBlog
            href={`/tulisan/${ar.title}`}
            thumbnail={<ImgTulisan />}
            title={ar.title}
            category={ar.category}
            author={ar.author}
            key={ar.id}
          />
        ))}
      </div>
      <div className="flex justify-end">
        <LinkBtn href="/tulisan" theme="secondary" text="Selengkapnya" />
      </div>
    </div>
    // </div>
  );
};
