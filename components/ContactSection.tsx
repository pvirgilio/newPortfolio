"use client";
import { Button } from "@nextui-org/button";
import { Input, Textarea } from "@nextui-org/input";
import Image from "next/image";
import React from "react";

export default function ContactSection() {
  return (
    <section id="contact" className="w-full  bg-gray-950 py-20 ">
      <div className="container lg:px-0 w-full h-full flex flex-col items-center justify-center md:flex-row gap-10">
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center text-center gap-5  ">
          <h2 className="text-4xl font-bold text-white xl:text-6xlt">
            Envie uma mensagem
          </h2>
          <p className="max-w-full md:max-w-lg text-medium ">
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
                classNames={{
                  input: "text-medium",
                  label: "text-medium",
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
                label="Email"
                classNames={{
                  input: "text-medium",
                  label: "text-medium",
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
                className="w-full"
                classNames={{
                  input: "text-medium",
                  label: "text-medium",
                }}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Textarea
                isRequired
                required
                name="message"
                classNames={{
                  input: "min-h-[200px] text-medium",
                  label: "text-medium",
                }}
                label="Mensagem"
                labelPlacement="inside"
                placeholder="Insira sua mensagem"
                className="w-full "
              />
            </div>
            <Button variant="ghost" type="submit">
              Enviar
            </Button>
            <input type="text" name="honeypot" className="hidden"></input>
            <input
              type="hidden"
              name="accessKey"
              value={process.env.NEXT_PUBLIC_STATIC_FORM_ACCESS_KEY}
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
