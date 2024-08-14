"use client";
import React from "react";
import { Card, CardHeader, CardFooter, Button } from "@nextui-org/react";
import Image from "next/image";
import { GithubIcon } from "@/components/icons";
import { Globe } from "lucide-react";

export default function CardProject({
  model,
  text,
  image,
}: {
  model: string;
  text: string;
  image: string;
}) {
  return (
    <Card
      isFooterBlurred
      className="max-w-[450px] lg:max-w-[500px] h-[300px] xl:h-[350px] group"
    >
      <CardHeader className="absolute z-10 top-1 flex-col items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">{model}</p>
        <h4 className="text-white/90 font-medium text-xl">{text}</h4>
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
          <Button
            variant="ghost"
            className="border-1 border-gray-300 hover:!bg-[#AD2B49]"
          >
            <GithubIcon />
            Github
          </Button>
          <Button
            variant="ghost"
            className="border-1 border-gray-300 hover:!bg-[#AD2B49]"
          >
            <Globe />
            Website
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
