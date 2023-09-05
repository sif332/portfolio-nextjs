"use client";
import React from "react";
import MarkdownPreview from "@uiw/react-markdown-preview";

interface IProps {
  mdContent: string;
}

export default function MarkDownView({ mdContent }: IProps) {
  return (
    <div className="w-full bg-[#0d1117] px-6 py-12 md:px-16 lg:px-24">
      <MarkdownPreview source={mdContent} />
    </div>
  );
}
