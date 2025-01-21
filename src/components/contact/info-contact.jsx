import React from "react";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { HiOutlineMailOpen } from "react-icons/hi";

export const InfoContact = () => {
  return (
    <div className="basis-1/3 space-y-8 rounded-2xl border-[6px] border-background bg-gradient-to-b from-primaryColor to-frColor p-12 text-background">
      <div>
        <h2 className="text-3xl font-bold">Info </h2>
        <p className="text-sm leading-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut
          accusamus tempora repellat laboriosam culpa cum?
        </p>
      </div>
      <div className="flex items-center gap-2">
        <FaLocationDot size={16} />
        <p>Jl. Raya Indonesia no. 45</p>
      </div>
      <div className="flex items-center gap-2">
        <FaPhone size={16} />
        <p>+62 (21) 77777555</p>
      </div>
      <div className="flex items-center gap-2">
        <HiOutlineMailOpen size={16} />
        <p>sekolah@sekolah.ac.id</p>
      </div>
    </div>
  );
};
