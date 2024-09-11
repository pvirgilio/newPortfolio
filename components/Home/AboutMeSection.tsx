"use client";
import { Divider, Image } from "@nextui-org/react";
import React, { useEffect, useRef } from "react";
import Icons from "./icons";
import PrefixSection from "./PrefixSection";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

export default function AboutMeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const summaryRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isMobile = window.innerWidth < 768; // Defina o breakpoint para dispositivos móveis

    if (
      sectionRef.current &&
      imageRef.current &&
      summaryRef.current &&
      contentRef.current
    ) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%",
          end: "bottom 10%",
          toggleActions: isMobile
            ? "play none none none"
            : "play reverse play reverse",
        },
      });

      tl.fromTo(
        imageRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.8, ease: "power3.out" }
      )
        .fromTo(
          summaryRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
          "-=0.4"
        )
        .fromTo(
          contentRef.current.children,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.2, ease: "power2.out" },
          "-=0.2"
        );

      // Animação para os itens de habilidades
      gsap.fromTo(
        ".skill-item",
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.4,
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: ".skills-container",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: isMobile
              ? "play none none none"
              : "play reverse play reverse",
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about-me"
      className="w-full relative overflow-hidden bg-[#070707] min-h-screen py-20 lg:py-24 flex flex-col gap-10 lg:gap-14"
      // data-scroll-section
    >
      <div className="container lg:px-0 w-full flex justify-start">
        <div className="flex flex-col items-start justify-center">
          <PrefixSection text="../about" classe="" />
          <h2 className=" text-white text-3xl sm:text-4xl 2xl:text-5xl font-bold mx-auto lg:mx-0 w-fit ">
            Sobre mim
          </h2>
        </div>
      </div>
      <article className="relative container w-full h-full flex flex-col lg:px-0 max-w-7xl mx-auto">
        <article className="flex flex-col items-center lg:flex-row gap-12 lg:gap-20 lg:items-start">
          <article className="lg:w-1/3 flex flex-col items-center text-center lg:text-left">
            <div
              ref={imageRef}
              className="relative w-full max-w-[300px] lg:max-w-full aspect-square mb-8"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#AD2B49] to-transparent opacity-50 rounded-full"></div>
              <Image
                isBlurred
                alt="Pedro Virgilio"
                className="rounded-full object-cover border-4 border-[#AD2B49]"
                src="/meImg.png"
              />
            </div>
            <div
              ref={summaryRef}
              className="w-full bg-[#1A1A1A] p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-semibold text-[#AD2B49] mb-4">
                Resumo Rápido
              </h3>
              <ul className="text-gray-300 space-y-2">
                <li>
                  <span className="font-semibold">Nome:</span> Pedro Virgilio
                </li>
                <li>
                  <span className="font-semibold">Idade:</span> 22 anos
                </li>
                <li>
                  <span className="font-semibold">Formação:</span> Ciência da
                  Computação
                </li>
                <li>
                  <span className="font-semibold">Especialidade:</span>{" "}
                  Desenvolvimento Web
                </li>
              </ul>
            </div>
          </article>

          <div
            ref={contentRef}
            className="lg:w-2/3 flex flex-col items-center lg:items-start space-y-4"
          >
            {/* <Divider className="" /> */}
            <p className="text-base sm:text-lg 2xl:text-xl text-gray-300 leading-relaxed">
              Olá! Sou um recém-formado em Ciência da Computação, apaixonado por
              desenvolvimento web. Como desenvolvedor Front-End, tenho
              experiência em React, Next.js, TailwindCSS e Styled-Components,
              mas meu objetivo é me tornar um desenvolvedor Full-Stack completo.
            </p>

            <p className="text-base sm:text-lg 2xl:text-xl text-gray-300 leading-relaxed">
              Minha experiência abrange várias tecnologias, incluindo{" "}
              <span className="italic text-[#AD2B49] font-semibold">
                HTML, CSS, JavaScript, Node, React e Next.js
              </span>
              . Utilizo essas ferramentas para criar interfaces intuitivas e
              responsivas, sempre buscando a melhor experiência do usuário.
            </p>

            <div className="w-full skills-container">
              <h3 className="text-2xl font-semibold text-[#AD2B49] mb-4">
                Habilidades Principais
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  "JavaScript",
                  "React",
                  "Next.js",
                  "TailwindCSS",
                  "Node.js",
                  "Responsive Design",

                ].map((skill) => (
                  <span
                    key={skill}
                    className="skill-item bg-[#AD2B49] text-white px-4 py-2 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="w-full">
              <h3 className="text-2xl font-semibold text-[#AD2B49] mb-4">
                Interesses e Objetivos
              </h3>
              <ul className="text-base sm:text-lg 2xl:text-xl  list-disc list-inside text-gray-300 space-y-2">
                <li>Aprofundar conhecimentos em desenvolvimento Full-Stack</li>
                <li>Aprimorar habilidades em UX/UI Design</li>
              </ul>
            </div>

            {/* <Icons /> */}
          </div>
        </article>
      </article>
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-[#AD2B49]/10 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-full h-64 bg-gradient-to-t from-[#AD2B49]/10 to-transparent"></div>
    </section>
  );
}
