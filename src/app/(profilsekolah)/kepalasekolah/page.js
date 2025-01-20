import { ImageKepalaSekolah } from "@/components/image";
import React from "react";

export default function Home() {
  return (
    <div className="space-y-8 text-base font-normal">
      <h1 className="text-2xl font-bold">Profil Kepala Sekolah</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla sapiente
        cum itaque quod fuga officiis eaque expedita exercitationem veritatis
        perferendis.
      </p>
      <div className="flex w-full gap-6">
        <div className="relative w-fit overflow-hidden rounded-3xl md:w-1/3">
          <ImageKepalaSekolah />
        </div>

        <div className="w-full basis-2/3 space-y-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            perferendis ipsa sequi natus laboriosam perspiciatis sed iste, totam
            nam! Cum?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis, porro.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            repellat id ducimus, culpa laboriosam natus maiores nam quaerat unde
            expedita! Placeat mollitia nesciunt necessitatibus dolorum?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat nam
            nemo neque, id animi et ea fuga possimus quibusdam praesentium,
            velit eveniet voluptatem excepturi natus. Vel voluptatem voluptas
            deserunt quos!
          </p>
        </div>
      </div>
    </div>
  );
}
