import React from "react";
import CardProject from "./CardProject";
import Link from "next/link";
import PrefixSection from "../PrefixSection";
import { Divider } from "@nextui-org/react";

export default function ProjectSection() {
  return (
    <section className="container mt-40 lg:px-0 flex flex-col gap-5 pb-20  ">
      <div className="w-full">
        <PrefixSection text="../projects" classe="text-start -mb-10" />
        <h2 className="text-2xl font-bold text-white xl:text-3xl text-start">
          Principais Projetos
        </h2>
        <Divider className="my-4 " />
      </div>
      <article className=" w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-y-5 justify-items-center items-center">
        <CardProject
          model="Landing page"
          text="Savant Web site"
          image="/Home/ProjectSection/savantsitemockup.png"
        />
        {/* <CardProject
          model="Landing page"
          text="Savant Web store"
          image="/Home/ProjectSection/store.png"
        /> */}
        <CardProject
          model="Landing page"
          text="Clínica Odontológica"
          image="/Home/ProjectSection/odontosite.png"
        />
        <CardProject
          model="Landing page"
          text="Site Social Media"
          image="/Home/ProjectSection/linkspagemockup.png"
        />
        {/* <CardProject model="Landing page" text="Savant Web" image=""/> */}
        {/* <CardProject
          model="Landing page"
          text="Savant Web"
          image="/Home/ProjectSection/savantm.png"
        /> */}
      </article>
      <div className="w-full mt-5 flex justify-center">
        <Link
          className="w-fit my-5 font-semibold border border-transparent hover:border-[#AD2B49] transition duration-300 p-2 rounded-full"
          href={"#"}
        >
          <span className="inline-block">Ver mais projetos</span>
        </Link>
      </div>
    </section>
  );
}
