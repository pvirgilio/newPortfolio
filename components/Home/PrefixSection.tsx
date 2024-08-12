import { fontMono } from "@/config/fonts";
import React from "react";

export default function PrefixSection({ text = "", classe = "" }) {
  return (
    <span
      className={`text-[#AD2B49] uppercase text-tiny font-bold leading-relaxed ${fontMono.className} ${classe}`}
    >
      {text}
    </span>
  );
}
