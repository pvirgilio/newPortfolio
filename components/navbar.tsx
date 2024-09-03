"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
  Image,
  Divider,
} from "@nextui-org/react";
import { InstagramIcon, LinkedinIcon } from "lucide-react";
import { GithubIcon } from "./icons";
import { siteConfig } from "@/config/site";
import { usePathname } from "next/navigation";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [mobileMenu, setMobileMenu] = React.useState(false);
  const path = usePathname();
  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <Navbar
      className=" container  backdrop-blur-md  w-full lg:px-5 lg:rounded-full lg:top-3  "
      isMenuOpen={isMenuOpen}
      position="sticky"
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />

        <NavbarBrand>
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
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4 " justify="center">
        <div className="container-btn">
          <Link href="/" className="radio-wrapper">
            <input className="input" name="btn" id="value-1" type="radio" />
            <div className="btn">
              <span aria-hidden="true">_</span>Home
              <span className="btn__glitch" aria-hidden="true">
                _Home🦾
              </span>
              <label className="number" htmlFor="value-1">
                r1
              </label>
            </div>
          </Link>
          <Link href="/projects" className="radio-wrapper">
            <input
              className="input"
              name="btn"
              id="value-2"
              defaultChecked={true}
              type="radio"
            />
            <div className="btn">
              _Projetos<span aria-hidden="true">_</span>
              <span className="btn__glitch" aria-hidden="true">
                _P_r_o_j_e_t_o_s
              </span>
              <label className="number" htmlFor="value-2">
                r2
              </label>
            </div>
          </Link>
          <Link href="/#contact" className="radio-wrapper">
            <input className="input" name="btn" id="value-3" type="radio" />
            <div className="btn">
              Contato
              <span aria-hidden="true" />
              <span className="btn__glitch" aria-hidden="true">
                Contato_
              </span>
              <label className="number" htmlFor="value-3">
                r3
              </label>
            </div>
          </Link>
        </div>
      </NavbarContent>
      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <Link
            isExternal
            aria-label="Linkedin"
            href={siteConfig.links.linkedin}
          >
            <LinkedinIcon className="text-default-500" />
          </Link>
          <Link isExternal aria-label="Github" href={siteConfig.links.github}>
            <GithubIcon className="text-default-500" />
          </Link>
          <Link
            isExternal
            aria-label="Twitter"
            href={siteConfig.links.instagram}
          >
            <InstagramIcon className="text-default-500" />
          </Link>
          {/* <ThemeSwitch /> */}
        </NavbarItem>
        {/* <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem> */}
      </NavbarContent>

      <NavbarMenu draggable>
        {siteConfig.navItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color="foreground"
              href={item.href}
              size="lg"
              onClick={handleCloseMenu}
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
        <NavbarMenuItem className="flex items-center gap-2 ">
          <Link
            isExternal
            aria-label="Linkedin"
            href={siteConfig.links.linkedin}
          >
            <LinkedinIcon className="text-default-500 w-7 h-7" />
          </Link>
          <Link isExternal aria-label="Github" href={siteConfig.links.github}>
            <GithubIcon className="text-default-500 w-7 h-7" />
          </Link>
          <Link
            isExternal
            aria-label="Twitter"
            href={siteConfig.links.instagram}
          >
            <InstagramIcon className="text-default-500 w-7 h-7" />
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
