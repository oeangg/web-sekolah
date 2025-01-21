import React from "react";
import { HeadTitle } from "../UI/head.title";
import { LinkBtn } from "../UI/link.btn";
import { news } from "@/data/news";
import { CardNews } from "../UI/card";
import { ImgNews } from "../image";

export const News = () => {
  return (
    <div className="mx-auto flex w-full flex-col gap-5 px-8 lg:px-0">
      <HeadTitle text="Berita Terbaru" />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {news.map((dt) => (
          <CardNews
            href={`/berita/${dt.title}`}
            thumbnail={<ImgNews />}
            title={dt.title}
            category={dt.category}
            date={dt.date}
            key={dt.id}
          />
        ))}
      </div>
      <div className="flex justify-end">
        <LinkBtn href="/berita" theme="secondary" text="Selengkapnya" />
      </div>
    </div>
  );
};
