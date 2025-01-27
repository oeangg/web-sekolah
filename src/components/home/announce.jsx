import React from "react";
import { HeadTitle } from "../UI/head.title";
import { Announces } from "@/data/announces";
import { LinkBtn } from "../UI/link.btn";
import { ImgAnnon } from "../image";
import { CardPengumuman } from "../UI/card";
import {
  TransitionXRightToLeft,
  TransitionYBottomToTop,
} from "../motion/transition";

export const Announce = () => {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-5 px-8 lg:px-0">
      <TransitionYBottomToTop delay={0}>
        <HeadTitle text="Pengumuman" />
      </TransitionYBottomToTop>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {Announces.map((an, index) => (
          <TransitionYBottomToTop delay={index / 4 + 0.05} key={index}>
            <CardPengumuman
              href={`/pengumuman/${an.title}`}
              thumbnail={<ImgAnnon />}
              date={an.date}
              title={an.title}
            />
          </TransitionYBottomToTop>
        ))}
      </div>
      <div className="flex justify-end">
        <TransitionYBottomToTop delay={0.9}>
          <LinkBtn href="/pengumuman" theme="secondary" text="Selengkapnya" />
        </TransitionYBottomToTop>
      </div>
    </div>
  );
};
