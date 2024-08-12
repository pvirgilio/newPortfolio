import {
  Anton,
  Orbitron,
  Fira_Code as FontMono,
  Inter as FontSans,
  Manrope,
  Poppins,
  Inter,
} from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
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
