import React from "react";
import { GalleryItem } from "@/components/UI/link.gallery";
import {
  ImgGallery2,
  ImgGallery3,
  ImgGallery4,
  ImgGallery6,
  ImgGallery5,
} from "@/components/image";
import { ZoomIn } from "@/components/motion/transition";

export default function Home() {
  return (
    <div className="grid w-full grid-cols-1 gap-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <ZoomIn delay={0}>
        <div className="relative h-72 overflow-hidden rounded-md">
          <GalleryItem
            href="/gallery"
            text="Siswa sedang kerja kelompok"
            date="12 Desember 2024"
            image={<ImgGallery2 />}
          />
        </div>
      </ZoomIn>
      <ZoomIn delay={0.1}>
        <div className="relative h-72 overflow-hidden rounded-md">
          <GalleryItem
            href="/gallery"
            text="Upacara Bendera"
            date="20 Desember 2024"
            image={<ImgGallery3 />}
          />
        </div>
      </ZoomIn>
      <ZoomIn delay={0.2}>
        <div className="relative h-72 overflow-hidden rounded-md">
          <GalleryItem
            href="/gallery"
            text="Siswa sedang belajar"
            date="22 Desember 2024"
            image={<ImgGallery4 />}
          />
        </div>
      </ZoomIn>
      <ZoomIn delay={0.3}>
        <div className="relative h-72 overflow-hidden rounded-md">
          <GalleryItem
            href="/gallery"
            text="Persiapan upacara bendera"
            date="2 Januari 2025"
            image={<ImgGallery5 />}
          />
        </div>
      </ZoomIn>
      <ZoomIn delay={0.4}>
        <div className="relative h-72 overflow-hidden rounded-md">
          <GalleryItem
            href="/gallery"
            text="Upacara bendera"
            date="5 Januari 2025"
            image={<ImgGallery6 />}
          />
        </div>
      </ZoomIn>
      <ZoomIn delay={0.5}>
        <div className="relative h-72 overflow-hidden rounded-md">
          <GalleryItem
            href="/gallery"
            text="Persiapan upacara bendera"
            date="10 Januari 2025"
            image={<ImgGallery3 />}
          />
        </div>
      </ZoomIn>
      <ZoomIn delay={0.6}>
        <div className="relative h-72 overflow-hidden rounded-md">
          <GalleryItem
            href="/gallery"
            text="Upacara Bendera"
            date="20 Desember 2024"
            image={<ImgGallery3 />}
          />
        </div>
      </ZoomIn>
      <ZoomIn delay={0.7}>
        <div className="relative h-72 overflow-hidden rounded-md">
          <GalleryItem
            href="/gallery"
            text="Siswa sedang belajar"
            date="22 Desember 2024"
            image={<ImgGallery4 />}
          />
        </div>
      </ZoomIn>
    </div>
  );
}
