"use client";
import React, { useEffect, useRef } from "react";
import { CardsProjectSection } from "./CardProject";
import Link from "next/link";
import PrefixSection from "../PrefixSection";
import { Divider } from "@nextui-org/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const linkRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const cards = cardsRef.current;
    const link = linkRef.current;

    if (section && title && cards && link) {
      gsap.fromTo(
        title,
        { opacity: 0, y: -50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      gsap.fromTo(
        cards.children,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.2,
          scrollTrigger: {
            trigger: cards,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      gsap.fromTo(
        link,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          scrollTrigger: {
            trigger: link,
            start: "top 90%",
            end: "bottom 20%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="w-full h-full bg-[#111111]">
      <div className="container lg:px-0 flex flex-col gap-5 py-16 sm:py-20">
        <div className="w-full">
          <PrefixSection
            text="../projects"
            classe="text-start -mb-2 sm:-mb-4"
          />
          <h2
            ref={titleRef}
            className="font-bold text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-start"
          >
            Principais Projetos
          </h2>
          <Divider className="my-4 sm:my-6" />
        </div>
        <div ref={cardsRef}>
          <CardsProjectSection />
        </div>
        <div ref={linkRef} className="w-full mt-8 sm:mt-10 flex justify-center">
          <Link
            className="w-fit font-semibold border border-transparent hover:border-[#AD2B49] transition duration-300 p-2 sm:p-3 rounded-full"
            href={"/projects"}
          >
            <span className="inline-block text-white text-sm sm:text-base lg:text-lg">
              Ver mais projetos
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
