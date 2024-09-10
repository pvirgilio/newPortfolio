"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export function ImgIntroductionSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current,
        {
          opacity: 0,
          x: 50, // Reduzimos o deslocamento inicial
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out", // Adicionamos uma função de easing para suavizar a animação
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom", // Iniciamos a animação quando o topo do elemento atinge a parte inferior da viewport
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
    <>
      <div
        ref={sectionRef}
        className="absolute bottom-0 z-20 right-0 h-[450px] sm:h-[550px] md:h-[650px] lg:h-[650px] 3xl:h-[800px] opacity-0" // Adicionamos opacity-0 para evitar flash inicial
      >
        <Image
          alt="Pedro Virgilio"
          className="w-full h-full rounded-lg object-cover"
          src="/me.png"
          width={450}
          height={450}
          priority
        />
      </div>
      <div className="absolute -bottom-64 sm:-top-40 sm:-right-40 z-0">
        <Image
          alt="Background Ellipse 1"
          className="rounded-lg object-cover w-[1200px] h-[1200px]"
          src="/Ellipse 1.png"
          width={850}
          height={850}
          loading="lazy"
        />
      </div>
      <div className="absolute -bottom-44 -right-44 2xl:top-0 2xl:-right-96 z-10">
        <Image
          alt="Background Ellipse 2"
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
