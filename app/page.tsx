import ContactSection from "@/components/ContactSection";
import AboutMeSection from "@/components/Home/AboutMeSection";
import IntroductionSection from "@/components/Home/IntroductionSection";
import ProjectSection from "@/components/Home/Projects/ProjectSection";
import { ServicesSection } from "@/components/Home/ServicesSection/ServicesSection";
import SkillSection from "@/components/Home/SkillSection/SkillSection";

export default function Home() {
  return (
    <>
      <IntroductionSection />
      <AboutMeSection />
      <SkillSection />
      <ServicesSection />
      <ProjectSection />
      <ContactSection />
    </>
  );
}
