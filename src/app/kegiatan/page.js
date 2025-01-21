import React from "react";
import { news } from "@/data/news";
import { CardNewsPage } from "@/components/UI/card";
import { ImgNews } from "@/components/image";

export default function Home() {
  const findData = news.filter((n) => n.category === "kegiatan");
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {findData.map((dt) => (
        <CardNewsPage
          href={`/berita/${dt.title}`}
          thumbnail={<ImgNews />}
          title={dt.title}
          category={dt.category}
          date={dt.date}
          key={dt.id}
          content={dt.content_p1}
        />
      ))}
    </div>
  );
}
