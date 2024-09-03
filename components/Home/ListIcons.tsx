"use client";
import React, { useEffect, useRef } from "react";
import ReactIcon from "../Icons/ReactIcon";
import { JsIcon } from "../Icons/JsIcon";
import CssIcon from "../Icons/CssIcon";
import HtmlIcon from "../Icons/HtmlIcon";
import NextIcon from "../Icons/NextIcon";
import { NodeIcon } from "../Icons/NodeIcon";
import TailwindIcon from "../Icons/TailwindIcon";
import PrismaIcon from "../Icons/PrismaIcon";
import PostgreSql from "../Icons/PostgreSql";
import { MysqlIcon } from "../Icons/mysqlIcon";

const icons = [
  {
    Component: HtmlIcon,
    className: "",
    name: "HTML:",
    description: "Linguagem de marcação usada para criar páginas web.",
  },
  {
    Component: CssIcon,
    className: "text-orange-600",
    name: "CSS:",
    description:
      "Linguagem de estilo usada para descrever a apresentação de um documento HTML.",
  },
  {
    Component: JsIcon,
    className: "text-yellow-500",
    name: "JavaScript:",
    description:
      "Linguagem de programação usada para criar conteúdo web dinâmico.",
  },
  {
    Component: ReactIcon,
    className: "text-blue-400",
    name: "React:",
    description: "Biblioteca JavaScript para construir interfaces de usuário.",
  },
  {
    Component: NextIcon,
    className: "",
    name: "Next.js:",
    description: "Framework React para desenvolvimento de aplicações web.",
  },
  {
    Component: TailwindIcon,
    className: "text-blue-400",
    name: "Tailwind CSS:",
    description: "Framework CSS para estilização rápida e eficiente.",
  },
  {
    Component: NodeIcon,
    className: "",
    name: "Node.js:",
    description: "Ambiente de execução JavaScript server-side.",
  },
  {
    Component: MysqlIcon,
    className: "",
    name: "MySQL:",
    description: "Sistema de gerenciamento de banco de dados relacional.",
  },
  {
    Component: PrismaIcon,
    className: "",
    name: "Prisma:",
    description: "ORM para Node.js e TypeScript.",
  },
  {
    Component: PostgreSql,
    className: "",
    name: "PostgreSQL:",
    description:
      "Sistema de gerenciamento de banco de dados relacional e objeto-relacional.",
  },
];

export default function ListIcons() {
  const [description, setDescription] = React.useState<string | null>(null);
  const [namesLanguages, setNamesLanguages] = React.useState<string | null>(
    null
  );
  return (
    <div className="w-full flex flex-col gap-20 justify-center items-center lg:flex-row lg:items-start lg:justify-between lg:gap-0 py-5">
      <p className="hidden md:flex lg:max-w-lg text-xl lg:text-[22px] text-gray-300  flex-col items-start">
        <strong>{namesLanguages}</strong>
        {description
          ? description
          : "*Passe o mouse em cima de cada ícone para saber mais.*"}
      </p>
      <ul className=" grid place-items-center grid-cols-2 nm:grid-cols-3 sm:grid-cols-4 flex-wrap gap-5">
        {icons.map(({ Component, className }, index) => (
          <li
            onMouseEnter={() => {
              setDescription(icons[index].description);
              setNamesLanguages(icons[index].name);
            }}
            onMouseLeave={() => {
              setDescription(null);
              setNamesLanguages(null);
            }}
            key={index}
            className="flex flex-col items-center gap-2 border border-gray-800 bg-[#111111] w-[122px] h-[130px] justify-center rounded-lg hover:border-[#AD2B49] transition-colors duration-300 "
          >
            <Component className={`w-14 h-14 ${className}`} />
          </li>
        ))}
      </ul>
    </div>
  );
}
