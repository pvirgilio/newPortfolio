import { CardsProjectSection } from "@/components/Home/Projects/CardProject";
import { title } from "@/components/primitives";
import clsx from "clsx";
import { motion } from "framer-motion";
export default function DocsPage() {
  return (
    <section className="w-full h-full my-10 lg:my-20">
      <div className="w-full container lg:px-0 ">
        <div className="w-full flex justify-center">
          <h1 className={clsx(title(), "")}>Projetos & Experiências</h1>
        </div>
        <CardsProjectSection />
      </div>
    </section>
  );
}
