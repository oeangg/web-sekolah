import { TableHead, TableListBody } from "@/components/UI/table";
import React from "react";
import { teachers } from "@/data/teachers";
import { TransitionYBottomToTop } from "@/components/motion/transition";

export default function Home() {
  return (
    <TransitionYBottomToTop>
      <div className="space-y-6">
        <h1 className="text-xl font-bold md:text-2xl">
          Daftar Guru dan Tenaga Kependidikan
        </h1>
        <table>
          <TableHead />
          <tbody>
            {teachers.map((teach, index) => (
              <TableListBody
                key={index}
                index={index}
                name={teach.name}
                birthyear={teach.birthyear}
                status={teach.status}
                position={teach.position}
              />
            ))}
          </tbody>
        </table>
      </div>
    </TransitionYBottomToTop>
  );
}
