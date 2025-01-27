import React from "react";
import Link from "next/link";

export const GalleryItem = ({ href, image, text, date }) => {
  return (
    <Link href={href} className="group relative h-full w-full">
      <div className="relative h-full w-full transform opacity-80 transition-all duration-300 ease-in-out group-hover:scale-125 group-hover:bg-primaryColor group-hover:opacity-100">
        {image}
      </div>
      <div className="absolute bottom-0 left-0 right-0 w-full -space-y-1 bg-white p-2 text-slate-400 opacity-0 group-hover:opacity-90">
        <p className="w-full text-center text-xs font-light opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100">
          {date}
        </p>
        <p className="w-full text-center text-xs font-semibold uppercase leading-4 opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100">
          {text}
        </p>
      </div>
    </Link>
  );
};
