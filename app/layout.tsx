import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@nextui-org/link";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import Nav from "@/components/navbar";
import { manrope } from "@/config/fonts";
import { FooterComponent } from "@/components/Footer";
export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/me.ico",
  },
};

export const viewport: Viewport = {
  // themeColor: [
  //   { media: "(prefers-color-scheme: light)", color: "white" },
  //   { media: "(prefers-color-scheme: dark)", color: "black" },
  // ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="pt-br">
      <head />
      <body className={clsx("w-full h-full bg-black  ", manrope.className)}>
        <Providers themeProps={{ attribute: "class" }}>
          <Nav />
          <main className="w-full min-h-screen bg-black flex flex-col">
            {children}
          </main>
          <FooterComponent />
        </Providers>
      </body>
    </html>
  );
}
