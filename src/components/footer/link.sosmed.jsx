import React from "react";
import {
  IoLogoInstagram,
  IoLogoTwitter,
  IoLogoFacebook,
  IoLogoYoutube,
} from "react-icons/io5";
import { LinkImage } from "../UI/link.image";

export const SosmedLink = () => {
  return (
    <div className="flex gap-6">
      <LinkImage href="https://www.facebook.com/">
        <IoLogoFacebook size={32} />
      </LinkImage>
      <LinkImage href="https://www.instagram.com/">
        <IoLogoInstagram size={32} />
      </LinkImage>
      <LinkImage href="https://www.x.com/">
        <IoLogoTwitter size={32} />
      </LinkImage>
      <LinkImage href="https://www.youtube.com/">
        <IoLogoYoutube size={32} />
      </LinkImage>
    </div>
  );
};
