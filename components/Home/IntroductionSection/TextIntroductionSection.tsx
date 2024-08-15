"use client";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import React from "react";
import { motion } from "framer-motion";
export function TextIntroductionSection() {
  return (
    <motion.article className="w-full h-full container flex flex-col items-center pt-4 z-30 sm:justify-center sm:items-start lg:px-0">
      <div className="flex justify-center flex-wrap gap-2 text-3xl font-extrabold text-center lg:text-4xl xl:text-4xl">
        <h1>Olá, meu nome é</h1>
        <h2 className="whitespace-nowrap  ">Pedro Virgilio</h2>
      </div>
      <div className="mt-2 flex justify-center flex-wrap gap-1 text-xl font-medium text-center lg:text-2xl xl:text-2xl">
        <h2>Desenvolvedor</h2>
        <h2 className="whitespace-nowrap">Front-End</h2>
      </div>

      <p className="text-[#e3e3e3] pt-5 text-center max-w-md sm:text-start lg:text-lg xl:text-lg">
        Apaixonado por tecnologia e com experiência na construção de aplicações
        web modernas.
      </p>
      <Button
        showAnchorIcon
        as={Link}
        className="p-4 mt-5 bg-white text-black font-semibold text-small lg:text-base"
        href="/about"
        variant="solid"
      >
        Entre em contato
      </Button>
    </motion.article>
  );
}
