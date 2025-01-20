import React from "react";
import { LinkNavFooter } from "../UI/link.nav";

export const TautanMenu = () => {
  return (
    <div className="block space-y-2 text-slate-300">
      <LinkNavFooter href="https://www.kemdikbud.go.id/" text="Kemendikbud" />
      <LinkNavFooter href="https://rapordigital.com/" text="Raport Digital" />
      <LinkNavFooter href="https://dapo.dikdasmen.go.id/" text="Dapodik" />
      <LinkNavFooter
        href="https://rdm.kemenag.go.id/"
        text="Raport Digital Madrasah"
      />
    </div>
  );
};
