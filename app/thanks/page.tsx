import { title } from "@/components/primitives";
import { TextThanksPage } from "@/components/thanksPage/TextThanksPage";
import { Button } from "@nextui-org/button";
import clsx from "clsx";
import Link from "next/link";
import React from "react";

export default function ThanksPage() {
  return (
    <section className="w-full min-h-mobile-menu flex justify-center items-center">
      <TextThanksPage />
    </section>
  );
}
