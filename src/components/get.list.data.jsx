import React from "react";
import dataNews from "../data/news";
import article from "../data/article";
import announce from "../data/announce";
import Link from "next/link";

import { ImageNews1, ImageNews2, ImageNews3, ImagePn } from "./get.image";

export const ListNews = () => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {dataNews.map((dt) => (
        <Link
          href="/berita"
          className="group flex w-full flex-col gap-2 overflow-hidden rounded-md bg-slate-100 text-base font-normal duration-300 hover:bg-primaryColor"
          key={dt.id}
        >
          <div className="h-48 w-full overflow-hidden">
            {dt.category === "kegiatan" ? <ImageNews3 /> : <ImageNews2 />}
          </div>
          <div className="space-y-3 px-4 py-4">
            <h1 className="text-lg font-bold leading-5 group-hover:text-background group-hover:underline">
              {dt.title}
            </h1>
            <div className="flex gap-1 text-xs font-normal text-background">
              <p className="rounded-md bg-thirdColor px-2 py-1 group-hover:bg-background group-hover:text-primaryColor">
                {dt.category}
              </p>
              <p className="rounded-md bg-primaryColor px-2 py-1 group-hover:bg-background group-hover:text-primaryColor">
                {dt.date}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export const ListArticle = () => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {article.map((ar) => (
        <Link
          href="/berita"
          className="group flex w-full flex-col gap-2 overflow-hidden rounded-md bg-slate-100 text-base font-normal duration-300 hover:bg-primaryColor"
          key={ar.id}
        >
          <div className="h-48 w-full overflow-hidden">
            {ar.category === "guru" ? <ImageNews1 /> : <ImageNews2 />}
          </div>
          <div className="space-y-3 px-4 py-4">
            <h1 className="text-lg font-bold leading-5 group-hover:text-background group-hover:underline">
              {ar.title}
            </h1>
            <div className="flex gap-1 text-xs font-normal text-background">
              <p className="rounded-md bg-primaryColor px-2 py-1 group-hover:bg-background group-hover:text-primaryColor">
                {ar.author}
              </p>
              <p className="rounded-md bg-thirdColor px-2 py-1 group-hover:bg-background group-hover:text-primaryColor">
                {ar.category}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export const ListAnnounce = () => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {announce.map((an) => (
        <Link
          href="/berita"
          className="bg-frColor group relative flex h-64 w-full flex-col gap-2 overflow-hidden rounded-md text-base font-normal duration-300 hover:bg-primaryColor"
          key={an.id}
        >
          <ImagePn />

          <div className="absolute bottom-5 left-2 space-y-2">
            <p className="w-fit rounded-md bg-primaryColor px-2 py-1 text-xs font-normal text-background">
              {an.date}
            </p>

            <h1 className="line-clamp-2 px-2 text-lg font-bold leading-5 text-white group-hover:text-background group-hover:underline">
              {an.title}
            </h1>
          </div>
        </Link>
      ))}
    </div>
  );
};
