"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export function ImgIntroductionSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Verifica se o elemento está definido
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, x: 200 }, // Estado inicial
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: sectionRef.current, // Define o elemento que aciona a animação
            start: "top 80%", // Início da animação quando o elemento entra na visualização
            toggleActions: "play none none reset", // Define o comportamento ao rolar para dentro e fora da visualização
            onEnterBack: () => {
              // Animação quando o usuário rola para cima e o elemento entra de volta na tela
              gsap.fromTo(
                sectionRef.current,
                { opacity: 0, x: 200 },
                { opacity: 1, x: 0, duration: 1 }
              );
            },
          },
        }
      );
    }

    // Cleanup para remover o ScrollTrigger ao desmontar o componente
    return () => {
      ScrollTrigger.killAll();
    };
  }, []);
  return (
    <>
      <div
        ref={sectionRef}
        className="absolute bottom-0 z-20 right-0 h-[450px] sm:h-[550px] md:h-[650px] lg:h-[650px] 3xl:h-[800px]"
      >
        <Image
          alt="Pedro Virgilio"
          className="w-full h-full rounded-lg object-cover"
          src="/me.png"
          width={450}
          height={450}
          loading="lazy"
        />
      </div>
      <div className="absolute -bottom-64 sm:-top-40 sm:-right-40 z-0">
        <Image
          alt="Pedro Virgilio"
          className="rounded-lg object-cover w-[1200px] h-[1200px]"
          src="/Ellipse 1.png"
          width={850}
          height={850}
          loading="lazy"
        />
      </div>
      <div className="absolute -bottom-44 -right-44 2xl:top-0 2xl:-right-96 z-10">
        <Image
          alt="Pedro Virgilio"
          className="rounded-lg object-cover 2xl:w-[1200px] 2xl:h-[1200px]"
          src="/Ellipse 2.png"
          width={850}
          height={850}
          loading="lazy"
        />
      </div>
    </>
  );
}
