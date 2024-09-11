"use client";
import { Link } from "@nextui-org/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";
import ReactTypingEffect from "react-typing-effect";
import { FaLinkedin, FaGithub, FaInstagram, FaFileAlt } from "react-icons/fa";

const TextIntroductionSection = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom center",
            toggleActions: "play none none none",
          },
        }
      );
    }

    return () => {
      ScrollTrigger.killAll();
    };
  }, []);

  return (
    <article
      ref={sectionRef}
      className="max-w-[90%] sm:max-w-[520px] lg:max-w-[700px] h-fit pt-4 sm:pt-6 lg:pt-10 flex flex-col items-center justify-center mx-auto z-30 px-4 sm:px-0 opacity-0"
      data-scroll
      data-scroll-speed="2"
    >
      <div className="flex justify-center flex-wrap text-white gap-1 sm:gap-2 text-4xl sm:text-5xl lg:text-6xl 2xl:text-8xl font-bold text-center">
        <h2 className="whitespace-nowrap text-gradient">Pedro Virgilio</h2>
      </div>
      <div className="flex justify-center text-white flex-wrap gap-1 text-lg sm:text-xl lg:text-2xl xl:text-3xl font-medium text-center mt-2">
        <h2>Desenvolvedor</h2>
        <ReactTypingEffect
          text={["Front-End", "React", "Next.js"]}
          eraseDelay={2000}
          typingDelay={200}
          speed={100}
          eraseSpeed={100}
        />
      </div>

      <p className="text-[#e3e3e3] w-full sm:w-[90%] lg:w-[80%] pt-3 sm:pt-4 lg:pt-5 text-center font-normal text-sm sm:text-base lg:text-lg xl:text-xl">
        Apaixonado por tecnologia e com experiência na construção de aplicações
        web modernas.
      </p>

      <Link
        href="/docs/CurrículoPedroVirgilio.pdf"
        className="group relative overflow-hidden mt-4 sm:mt-6 lg:mt-8 px-4 sm:px-6 py-2 sm:py-3 bg-[#AD2B49] text-white rounded-full transition-all duration-300 ease-out hover:bg-[#8a2239] hover:shadow-lg"
      >
        <span className="relative z-10 flex items-center justify-center text-sm sm:text-base lg:text-lg font-semibold">
          <FaFileAlt className="mr-2" />
          Baixar CV
        </span>
        <span className="absolute bottom-0 left-0 w-full h-1 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
        <span className="absolute top-0 left-0 w-full h-full bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></span>
      </Link>

      <div className="flex justify-center gap-4 sm:gap-5 mt-6 sm:mt-8">
        <Link
          href="https://linkedin.com/in/pedrovirgilio"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center transition-transform duration-300 ease-in-out hover:-translate-y-1"
        >
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#0077B5] rounded-full flex items-center justify-center text-white transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-[#0077B5]/50">
            <FaLinkedin size={20} className="sm:text-2xl" />
          </div>
          <span className="mt-1 sm:mt-2 text-[10px] sm:text-xs text-[#e3e3e3] opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
            LinkedIn
          </span>
        </Link>
        <Link
          href="https://github.com/pvirgilio"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center transition-transform duration-300 ease-in-out hover:-translate-y-1"
        >
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#333] rounded-full flex items-center justify-center text-white transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-[#333]/50">
            <FaGithub size={20} className="sm:text-2xl" />
          </div>
          <span className="mt-1 sm:mt-2 text-[10px] sm:text-xs text-[#e3e3e3] opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
            GitHub
          </span>
        </Link>
        <Link
          href="https://instagram.com/pedrovirgiliodev"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center transition-transform duration-300 ease-in-out hover:-translate-y-1"
        >
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#E4405F] rounded-full flex items-center justify-center text-white transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-[#E4405F]/50">
            <FaInstagram size={20} className="sm:text-2xl" />
          </div>
          <span className="mt-1 sm:mt-2 text-[10px] sm:text-xs text-[#e3e3e3] opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
            Instagram
          </span>
        </Link>
      </div>
    </article>
  );
};

export default TextIntroductionSection;
