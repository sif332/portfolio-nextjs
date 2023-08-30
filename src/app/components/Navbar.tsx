import Image from "next/image";
import Link from "next/link";
import LogoImage from "../assets/xaipher-logo.png";

export default function Navbar() {
  return (
    <div className="h-20 w-full">
      <div className="m-auto flex h-full max-w-[1200px] items-center justify-between px-6 font-light">
        <Link href={"/"}>
          <Image
            className="w-[120px]"
            src={LogoImage}
            width={200}
            height={200}
            alt="Xai Logo"
          />
        </Link>

        <div className="my-2 flex h-fit items-center gap-4">
          <Link
            className="flex h-16 w-24 items-center justify-center text-neutral-700 transition-colors hover:text-blue-500"
            href={"/about"}
          >
            About
          </Link>
          <Link
            className="flex h-16 w-24 items-center justify-center text-neutral-700 transition-colors hover:text-blue-500"
            href={"/process"}
          >
            Process
          </Link>
          <Link
            className="flex h-16 w-24 items-center justify-center text-neutral-700 transition-colors hover:text-blue-500"
            href={"/work"}
          >
            Work
          </Link>
          <Link href={"/contact"}>
            <button className="rounded-md bg-blue-600 px-7 py-2 text-white transition-colors hover:bg-blue-700">
              Contact
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
