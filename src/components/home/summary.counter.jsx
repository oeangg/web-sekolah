"use client";

import React from "react";
import CountUp from "react-countup";

export const Counter = ({ number }) => {
  return (
    <h2 className="text-3xl md:text-4xl lg:text-5xl lg:font-extrabold">
      <CountUp end={number} duration={2} delay={0} enableScrollSpy />+
    </h2>
  );
};
