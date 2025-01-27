import React from "react";
import { FaPerson, FaPersonShelter } from "react-icons/fa6";
import { BsPersonVcard } from "react-icons/bs";
import { FaBookReader } from "react-icons/fa";
import { Counter } from "../UI/counter";
import { TransitionYBottomToTop } from "../motion/transition";

export const Summary = () => {
  return (
    <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center justify-center gap-8 rounded-md bg-primaryColor p-16 font-bold text-background sm:grid-cols-2 md:grid-cols-4">
      <TransitionYBottomToTop delay={0}>
        <div className="flex flex-col items-center justify-center gap-2 px-8 text-center md:border-r-2 md:border-thirdColor">
          <FaPerson size={28} />
          <Counter number={800} />
          <p className="text-lg">Siswa</p>
        </div>
      </TransitionYBottomToTop>
      <TransitionYBottomToTop delay={0.15}>
        <div className="flex flex-col items-center justify-center gap-2 px-8 text-center md:border-r-2 md:border-thirdColor">
          <BsPersonVcard size={28} />
          <Counter number={50} />
          <p className="text-lg">Pengajar</p>
        </div>
      </TransitionYBottomToTop>
      <TransitionYBottomToTop delay={0.3}>
        <div className="flex flex-col items-center justify-center gap-2 px-8 text-center md:border-r-2 md:border-thirdColor">
          <FaBookReader size={28} />
          <Counter number={20} />
          <p className="text-lg">Kelas</p>
        </div>
      </TransitionYBottomToTop>
      <TransitionYBottomToTop delay={0.45}>
        <div className="flex flex-col items-center justify-center gap-2 px-8 text-center">
          <FaPersonShelter size={28} />
          <Counter number={7500} />
          <p className="text-lg">Alumni</p>
        </div>
      </TransitionYBottomToTop>
    </div>
  );
};
