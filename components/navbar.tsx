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
} from "@nextui-org/react";
import { InstagramIcon, LinkedinIcon } from "lucide-react";
import { GithubIcon } from "./icons";
import { siteConfig } from "@/config/site";
import { usePathname } from "next/navigation";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const path = usePathname();
  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <Navbar
      className="container "
      isMenuOpen={isMenuOpen}
      position="static"
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />

        <NavbarBrand>
          <div className="hover:scale-105 transition-all">
            <Image
              isBlurred
              alt="Pedro Virgilio"
              className=" rounded-lg object-cover "
              disableSkeleton={true}
              src="/logo2.svg"
              width={180}
            />
          </div>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive={path === "/"}>
          <Link color={path === "/" ? "danger" : "foreground"} href="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive={path === "/about"}>
          <Link
            color={path === "/about" ? "danger" : "foreground"}
            href="/about"
          >
            Sobre mim
          </Link>
        </NavbarItem>
        <NavbarItem isActive={path === "/projects"}>
          <Link
            color={path === "/projects" ? "danger" : "foreground"}
            href="/projects"
          >
            Projetos
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color={path === "/contact" ? "danger" : "foreground"} href="#">
            Contato
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <Link isExternal aria-label="Discord" href={siteConfig.links.discord}>
            <LinkedinIcon className="text-default-500" />
          </Link>
          <Link isExternal aria-label="Github" href={siteConfig.links.github}>
            <GithubIcon className="text-default-500" />
          </Link>
          <Link isExternal aria-label="Twitter" href={siteConfig.links.twitter}>
            <InstagramIcon className="text-default-500" />
          </Link>
          {/* <ThemeSwitch /> */}
        </NavbarItem>
        {/* <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem> */}
      </NavbarContent>

      <NavbarMenu>
        {siteConfig.navItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color="foreground"
              href={item.href}
              size="lg"
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
