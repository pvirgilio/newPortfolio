"use client";
import { Button } from "@nextui-org/button";
import { SvgIntroduction } from "./svgIntroduction";
import { GithubIcon } from "../icons";
import Icons from "./icons";
import { Image, Link } from "@nextui-org/react";

export function IntroductionSection() {
  return (
    <section className="relative w-full bg-gradient-to-r min-h-[93vh] from-[#AD2B49] to-transparent flex flex-col items-center">
      <article className=" container flex flex-col items-center pt-4 z-10">
        <div className="flex justify-center flex-wrap gap-1 text-3xl font-bold text-center">
          <h1 className="">Olá, meu nome é</h1>
          <h2 className="whitespace-nowrap ">Pedro Virgilio</h2>
        </div>
        <div className="mt-2 flex justify-center flex-wrap gap-1 text-xl font-medium text-center">
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

      <div className="absolute bottom-0 z-0 right-0 sm:right-1/2 sm:translate-x-1/2">
        <Image
          alt="Pedro Virgilio"
          className="w-auto h-auto rounded-lg object-cover"
          disableSkeleton={true}
          height={450}
          src="/me.png"
          width={450}
        />
      </div>
    </section>
  );
}
