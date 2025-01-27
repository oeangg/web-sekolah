import { TransitionYBottomToTop } from "@/components/motion/transition";
import { LinkBtn } from "@/components/UI/link.btn";
import React from "react";

export default function Home() {
  return (
    <div className="grid w-full grid-cols-1 gap-10">
      <TransitionYBottomToTop delay={0}>
        <p className="text-base font-normal text-foreground">
          Sekolah Indonesia adalah rumah bagi siswa yang ingin tumbuh menjadi
          pribadi yang beriman, berakhlak mulia, dan berkebangsaan. Kami percaya
          bahwa pendidikan karakter adalah fondasi utama kesuksesan. Dengan
          lingkungan belajar yang kondusif dan program pengembangan karakter
          yang komprehensif, kami membentuk siswa menjadi generasi penerus
          bangsa yang bertanggung jawab. Visi kami adalah menjadi sekolah yang
          menghasilkan lulusan yang berkarakter Pancasila. Misi kami adalah
          menanamkan nilai-nilai luhur dan membentuk siswa menjadi manusia yang
          utuh.
        </p>
      </TransitionYBottomToTop>

      <div className="mx-auto flex">
        <TransitionYBottomToTop delay={0.15}>
          <LinkBtn href="/sejarah" text="Selengkapnya" theme="secondary" />
        </TransitionYBottomToTop>
      </div>
      <TransitionYBottomToTop delay={0.3}>
        <div className="mx-auto flex w-full flex-col items-center justify-center gap-4">
          <h2 className="text-2xl font-bold text-foreground">Profil</h2>
          <iframe
            height="600"
            src="https://www.youtube.com/embed/aa9dokLXCDs?si=amjBVnVm52ats--R"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="w-full"
          ></iframe>
        </div>
      </TransitionYBottomToTop>
    </div>
  );
}
