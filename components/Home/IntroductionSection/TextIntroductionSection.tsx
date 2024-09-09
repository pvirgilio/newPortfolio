"use client";
import { Link } from "@nextui-org/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";

// Registrar o plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const TextIntroductionSection = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (sectionRef.current) {
      // Animação inicial
      // gsap.fromTo(
      //   sectionRef.current,
      //   { opacity: 0, y: 80 },
      //   { opacity: 1, y: 0, duration: 1 }
      // );

      // Configuração do ScrollTrigger para rolagem
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 80%", // Início da animação quando o elemento entra na visualização
        end: "bottom 50%", // Fim da animação quando o elemento sai da visualização
        toggleActions: "play none none reset", // Define o comportamento ao rolar para dentro e fora da visualização
        onEnter: () => {
          // Animação ao entrar na visualização
          gsap.fromTo(
            sectionRef.current,
            { opacity: 0, y: 80 },
            { opacity: 1, y: 0, duration: 1 }
          );
        },
        onEnterBack: () => {
          // Animação quando o usuário rola para cima e o elemento entra de volta na tela
          gsap.fromTo(
            sectionRef.current,
            { opacity: 0, y: 80 },
            { opacity: 1, y: 0, duration: 1 }
          );
        },
      });
    }

    // Cleanup para remover o ScrollTrigger ao desmontar o componente
    return () => {
      ScrollTrigger.killAll();
    };
  }, []);

  return (
    <article
      ref={sectionRef}
      className="max-w-[320px] h-fit pt-10 flex flex-col items-center z-30 lg:px-0 lg:items-start"
    >
      <div className="flex justify-center flex-wrap text-3xl font-bold text-center">
        <h1>Olá, meu nome é</h1>
        <h2 className="whitespace-nowrap">Pedro Virgilio</h2>
      </div>
      <div className="mt-2 flex justify-center flex-wrap gap-1 text-xl font-medium text-center lg:text-3xl">
        <h2>Desenvolvedor</h2>
        <h2 className="whitespace-nowrap">Front-End</h2>
      </div>

      <p className="text-[#e3e3e3] font-sans pt-5 text-center font-normal  sm:text-start text-lg lg:text-2xl">
        Apaixonado por tecnologia e com experiência na construção de aplicações
        web modernas.
      </p>

      <Link
        href="/docs/CurrículoPedroVirgilio.pdf"
        className="radio-wrapper !mt-5"
      >
        <input className="input" name="btn" id="value-3" type="radio" />
        <div className="btn">
          Currículo
          <span aria-hidden="true" />
          <span className="btn__glitch" aria-hidden="true">
            Contato_
          </span>
          <label className="number" htmlFor="value-3">
            r3
          </label>
        </div>
      </Link>
    </article>
  );
};

export default TextIntroductionSection;
