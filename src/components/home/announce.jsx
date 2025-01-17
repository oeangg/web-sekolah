import React from "react";
import { HeadTitle } from "../UI/head.title";
import { ListAnnounce } from "../data";
import { LinkBtn } from "../UI/link.btn";

export const Announce = () => {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-5 px-8 lg:px-0">
      <HeadTitle text="Pengumuman" />
      <ListAnnounce />
      <div className="flex justify-end">
        <LinkBtn href="/tulisan" theme="secondary" text="Selengkapnya" />
      </div>
    </div>
  );
};
