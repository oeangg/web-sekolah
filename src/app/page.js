import { HeroSection } from "@/components/home/hero";

import { Announce } from "@/components/home/announce";
import { News } from "@/components/home/news";
import { Article } from "@/components/home/article";
import { SambutanKepalaSekolah } from "@/components/home/sambutan.kepsek";
import { Summary } from "@/components/home/summary";
import { AddressMap } from "@/components/home/address.map";

import { Faq } from "@/components/home/faq";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <section className="mb-20 grid w-full grid-cols-1 gap-20">
        <SambutanKepalaSekolah />
        <Announce />
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 lg:flex-row">
          <News />
          <Article />
        </div>
        <Summary />
        <Faq />
        <AddressMap />
      </section>
    </main>
  );
}
