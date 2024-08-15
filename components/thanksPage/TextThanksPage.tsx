"use client";
import { Button } from "@nextui-org/button";
import clsx from "clsx";
import Link from "next/link";
import React from "react";
import { title } from "../primitives";

export function TextThanksPage() {
  return (
    <div className="flex flex-col text-center gap-5">
      <h1 className={clsx(title({}), "")}>Obrigado pela mensagem!</h1>{" "}
      <p className="text-[17px] lg:text-lg font-medium">
        Entrarei em contato o mais breve possível.
      </p>
      <Button as={Link} href="/" className="bg-[#AD2B49] font-medium ">
        Voltar para Home
      </Button>
    </div>
  );
}
