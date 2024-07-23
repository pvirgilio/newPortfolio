import Image from "next/image";
import React from "react";

export default function PrismaIcon({ className = "" }) {
  return (
    <Image
      alt="Prisma"
      className={className}
      src="https://raw.githubusercontent.com/prisma/presskit/main/Assets/Prisma-LightSymbol.svg"
      width={12}
      height={12}
    />
  );
}
