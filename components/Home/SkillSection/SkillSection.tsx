"use client";

import React, { useEffect, useRef } from "react";
import PrefixSection from "../PrefixSection";
import { Divider } from "@nextui-org/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaDatabase,
} from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiTailwindcss } from "react-icons/si";
import SkillMarquee from "./SkillMarquee";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: "React", icon: FaReact, color: "#61DAFB" },
  { name: "Node.js", icon: FaNodeJs, color: "#339933" },
  { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
  { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
  { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "SQL", icon: FaDatabase, color: "#4479A1" },
];

export default function SkillSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const desc = descRef.current;
    const skills = skillsRef.current;

    if (section && title && desc && skills) {
      gsap.fromTo(
        [title, desc],
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.2,
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      gsap.fromTo(
        skills.children,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          scrollTrigger: {
            trigger: skills,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-gradient-to-b from-[#111111] to-[#070707] py-16 sm:py-20 md:py-24 lg:py-28"
      data-scroll-section
    >
      <div className="container mx-auto px-4 lg:px-6 flex flex-col items-center lg:items-start">
        <PrefixSection text="../skills" />
        <h2
          ref={titleRef}
          className="h2 font-bold text-white mb-4 sm:mb-6 text-center lg:text-left"
        >
          Habilidades
        </h2>
        <p
          ref={descRef}
          className="text-base sm:text-lg 2xl:text-xl text-gray-300 mb-8 sm:mb-10 max-w-2xl text-center lg:text-left leading-relaxed"
        >
          Minha experiência abrange uma ampla gama de tecnologias e ferramentas.
          Aqui estão algumas das principais habilidades que utilizo em meus
          projetos:
        </p>

        <Divider className="my-8 sm:my-10 w-full bg-gradient-to-r from-transparent via-[#AD2B49] to-transparent h-px" />

        <div
          ref={skillsRef}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 w-full"
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-4 bg-[#1A1A1A] rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#AD2B49]/20"
            >
              <skill.icon size={48} color={skill.color} className="mb-2" />
              <span className="text-white text-sm">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
