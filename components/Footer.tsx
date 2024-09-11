"use client";

import React from "react";
import LinkedinIcon from "./Icons/LinkedinIcon";
import { siteConfig } from "@/config/site";
import GithubIcon from "./Icons/GithubIcon";
import InstagramIcon from "./Icons/InstagramIcon";
import Link from "next/link";
import { Image } from "@nextui-org/react";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

export function FooterComponent() {
  return (
    <footer className="bg-gradient-to-b from-[#111111] to-[#070707] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="col-span-1 md:col-span-2">
            <Link
              href="/"
              className="inline-block hover:opacity-80 transition-opacity duration-300"
            >
              <Image
                alt="Pedro Virgilio"
                className="rounded-lg object-cover"
                src="/logo2.svg"
                width={150}
              />
            </Link>
            <p className="mt-4 text-gray-400 text-sm">
              Desenvolvedor Front-end apaixonado por criar experiências web
              incríveis e funcionais. Especializado em React, Next.js e design
              responsivo.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#AD2B49]">
              Links Rápidos
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="hover:text-[#AD2B49] transition-colors duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="hover:text-[#AD2B49] transition-colors duration-300"
                >
                  Projetos
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="hover:text-[#AD2B49] transition-colors duration-300"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#AD2B49]">
              Contato
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <FaEnvelope className="mr-2 text-[#AD2B49]" />
                <a
                  href="mailto:seu-email@exemplo.com"
                  className="hover:underline"
                >
                  pedrovirgilio@outlook.com.br
                </a>
              </li>

              <li className="flex items-center">
                <FaMapMarkerAlt className="mr-2 text-[#AD2B49]" />
                <span>Teresina, Piauí</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Redes Sociais e Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col sm:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-4 sm:mb-0">
            <a
              href="https://www.instagram.com/pedrovirgiliodev/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#AD2B49] transition-colors duration-300"
            >
              <InstagramIcon className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/pvirgilio"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#AD2B49] transition-colors duration-300"
            >
              <GithubIcon className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/pedro-virgilio-661227209/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#AD2B49] transition-colors duration-300"
            >
              <LinkedinIcon className="w-6 h-6" />
            </a>
          </div>
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Pedro Virgilio. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
