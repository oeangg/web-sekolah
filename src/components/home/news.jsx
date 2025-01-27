import React from "react";
import { HeadTitle } from "../UI/head.title";
import { LinkBtn } from "../UI/link.btn";
import { news } from "@/data/news";
import { CardNews } from "../UI/card";
import { ImgNews } from "../image";
import {
  TransitionXRightToLeft,
  TransitionYBottomToTop,
} from "../motion/transition";

export const News = () => {
  return (
    <div className="mx-auto flex w-full flex-col gap-5 px-8 lg:px-0">
      <TransitionYBottomToTop delay={0}>
        <HeadTitle text="Berita Terbaru" />
      </TransitionYBottomToTop>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {news.map((dt, index) => (
          <TransitionYBottomToTop delay={index / 4 + 0.05} key={index}>
            <CardNews
              href={`/berita/${dt.title}`}
              thumbnail={<ImgNews />}
              title={dt.title}
              category={dt.category}
              date={dt.date}
            />
          </TransitionYBottomToTop>
        ))}
      </div>
      <div className="flex justify-end">
        <TransitionYBottomToTop delay={0.9}>
          <LinkBtn href="/berita" theme="secondary" text="Selengkapnya" />
        </TransitionYBottomToTop>
      </div>
    </div>
  );
};
