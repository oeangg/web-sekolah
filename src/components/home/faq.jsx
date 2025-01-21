"use client";

import React, { useState } from "react";
import { HeadTitle } from "../UI/head.title";
import { FaqsImage } from "../image";
import { AccordianItem } from "../UI/accordian";

const faqs = [
  {
    id: 1,
    question: "Bagaimana cara mendaftar menjadi siswa baru?",
    answer:
      "Untuk mendaftar, Anda dapat mengisi formulir pendaftaran online yang tersedia di website kami atau datang langsung ke kantor administrasi sekolah.",
  },
  {
    id: 2,
    question: "Apa saja persyaratan pendaftaran?",
    answer:
      "Persyaratan pendaftaran meliputi fotokopi akta kelahiran, rapor semester terakhir, pas foto, dan surat keterangan sehat.",
  },
  {
    id: 3,
    question: "Apakah ada biaya pendaftaran?",
    answer: "Ya, terdapat biaya pendaftaran sebesar Rp 200.000,-.",
  },
];

export const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemIndex = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-8 md:flex-row">
      <div className="relative basis-2/5 overflow-hidden rounded-3xl">
        <FaqsImage />
      </div>
      <div className="basis-3/5 space-y-10">
        <div>
          <h1 className="text-base font-extrabold text-primaryColor">FAQ</h1>
          <HeadTitle text="Seputar Sekolah" />
        </div>
        <div className="grid grid-cols-1 gap-4">
          {faqs.map((faq, index) => (
            <AccordianItem
              key={index}
              answer={faq.answer}
              question={faq.question}
              isOpen={activeIndex === index}
              onClick={() => handleItemIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
