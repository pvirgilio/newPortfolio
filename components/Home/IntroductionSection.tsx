"use client";
import { Button } from "@nextui-org/button";
import { SvgIntroduction } from "./svgIntroduction";
import { GithubIcon } from "../icons";
import Icons from "./icons";
import { Link } from "@nextui-org/react";
import Image from "next/image";

export function IntroductionSection() {
  return (
    <section className="relative w-full bg-gradient-to-r min-h-screen from-[#AD2B49] to-transparent flex flex-col items-center">
      <article className=" container flex flex-col items-center pt-4 z-10">
        <div className="flex justify-center flex-wrap gap-1 text-4xl font-bold text-center">
          <h1>Olá, meu nome é</h1>
          <h2 className="whitespace-nowrap">Pedro Virgilio</h2>
        </div>
        <div className="flex justify-center flex-wrap gap-1 text-2xl font-medium text-center">
          <h2>Desenvolvedor</h2>
          <h2 className="whitespace-nowrap">Front-End</h2>
        </div>

        <p className="text-[#e3e3e3] pt-5 text-center max-w-md">
          Apaixonado por tecnologia e com experiência na construção de
          aplicações web modernas.
        </p>
        <Button
          className="w-44 p-4 mt-5 bg-white text-black font-semibold"
          href="/about"
          as={Link}
          showAnchorIcon
          variant="solid"
        >
          Entre em contato
        </Button>
        <Icons />
      </article>

      <div className="absolute bottom-0 w-full flex justify-center mt-5">
        <Image
          alt="Pedro Virgilio"
          className="rounded-lg"
          objectFit="cover"
          objectPosition="center"
          src="/me.png"
          width={400}
          height={400}
        />
      </div>
    </section>
  );
}
