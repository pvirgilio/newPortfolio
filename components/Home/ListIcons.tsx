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

export default function ListIcons() {
  return (
    <ul className="max-w-md mx-auto mt-2 lg:max-w-full lg:mx-0 flex flex-wrap items-center justify-center gap-4">
      <li className="flex flex-col items-center gap-2">
        <Chip color="default" size="sm">
          Html
        </Chip>
        <HtmlIcon className="w-10 h-10 text-orange-600" />
      </li>
      <li className="flex flex-col items-center  gap-2">
        <Chip color="default" size="sm">
          Css
        </Chip>
        <CssIcon className="w-10 h-10 text-blue-500" />
      </li>
      <li className="flex flex-col items-center gap-2">
        <Chip color="default" size="sm">
          JavaScript
        </Chip>
        <JsIcon className="w-10 h-10 text-yellow-500" />
      </li>
      <li className="flex flex-col items-center gap-2">
        <Chip color="default" size="sm">
          React
        </Chip>
        <ReactIcon className="w-10 h-10 text-blue-400" />
      </li>
      <li className="flex flex-col items-center gap-2">
        <Chip color="default" size="sm">
          Nextjs
        </Chip>
        <NextIcon className=" w-10 h-10" />
      </li>
      <li className="flex flex-col items-center gap-2">
        <Chip color="default" size="sm">
          Tailwind
        </Chip>
        <TailwindIcon className=" w-10 h-10 text-blue-400" />
      </li>
      <li className="flex flex-col items-center gap-2">
        <Chip color="default" size="sm">
          Node
        </Chip>
        <NodeIcon className=" w-10 h-10" />
      </li>
      <li className="flex flex-col items-center gap-2">
        <Chip color="default" size="sm">
          Prisma
        </Chip>
        <PrismaIcon className=" w-10 h-10" />
      </li>
      <li className="flex flex-col items-center gap-2">
        <Chip color="default" size="sm">
          PostgreSQL
        </Chip>
        <PostgreSql className=" w-10 h-10" />
      </li>
    </ul>
  );
}
