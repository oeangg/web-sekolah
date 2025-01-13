import React from "react";
import Link from "next/link";
import {
  IoLogoInstagram,
  IoLogoTwitter,
  IoLogoFacebook,
  IoLogoYoutube,
} from "react-icons/io5";

export const SosmedLink = () => {
  return (
    <div className="flex gap-6 text-slate-400">
      <Link
        href="https://www.facebook.com/"
        className="hover:text-secondColor duration-300"
      >
        <IoLogoFacebook size={32} />
      </Link>
      <Link
        href="https://www.instagram.com/"
        className="hover:text-secondColor duration-300"
      >
        <IoLogoInstagram size={32} />
      </Link>
      <Link
        href="https://www.x.com/"
        className="hover:text-secondColor duration-300"
      >
        <IoLogoTwitter size={32} />
      </Link>
      <Link
        href="https://www.youtube.com/"
        className="hover:text-secondColor duration-300"
      >
        <IoLogoYoutube size={32} />
      </Link>
    </div>
  );
};
