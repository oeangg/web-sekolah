import React from "react";
import { Button } from "../UI/button";

export const FormContact = () => {
  return (
    <form className="h-full w-full basis-2/3 space-y-8 p-12">
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
      <Button>KIRIM PESAN</Button>
      {/* <button className="w-1/3 rounded-xl border border-primaryColor bg-primaryColor py-2 text-base font-medium text-background hover:bg-transparent hover:text-primaryColor">
        KIRIM PESAN
      </button> */}
    </form>
  );
};
