import { Button } from "@nextui-org/button";
import Icons from "../icons";
import { Image, Link } from "@nextui-org/react";

import { ImgIntroductionSection } from "./ImgIntroductionSection";
import { TextIntroductionSection } from "./TextIntroductionSection";

const IntroductionSection = () => {
  return (
    <section className="bg-[#070707] relative overflow-hidden w-full  min-h-mobile-menu flex flex-col items-center sm:justify-center lg:h-[93dvh]">
      <TextIntroductionSection />
      <ImgIntroductionSection />
    </section>
  );
};

export default IntroductionSection;
