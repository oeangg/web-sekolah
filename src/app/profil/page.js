import React from "react";
import { HeadlineImage } from "@/components/get.image";
import Link from "next/link";
import { IoIosArrowDropright } from "react-icons/io";

export default function Home() {
  return (
    <div className="grid w-full grid-cols-1 gap-10">
      <p className="text-base font-normal text-foreground">
        Sekolah Indonesia adalah rumah bagi siswa yang ingin tumbuh menjadi
        pribadi yang beriman, berakhlak mulia, dan berkebangsaan. Kami percaya
        bahwa pendidikan karakter adalah fondasi utama kesuksesan. Dengan
        lingkungan belajar yang kondusif dan program pengembangan karakter yang
        komprehensif, kami membentuk siswa menjadi generasi penerus bangsa yang
        bertanggung jawab. Visi kami adalah menjadi sekolah yang menghasilkan
        lulusan yang berkarakter Pancasila. Misi kami adalah menanamkan
        nilai-nilai luhur dan membentuk siswa menjadi manusia yang utuh.
      </p>

      <div className="mx-auto flex">
        <Link
          href="/sejarah"
          className="flex w-fit items-center gap-2 rounded-lg border border-primaryColor bg-transparent px-4 py-2 text-base font-medium text-primaryColor duration-300 hover:bg-primaryColor hover:text-background md:text-lg"
        >
          Selengkapnya <IoIosArrowDropright size={20} />
        </Link>
      </div>
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
    </div>
  );
}
