"use client";
import { Image } from "@nextui-org/react";
import { GitCommitIcon } from "lucide-react";
import React from "react";
import ReactIcon from "../Icons/ReactIcon";
import { JsIcon } from "../Icons/JsIcon";
import CssIcon from "../Icons/CssIcon";
import HtmlIcon from "../Icons/HtmlIcon";

export default function AboutMeSection() {
  return (
    <section className="container min-h-mobile-nav pt-5 px-4 md:px-10">
      <h2 className="text-lg md:text-2xl font-bold text-center text-[#AD2B49] mb-3">
        Sobre mim
      </h2>
      <article className="w-full h-full flex flex-col gap-2">
        <article className="w-full flex flex-col items-center md:flex-row gap-6 md:items-start">
          <div className="flex-shrink-0">
            <Image
              isBlurred
              alt="Pedro Virgilio"
              className="w-full rounded-md object-cover nm:w-[400px]"
              src="/me.jpg"
            />
          </div>
          <div className=" text-gray-300 text-md md:text-lg leading-relaxed flex flex-col items-center text-center">
            <p>
              Olá, meu nome é Pedro, tenho 22 anos. Sou um recém formado em
              Ciência da Computação e tenho experiência em desenvolvimento
              full-stack, com um forte foco em frontend e interfaces intuitivas.
            </p>
            <div className="mt-4">
              <h2 className="text-lg font-bold">Minhas Skills:</h2>
              {/* <ul className="mt-2 flex flex-wrap gap-4">
                <li className="flex items-center gap-2">
                  <HtmlIcon className="text-xl text-orange-600" />
                  <span>HTML</span>
                </li>
                <li className="flex items-center gap-2">
                  <CssIcon className="text-xl text-blue-600" />
                  <span>CSS</span>
                </li>
                <li className="flex items-center gap-2">
                  <JsIcon className="text-xl text-yellow-500" />
                  <span>JavaScript</span>
                </li>
                <li className="flex items-center gap-2">
                  <ReactIcon className="text-xl text-blue-500" />
                  <span>React</span>
                </li>

                <li className="flex items-center gap-2">
                  <GitCommitIcon className="text-xl text-red-500" />
                  <span>Git</span>
                </li>
              </ul> */}
            </div>
            <p className="mt-4">
              Meu objetivo é continuar crescendo como desenvolvedor e colaborar
              em projetos que fazem a diferença.
            </p>
          </div>
        </article>
      </article>
    </section>
  );
}
