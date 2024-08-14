import { motion } from "framer-motion";

import HtmlIcon from "@/components/Icons/HtmlIcon";
import CssIcon from "@/components/Icons/CssIcon";
import { JsIcon } from "@/components/Icons/JsIcon";
import ReactIcon from "@/components/Icons/ReactIcon";
import NextIcon from "@/components/Icons/NextIcon";
import TailwindIcon from "@/components/Icons/TailwindIcon";
import { NodeIcon } from "@/components/Icons/NodeIcon";
import { MysqlIcon } from "@/components/Icons/mysqlIcon";
import PrismaIcon from "@/components/Icons/PrismaIcon";
import PostgreSql from "@/components/Icons/PostgreSql";

export default function CarouselIcons() {
  return (
    <div className="max-w-xl  mx-auto py-5">
      <div className="w-full relative flex items-center mx-auto gap-5 overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-100%"] }}
          className="w-full flex items-center gap-5"
          transition={{ duration: 10, ease: "linear", repeat: Infinity }}
        >
          <HtmlIcon className="w-20 h-20 text-orange-600" />
          <CssIcon className="w-20 h-20 text-blue-500" />
          <JsIcon className="w-20 h-20 text-yellow-500" />
          <ReactIcon className="w-20 h-20 text-blue-400" />
          <NextIcon className="w-20 h-20" />
          <TailwindIcon className="w-20 h-20 text-blue-400" />
          <NodeIcon className="w-20 h-20" />
          <MysqlIcon className="w-20 h-20" />
          <PrismaIcon className="w-10 h-10" />
          <PostgreSql className="w-20 h-20" />
        </motion.div>
        <motion.div
          className="w-full flex items-center gap-5"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ duration: 10, ease: "linear", repeat: Infinity }}
        >
          <HtmlIcon className="w-20 h-20 text-orange-600" />
          <CssIcon className="w-20 h-20 text-blue-500" />
          <JsIcon className="w-20 h-20 text-yellow-500" />
          <ReactIcon className="w-20 h-20 text-blue-400" />
          <NextIcon className="w-20 h-20" />
          <TailwindIcon className="w-20 h-20 text-blue-400" />
          <NodeIcon className="w-20 h-20" />
          <MysqlIcon className="w-20 h-20" />
          <PrismaIcon className="w-20 h-20" />
          <PostgreSql className="w-20 h-20" />
        </motion.div>

        <div className="md:left-4xl absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-gray-950" />
        <div className="md:right-4xl absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-gray-950" />
      </div>
    </div>
  );
}
