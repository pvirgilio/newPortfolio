import React from "react";
import { CardsProjectSection } from "./CardProject";
import Link from "next/link";
import PrefixSection from "../PrefixSection";
import { Divider } from "@nextui-org/react";

export default function ProjectSection() {
  return (
    <section className="w-full h-full bg-[#111111]   ">
      <div className="container lg:px-0 flex flex-col gap-5 py-20   ">
        <div className="w-full">
          <PrefixSection text="../projects" classe="text-start -mb-10" />
          <h2 className=" font-bold text-white text-2xl sm:text-3xl 2xl:text-4xl text-start">
            Principais Projetos
          </h2>
          <Divider className="my-4 " />
        </div>
        <CardsProjectSection />
        <div className="w-full mt-5 flex justify-center">
          <Link
            className="w-fit   font-semibold border border-transparent hover:border-[#AD2B49] transition duration-300 p-2 rounded-full"
            href={"/projects"}
          >
            <span className="inline-block text-base sm:text-lg lg:text-xl">
              Ver mais projetos
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
