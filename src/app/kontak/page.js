import React from "react";

import { FormContact } from "@/components/contact/form-contact";
import { InfoContact } from "@/components/contact/info-contact";
import { TransitionYBottomToTop } from "@/components/motion/transition";

export default function Home() {
  return (
    <div>
      <TransitionYBottomToTop>
        <div className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-background shadow-lg md:flex-row">
          <InfoContact />
          <FormContact />
        </div>
      </TransitionYBottomToTop>
    </div>
  );
}
