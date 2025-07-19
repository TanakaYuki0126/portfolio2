import CustomLink from "@/components/Header.Link";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  return (
    <header className="w-full">
      <nav className={`w-full h-[40px] flex justify-between  items-center`}>
        <div>
          <Link
            href={"/"}
            className={`tracking-tight text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition duration-300 text-sm sm:text-lg`}
          >
            tayutai - yuki
          </Link>
        </div>
        <div className="flex gap-2 sm:gap-4 items-center">
          <CustomLink href="/profile">profile</CustomLink>
          <CustomLink href="/photography">photography</CustomLink>
          {/* <Link href="/music" className="text-gray-500 hover:text-gray-700">
            music
          </Link> */}
          {/* <Link href="/blog" className="text-gray-500 hover:text-gray-700">
            blog
          </Link> */}
          {/* <Link href="/contact" className="text-gray-500 hover:text-gray-700">
            contact
          </Link> */}
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
