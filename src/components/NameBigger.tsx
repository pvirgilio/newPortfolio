import React from "react";

export const NameBigger = ({ text = "" }) => {
  return (
    <div className={` flex items-center`}>
      <span className="text-[#8C52FF] text-2xl font-bold">&lt;</span>
      <h2 className="text-black text-4xl font-bold">{text}</h2>
      <span className="text-[#8C52FF] text-2xl font-bold">&gt;</span>
    </div>
  );
};
