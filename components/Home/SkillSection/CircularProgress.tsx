import { CircularProgress, Progress } from "@nextui-org/react";
import React from "react";

interface CircularSkillsProps {
  label: string;
  value: number;
}

export function CircularSkills(props: CircularSkillsProps) {
  return (
    <Progress
      label={props.label}
      classNames={{
        track: "bg-[#1E1E1E]",
        base: "w-full ",
        label: "font-medium",
        value: "text-md",
        indicator: "bg-[#AD2B49]",
      }}
      value={props.value}
      color="success"
      showValueLabel={true}
      className=""
    />
  );
}
