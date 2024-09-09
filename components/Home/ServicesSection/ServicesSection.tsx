"use client";
import { Button, Card, Divider } from "@nextui-org/react";
import React from "react";
import "react-loading-skeleton/dist/skeleton.css";
import CarouselServices from "./CarouselServices";
import Link from "next/link";
import PrefixSection from "../PrefixSection";

export const ServicesSection = () => {
  return (
    <>
      <section className="bg-[#070707] py-20">
        <div className="container mx-auto lg:px-0 ">
          <div className="flex flex-col items-center justify-center">
            <PrefixSection text="../services" />
            <h2 className="text-2xl lg:text-4xl text-white font-bold  ">
              Meus Serviços
            </h2>
            <p className="text-center text-lg   lg:text-2xl mt-5 max-w-xl mx-auto">
              Aqui estão alguns dos serviços que ofereço. Se você tem uma ideia
              ou projeto em mente, entre em contato comigo.
            </p>
          </div>
          <Divider className="mt-10" />
          <CarouselServices />
        </div>
      </section>
      <section
        style={{
          backgroundImage: "url('/Home/ServicesSection/imgServiceSection.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
        }}
        className=" w-full lg:bg-top bg-no-repeat opacity-95 h-[400px]"
      >
        <div className="w-full h-full backdrop-blur-[2px]">
          <div className="container lg:px-0 max-w-xl mx-auto h-full flex flex-col items-center justify-center text-center ">
            <h3 className="text-2xl lg:text-4xl text-white font-bold ">
              Eleve sua produtividade. Comece a transformar suas ideias hoje
              mesmo.
            </h3>
            <p className="text-gray-200   text-lg lg:text-[22px] mt-5">
              Vamos juntos criar algo incrível? Entre em contato e descubra como
              posso ajudar a transformar sua visão em realidade.
            </p>
            <Button
              variant="solid"
              as={Link}
              href="/#contact"
              className="bg-[#AD2B49] !p-6 text-white font-medium text-xl lg:text-2xl mt-10"
            >
              Entre em contato
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};
