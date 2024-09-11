"use client";
import React, { useEffect, useRef } from "react";
import { Card, CardBody, CardFooter, Button, Chip } from "@nextui-org/react";
import Image from "next/image";
import { FaGithub, FaGlobe } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";
import gsap from "gsap";

const cardData = [
  {
    model: "Landing page",
    title: "Savant Web site",
    description: "Site institucional para empresa de tecnologia.",
    image: "/Home/ProjectSection/savantsitemockup.png",
    linkGithub: "https://github.com/pvirgilio/savant-newportoflio.git",
    linkSite: "https://savantweb.com.br/",
    technologies: ["React", "Next.js", "TailwindCSS"],
  },
  {
    model: "Landing page",
    title: "Clínica Odontológica",
    description: "Site para clínica odontológica com agendamento online.",
    image: "/Home/ProjectSection/odontosite.png",
    linkGithub: "https://github.com/pvirgilio/bw-odonto2.git",
    linkSite: "https://odontosite.netlify.app/",
    technologies: ["React", "Styled-Components", "Netlify"],
  },
  {
    model: "Landing page",
    title: "Site Social Media",
    description: "Página de links para redes sociais personalizável.",
    image: "/Home/ProjectSection/linkspagemockup.png",
    linkSite: "https://linkspage.netlify.app/",
    linkGithub: "https://github.com/pvirgilio/linksPage.git",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    model: "Landing page",
    title: "Sorteador de Rifas",
    description: "Aplicação web para sorteio de rifas online.",
    image: "/Home/ProjectSection/imgSorteador.png",
    linkSite: "https://sorteador-five-alpha.vercel.app/",
    linkGithub: "https://github.com/pvirgilio/sorteador.git",
    technologies: ["React", "Next.js", "TailwindCSS"],
  },
  {
    model: "Landing page",
    title: "Meu Portfólio",
    description: "Site pessoal para exibição de projetos e habilidades.",
    image: "/Home/ProjectSection/imgPortfolio.png",
    linkSite: "https://pedrovirgilio.vercel.app/",
    linkGithub: "https://github.com/pvirgilio/newPortfolio",
    technologies: ["React", "Next.js", "TailwindCSS"],
  },
];

const CardProject = ({
  model,
  title,
  description,
  image,
  linkGithub,
  linkSite,
  technologies,
}: {
  model: string;
  title: string;
  description: string;
  image: string;
  linkGithub: string;
  linkSite: string;
  technologies: string[];
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (card) {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
            end: "bottom top+=100",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    }
  }, []);

  return (
    <Card ref={cardRef} className="w-full max-w-[400px] h-fit bg-[#1A1A1A]">
      <CardBody className="p-0">
        <div className="relative w-full h-48">
          <Image
            alt={title}
            className="object-cover"
            src={image}
            layout="fill"
          />
          <div className="absolute top-2 left-2 backdrop-blur-sm bg-black/60 text-white text-xs sm:text-sm font-medium px-2 py-1 rounded">
            {model}
          </div>
        </div>
        <div className="p-4">
          <h4 className="text-white font-semibold text-lg sm:text-xl mb-2">
            {title}
          </h4>
          <p className="text-gray-300 text-xs sm:text-sm mb-4">{description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech, index) => (
              <Chip
                key={index}
                size="sm"
                className="bg-[#AD2B49] text-white font-medium text-xs sm:text-sm"
              >
                {tech}
              </Chip>
            ))}
          </div>
        </div>
      </CardBody>
      <CardFooter className="justify-between bg-[#2A2A2A] border-t border-gray-700">
        <Button
          as={Link}
          href={linkGithub}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#333] text-white text-xs sm:text-sm"
          startContent={<FaGithub className="text-sm sm:text-base" />}
        >
          GitHub
        </Button>
        <Button
          as={Link}
          href={linkSite}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#AD2B49] text-white text-xs sm:text-sm"
          startContent={<FaGlobe className="text-sm sm:text-base" />}
        >
          Site
        </Button>
      </CardFooter>
    </Card>
  );
};

export function CardsProjectSection() {
  const path = usePathname();
  const displayProjects =
    path === "/projects" ? cardData : cardData.slice(0, 3);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 place-items-center lg:mt-10">
      {displayProjects.map((card, index) => (
        <CardProject
          key={index}
          model={card.model}
          title={card.title}
          description={card.description}
          image={card.image}
          linkGithub={card.linkGithub}
          linkSite={card.linkSite}
          technologies={card.technologies}
        />
      ))}
    </div>
  );
}
