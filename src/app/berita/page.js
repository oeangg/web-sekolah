import React from "react";
import { news } from "@/data/news";
import { CardNewsPage } from "@/components/UI/card";
import { ImgNews } from "@/components/image";
import { ZoomIn } from "@/components/motion/transition";

export default function Home() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {news.map((dt, index) => (
        <ZoomIn delay={index / 4} key={index}>
          <CardNewsPage
            href={`/berita/${dt.title}`}
            thumbnail={<ImgNews />}
            title={dt.title}
            category={dt.category}
            date={dt.date}
            content={dt.content_p1}
          />
        </ZoomIn>
      ))}
    </div>
  );
}
