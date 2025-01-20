import React from "react";
import { teachers } from "../page";
import Link from "next/link";
import { ImgGuruLaki, ImgGuruPerempuan } from "@/components/image";

export default async function Page({ params }) {
  const { name } = await params;
  const sname = name.replace("%20", " ");
  const findName = teachers.find((n) => n.name === sname);

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold md:text-3xl">Profil Guru</h1>

      <div className="flex w-full flex-row items-center gap-8">
        <div className="h-64 basis-1/3">
          {findName.gender === "Perempuan" ? (
            <ImgGuruPerempuan />
          ) : (
            <ImgGuruLaki />
          )}
        </div>
        <div className="flex basis-2/3 flex-col gap-4">
          <h2 className="text-2xl font-medium uppercase tracking-wide md:font-bold">
            {" "}
            {findName.name}
          </h2>
          <div className="flex flex-row gap-4 text-base font-semibold">
            <p>{findName.gender}</p>
            <p>|</p>
            <p>{findName.birthyear}</p>
            <p>|</p>
            <p>{findName.position}</p>
            <p>|</p>
            <p>{findName.address}</p>
            <p>|</p>
            <p>{findName.status}</p>
          </div>
          <p>
            Perkenalkan nama saya {findName.name}, saya {findName.position} di
            Sekolah. {findName.profil}
          </p>
          <Link href="/guru" className="text-sm font-light italic underline">
            Back to Profil..
          </Link>
        </div>
      </div>
    </div>
  );
}
