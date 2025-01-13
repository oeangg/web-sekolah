import React from "react";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { HiOutlineMailOpen } from "react-icons/hi";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-background shadow-lg md:flex-row">
        <div className="basis-1/3 space-y-8 rounded-2xl border-[6px] border-background bg-primaryColor p-12 text-background">
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
        <div className="h-full w-full basis-2/3 space-y-8 p-12">
          <input
            type="text"
            placeholder="Nama"
            className="block w-full rounded-xl border border-slate-200 px-4 py-2 focus:border-primaryColor focus:outline-none"
          />
          <input
            type="text"
            placeholder="Email"
            className="block w-full rounded-xl border border-slate-200 px-4 py-2 focus:border-primaryColor focus:outline-none"
          />
          <textarea
            type="text"
            placeholder="Tuliskan Pesan"
            className="block w-full rounded-xl border border-slate-200 px-4 py-2 focus:border-primaryColor focus:outline-none"
          />
          <button className="w-1/3 rounded-xl border border-primaryColor bg-primaryColor py-2 text-base font-medium text-background hover:bg-transparent hover:text-primaryColor">
            KIRIM PESAN
          </button>
        </div>
      </div>
    </div>
  );
}
