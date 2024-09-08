import { Button } from "@nextui-org/button";
import Icons from "../icons";
import { Image, Link } from "@nextui-org/react";

import { ImgIntroductionSection } from "./ImgIntroductionSection";
import TextIntroductionSection from "./TextIntroductionSection";

const IntroductionSection = () => {
  return (
    <section className="bg-[#070707] w-full h-full relative overflow-hidden">
      <div className="container lg:!px-0 w-full min-h-mobile-menu flex flex-col items-center sm:justify-center sm:items-start lg:h-[93dvh]">
        <TextIntroductionSection />
        <ImgIntroductionSection />
      </div>
    </section>
  );
};

export default IntroductionSection;
