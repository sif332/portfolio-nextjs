import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-4 bg-[#1b1e2586] text-white">
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">
        <button className="mb-5 mt-2 rounded-md bg-blue-600 px-7 py-2 text-white transition-colors hover:bg-blue-700">
          Return Home
        </button>
      </Link>
    </div>
  );
}
