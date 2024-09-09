"use client";
import { Divider, Image } from "@nextui-org/react";
import React, { useEffect, useRef } from "react";
import ListIcons from "./ListIcons";
import Icons from "./icons";
import PrefixSection from "./PrefixSection";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);
export default function AboutMeSection() {
  // const sectionRef = useRef<HTMLDivElement | null>(null);

  // useEffect(() => {
  //   if (sectionRef.current) {
  //     gsap.fromTo(
  //       sectionRef.current,
  //       { opacity: 0, y: 50 }, // Estado inicial da animação
  //       {
  //         opacity: 1,
  //         y: 0,
  //         duration: 1,
  //         scrollTrigger: {
  //           trigger: sectionRef.current, // Elemento que dispara a animação
  //           start: "top 80%", // Define o ponto de início da animação
  //           end: "bottom 50%", // Define o ponto de término da animação
  //           scrub: true, // Suaviza a animação conforme o scroll
  //           toggleActions: "play none none reverse",
  //           onEnterBack: () => {
  //             // Animação quando o usuário rola para cima e o elemento entra de volta na tela
  //             gsap.fromTo(
  //               sectionRef.current,
  //               { opacity: 0, y: 50 },
  //               { opacity: 1, y: 0, duration: 1 }
  //             );
  //           }, // Repetir animação ao rolar para cima ou para baixo
  //         },
  //       }
  //     );
  //   }
  //   return () => {
  //     ScrollTrigger.killAll();
  //   };
  // }, []);
  return (
    <section
      // ref={sectionRef}
      id="about-me"
      className="w-full bg-[#070707] min-h-mobile-nav lg:min-h-full py-20 lg:py-20 "
    >
      <article className="relative container w-full h-full flex flex-col   lg:px-0 ">
        <article className=" flex flex-col items-center lg:flex-row-reverse gap-6 lg:gap-10 lg:items-start  ">
          <PrefixSection text="../about" classe="lg:hidden -mb-5" />
          <h2 className="block lg:hidden text-2xl 2xl:text-4xl  border-b-2 border-[#AD2B49] font-bold mx-auto lg:mx-0  w-fit  ">
            Sobre mim
          </h2>

          <article className="xl:h-fit xl:justify-start  flex flex-col lg:flex-row items-center text-center gap-10 lg:items-start lg:text-start  ">
            <article className="max-w-[300px] bg-gradient-to-r from-transparent to-[#AD2B49] lg:from-[#AD2B49] via-[#3e0f1a] lg:to-transparent flex-shrink-0 rounded-br-[30%] rounded-tl-[30%] overflow-hidden shadow-lg shadow-[#3e0f1a]">
              <Image
                isBlurred
                alt="Pedro Virgilio"
                className=" rounded-none object-cover   "
                src="/meImg.png"
              />
            </article>
            <div className="flex flex-col items-center lg:items-start	  ">
              <PrefixSection text="../about" classe="hidden lg:block " />
              <h2 className="hidden lg:block text-white text-2xl sm:text-3xl 2xl:text-4xl font-bold mx-auto lg:mx-0  w-fit  ">
                Sobre mim
              </h2>
              <Divider className="my-2" />
              <p className="text-base sm:text-lg 2xl:text-xl text-gray-300 leading-relaxed ">
                Olá, meu nome é Pedro, tenho 22 anos. Sou um recém formado em
                Ciência da Computação e sou especializado em desenvolvimento
                web.
              </p>

              <br />
              <p className="text-base sm:text-lg 2xl:text-xl text-gray-300 leading-relaxed ">
                Atualmente sou desenvolvedor Front-End, com experiência em
                React, Next.js, TailwindCSS, Styled-Components, e outras
                tecnologias, mas pretendo me tornar um desenvolvedor Full-Stack.
              </p>
              <br />
              <p className="text-base sm:text-lg 2xl:text-xl text-gray-300 leading-relaxed  ">
                Tenho experiência em várias tecnologias, incluindo{" "}
                <span className="italic text-gray-400">
                  HTML, CSS, JavaScript, Node, React e Next.js
                </span>
                . Trabalho com essas tecnologias para criar interfaces
                intuitivas e responsivas. Além disso, também possuo conhecimento
                em desenvolvimento full-stack.
              </p>
              <Icons />
            </div>
          </article>
        </article>
      </article>
    </section>
  );
}
