import {
  Anton,
  Orbitron,
  Fira_Code as FontMono,
  Inter as FontSans,
  Manrope,
  Poppins,
  Inter,
  Space_Mono,
  Quantico,
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

export const interDisplay = localFont({
  src: [
    {
      path: "./fonts/InterDisplay-Black.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "./fonts/InterDisplay-BlackItalic.ttf",
      weight: "900",
      style: "italic",
    },
    {
      path: "./fonts/InterDisplay-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/InterDisplay-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "./fonts/InterDisplay-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/InterDisplay-ExtraBoldItalic.ttf",
      weight: "800",
      style: "italic",
    },
    {
      path: "./fonts/InterDisplay-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/InterDisplay-ExtraLightItalic.ttf",
      weight: "200",
      style: "italic",
    },
    {
      path: "./fonts/InterDisplay-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/InterDisplay-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/InterDisplay-LightItalic.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "./fonts/InterDisplay-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/InterDisplay-MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "./fonts/InterDisplay-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/InterDisplay-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/InterDisplay-SemiBoldItalic.ttf",
      weight: "600",
      style: "italic",
    },
    {
      path: "./fonts/InterDisplay-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "./fonts/InterDisplay-ThinItalic.ttf",
      weight: "100",
      style: "italic",
    },
  ],
});

export const quantico = Quantico({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-quantico",
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
