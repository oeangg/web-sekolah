import React from "react";

import { Articles } from "@/data/article";
import { HeadTitle } from "../UI/head.title";
import { LinkBtn } from "../UI/link.btn";
import { ImgTulisan } from "../image";
import { CardBlog } from "../UI/card";
import {
  TransitionXRightToLeft,
  TransitionYBottomToTop,
} from "../motion/transition";

export const Article = () => {
  return (
    // <div className="w-full bg-twBlue py-12">
    <div className="mx-auto flex w-full flex-col gap-5 px-8 lg:px-0">
      <TransitionYBottomToTop delay={0}>
        <HeadTitle text="Tulisan Terbaru" />
      </TransitionYBottomToTop>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {Articles.map((ar, index) => (
          <TransitionYBottomToTop delay={index / 4 + 0.05} key={index}>
            <CardBlog
              href={`/tulisan/${ar.title}`}
              thumbnail={<ImgTulisan />}
              title={ar.title}
              category={ar.category}
              author={ar.author}
            />
          </TransitionYBottomToTop>
        ))}
      </div>
      <div className="flex justify-end">
        <TransitionYBottomToTop delay={0.9}>
          <LinkBtn href="/tulisan" theme="secondary" text="Selengkapnya" />
        </TransitionYBottomToTop>
      </div>
    </div>
    // </div>
  );
};
