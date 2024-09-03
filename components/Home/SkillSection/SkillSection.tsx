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
    <section className="w-full bg-[#111111] py-20  ">
      <div className="container  w-full flex flex-col items-center mx-auto lg:!px-0 lg:items-start  lg:gap-0">
        <PrefixSection text="../skills" />
        <h2 className="text-3xl font-extrabold text-white xl:text-4xl">
          Habilidades
        </h2>
        <Divider className=" my-4" />

        <ListIcons />
      </div>
    </section>
  );
}
