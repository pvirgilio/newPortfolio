"use client";
import { Button } from "@nextui-org/button";
import { title } from "../primitives"; // Verifique se 'title' está sendo usado, caso contrário, remova
import { SvgIntroduction } from "./svgIntroduction"; // Verifique se 'SvgIntroduction' está sendo usado, caso contrário, remova
import { InstagramIcon, Linkedin, LinkedinIcon } from "lucide-react"; // Verifique se 'InstagramIcon', 'Linkedin', 'LinkedinIcon' estão sendo usados, caso contrário, remova
import { GithubIcon } from "../icons"; // Verifique se 'GithubIcon' está sendo usado, caso contrário, remova
import Icons from "./icons";
import { Image, Link } from "@nextui-org/react";

export function IntroductionSection() {
  return (
    <section className="relative bg-gradient-to-r min-h-[93vh] max-md:h-screen from-[#AD2B49] to-transparent flex items-center max-lg:flex-col">
      <article className="w-full h-full  container max-lg:pt-5">
        <div className="sm:flex max-sm:flex-col mn:gap-2 mn:flex-wrap">
          <h1 className="text-5xl font-bold max-xl:text-4xl">
            Olá, meu nome é
          </h1>
          <h2 className="text-5xl font-bold  max-xl:text-4xl">
            Pedro Virgilio
          </h2>
        </div>
        <div className="mn:flex mn:gap-2">
          <h2 className="text-4xl font-semibold text-white max-sm:text-2xl max-xl:text-3xl  ">
            Desenvolvedor
          </h2>
          <h2 className="text-4xl font-semibold text-white max-sm:text-2xl max-xl:text-3xl ">
            Front-End
          </h2>
        </div>
        <p className="mt-5 font-light text-lg w-1/3 max-sm:w-full max-md:w-[70%] max-sm:text-medium max-">
          Apaixonado por tecnologia e com experiência na construção de
          aplicações web modernas.
        </p>
        <Button
          className="w-44 p-4 mt-5 bg-white text-black"
          href="/about"
          as={Link}
          showAnchorIcon
          variant="solid"
        >
          Entre em contato
        </Button>
        <Icons />
      </article>
      <Image
        alt="Pedro Virgilio"
        className="lg:absolute lg:bottom-0 lg:right-0 w-full lg:w-auto max-w-[350px] xl:max-w-[400px] 2xl:max-w-[450px] 3xl:max-w-[550px]"
        disableSkeleton={true}
        src="/me.png"
        width={600}
      />
    </section>
  );
}
