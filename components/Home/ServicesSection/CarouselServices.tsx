"use client";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Card, Divider, image } from "@nextui-org/react";
import Image from "next/image";

import {
  Bolt,
  BookType,
  Layers3,
  LockKeyhole,
  MonitorCog,
  PanelsTopLeft,
} from "lucide-react";

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
  {
    icon: <MonitorCog color="#AD2B49" size={40} />,
    title: "Linguagens Modernas",
    description:
      "Contrução de sites com as tecnologias web mais recentes e otimizadas, como nextjs. Garantindo que seu projeto esteja sempre atualizado e pronto para o futuro.",
  },
];

export default function CardServices() {
  const renderCard = (service: any, index: any) => (
    <Card
      key={index}
      className="bg-[#151515] border border-[#64192a] rounded-xl max-w-lg h-full p-6 shadow-lg flex flex-col items-center justify-start text-center !transition-transform duration-500 hover:scale-105"
    >
      <div className="text-5xl mb-4">{service.icon}</div>
      <h2 className="text-lg sm:text-xl lg:text-2xl text-white font-bold mb-4">
        {service.title}
      </h2>
      <p className="text-white text-base sm:text-lg 2xl:text-xl mb-4 w-full leading-relaxed">
        {service.description}
      </p>
    </Card>
  );

  return (
    <div className="grid grid-cols-1 nm:grid-cols-2 md:grid-cols-3 gap-5 mt-10">
      {services.map((service, index) => renderCard(service, index))}
    </div>
  );
}
