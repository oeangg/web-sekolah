import React from "react";
import { HeadTitle } from "../UI/head.title";
import { HeroImage3 } from "../image";

import { FaqList } from "../data";

export const Faq = () => {
  return (
    <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-6 px-8 lg:grid-cols-2">
      <div className="w-full">
        <HeroImage3 />
      </div>
      <div className="w-full">
        <h1 className="text-base font-extrabold text-primaryColor">FAQ</h1>
        <HeadTitle text="Seputar Sekolah" />
        <div className="grid grid-cols-1 gap-4">
          <FaqList />
        </div>
      </div>
    </div>
  );
};
