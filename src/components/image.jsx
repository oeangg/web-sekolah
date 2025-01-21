import React from "react";
import Image from "next/image";
import imgFaqs from "../assets/image/faqs.jpg";
import imgSiswa from "../assets/image/siswa.jpg";
import imgKepsek from "../assets/image/kepalasekolah.jpg";
import imgNews from "../assets/image/news.jpg";
import imgAnnon from "../assets/image/annon.jpg";
import imgTulis from "../assets/image/tulis.jpg";
import imgHero1 from "../assets/image/hero1.jpg";
import imgHero2 from "../assets/image/hero2.jpg";
import imgHero3 from "../assets/image/hero3.jpg";
import imgHeader from "../assets/image/headerpage.jpg";
import imgGuruPr from "../assets/image/diansastro.jpg";
import imgguruLk from "../assets/image/rocky.jpg";
import imgGallery2 from "../assets/image/gallery2.jpg";
import imgGallery3 from "../assets/image/gallery3.jpg";
import imgGallery4 from "../assets/image/gallery4.jpg";
import imgGallery5 from "../assets/image/gallery5.jpg";
import imgGallery6 from "../assets/image/gallery6.jpg";

export const ImgGallery2 = () => {
  return (
    <Image
      src={imgGallery2}
      alt="gallery"
      style={{ width: "100%", height: "100%", objectFit: "cover" }}
    />
  );
};
export const ImgGallery3 = () => {
  return (
    <Image
      src={imgGallery3}
      alt="gallery"
      style={{ width: "100%", height: "100%", objectFit: "cover" }}
    />
  );
};
export const ImgGallery4 = () => {
  return (
    <Image
      src={imgGallery4}
      alt="gallery"
      style={{ width: "100%", height: "100%", objectFit: "cover" }}
    />
  );
};
export const ImgGallery5 = () => {
  return (
    <Image
      src={imgGallery5}
      alt="gallery"
      style={{ width: "100%", height: "100%", objectFit: "cover" }}
    />
  );
};
export const ImgGallery6 = () => {
  return (
    <Image
      src={imgGallery6}
      alt="gallery"
      style={{ width: "100%", height: "100%", objectFit: "cover" }}
    />
  );
};

export const ImgGuruPerempuan = () => {
  return (
    <Image
      src={imgGuruPr}
      alt="image guru"
      style={{ width: "100%", height: "100%", objectFit: "cover" }}
    />
  );
};

export const ImgGuruPria = () => {
  return (
    <Image
      src={imgguruLk}
      alt="image guru"
      style={{ width: "100%", height: "100%", objectFit: "cover" }}
    />
  );
};

export const HeaderPageImage = () => {
  return (
    <Image
      src={imgHeader}
      alt="img header halaman"
      style={{ width: "100%", height: "100%", objectFit: "cover" }}
    />
  );
};

export const ImgSiswa = () => {
  return (
    <Image
      src={imgSiswa}
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

export const FaqsImage = () => {
  return (
    <Image
      src={imgFaqs}
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
      style={{ width: "100%", height: "100%", objectFit: "cover" }}
    />
  );
};

export const ImgAnnon = () => {
  return (
    <Image
      src={imgAnnon}
      alt="image class"
      style={{ width: "100%", height: "100%", objectFit: "cover" }}
      className="opacity-70 duration-300 group-hover:scale-110"
    />
  );
};
export const ImgTulisan = () => {
  return (
    <Image
      src={imgTulis}
      alt="image class"
      style={{ width: "100%", height: "auto", objectFit: "cover" }}
      className="duration-300 group-hover:scale-110"
    />
  );
};

export const ImgNews = () => {
  return (
    <Image
      src={imgNews}
      alt="image class"
      style={{ width: "100%", height: "auto", objectFit: "cover" }}
      className="duration-300 group-hover:scale-110"
    />
  );
};
