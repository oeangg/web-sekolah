import React from "react";
import { HeadTitle } from "../title";
import { HeroImage1 } from "../get.image";
import { Accordian } from "../accordian";
import { AccordianList } from "../accordian.list";

export const Faq = () => {
  return (
    <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-6 px-8 lg:grid-cols-2">
      <div className="w-full">
        <HeroImage1 />
      </div>
      <div className="w-full">
        <h1 className="text-base font-extrabold text-primaryColor">FAQ</h1>
        <HeadTitle text="Seputar Sekolah" />
        <div className="grid grid-cols-1 gap-4">
          <AccordianList />
        </div>
      </div>
    </div>
  );
};
