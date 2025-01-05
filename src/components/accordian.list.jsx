import React from "react";
import faqs from "../data/faq";
import { Accordian } from "./accordian";

export const AccordianList = () => {
  return (
    <div>
      {faqs.map((faq, index) => (
        <Accordian key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};
