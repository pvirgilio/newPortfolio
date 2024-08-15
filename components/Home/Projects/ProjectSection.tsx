import React from "react";
import { CardsProjectSection } from "./CardProject";
import Link from "next/link";
import PrefixSection from "../PrefixSection";
import { Divider } from "@nextui-org/react";

export default function ProjectSection() {
  return (
    <section className="container mt-10  lg:px-0 flex flex-col gap-5 mb-10  ">
      <div className="w-full">
        <PrefixSection text="../projects" classe="text-start -mb-10" />
        <h2 className="text-2xl font-bold text-white xl:text-3xl text-start">
          Principais Projetos
        </h2>
        <Divider className="my-4 " />
      </div>
      <CardsProjectSection />
      <div className="w-full mt-5 flex justify-center">
        <Link
          className="w-fit my-5 font-semibold border border-transparent hover:border-[#AD2B49] transition duration-300 p-2 rounded-full"
          href={"/projects"}
        >
          <span className="inline-block">Ver mais projetos</span>
        </Link>
      </div>
    </section>
  );
}
