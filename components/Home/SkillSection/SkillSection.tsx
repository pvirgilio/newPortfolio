"use client";

import React, { useEffect, useRef } from "react";
import CarrosselDinamico from "./Carousel";
import Image from "next/image";
import ListIcons from "../ListIcons";
import PrefixSection from "../PrefixSection";
import { Divider } from "@nextui-org/react";
import CarouselIcons from "./CarouselIcons";

export default function SkillSection() {
  return (
    <section className="bg-gradient-to-r  from-black via-gray-950 to-black mt-10 py-20  ">
      <div className="container w-full flex flex-col items-center mx-auto lg:!px-0 lg:flex-row lg:justify-between gap-20 lg:gap-0">
        {/* <span
          className={`absolute right-1/2 top-0 translate-x-1/2 uppercase text-7xl lg:text-9xl opacity-50 ${orbitron.className}`}
        >
          skills
        </span> */}
        <div className="w-full flex flex-col items-center justify-center lg:items-start ">
          <PrefixSection text="../skills" />
          <h2 className="text-3xl font-extrabold text-white xl:text-4xl">
            Habilidades
          </h2>
          <Divider className="container my-4" />
          <p className="mt-4 text-[17px] lg:text-lg text-gray-300">
            Aqui estão algumas das tecnologias que eu uso no meu dia a dia.
          </p>
          {/* <CarouselIcons /> */}
          <ListIcons />
        </div>
        {/* <Image
          src="/skillsicons.svg"
          width={400}
          height={500}
          alt="Skills ícone"
          className="md:w-[500px] xl:w-[600px] "
        /> */}
        {/* <CarrosselDinamico /> */}
      </div>
      <div>
        <h2>Soft Skills</h2>
      </div>
    </section>
  );
}
