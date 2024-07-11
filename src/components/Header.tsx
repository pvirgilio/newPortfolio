import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="bg-purple-l w-full shadow-2xl">
      <article className="container w-full  text-white flex items-center justify-between py-4 max-lg:pt-5 ">
        <Link href="/" className="">
          <Image
            src="/logo2.png"
            alt="Logo"
            className="max-lg:w-[150px] 2xl:w-[160px] w-full hover:scale-105 transition-all duration-300"
            width={130}
            height={130}
          />
        </Link>

        <nav className="max-lg:hidden">
          <ul className="flex items-center gap-10">
            <li>
              <Link className="text-md font-normal whitespace-nowrap" href="">
                Início
              </Link>
            </li>
            <li>
              <Link
                className="text-md font-normal whitespace-nowrap"
                href="#aboutSection"
              >
                Sobre mim
              </Link>
            </li>
            <li>
              <Link className="text-md font-normal whitespace-nowrap" href="">
                Projetos
              </Link>
            </li>
            <li>
              <Link className="text-md font-normal whitespace-nowrap" href="">
                Contato
              </Link>
            </li>
          </ul>
        </nav>
      </article>
    </header>
  );
}
