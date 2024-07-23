import AboutMeSection from "@/components/Home/AboutMeSection";
import IntroductionSection from "@/components/Home/IntroductionSection";

export default function Home() {
  return (
    <section className="flex flex-col ">
      <IntroductionSection />
      <AboutMeSection />
    </section>
  );
}
