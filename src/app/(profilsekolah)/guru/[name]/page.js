import React from "react";
import { teachers } from "@/data/teachers";
import { ImgGuruPerempuan, ImgGuruPria } from "@/components/image";
import { LinkBack } from "@/components/UI/link.btn";
import { TransitionYBottomToTop } from "@/components/motion/transition";

export default async function Page({ params }) {
  const { name } = await params;
  const sname = name.replaceAll("%20", " ");
  const findData = teachers.find((n) => n.name === sname);

  return (
    <TransitionYBottomToTop>
      <div className="space-y-8">
        <h1 className="text-2xl font-bold md:text-3xl">Profil Guru</h1>

        <div className="flex w-full flex-col items-center gap-8 md:flex-row">
          <div className="h-64 basis-1/3 overflow-hidden rounded-lg">
            {findData.gender === "Perempuan" ? (
              <ImgGuruPerempuan />
            ) : (
              <ImgGuruPria />
            )}
          </div>
          <div className="flex basis-2/3 flex-col gap-4">
            <h2 className="text-2xl font-medium uppercase tracking-wide md:font-bold">
              {" "}
              {findData.name}
            </h2>
            <div className="flex flex-row gap-4 text-base font-semibold">
              <p>{findData.gender}</p>
              <p>|</p>
              <p>{findData.birthyear}</p>
              <p>|</p>
              <p>{findData.position}</p>
              <p>|</p>
              <p>{findData.address}</p>
              <p>|</p>
              <p>{findData.status}</p>
            </div>
            <p>
              Perkenalkan nama saya {findData.name}, saya {findData.position} di
              Sekolah. {findData.profil}
            </p>
            <LinkBack href="/guru" />
          </div>
        </div>
      </div>
    </TransitionYBottomToTop>
  );
}
