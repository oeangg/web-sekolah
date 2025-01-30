import React from "react";

export default function Loading() {
  return (
    <div className="flex w-full animate-pulse flex-col items-center gap-8 md:flex-row">
      <div className="h-64 w-full rounded-lg bg-slate-200 md:basis-1/3"></div>
      <div className="flex w-full flex-col gap-4 md:basis-2/3">
        <h2 className="h-7 w-2/3 bg-slate-200 text-2xl font-medium uppercase tracking-wide md:font-bold"></h2>
        <div className="flex h-10 w-full flex-row gap-4 text-base font-semibold">
          <span className="h-5 w-8 bg-slate-200"></span>
          <span className="h-5 w-8 bg-slate-200"></span>
          <span className="h-5 w-8 bg-slate-200"></span>
          <span className="h-5 w-8 bg-slate-200"></span>
          <span className="h-5 w-8 bg-slate-200"></span>
        </div>
        <div className="flex flex-col gap-4">
          <span className="h-5 w-full bg-slate-200"></span>
          <span className="h-5 w-full bg-slate-200"></span>
          <span className="h-5 w-full bg-slate-200"></span>
          <span className="h-5 w-full bg-slate-200"></span>
          <span className="h-5 w-full bg-slate-200"></span>
        </div>
      </div>
    </div>
  );
}
