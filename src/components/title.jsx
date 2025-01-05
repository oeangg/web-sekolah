import React from "react";

export const HeadTitle = ({ text }) => {
  return (
    <div className="mb-4 flex flex-col -space-y-11">
      <h1 className="mb-12 w-full text-3xl font-extrabold text-slate-800 lg:text-4xl">
        {text}
      </h1>
      <div className="flex">
        <div className="h-[5px] w-8 rounded-l-sm bg-primaryColor md:w-10"></div>
        <div className="h-[5px] w-6 rounded-r-sm bg-thirdColor md:w-8"></div>
      </div>
    </div>
  );
};
