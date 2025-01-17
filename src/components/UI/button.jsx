import React from "react";

export const Button = ({ children }) => {
  return (
    <button className="hidden cursor-pointer rounded-lg border border-background bg-primaryColor px-4 py-2 text-background hover:bg-secondColor md:block">
      {children}
    </button>
  );
};
