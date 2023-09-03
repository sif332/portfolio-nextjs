"use client";

import { useState } from "react";
import copy from "copy-to-clipboard";

export default function Footer() {
  const [isCopyEmail, setCopyEmail] = useState(false);
  const [isCopyLine, setCopyLine] = useState(false);

  return (
    <div className="flex w-full justify-center bg-[#1b1e25] text-white" id="footerContact">
      <div className="mx-4 my-12 flex w-full flex-col items-center gap-8 lg:max-w-[1400px]">
        <h2 className="font-bold">Contact Me !</h2>
        <div className="md: flex w-full flex-col justify-center gap-8 md:flex-row">
          <button
            className="w-full rounded-md border border-gray-100 bg-gray-100 py-3 text-gray-700 transition-colors hover:bg-gray-700 hover:text-white md:w-72"
            onClick={() => {
              copy("settawut.kaewtima@gmail.com");
              setCopyEmail(true);
            }}
          >
            {isCopyEmail ? "Email Copied!" : "Email"}
          </button>
          <button
            className="w-full rounded-md bg-[#06C755] py-3 transition-colors hover:bg-[#2e8050] md:w-72"
            onClick={() => {
              copy("sif332");
              setCopyLine(true);
            }}
          >
            {isCopyLine ? "Line Copied!" : "Line"}
          </button>
        </div>
      </div>
    </div>
  );
}
