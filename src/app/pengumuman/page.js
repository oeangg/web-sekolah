import { ImgAnnon } from "@/components/image";
import { ZoomIn } from "@/components/motion/transition";
import { CardPengumuman } from "@/components/UI/card";
import { Announces } from "@/data/announces";
import React from "react";

export default function Home() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {Announces.map((dt, index) => (
        <ZoomIn delay={index / 4} key={index}>
          <CardPengumuman
            href={`/pengumuman/${dt.title}`}
            thumbnail={<ImgAnnon />}
            title={dt.title}
            date={dt.date}
            author={dt.author}
          />
        </ZoomIn>
      ))}
    </div>
  );
}
