import React from "react";

export const Button = ({ children }) => {
  return (
    <button className="hidden cursor-pointer rounded-lg border border-background bg-primaryColor px-8 py-3 text-base font-medium tracking-wide text-background hover:bg-frColor md:block">
      {children}
    </button>
  );
};
