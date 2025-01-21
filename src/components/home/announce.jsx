import React from "react";
import { HeadTitle } from "../UI/head.title";
import { Announces } from "@/data/announces";
import { LinkBtn } from "../UI/link.btn";
import { ImgAnnon } from "../image";
import { CardPengumuman } from "../UI/card";

export const Announce = () => {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-5 px-8 lg:px-0">
      <HeadTitle text="Pengumuman" />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {Announces.map((an) => (
          <CardPengumuman
            href={`/pengumuman/${an.title}`}
            thumbnail={<ImgAnnon />}
            date={an.date}
            title={an.title}
            key={an.id}
          />
        ))}
      </div>
      <div className="flex justify-end">
        <LinkBtn href="/tulisan" theme="secondary" text="Selengkapnya" />
      </div>
    </div>
  );
};
