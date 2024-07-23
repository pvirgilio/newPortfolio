"use client";
import { Image } from "@nextui-org/react";
import React from "react";
import ListIcons from "./ListIcons";

export default function AboutMeSection() {
  return (
    <section className="container min-h-mobile-nav py-5 px-4 md:px-10">
      <h2 className="text-md uppercase md:text-2xl font-bold text-center mb-3">
        Sobre mim
      </h2>
      <article className="w-full h-full flex flex-col gap-2">
        <article className="w-full flex flex-col items-center md:flex-row gap-6 md:items-start">
          <div className="bg-gradient-to-r from-transparent via-[#3e0f1a]  to-[#AD2B49] flex-shrink-0 rounded-bl-[30%] rounded-tr-[30%] overflow-hidden">
            <Image
              isBlurred
              alt="Pedro Virgilio"
              className="w-full rounded-md object-cover nm:w-[400px]"
              src="/meImg.png"
            />
          </div>
          <div className=" text-gray-300 text-md md:text-lg leading-relaxed flex flex-col items-center text-center gap-2">
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
            <div className="mt-10 flex flex-col items-center justify-center gap-3">
              <h2 className="text-white uppercase font-bold">Minhas Skills:</h2>
              <p>
                Principais habilidades que utilizo/utilizei em meus projetos:
              </p>
              <ListIcons />
            </div>
          </div>
        </article>
      </article>
    </section>
  );
}
