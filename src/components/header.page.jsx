import React from "react";
import { GoFileDirectory } from "react-icons/go";
import { HeaderPageImage } from "./image";

export const HeaderPage = ({ title }) => {
  return (
    <div className="relative mb-14 mt-20 flex h-80 w-full items-center justify-center bg-slate-200">
      <div className="h-80 w-full">
        <HeaderPageImage />
      </div>
      <div className="absolute left-1/2 top-1/2 flex h-80 w-full max-w-6xl -translate-x-1/2 -translate-y-1/2 transform items-center justify-center gap-3">
        <GoFileDirectory size={28} className="text-background" />
        <h1 className="text-xl font-extrabold uppercase text-background md:text-2xl">
          {title}
        </h1>
      </div>
    </div>
  );
};
