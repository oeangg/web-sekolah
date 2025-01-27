import { ImgTulisan } from "@/components/image";
import { ZoomIn } from "@/components/motion/transition";
import { CardBlogPage } from "@/components/UI/card";
import { Articles } from "@/data/article";
import React from "react";

export default function Home() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {Articles.map((dt, index) => (
        <ZoomIn delay={index / 4} key={index}>
          <CardBlogPage
            href={`/tulisan/${dt.title}`}
            thumbnail={<ImgTulisan />}
            title={dt.title}
            category={dt.category}
            author={dt.author}
            content={dt.content_p1}
          />
        </ZoomIn>
      ))}
    </div>
  );
}
