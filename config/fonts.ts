import {
  Anton,
  Orbitron,
  Fira_Code as FontMono,
  Inter as FontSans,
  Manrope,
  Poppins,
  Inter,
  Space_Mono,
} from "next/font/google";

import localFont from "next/font/local";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-sans",
});

export const anton = Anton({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-anton",
});

export const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-orbitron",
});

export const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const blenderPro = localFont({
  src: [
    {
      path: "./Blender-Pro-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "./Blender-Pro-Book.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Blender-Pro-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./BlenderPro-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
});

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});
