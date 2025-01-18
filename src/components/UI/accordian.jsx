"use client";

import React from "react";

export const AccordianItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-b-slate-200">
      <button
        onClick={onClick}
        className={`flex w-full justify-between p-2 text-left text-xl font-bold duration-300 ${
          isOpen ? `text-primaryColor` : `text-foreground`
        }`}
      >
        {question}{" "}
        {isOpen ? (
          <span className="rotate-180 transform duration-300">-</span>
        ) : (
          <span className="-rotate-180 transform duration-300">+</span>
        )}
      </button>
      <div
        className={`grid overflow-hidden p-2 text-left text-base font-normal transition-all duration-300 ease-in-out ${
          isOpen ? `grid-rows-[1fr] opacity-100` : `grid-rows-[0fr] opacity-0`
        }`}
      >
        <p className="overflow-hidden">{answer}</p>
      </div>
    </div>
  );
};
