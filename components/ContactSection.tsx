"use client";
import { Button } from "@nextui-org/button";
import { Input, Textarea } from "@nextui-org/input";
import Image from "next/image";
import React from "react";

export default function ContactSection() {
  return (
    <section id="contact" className="w-full bg-[#070707] pb-20 pt-20  ">
      <div className="container lg:!px-0 w-full h-full flex flex-col items-center justify-center md:flex-row gap-10">
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center text-center gap-5  ">
          <h2 className="font-bold text-white text-2xl sm:text-3xl 2xl:text-4xl">
            Envie uma mensagem
          </h2>
          <p className="max-w-full text-white   md:max-w-lg text-base sm:text-lg 2xl:text-xl">
            Estou sempre aberto a novos projetos e oportunidades de trabalho. Se
            você tem uma ideia ou projeto em mente, entre em contato comigo.
          </p>
          <Image
            src="/Home/ContactSection/contact-me.svg"
            width={500}
            height={500}
            alt="Contact"
          />
        </div>
        <div className="w-full md:w-1/2 ">
          <form
            action="https://api.staticforms.xyz/submit"
            method="post"
            className="w-full flex flex-col gap-2 "
          >
            <div className="w-full flex flex-col gap-2">
              <Input
                isRequired
                required
                isClearable
                type="text"
                name="name"
                label="Nome"
                color="default"
                classNames={{
                  input: "text-base  ",
                  label: "text-base ",
                }}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Input
                isRequired
                required
                isClearable
                name="email"
                type="email"
                color="default"
                label="Email"
                classNames={{
                  input: "text-base",
                  label: "text-base",
                }}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Input
                isRequired
                required
                isClearable
                type="number"
                name="phone"
                label="Número de telefone"
                color="default"
                className="w-full"
                classNames={{
                  input: "text-base",
                  label: "text-base",
                }}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Textarea
                isRequired
                required
                name="message"
                color="default"
                classNames={{
                  input: "min-h-[200px] text-base",
                  label: "text-base",
                }}
                label="Mensagem"
                labelPlacement="inside"
                placeholder="Insira sua mensagem"
                className="w-full "
              />
            </div>
            <Button
              className="text-base bg-[#AD2B49]"
              variant="ghost"
              type="submit"
            >
              Enviar
            </Button>
            <input type="text" name="honeypot" className="hidden"></input>
            <input
              type="hidden"
              name="accessKey"
              value={process.env.STATIC_ACCESS_KEY}
            />
            <input
              type="hidden"
              name="redirectTo"
              value="https://pedrovirgilio.vercel.app/thanks"
            />
          </form>
        </div>
      </div>
    </section>
  );
}
