import React from "react";
import dataNews from "../data/news";
import article from "../data/article";
import announce from "../data/announce";
import { Accordian } from "./UI/accordian";
import { CardPrimary, CardSecondary } from "./UI/card";
import faqs from "../data/faqs";

import { ImageNews2, ImageNews3, ImagePn } from "./image";

export const ListNews = () => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {dataNews.map((dt) => (
        <CardSecondary
          link="/berita"
          thumbnail={<ImageNews3 />}
          title={dt.title}
          category={dt.category}
          date={dt.date}
          key={dt.id}
        />
      ))}
    </div>
  );
};

export const ListArticle = () => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {article.map((ar) => (
        <CardSecondary
          link="/berita"
          thumbnail={<ImageNews2 />}
          title={ar.title}
          category={ar.category}
          date={ar.date}
          key={ar.id}
        />
      ))}
    </div>
  );
};

export const ListAnnounce = () => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {announce.map((an) => (
        <CardPrimary
          link="/berita"
          thumbnail={<ImagePn />}
          date={an.date}
          title={an.title}
          key={an.id}
        />
      ))}
    </div>
  );
};

export const FaqList = () => {
  return (
    <div>
      {faqs.map((faq, index) => (
        <Accordian key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};
