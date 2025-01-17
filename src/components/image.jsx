import React from "react";
import Image from "next/image";
import imgHeadline from "../assets/image/siswa.jpg";
import imgKepsek from "../assets/image/kepalasekolah.jpg";
import imgNews1 from "../assets/image/news1.jpg";
import imgNews2 from "../assets/image/news2.jpg";
import imgNews3 from "../assets/image/news3.jpg";
import imgHero1 from "../assets/image/hero1.jpg";
import imgHero2 from "../assets/image/hero2.jpg";
import imgHero3 from "../assets/image/hero3.jpg";
import imgHeader from "../assets/image/headerpage.jpg";

export const HeaderPageImage = () => {
  return (
    <Image
      src={imgHeader}
      alt="img header halaman"
      style={{ width: "100%", height: "100%", objectFit: "cover" }}
    />
  );
};

export const HeadlineImage = () => {
  return (
    <Image
      src={imgHeadline}
      alt="image class"
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
        filter: "grayscale(100%)",
      }}
    />
  );
};

export const HeroImage1 = () => {
  return (
    <Image
      src={imgHero1}
      alt="image hero "
      style={{ width: "100%", height: "100%", objectFit: "cover" }}
    />
  );
};

export const HeroImage2 = () => {
  return (
    <Image
      src={imgHero2}
      alt="image hero "
      style={{ width: "100%", height: "100%", objectFit: "cover" }}
    />
  );
};

export const HeroImage3 = () => {
  return (
    <Image
      src={imgHero3}
      alt="image hero "
      style={{ width: "100%", height: "100%", objectFit: "cover" }}
    />
  );
};

export const ImageKepalaSekolah = () => {
  return (
    <Image
      src={imgKepsek}
      alt="image class"
      style={{ width: "100%", height: "auto", objectFit: "cover" }}
      className="border-4 border-slate-100"
    />
  );
};

export const ImageNews1 = () => {
  return (
    <Image
      src={imgNews1}
      alt="image class"
      style={{ width: "100%", height: "100%", objectFit: "cover" }}
      className="duration-300 group-hover:scale-110"
    />
  );
};
export const ImageNews2 = () => {
  return (
    <Image
      src={imgNews2}
      alt="image class"
      style={{ width: "100%", height: "100%", objectFit: "cover" }}
      className="duration-300 group-hover:scale-110"
    />
  );
};
export const ImageNews3 = () => {
  return (
    <Image
      src={imgNews3}
      alt="image class"
      style={{ width: "100%", height: "100%", objectFit: "cover" }}
      className="duration-300 group-hover:scale-110"
    />
  );
};

export const ImagePn = () => {
  return (
    <Image
      src={imgNews1}
      alt="image class"
      style={{ width: "100%", height: "100%", objectFit: "cover" }}
      className="opacity-70 duration-300 group-hover:scale-110"
    />
  );
};
