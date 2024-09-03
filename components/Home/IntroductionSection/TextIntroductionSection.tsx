"use client";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import React from "react";
import { motion } from "framer-motion";

// Defina os variantes de animação

export function TextIntroductionSection() {
  return (
    <article className="w-full h-full container pt-10 flex flex-col items-center  z-30 sm:justify-center sm:items-start lg:px-0">
      <div className="flex justify-center flex-wrap gap-2 text-4xl font-bold text-center lg:text-5xl xl:text-6xl">
        <h1>Olá, meu nome é</h1>
        <h2 className="whitespace-nowrap">Pedro Virgilio</h2>
      </div>
      <div className="mt-2 flex justify-center flex-wrap gap-1 text-2xl font-medium text-center lg:text-3xl ">
        <h2>Desenvolvedor</h2>
        <h2 className="whitespace-nowrap">Front-End</h2>
      </div>

      <p className="text-[#e3e3e3] pt-5 text-center font-thin max-w-md sm:text-start text-[22px] lg:text-2xl ">
        Apaixonado por tecnologia e com experiência na construção de aplicações
        web modernas.
      </p>

      <div>
        <Button
          showAnchorIcon
          as={Link}
          className="p-4 mt-5 bg-white text-black font-semibold text-large  lg:text-xl"
          href="/about"
          variant="solid"
        >
          Entre em contato
        </Button>
      </div>
    </article>
  );
}
