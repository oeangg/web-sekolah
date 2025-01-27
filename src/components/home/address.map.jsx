import React from "react";
import { HeadTitle } from "../UI/head.title";
import {
  TransitionXRightToLeft,
  TransitionYBottomToTop,
} from "../motion/transition";

export const AddressMap = () => {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-5 px-8 lg:px-0">
      <div className="w-full space-y-1">
        <TransitionYBottomToTop delay={0}>
          <HeadTitle text="Lokasi Sekolah" />
        </TransitionYBottomToTop>
        <TransitionYBottomToTop delay={0.15}>
          <p className="text-base font-normal leading-5 md:text-lg">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore
            provident quaerat architecto in tempora corporis, eligendi ratione
            rem ullam exercitationem maxime pariatur, quibusdam cumque
            accusamus.
          </p>
        </TransitionYBottomToTop>
      </div>
      <TransitionYBottomToTop delay={0.3}>
        <div className="w-full border-2 border-slate-100 p-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.990399410537!2d106.81192057453357!3d-6.395238062549114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69e95922e1e2e1%3A0x49d236225dd923d1!2sSMA%20Negeri%201%20Depok!5e0!3m2!1sid!2sid!4v1735813072795!5m2!1sid!2sid"
            width="100%"
            height="450"
            style={{ border: 1 }}
            // sandbox="allow-scripts allow-modal"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </TransitionYBottomToTop>
    </div>
  );
};
