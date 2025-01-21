import React from "react";
import Link from "next/link";

export const GalleryItem = ({ href, image, text, date }) => {
  return (
    <Link href={href} className="group relative h-full w-full">
      <div className="relative h-full w-full transform opacity-70 transition-all duration-300 ease-in-out group-hover:scale-125 group-hover:bg-primaryColor group-hover:opacity-100">
        {image}
      </div>
      <div className="absolute bottom-10 left-1/2 w-fit -translate-x-1/2 transform -space-y-1 rounded-md bg-slate-50 p-2 text-slate-400 opacity-0 group-hover:opacity-70">
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
