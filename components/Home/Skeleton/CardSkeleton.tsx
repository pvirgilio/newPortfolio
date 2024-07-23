import React from "react";
import { Card, CardBody, CardHeader, Skeleton } from "@nextui-org/react";

export default function CardSkeleton() {
  return (
    <Card
      isPressable
      isHoverable
      className="w-full py-4 bg-gradient-to-r from-[#AD2B49] via-[#45111d] to-transparent"
    >
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <Skeleton className="w-24 rounded-lg mb-2">
          <div className="h-3 w-24 rounded-lg bg-default-100"></div>
        </Skeleton>
        <Skeleton className="w-40 rounded-lg mb-2">
          <div className="h-3 w-40 rounded-lg bg-default-200"></div>
        </Skeleton>
        <Skeleton className="w-32 rounded-lg">
          <div className="h-5 w-32 rounded-lg bg-default-200"></div>
        </Skeleton>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Skeleton className="rounded-xl">
          <div className="h-32 w-full rounded-xl bg-default-200"></div>
        </Skeleton>
      </CardBody>
    </Card>
  );
}
