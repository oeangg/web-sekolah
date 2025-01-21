import React from "react";
import { Announces } from "@/data/announces";
import { ImgAnnon } from "@/components/image";
import { LinkBack } from "@/components/UI/link.btn";

export default async function Page({ params }) {
  const { title } = await params;
  const stitle = title.replaceAll("%20", " ");
  const findData = Announces.find((n) => n.title === stitle);

  return (
    <div className="mx-6 grid grid-cols-1 gap-6 md:mx-0">
      <h1 className="w-2/3 text-2xl font-semibold text-foreground">
        {findData.title}
      </h1>
      <div className="flex flex-row gap-2 text-xs font-light">
        <p className="rounded-md bg-primaryColor px-2 py-1 text-background">
          {findData.date}
        </p>
        <p className="rounded-md bg-thirdColor px-2 py-1 text-background">
          {findData.author}
        </p>
      </div>
      <div className="space-y-4">
        <div className="max-w-96 overflow-hidden rounded-lg md:float-right">
          <ImgAnnon />
        </div>
        <p>{findData.content_p1}</p>
        <p>{findData.content_p2}</p>
      </div>
      <LinkBack href="/pengumuman" />
    </div>
  );
}
