import AboutSection from "@/components/AboutSection/AboutSection";
import IntroductionSection from "@/components/IntroductionSection/IntroductionSection";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full h-full flex flex-col">
      <IntroductionSection />
      <AboutSection />
    </main>
  );
}
