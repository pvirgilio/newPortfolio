import { Card } from "@nextui-org/react";
import React from "react";
import "react-loading-skeleton/dist/skeleton.css";
import CarouselServices from "./CarouselServices";

export const ServicesSection = () => {
  return (
    <section className="bg-white py-16 min-h-mobile-nav">
      <div className="relative container mx-auto px-4">
        <h2 className="text-4xl text-gray-700 font-bold text-center mb-12">
          Meus Serviços
        </h2>
        <CarouselServices />
        <div className="absolute left-[83px] bottom-10 z-10 -bottom-10">
          <div className="swiper-button-prev after:ml-2.5 after:text-black after:border after:border-black after:p-5 after:rounded-full after:w-5 after:h-5 after:flex after:items-center after:justify-center after:!text-medium   after:transition-all"></div>

          <div className="swiper-button-next after:text-black after:border after:border-black after:p-5 after:rounded-full after:w-5 after:h-5 after:flex after:items-center after:justify-center after:!text-medium after:transition-all "></div>
        </div>
      </div>
    </section>
  );
};
