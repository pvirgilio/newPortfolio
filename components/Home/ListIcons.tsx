"use client";
import { Chip, Image } from "@nextui-org/react";
import React from "react";
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
import { CircularSkills } from "./SkillSection/CircularProgress";

export default function ListIcons() {
  return (
    <div className=" w-full h-full mt-10 flex flex-col lg:flex-row items-center justify-center lg:items-start gap-10">
      <div className="w-full flex flex-col  items-center justify-center gap-5">
        <Chip color="default" size="md">
          Front-End
        </Chip>
        <div className="w-full flex flex-col gap-x-3 gap-y-5">
          <CircularSkills label="Html5" value={80} />
          <CircularSkills label="Css3" value={70} />
          <CircularSkills label="JavaScript" value={70} />
          <CircularSkills label="React" value={50} />
          <CircularSkills label="Nextjs" value={50} />
          <CircularSkills label="Tailwindcss" value={50} />
          <CircularSkills label="Figma" value={30} />
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-center gap-5">
        <Chip color="default" size="md">
          Back-End
        </Chip>
        <div className="w-full flex flex-col gap-x-3 gap-y-5">
          <CircularSkills label="NodeJs" value={30} />
          <CircularSkills label="Express" value={30} />
          <CircularSkills label="Prisma" value={20} />
          <CircularSkills label="Mysql" value={20} />
          <CircularSkills label="PostgreSql" value={20} />
        </div>
      </div>
    </div>
  );
}
