import React from "react";
import { GoFileDirectory } from "react-icons/go";

export const HeaderPage = ({ title }) => {
  return (
    <div className="mb-14 flex h-48 w-full items-center justify-center bg-slate-100">
      <div className="flex w-full max-w-6xl items-center justify-center gap-3 pt-20">
        <GoFileDirectory size={28} className="text-thirdColor" />
        <h1 className="text-xl font-bold text-thirdColor sm:text-2xl md:text-3xl">
          {title}
        </h1>
      </div>
    </div>
  );
};
