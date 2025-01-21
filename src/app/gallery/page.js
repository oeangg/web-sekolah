import React from "react";
import { GalleryItem } from "@/components/UI/link.gallery";
import {
  ImgGallery2,
  ImgGallery3,
  ImgGallery4,
  ImgGallery6,
  ImgGallery5,
} from "@/components/image";

export default function Home() {
  return (
    <div className="grid w-full grid-flow-col grid-rows-3 gap-1">
      <div className="relative h-72 overflow-hidden">
        <GalleryItem
          href="/gallery"
          text="Siswa sedang kerja kelompok"
          date="12 Desember 2024"
          image={<ImgGallery2 />}
        />
      </div>
      <div className="relative col-span-2 h-72 overflow-hidden">
        <GalleryItem
          href="/gallery"
          text="Upacara Bendera"
          date="20 Desember 2024"
          image={<ImgGallery3 />}
        />
      </div>
      <div className="relative h-72 overflow-hidden">
        <GalleryItem
          href="/gallery"
          text="Siswa sedang belajar"
          date="22 Desember 2024"
          image={<ImgGallery4 />}
        />
      </div>
      <div className="relative col-span-2 h-72 overflow-hidden">
        <GalleryItem
          href="/gallery"
          text="Persiapan upacara bendera"
          date="2 Januari 2025"
          image={<ImgGallery5 />}
        />
      </div>
      <div className="relative col-span-2 h-72 overflow-hidden">
        <GalleryItem
          href="/gallery"
          text="Upacara bendera"
          date="5 Januari 2025"
          image={<ImgGallery6 />}
        />
      </div>

      <div className="relative h-72 overflow-hidden">
        <GalleryItem
          href="/gallery"
          text="Persiapan upacara bendera"
          date="10 Januari 2025"
          image={<ImgGallery3 />}
        />
      </div>
    </div>
  );
}
