import { CircularProgress } from "@nextui-org/react";
import React from "react";

interface CircularSkillsProps {
  label: string;
  value: number;
}

export function CircularSkills(props: CircularSkillsProps) {
  return (
    <CircularProgress
      value={props.value}
      label={props.label}
      classNames={{
        svg: "w-32 h-32",
        label: "font-medium",
        value: "text-md",
        indicator: "text-[#AD2B49]",
      }}
      formatOptions={{ style: "percent" }}
      showValueLabel={true}
    />
  );
}
