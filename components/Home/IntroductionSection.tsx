"use client";
import { Button } from "@nextui-org/button";
import Icons from "./icons";
import { Image, Link } from "@nextui-org/react";
import { useEffect } from "react";

export function IntroductionSection() {
  useEffect(() => {
    function setDynamicHeight() {
      const vh = window.innerHeight * 0.01;

      document.documentElement.style.setProperty("--vh", `${vh}px`);
    }
    // Set the height initially
    setDynamicHeight();
    // Update the height on resize
    window.addEventListener("resize", setDynamicHeight);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", setDynamicHeight);
    };
  }, []);

  return (
    <section className="relative overflow-hidden w-full bg-background min-h-mobile-menu flex flex-col items-center sm:justify-center lg:h-[93dvh]">
      <article className="w-full h-full container flex flex-col items-center pt-4 z-30 sm:justify-center  sm:items-start">
        <div className="flex justify-center flex-wrap gap-2 text-3xl font-bold text-center lg:text-4xl xl:text-5xl">
          <h1 className="">Olá, meu nome é</h1>
          <h2 className="whitespace-nowrap ">Pedro Virgilio</h2>
        </div>
        <div className="mt-2 flex justify-center flex-wrap gap-1 text-xl font-medium text-center lg:text-2xl xl:text-3xl">
          <h2>Desenvolvedor</h2>
          <h2 className="whitespace-nowrap">Front-End</h2>
        </div>

        <p className="text-[#e3e3e3] pt-5 text-center max-w-md sm:text-start lg:text-lg xl:text-xl">
          Apaixonado por tecnologia e com experiência na construção de
          aplicações web modernas.
        </p>
        <Button
          showAnchorIcon
          as={Link}
          className="p-4 mt-5 bg-white text-black font-semibold text-small lg:text-base xl:text-[16px]"
          href="/about"
          variant="solid"
        >
          Entre em contato
        </Button>
        <Icons />
      </article>

      <div className="absolute bottom-0 z-20 right-0 h-[450px] sm:h-[550px] md:h-[650px] lg:h-[650px] 3xl:h-[800px]">
        <Image
          alt="Pedro Virgilio"
          className="w-full h-full rounded-lg object-cover "
          disableSkeleton={true}
          src="/me.png"
          width={450}
        />
      </div>
      <div className="absolute -bottom-64 sm:top-0 sm:-right-0 z-0">
        <Image
          alt="Pedro Virgilio"
          className="rounded-lg object-cover sm:w-[1200px] sm:h-[1200px] "
          disableSkeleton={true}
          src="/Ellipse 1.png"
          width={850}
          height={850}
        />
      </div>
      <div className="absolute -bottom-44 -right-44 2xl:top-0 2xl:-right-96 z-10">
        <Image
          alt="Pedro Virgilio"
          className="rounded-lg object-cover 2xl:w-[1200px] 2xl:h-[1200px] "
          disableSkeleton={true}
          src="/Ellipse 2.png"
          width={850}
          height={850}
        />
      </div>
    </section>
  );
}
