"use client";

import React, { useState } from "react";

export const Accordian = ({ question, answer }) => {
  const [accordianOpen, setAccordianOpen] = useState(false);

  return (
    <div className="border-b border-b-primaryColor">
      <button
        onClick={() => setAccordianOpen(!accordianOpen)}
        className="flex w-full justify-between p-2 text-left text-xl font-bold"
      >
        {question} {accordianOpen ? <span>-</span> : <span>+</span>}
      </button>
      <div
        className={`grid overflow-hidden p-2 text-left text-base font-normal transition-all duration-300 ease-in-out ${
          accordianOpen
            ? `grid-rows-[1fr] opacity-100`
            : `grid-rows-[0fr] opacity-0`
        }`}
      >
        <p className="overflow-hidden">{answer}</p>
      </div>
    </div>
  );
};
