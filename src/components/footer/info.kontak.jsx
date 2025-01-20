import React from "react";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { HiOutlineMailOpen } from "react-icons/hi";

export const KontakKami = () => {
  return (
    <div className="block space-y-2 text-slate-300">
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
