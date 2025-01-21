import React from "react";
import {
  ImgGallery2,
  ImgGallery3,
  ImgGallery4,
  ImgGallery6,
  ImgGallery5,
} from "@/components/image";

export default function Home() {
  return (
    <div className="grid grid-cols-3 gap-2 w-full">
      <div className=" relative "><ImgGallery2/></div>
    </div>
  );
}
