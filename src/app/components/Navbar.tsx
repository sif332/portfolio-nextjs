"use client";

import Image from "next/image";
import Link from "next/link";
import LogoImage from "../../assets/xaipher-logo.png";
import MenuIcon from "../../assets/icons/MenuIcon";
import { useState } from "react";
import CloseIcon from "../../assets/icons/CloseIcon";
import { useRouter, usePathname } from "next/navigation";
import style from "../styles.module.css";

export default function Navbar() {
  const [showMenu, setMenu] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  function scrollToContact() {
    if (pathname !== "/") {
      router.push("/#footerContact");
      return;
    }
    const element = document.getElementById("footerContact");
    element?.scrollIntoView({ behavior: "smooth" });
  }
  function scrollToToolStack() {
    if (pathname !== "/") {
      router.push("/#toolstack");
      return;
    }
    const element = document.getElementById("toolstack");
    element?.scrollIntoView({ behavior: "smooth" });
  }
  function scrollToToolAbout() {
    if (pathname !== "/") {
      router.push("/#about");
      return;
    }
    const element = document.getElementById("about");
    element?.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <div className="relative h-20 w-full">
      <div className="m-auto flex h-full max-w-[1200px] items-center justify-between px-6 font-light">
        <Link href={"/"}>
          <Image
            className="w-[120px]"
            src={LogoImage}
            width={200}
            height={200}
            alt="LogoImage"
          />
        </Link>
        <div className="my-2 hidden h-fit items-center gap-4 lg:flex">
          <div
            className="flex h-16 w-24 cursor-pointer items-center justify-center text-neutral-700 transition-colors hover:text-blue-500"
            onClick={scrollToToolAbout}
          >
            About
          </div>
          <div
            className="flex h-16 w-24 cursor-pointer items-center justify-center text-neutral-700 transition-colors hover:text-blue-500"
            onClick={scrollToToolStack}
          >
            Tools
          </div>
          <Link
            className="flex h-16 w-24 items-center justify-center text-neutral-700 transition-colors hover:text-blue-500"
            href={"/project"}
          >
            Project
          </Link>
          <div>
            <button
              className="rounded-md bg-blue-600 px-7 py-2 text-white transition-colors hover:bg-blue-700"
              onClick={scrollToContact}
            >
              Contact
            </button>
          </div>
        </div>
        <div
          className="cursor-pointer lg:hidden"
          onClick={() => setMenu((prev) => !prev)}
        >
          {showMenu ? <CloseIcon size={36} /> : <MenuIcon size={36} />}
        </div>
      </div>
      {showMenu && (
        <div
          className={`absolute top-0 z-10 mt-20 flex w-full flex-col items-center bg-white lg:hidden ${style.slideinfwdcenter2}`}
          onClick={() => {
            setMenu(false);
          }}
        >
          <div
            className="flex h-16 w-full cursor-pointer items-center justify-center text-neutral-700 transition-colors hover:text-blue-500"
            onClick={scrollToToolAbout}
          >
            About
          </div>
          <div
            className="flex h-16 w-full cursor-pointer items-center justify-center text-neutral-700 transition-colors hover:text-blue-500"
            onClick={scrollToToolStack}
          >
            Tools
          </div>
          <Link
            className="flex h-16 w-full items-center justify-center text-neutral-700 transition-colors hover:text-blue-500"
            href={"/project"}
          >
            Project
          </Link>
          <div>
            <button
              className="mb-5 mt-2 rounded-md bg-blue-600 px-7 py-2 text-white transition-colors hover:bg-blue-700"
              onClick={scrollToContact}
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
