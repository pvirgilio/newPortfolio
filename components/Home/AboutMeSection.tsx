"use client";
import { Image } from "@nextui-org/react";
import React from "react";
import ListIcons from "./ListIcons";
import Icons from "./icons";
import PrefixSection from "./PrefixSection";

export default function AboutMeSection() {
  return (
    <section
      id="about-me"
      className="relative container min-h-mobile-nav py-5 px-4 lg:min-h-full  lg:flex lg:mt-20 lg:py-0 lg:px-0"
    >
      <article className="w-full h-full flex flex-col gap-2 ">
        <article className=" flex flex-col items-center lg:flex-row-reverse gap-6 lg:gap-10 lg:items-start  ">
          <PrefixSection text="../about" classe="lg:hidden -mb-5" />
          <h2 className="block lg:hidden text-xl xl:text-2xl uppercase border-b-2 border-[#AD2B49] font-bold mx-auto lg:mx-0  w-fit  ">
            Sobre mim
          </h2>

          <article className="xl:h-[500px] xl:justify-start  flex flex-col items-center text-center gap-2 lg:items-start lg:text-start  ">
            <div className="flex flex-col  ">
              <PrefixSection text="../about" classe="hidden lg:block " />
              <h2 className="hidden lg:block text-white text-xl lg:text-[22px] xl:text-2xl uppercase border-b-2 border-[#AD2B49] font-bold mx-auto lg:mx-0 mb-3 w-fit  ">
                Sobre mim
              </h2>
              <p className="text-[17px] lg:text-large text-gray-300 xl:text-lg leading-[1.78]">
                Olá, meu nome é Pedro, tenho 22 anos. Sou um recém formado em
                Ciência da Computação e sou especializado em desenvolvimento
                web.
              </p>

              <br />
              <p className="text-[17px] lg:text-large text-gray-300 leading-relaxed  xl:text-lg">
                Atualmente sou desenvolvedor Front-End, com experiência em
                React, Next.js, TailwindCSS, Styled-Components, e outras
                tecnologias, mas pretendo me tornar um desenvolvedor Full-Stack.
              </p>
              <br />
              <p className="text-[17px] lg:text-large text-gray-300 leading-relaxed  xl:text-lg">
                Tenho experiência em várias tecnologias, incluindo{" "}
                <span className="italic text-gray-400">
                  HTML, CSS, JavaScript, Node, React e Next.js
                </span>
                . Trabalho com essas tecnologias para criar interfaces
                intuitivas e responsivas. Além disso, também possuo conhecimento
                em desenvolvimento full-stack.
              </p>
            </div>
            <Icons />
          </article>
          <article className="bg-gradient-to-r from-transparent to-[#AD2B49] lg:from-[#AD2B49] via-[#3e0f1a] lg:to-transparent flex-shrink-0 rounded-br-[30%] rounded-tl-[30%] overflow-hidden shadow-lg shadow-[#3e0f1a]">
            <Image
              isBlurred
              alt="Pedro Virgilio"
              className="w-full rounded-none object-cover nm:w-[400px] sm:w-[450px]  "
              src="/meImg.png"
            />
          </article>
        </article>
      </article>
    </section>
  );
}
