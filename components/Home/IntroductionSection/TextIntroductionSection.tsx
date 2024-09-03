"use client";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import React from "react";
import { motion } from "framer-motion";

// Defina os variantes de animação
const containerVariants = {
  hidden: { opacity: 1, y: 0 }, // Inicialmente visível
  visible: { opacity: 1, y: 0 },
};

export function TextIntroductionSection() {
  return (
    <motion.article
      className="w-full h-full container flex flex-col items-center pt-4 z-30 sm:justify-center sm:items-start lg:px-0"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="flex justify-center flex-wrap gap-2 text-4xl font-bold text-center lg:text-5xl xl:text-6xl">
        <motion.h1
          initial={{ opacity: 1, x: 0 }} // Inicialmente visível
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Olá, meu nome é
        </motion.h1>
        <motion.h2
          className="whitespace-nowrap"
          initial={{ opacity: 1, x: 0 }} // Inicialmente visível
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Pedro Virgilio
        </motion.h2>
      </div>
      <div className="mt-2 flex justify-center flex-wrap gap-1 text-2xl font-normal text-center lg:text-3xl ">
        <motion.h2
          initial={{ opacity: 1, y: 0 }} // Inicialmente visível
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Desenvolvedor
        </motion.h2>
        <motion.h2
          className="whitespace-nowrap"
          initial={{ opacity: 1, y: 0 }} // Inicialmente visível
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          Front-End
        </motion.h2>
      </div>

      <motion.p
        className="text-[#e3e3e3] pt-5 text-center font-normal max-w-md sm:text-start text-xl lg:text-[22px] "
        initial={{ opacity: 1, scale: 1 }} // Inicialmente visível
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        Apaixonado por tecnologia e com experiência na construção de aplicações
        web modernas.
      </motion.p>

      <motion.div
        initial={{ opacity: 1, y: 0 }} // Inicialmente visível
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        <Button
          showAnchorIcon
          as={Link}
          className="p-4 mt-5 bg-white text-black font-semibold text-medium  lg:text-xl"
          href="/about"
          variant="solid"
        >
          Entre em contato
        </Button>
      </motion.div>
    </motion.article>
  );
}
