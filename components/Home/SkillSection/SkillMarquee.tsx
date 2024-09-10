import React from "react";
import {
  FaCode,
  FaServer,
  FaMobileAlt,
  FaDatabase,
  FaRocket,
} from "react-icons/fa";

const SkillMarquee = () => {
  const marqueeContent = [
    { text: "FRONT-END", icon: <FaCode /> },
    { text: "BACK-END", icon: <FaServer /> },
    { text: "FULL-STACK", icon: <FaMobileAlt /> },
    { text: "DATABASE", icon: <FaDatabase /> },
    { text: "DEPLOYMENT", icon: <FaRocket /> },
  ];

  return (
    <div className="bg-gradient-to-r from-[#AD2B49] to-[#8a2239] text-white overflow-hidden py-2">
      <div className="flex animate-marquee">
        {[...Array(4)].map((_, outerIndex) => (
          <div key={outerIndex} className="flex whitespace-nowrap">
            {marqueeContent.map((item, index) => (
              <span
                key={`${outerIndex}-${index}`}
                className="mx-4 text-xs font-medium uppercase tracking-wider flex items-center"
              >
                {item.icon}
                <span className="ml-1">{item.text}</span>
                {index !== marqueeContent.length - 1 && (
                  <span className="mx-2">•</span>
                )}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillMarquee;
