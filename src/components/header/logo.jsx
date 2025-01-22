import React from "react";
import Link from "next/link";
import { FaBookReader } from "react-icons/fa";

export const LogoSekolah = () => {
  return (
    <Link href="/">
      <div className="flex items-center justify-center gap-2">
        <FaBookReader size={36} className="text-primaryColor" />
        <div className="-space-y-2 uppercase">
          <p className="text-lg font-medium">Sekolah</p>
          <p className="text-lg font-bold">Indonesia </p>
        </div>
      </div>
    </Link>
  );
};
