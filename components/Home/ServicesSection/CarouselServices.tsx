"use client";
import React, { useState, useEffect } from "react";
import {
  Bolt,
  BookType,
  Layers3,
  LockKeyhole,
  PanelsTopLeft,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Card, image } from "@nextui-org/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

const services = [
  {
    image: "/Home/ServicesSection/responsiveDesign.png",
    icon: <PanelsTopLeft color="#AD2B49" size={40} />,
    title: "Desenvolvimento de Sites Responsivos",
    description:
      "Criação de sites que se adaptam a todos os dispositivos, oferecendo uma experiência de usuário otimizada tanto em desktops quanto em dispositivos móveis.",
  },
  {
    icon: <Bolt color="#AD2B49" size={40} />,
    title: "Integração de APIs",
    description:
      "Integração de APIs para garantir que seu site possa interagir com serviços externos de forma eficiente e segura.",
  },
  {
    icon: <Layers3 color="#AD2B49" size={40} />,
    title: "Otimização de Performance",
    description:
      "Melhoria do desempenho do site através de técnicas avançadas, garantindo tempos de carregamento rápidos e uma melhor experiência do usuário.",
  },
  {
    icon: <LockKeyhole color="#AD2B49" size={40} />,
    title: "Implementação de Segurança",
    description:
      "Adoção das melhores práticas de segurança para proteger seu site contra vulnerabilidades e ataques cibernéticos.",
  },
  {
    icon: <BookType color="#AD2B49" size={40} />,
    title: "Design e Prototipagem",
    description:
      "Criação de designs atraentes e funcionais, incluindo prototipagem rápida para validação de ideias antes da implementação final.",
  },
];

export default function CarouselServices() {
  const renderCard = (service: any, index: any) => (
    <SwiperSlide key={index}>
      <Card className="bg-transparent w-full h-[630px]  p-6 rounded-lg shadow-lg text-start">
        <div className="text-5xl  mb-4">{service.icon}</div>
        <h2 className="text-2xl text-black font-bold mb-4">{service.title}</h2>
        <p className="text-gray-600 text-[17px] mb-4 w-full leading-relaxed">
          {service.description}
        </p>
        <Image
          src={service.image}
          alt="Picture of the author"
          width={500}
          height={500}
        />
      </Card>
    </SwiperSlide>
  );

  //   const renderSkeleton = (index: any) => (
  //     <SwiperSlide key={index}>
  //       <Card className="bg-[#202127] w-[400px] h-[300px] p-6 rounded-lg shadow-lg text-start">
  //         <div className="text-5xl mb-4">
  //           <Skeleton circle={true} height={40} width={40} />
  //         </div>
  //         <h3 className="text-2xl font-semibold mb-4">
  //           <Skeleton width={200} />
  //         </h3>
  //         <p className="text-gray-200 mb-4">
  //           <Skeleton count={3} />
  //         </p>
  //       </Card>
  //     </SwiperSlide>
  //   );

  return (
    <Swiper
      className=" rounded-lg shadow-lg"
      spaceBetween={30}
      slidesPerView={1}
      modules={[Navigation, Pagination]}
      autoplay={{ delay: 3000 }}
      loop={true}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
    >
      {services.map((service, index) => renderCard(service, index))}
    </Swiper>
  );
}
