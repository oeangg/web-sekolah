import React from "react";
import { FaPerson, FaPersonShelter } from "react-icons/fa6";
import { BsPersonVcard } from "react-icons/bs";
import { FaBookReader } from "react-icons/fa";
import { Counter } from "./summary.counter";

export const Summary = () => {
  return (
    <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center justify-center gap-8 rounded-md bg-primaryColor p-16 font-bold text-background sm:grid-cols-2 md:grid-cols-4">
      <div className="md:border-thirdColor flex flex-col items-center justify-center gap-2 px-8 text-center md:border-r-2">
        <FaPerson size={28} />
        <Counter number={800} />
        <p className="text-lg">Siswa</p>
      </div>
      <div className="md:border-thirdColor flex flex-col items-center justify-center gap-2 px-8 text-center md:border-r-2">
        <BsPersonVcard size={28} />
        <Counter number={50} />
        <p className="text-lg">Pengajar</p>
      </div>
      <div className="md:border-thirdColor flex flex-col items-center justify-center gap-2 px-8 text-center md:border-r-2">
        <FaBookReader size={28} />
        <Counter number={20} />
        <p className="text-lg">Kelas</p>
      </div>
      <div className="flex flex-col items-center justify-center gap-2 px-8 text-center">
        <FaPersonShelter size={28} />
        <Counter number={7500} />
        <p className="text-lg">Alumni</p>
      </div>
    </div>
  );
};
