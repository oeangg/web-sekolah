import { TransitionYBottomToTop } from "@/components/motion/transition";
import React from "react";

export default function Home() {
  return (
    <TransitionYBottomToTop>
      <div className="space-y-6 text-base font-normal text-foreground">
        <h1 className="text-2xl font-bold">Visi & Misi Sekolah</h1>
        <div className="space-y-4">
          <h2 className="text-xl font-bold">Visi </h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi
            rerum saepe nulla earum numquam culpa libero, exercitationem
            suscipit deleniti pariatur cum eum placeat provident quos autem sed
            vitae molestias! Officiis perferendis vitae nisi pariatur rerum
            corporis illo, dignissimos animi, earum quaerat maiores aliquam
            iure, dolorem nihil voluptates. Esse corrupti fuga ducimus dolorem!
            Cupiditate in culpa officia! Officiis illum consequatur veritatis
            distinctio aut eveniet, asperiores earum cupiditate obcaecati?
            Repellendus perferendis asperiores corrupti sint reiciendis. Hic
            suscipit facilis odio reprehenderit officia voluptatum!
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="text-xl font-bold">Misi </h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi
            rerum saepe nulla earum numquam culpa libero, exercitationem
            suscipit deleniti pariatur cum eum placeat provident quos autem sed
            vitae molestias! Officiis perferendis vitae nisi pariatur rerum
            corporis illo, dignissimos animi, earum quaerat maiores aliquam
            iure, dolorem nihil voluptates. Esse corrupti fuga ducimus dolorem!
            Cupiditate in culpa officia! Officiis illum consequatur veritatis
            distinctio aut eveniet, asperiores earum cupiditate obcaecati?
            Repellendus perferendis asperiores corrupti sint reiciendis. Hic
            suscipit facilis odio reprehenderit officia voluptatum!
          </p>
        </div>
      </div>
    </TransitionYBottomToTop>
  );
}
