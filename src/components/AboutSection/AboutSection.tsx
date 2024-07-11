import React from "react";
import { NameBigger } from "../NameBigger";
import Image from "next/image";
import ReactIcon from "../IntroductionSection/Icons/ReactIcon";
import NextIcon from "../IntroductionSection/Icons/NextIcon";
import FigmaIcon from "../IntroductionSection/Icons/FigmaIcon";
import TailwindIcon from "../IntroductionSection/Icons/TailwindIcon";
import HtmlIcon from "../IntroductionSection/Icons/HtmlIcon";
import CssIcon from "../IntroductionSection/Icons/CssIcon";
import { BookUser, CornerLeftUp, Notebook } from "lucide-react";
import { NodeIcon } from "../IntroductionSection/Icons/NodeIcon";
import { JsIcon } from "../IntroductionSection/Icons/JsIcon";

export default function AboutSection() {
  return (
    <section
      id="aboutSection"
      className=" bg-[#E1EBED] h-screen pt-10 max-md:h-full"
    >
      <article className="relative container w-full h-full  flex justify-between z-50">
        <Image
          src={"/aboutMe.svg"}
          width={450}
          height={450}
          className="absolute hidden bottom-0 2xl:w-[530px] lg:block right-1/2 translate-x-1/2 z-0 "
          alt="Sobre mim Pedro Virgilio"
        />
        {/* <Image
          src="/aboutMe.svg"
          alt="Garoto sentando programando"
          width={500}
          height={500}
          objectFit="cover"
          className=""
        /> */}

        <article className="w-full flex flex-col gap-5 z-50 max-lg:gap-20 max-lg:items-center">
          <div className="w-[40%] flex flex-col gap-5 max-md:w-full max-lg:w-[60%] max-lg:items-center max-lg:justify-center">
            <BookUser className="w-8 h-8 text-[#331C52]" />
            <NameBigger text="Sobre mim" />
            <p className="text-[#331C52] font-normal text-lg max-lg:text-center">
              Olá! Sou um entusiasta da tecnologia e inovação, possuo 22 anos e
              sou recém formado em Ciência da Computação. Atualmente estou
              focado em conseguir uma vaga de programador Junior, e estou sempre
              em busca de novos desafios e aprendizados.
            </p>
          </div>
          <article className="w-full flex flex-col items-end gap-3 max-lg:items-center ">
            <Notebook className="w-8 h-8 text-[#331C52]" />
            <NameBigger text="Minhas skills" />
            <div className="flex flex-col gap-2 items-end  max-lg:items-center ">
              <p className="text-[#331C52] font-normal text-lg">
                Tecnologias que possuo conhecimento:
              </p>
              <div className="flex gap-2 items-center  max-lg:items-center ">
                <div className="bg-[#331C52] rounded-lg">
                  <HtmlIcon className="w-14 h-14 rounded-lg p-2 text-white" />
                </div>
                <div className="bg-[#331C52] rounded-lg">
                  <CssIcon className="w-14 h-14 rounded-lg p-2 text-white" />
                </div>
                <div className="bg-[#331C52] rounded-lg">
                  <JsIcon className="w-14 h-14 rounded-lg p-2 text-white " />
                </div>
                <div className="bg-[#331C52] rounded-lg">
                  <NodeIcon className="w-14 h-14 rounded-lg p-2 text-white " />
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <div className="bg-[#331C52] rounded-lg">
                  <ReactIcon className="w-14 h-14 rounded-lg p-2 text-white " />
                </div>
                <div className="bg-[#331C52] rounded-lg">
                  <NextIcon className="w-14 h-14 rounded-lg p-2 text-white " />
                </div>
                <div className="bg-[#331C52] rounded-lg">
                  <TailwindIcon
                    className=" w-14 h-14 rounded-lg p-2 text-white"
                    color="#38bdf8"
                  />
                </div>
                <div className="bg-[#331C52] rounded-lg">
                  <FigmaIcon className="  w-14 h-14 rounded-lg p-2 text-white " />
                </div>
              </div>
            </div>
          </article>
        </article>
      </article>
    </section>
  );
}
