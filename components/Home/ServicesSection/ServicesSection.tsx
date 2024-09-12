"use client";
import React, { useEffect, useRef } from "react";
import { Button, Card } from "@nextui-org/react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Bolt,
  BookType,
  Layers3,
  LockKeyhole,
  MonitorCog,
  PanelsTopLeft,
} from "lucide-react";

import PrefixSection from "../PrefixSection";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: PanelsTopLeft,
    title: "Desenvolvimento de Sites Responsivos",
    description:
      "Criação de sites que se adaptam a todos os dispositivos, oferecendo uma experiência de usuário otimizada tanto em desktops quanto em dispositivos móveis.",
  },
  {
    icon: Bolt,
    title: "Integração de APIs",
    description:
      "Integração de APIs para garantir que seu site possa interagir com serviços externos de forma eficiente e segura.",
  },
  {
    icon: Layers3,
    title: "Otimização de Performance",
    description:
      "Melhoria do desempenho do site através de técnicas avançadas, garantindo tempos de carregamento rápidos e uma melhor experiência do usuário.",
  },
  {
    icon: LockKeyhole,
    title: "Implementação de Segurança",
    description:
      "Adoção das melhores práticas de segurança para proteger seu site contra vulnerabilidades e ataques cibernéticos.",
  },
  {
    icon: BookType,
    title: "Design e Prototipagem",
    description:
      "Criação de designs atraentes e funcionais, incluindo prototipagem rápida para validação de ideias antes da implementação final.",
  },
  {
    icon: MonitorCog,
    title: "Linguagens Modernas",
    description:
      "Contrução de sites com as tecnologias web mais recentes e otimizadas, como nextjs. Garantindo que seu projeto esteja sempre atualizado e pronto para o futuro.",
  },
];

const ServiceCard = ({ icon: Icon, title, description }: any) => (
  <Card className="bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] p-6 h-full transition-all duration-300 hover:shadow-lg hover:shadow-[#AD2B49]/20">
    <Icon className="text-5xl text-[#AD2B49] mb-4" />
    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">{title}</h3>
    <p className="text-gray-300 text-base sm:text-lg">{description}</p>
  </Card>
);

export const ServicesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const cards = cardsRef.current;
    const cta = ctaRef.current;

    if (section && title && cards && cta) {
      gsap.fromTo(
        title,
        { opacity: 0, y: -50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: section,
            start: "top 90%",
            end: "bottom 10%",
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
          stagger: 0.1,
          scrollTrigger: {
            trigger: cards,
            start: "top 90%",
            end: "bottom 10%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      gsap.fromTo(
        cta,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: cta,
            start: "top 90%",
            end: "bottom 10%",
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
    <section
      ref={sectionRef}
      className="bg-[#070707] py-20 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 lg:!px-0 relative z-10">
        <PrefixSection text="../services" />
        <h2 ref={titleRef} className="h2 font-bold text-white mb-12">
          Meus Serviços
        </h2>
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
        <div
          ref={ctaRef}
          className="relative overflow-hidden rounded-xl shadow-2xl"
          style={{
            backgroundImage:
              "url('/Home/ServicesSection/imgServiceSection.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#AD2B49]/90 to-[#070707]/90 backdrop-blur-sm" />
          <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-6 text-center md:text-left">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-white">
                Pronto para transformar suas ideias em realidade?
              </h3>
              <p className="text-lg sm:text-xl mb-0 text-gray-200">
                Vamos criar algo incrível juntos. Entre em contato agora!
              </p>
            </div>
            <Button
              as={Link}
              className="bg-white font-bold group flex items-center px-8 py-3 rounded-full text-lg text-[#AD2B49] transition-colors duration-300 hover:bg-gray-200"
              href="/#contact"
            >
              Entre em contato
              <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-[#AD2B49]/10 to-transparent" />
      <div className="absolute bottom-0 right-0 w-full h-64 bg-gradient-to-t from-[#AD2B49]/10 to-transparent" />
    </section>
  );
};

export default ServicesSection;
