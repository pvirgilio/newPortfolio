"use client";
import React from "react";
import { Card, CardHeader, CardFooter, Button } from "@nextui-org/react";
import Image from "next/image";

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
      className="max-w-[450px] h-[300px] xl:h-[350px] group"
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
        width={450}
        height={450}
      />
      <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="flex flex-grow gap-2 items-center ">
          <img
            alt="Breathing app icon"
            className="rounded-full w-10 h-11 bg-black"
            height={40}
            src={"https://nextui.org/images/breathing-app-icon.jpeg"}
            width={40}
          />
          <div className="flex flex-col">
            <p className="text-tiny text-white/60">Breathing App</p>
            <p className="text-tiny text-white/60">Get a good nights sleep.</p>
          </div>
        </div>
        <Button radius="full" size="sm">
          Get App
        </Button>
      </CardFooter>
    </Card>
  );
}
