"use client";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import React from "react";
import CardSkeleton from "./Skeleton/CardSkeleton";

export default function CardComponent() {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return loading ? (
    <CardSkeleton />
  ) : (
    <Card
      isPressable
      isHoverable
      className="py-4 bg-gradient-to-r from-[#AD2B49] via-[#45111d] to-transparent"
    >
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">Sobre mim</p>
        <small className="text-default-600 text-start">
          Conheça mais sobre minha trajetória
        </small>
        <h4 className="font-bold text-large text-start">
          Desenvolvedor Frontend
        </h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="w-full object-cover rounded-xl"
          src="https://nextui.org/images/hero-card-complete.jpeg"
        />
      </CardBody>
    </Card>
  );
}
