"use client";
import React from "react";
import { motion } from "framer-motion";
import { AsteriskIcon } from "lucide-react";

export const DividerMarquee: React.FC = () => {
  const marqueeVariants = {
    animate: {
      x: ["0%", "-100%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20, // Ajuste para a velocidade
          ease: "linear",
        },
      },
    },
  };

  return (
    <div className="relative -top-32 w-full bg-white py-2">
      <motion.div
        animate="animate"
        className="flex space-x-4 items-center whitespace-nowrap"
        variants={marqueeVariants}
      >
        {[...Array(2)].map((_, i) => (
          <React.Fragment key={i}>
            {Array.from({ length: 40 }).map((_, index) => (
              <div className="flex items-center space-x-2" key={index + i * 20}>
                <span className="text-black text-sm md:text-base lg:text-lg">
                  Pedro
                </span>
                <span className="flex-shrink-0">
                  <AsteriskIcon color="black" size={20} />
                </span>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};
