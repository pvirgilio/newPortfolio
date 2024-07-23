"use client";
import { Image } from "@nextui-org/react";
import React from "react";
import ListIcons from "./ListIcons";

export default function AboutMeSection() {
  return (
    <section
      id="about-me"
      className="container min-h-mobile-nav py-5 px-4  lg:flex lg:items-center lg:py-0"
    >
      <article className="w-full h-full flex flex-col gap-2">
        <article className=" flex flex-col items-center lg:flex-row gap-6 lg:items-start ">
          <article className="bg-gradient-to-r from-transparent to-[#AD2B49] lg:from-[#AD2B49] via-[#3e0f1a] lg:to-transparent flex-shrink-0 rounded-bl-[30%] rounded-tr-[30%] overflow-hidden shadow-lg shadow-[#3e0f1a]">
            <Image
              isBlurred
              alt="Pedro Virgilio"
              className="w-full rounded-md object-cover nm:w-[400px] sm:w-[450px] 2xl:w-[500px] 3xl:w-[600px]"
              src="/meImg.png"
            />
          </article>
          <article className=" text-gray-300 text-md md:text-lg  leading-relaxed flex flex-col items-center text-center gap-2 lg:items-start lg:text-start">
            <h2 className="text-lg xl:text-xl uppercase border-b-2 border-[#AD2B49] font-bold mx-auto lg:mx-0 mb-3 w-fit  ">
              Sobre mim
            </h2>
            <p>
              Olá, meu nome é Pedro, tenho 22 anos. Sou um recém formado em
              Ciência da Computação e sou especializado em desenvolvimento web.
            </p>

            <p>
              {" "}
              Tenho experiência em várias tecnologias, incluindo{" "}
              <span className="italic text-gray-400">
                HTML, CSS, JavaScript, Node, React e Next.js
              </span>
              . Trabalho com essas tecnologias para criar interfaces intuitivas
              e responsivas. Além disso, também possuo conhecimento em
              desenvolvimento full-stack.
            </p>
            <div className="w-full flex flex-col gap-2 mt-5 lg:items-end lg:flex-shrink-0 ">
              <h2 className="text-lg xl:text-xl uppercase border-b-2 border-[#AD2B49] font-bold mx-auto lg:mx-0 w-fit">
                Minhas skills
              </h2>
              <p>Aqui estão algumas das tecnologias que tenho experiência:</p>
              <ListIcons />
            </div>
          </article>
        </article>
      </article>
    </section>
  );
}
