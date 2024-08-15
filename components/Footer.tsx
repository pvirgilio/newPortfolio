"use client";

import React from "react";
import LinkedinIcon from "./Icons/LinkedinIcon";
import { siteConfig } from "@/config/site";
import GithubIcon from "./Icons/GithubIcon";
import InstagramIcon from "./Icons/InstagramIcon";
import Link from "next/link";
import { Image } from "@nextui-org/react";

export function FooterComponent() {
  return (
    <footer className="bg-[#070707]">
      <div className="container mx-auto w-full p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="hover:scale-105 transition-all">
              <Image
                isBlurred
                alt="Pedro Virgilio"
                className=" rounded-lg object-cover "
                disableSkeleton={true}
                src="/logo2.svg"
                width={180}
              />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 ">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Páginas
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link href="/" className="hover:underline">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="hover:underline">
                    Projetos
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Me acompanhe
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link
                    target="_blank"
                    href="https://github.com/pvirgilio"
                    className="hover:underline "
                  >
                    Github
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    href="https://www.linkedin.com/in/pedro-virgilio-661227209/"
                    className="hover:underline"
                  >
                    Linkedin
                  </Link>
                </li>
              </ul>
            </div>
            {/* <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Legal
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link href="#" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Terms &amp; Conditions
                  </Link>
                </li>
              </ul>
            </div> */}
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024 Pedro Virgilio™ . All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <Link
              target="_blank"
              href="https://www.instagram.com/pedrovirgiliodev/"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <InstagramIcon className="w-4 h-4" />
              <span className="sr-only">Instagram account</span>
            </Link>
            <Link
              target="_blank"
              href="https://github.com/pvirgilio"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">GitHub account</span>
            </Link>
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/pedro-virgilio-661227209/"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <LinkedinIcon className="w-4 h-4" />
              <span className="sr-only">Linkedin account</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
