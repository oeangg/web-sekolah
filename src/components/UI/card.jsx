import React from "react";
import Link from "next/link";

export const CardPrimary = ({ link, thumbnail, date, title }) => {
  return (
    <Link
      href={link}
      className="group relative flex h-64 w-full flex-col gap-2 overflow-hidden rounded-md bg-frColor text-base font-normal duration-300 hover:bg-primaryColor"
    >
      {thumbnail}
      <div className="absolute bottom-5 left-2 space-y-2">
        <p className="w-fit rounded-md bg-primaryColor px-2 py-1 text-xs font-normal text-background">
          {date}
        </p>

        <h1 className="line-clamp-2 px-2 text-lg font-bold leading-5 text-white group-hover:text-background group-hover:underline">
          {title}
        </h1>
      </div>
    </Link>
  );
};

export const CardSecondary = ({ link, thumbnail, date, category, title }) => {
  return (
    <Link
      href={link}
      className="group flex w-full flex-col gap-2 overflow-hidden rounded-md bg-slate-100 text-base font-normal duration-300 hover:bg-primaryColor"
    >
      <div className="h-48 w-full overflow-hidden">{thumbnail}</div>
      <div className="space-y-3 px-4 py-4">
        <h1 className="text-lg font-bold leading-5 group-hover:text-background group-hover:underline">
          {title}
        </h1>
        <div className="flex gap-1 text-xs font-normal text-background">
          <p className="rounded-md bg-thirdColor px-2 py-1 group-hover:bg-background group-hover:text-primaryColor">
            {category}
          </p>
          <p className="rounded-md bg-primaryColor px-2 py-1 group-hover:bg-background group-hover:text-primaryColor">
            {date}
          </p>
        </div>
      </div>
    </Link>
  );
};
