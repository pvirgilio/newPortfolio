"use client";
import React from "react";
import { Card, CardHeader, CardFooter, Button } from "@nextui-org/react";
import Image from "next/image";
import { GithubIcon } from "@/components/icons";
import { Globe } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

const cardData = [
  {
    model: "Landing page",
    text: "Savant Web site",
    image: "/Home/ProjectSection/savantsitemockup.png",
    linkGithub: "https://github.com/pvirgilio/savant-newportoflio.git",
    linkSite: "https://savantweb.com.br/",
  },
  {
    model: "Landing page",
    text: "Clínica Odontológica",
    image: "/Home/ProjectSection/odontosite.png",
    linkGithub: "https://github.com/pvirgilio/bw-odonto2.git",
    linkSite: "https://odontosite.netlify.app/",
  },
  {
    model: "Landing page",
    text: "Site Social Media",
    image: "/Home/ProjectSection/linkspagemockup.png",
    linkSite: "https://linkspage.netlify.app/",
    linkGithub: "https://github.com/pvirgilio/linksPage.git",
  },
  {
    model: "Landing page",
    text: "Sorteador de Rifas",
    image: "/Home/ProjectSection/imgSorteador.png",
    linkSite: "https://sorteador-five-alpha.vercel.app/",
    linkGithub: "https://github.com/pvirgilio/sorteador.git",
  },
  {
    model: "Landing page",
    text: "Meu Portfólio",
    image: "/Home/ProjectSection/imgPortfolio.png",
    linkSite: "https://pedrovirgilio.vercel.app/",
    linkGithub: "https://github.com/pvirgilio/newPortfolio",
  },
];

const CardProject = ({
  model,
  text,
  image,
  linkGithub,
  linkSite,
}: {
  model: string;
  text: string;
  image: string;
  linkGithub: string;
  linkSite: string;
}) => {
  return (
    <Card
      isFooterBlurred
      className="max-w-[450px] lg:max-w-[500px] h-[300px] group"
    >
      <CardHeader className="absolute z-10 top-1 flex-col items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">{model}</p>
        <h4 className="text-white/90 font-medium text-2xl lg:text-3xl">
          {text}
        </h4>
      </CardHeader>
      <Image
        alt="Relaxing app background"
        className="z-0 max-w-full h-full group-hover:scale-110 transition-transform duration-500"
        objectFit="cover"
        src={image}
        width={500}
        height={500}
      />
      <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
        <div className="flex flex-grow gap-2 items-center ">
          <Link target="_blank" href={linkGithub}>
            <Button
              variant="ghost"
              className="border-1 text-lg border-gray-300 hover:!bg-[#AD2B49]"
            >
              <GithubIcon />
              Github
            </Button>
          </Link>
          <Link target="_blank" href={linkSite}>
            <Button
              variant="ghost"
              className="border-1 text-lg border-gray-300 hover:!bg-[#AD2B49]"
            >
              <Globe />
              Website
            </Button>
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};

export function CardsProjectSection() {
  const path = usePathname();
  const displayProjects =
    path === "/projects" ? cardData : cardData.slice(0, 3);
  return (
    <article className="grid grid-cols-1 place-items-center gap-5 md:grid-cols-2 lg:grid-cols-3 mt-10">
      {displayProjects.map((card, index) => (
        <CardProject
          key={index}
          model={card.model}
          text={card.text}
          image={card.image}
          linkGithub={card.linkGithub}
          linkSite={card.linkSite}
        />
      ))}
    </article>
  );
}
