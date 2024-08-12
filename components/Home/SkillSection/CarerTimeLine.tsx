"use client";
import React, { useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
}

const timelineData: TimelineItemProps[] = [
  {
    year: "2020",
    title: "Início da Carreira",
    description: "Descrição do evento de 2020",
  },
  {
    year: "2021",
    title: "Desenvolvedor Front-end",
    description: "Descrição do evento de 2021",
  },
  {
    year: "2022",
    title: "Especialização em Next.js",
    description: "Descrição do evento de 2022",
  },
  {
    year: "2023",
    title: "Desenvolvedor Sênior",
    description: "Descrição do evento de 2023",
  },
];

const TimelineItem: React.FC<{ item: TimelineItemProps; index: number }> = ({
  item,
  index,
}) => {
  const ref = useRef<HTMLLIElement>(null);
  const controls = useAnimation();
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, x: 0 });
    }
  }, [controls, inView]);

  return (
    <motion.li
      ref={ref}
      className="relative pl-10 md:pl-20"
      initial={{ opacity: 0, x: -50 }}
      animate={controls}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <div className="absolute left-5 top-0 h-full w-1 bg-[#AD2B49] md:left-10 lg:left-16"></div>
      <div className="bg-white p-4 rounded-lg shadow-md max-w-md lg:max-w-lg">
        <span className="text-sm font-semibold text-gray-600">{item.year}</span>
        <h3 className="text-lg font-bold text-[#AD2B49]">{item.title}</h3>
        <p className="text-gray-700">{item.description}</p>
      </div>
    </motion.li>
  );
};

export const CareerTimeline: React.FC = () => {
  return (
    <div className="mt-10">
      <h2 className="text-xl lg:text-[22px] xl:text-2xl uppercase border-b-2 border-[#AD2B49] font-bold mx-auto mb-3 w-fit">
        Carreira
      </h2>
      <ul className="pt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center gap-5">
        {timelineData.map((item, index) => (
          <TimelineItem key={index} item={item} index={index} />
        ))}
      </ul>
    </div>
  );
};
