"use client";
import React from "react";
import MarkdownPreview from "@uiw/react-markdown-preview";

interface IProps {
  mdContent: string;
}

export default function MarkDownView({ mdContent }: IProps) {
  return (
    <MarkdownPreview
      source={mdContent}
      style={{
        padding: 24,
      }}
    />
  );
}
