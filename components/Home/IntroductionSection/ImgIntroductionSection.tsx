"use client";
import { Image } from "@nextui-org/react";
import React from "react";

export function ImgIntroductionSection() {
  return (
    <>
      <div className="absolute bottom-0 z-20 right-0 h-[450px] sm:h-[550px] md:h-[650px] lg:h-[650px] 3xl:h-[800px]">
        <Image
          alt="Pedro Virgilio"
          className="w-full h-full rounded-lg object-cover"
          disableSkeleton
          src="/me.png"
          width={450}
          loading="lazy"
        />
      </div>
      <div className="absolute -bottom-64 sm:top-0 sm:-right-0 z-0">
        <Image
          alt="Pedro Virgilio"
          className="rounded-lg object-cover sm:w-[1200px] sm:h-[1200px]"
          disableSkeleton
          src="/Ellipse 1.png"
          width={850}
          height={850}
          loading="lazy"
        />
      </div>
      <div className="absolute -bottom-44 -right-44 2xl:top-0 2xl:-right-96 z-10">
        <Image
          alt="Pedro Virgilio"
          className="rounded-lg object-cover 2xl:w-[1200px] 2xl:h-[1200px]"
          disableSkeleton
          src="/Ellipse 2.png"
          width={850}
          height={850}
          loading="lazy"
        />
      </div>
    </>
  );
}
