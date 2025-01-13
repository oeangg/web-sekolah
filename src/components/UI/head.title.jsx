import React from "react";

export const HeadTitle = ({ text }) => {
  return (
    <div className="mb-4 flex flex-col -space-y-11">
      <h1 className="text-foregound mb-14 w-full text-3xl font-extrabold lg:text-4xl">
        {text}
      </h1>
      <div className="flex">
        <div className="h-[6px] w-8 rounded-l-sm bg-primaryColor md:w-10"></div>
        <div className="h-[6px] w-6 rounded-r-sm bg-thirdColor md:w-8"></div>
      </div>
    </div>
  );
};
