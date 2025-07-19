import Link from "@/components/Header.Link";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  return (
    <header className="w-full">
      <nav
        className={`w-full h-[40px] flex justify-between text-gray-800 items-center`}
      >
        <div>
          <Link href="/" className="text-lg" inactive>
            tayutai - yuki
          </Link>
        </div>
        <div className="flex gap-4 items-center">
          <Link href="/profile">profile</Link>
          <Link href="/photography">photography</Link>
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
