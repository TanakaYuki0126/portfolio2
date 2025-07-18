import Image from "next/image";
import localImage from "../public/works/photo/IMGP2507-1.jpg";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-mono flex flex-col items-center gap-4 my-4 mx-10 md:mx-20">
      <header className="w-full">
        <nav className="w-full flex justify-between text-gray-800 items-center">
          <div>
            <Link
              href="/"
              className="text-lg text-gray-500 hover:text-gray-700"
            >
              tayutai - yuki
            </Link>
          </div>
          <div className="flex gap-4">
            <Link href="/" className="text-gray-500 hover:text-gray-700">
              photography
            </Link>
            <Link href="/" className="text-gray-500 hover:text-gray-700">
              music
            </Link>
            <Link href="/" className="text-gray-500 hover:text-gray-700">
              blog
            </Link>
          </div>
        </nav>
      </header>
      <main className="flex flex-col">
        <Image src={localImage} alt="Main Picture" priority />
      </main>
      <footer className="flex flex-wrap items-center justify-center text-gray-500 text-xs">
        @2025 tayutai All rights reserved.
      </footer>
    </div>
  );
}
