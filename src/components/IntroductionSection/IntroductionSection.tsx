import Image from "next/image";
import React from "react";
import ReactIcon from "./Icons/ReactIcon";
import NextIcon from "./Icons/NextIcon";
import FigmaIcon from "./Icons/FigmaIcon";
import TailwindIcon from "./Icons/TailwindIcon";
import HtmlIcon from "./Icons/HtmlIcon";
import CssIcon from "./Icons/CssIcon";
import LinkedinIcon from "./Icons/LinkedinIcon";
import GithubIcon from "./Icons/GithubIcon";
import InstagramIcon from "./Icons/InstagramIcon";
import Link from "next/link";
import { Ubuntu } from "next/font/google";

export default function IntroductionSection() {
  return (
    <section className="bg-gifIntro bg-no-repeat bg-cover w-full  h-screendv max-md:h-screen max-md:mb-10 ">
      <article className="backdrop-blur-[2px] w-full h-full flex flex-col justify-between ">
        <article className=" relative w-full h-full container flex gap-2 items-center justify-between max-md:flex-col max-lg:px-[1.3rem] max-md:justify-start max-md:gap-5 ">
          <article className="flex flex-col gap-5">
            <div className={` flex flex-col`}>
              <h1 className="text-4xl font-normal text-white max-lg:text-3xl max-sm:text-2xl">
                Olá,
                <br />
                eu sou
              </h1>

              <h2 className="text-6xl max-sm:text-3xl max-md:text-4xl max-xl:text-5xl font-bold animate-pulse text-[#8C52FF] ">
                Pedro Virgilio
              </h2>

              {/* Botão incerto ainda */}
              {/* <button className="btn bg-white font-medium px-4 py-2 rounded-full">
                Me contate
              </button> */}
            </div>
            <article className="flex flex-col gap-2">
              <h3 className=" text-[16px] font-normal text-[#dadada] max-sm:text-sm">
                Desenvolvedor front-end.
              </h3>
              <div className="w-1/2 h-[3px] bg-[#8C52FF]"></div>
              <div className="flex gap-2 mt-1">
                <Link href="">
                  <LinkedinIcon
                    className="w-7 h-7 max-sm:w-5 max-sm:h-5"
                    color="white"
                  />
                </Link>
                <Link href="">
                  <GithubIcon
                    className="w-7 h-7 max-sm:w-5 max-sm:h-5"
                    color="white"
                  />
                </Link>
                <Link href="">
                  <InstagramIcon
                    className="w-7 h-7 max-sm:w-5 max-sm:h-5"
                    color="white"
                  />
                </Link>
              </div>
            </article>
          </article>
          <article className="flex justify-center bg-transparent border border-[#8C52FF] rounded-full">
            <Image
              className="rounded-full max-sm:w-[160px] max-lg:w-[250px]"
              src="/Pedro Virgilio.png"
              alt="Foto de Pedro Virgilio"
              width={400}
              height={400}
            />
          </article>
        </article>
        <div className="flex w-full items-center gap-10 justify-center h-20 bg-transparent max-lg:hidden">
          {/* <ReactIcon className="absolute bottom-20 w-32 h-32 text-white blur-[3px]" />
          <NextIcon className="absolute bottom-1/2 translate-x-1/2 translate-y-1/2 left-96 w-32 h-32 text-white blur-[3px]" />
          <FigmaIcon className=" right-96 bottom-1/2 translate-x-1/2 translate-y-1/2 absolute w-32 h-32 text-white blur-[3px]" />
          <TailwindIcon
            className=" absolute w-32 h-32 text-white blur-[3px]"
            color="#38bdf8"
          />
          <HtmlIcon className="rotate-12 right-10 absolute w-32 h-32 text-white blur-[3px]" />
          <CssIcon className="-rotate-12 bottom-20 right-10 absolute w-32 h-32 text-white blur-[3px] " /> */}
          <ReactIcon className="w-14 h-14 border-2 border-[#5536A5] rounded-lg p-2 text-white " />
          <NextIcon className="w-14 h-14 border-2 border-[#5536A5] rounded-lg p-2 text-white " />
          <FigmaIcon className="  w-14 h-14 border-2 border-[#5536A5] rounded-lg p-2 text-white " />

          <TailwindIcon
            className=" w-14 h-14 border-2 border-[#5536A5] rounded-lg p-2 text-white"
            color="#38bdf8"
          />
          <HtmlIcon className="w-14 h-14 border-2 border-[#5536A5] rounded-lg p-2 text-white" />
          <CssIcon className="w-14 h-14 border-2 border-[#5536A5] rounded-lg p-2 text-white" />
        </div>
      </article>
    </section>
  );
}
