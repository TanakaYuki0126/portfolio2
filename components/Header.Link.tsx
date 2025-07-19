"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface HeaderLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  inactive?: boolean;
}

export default function HeaderLink({
  href,
  children,
  className,
}: HeaderLinkProps) {
  const pathname = usePathname();
  const isActive = pathname.startsWith(href);
  return (
    <Link
      href={href}
      className={`hover:underline ${
        isActive && "underline text-gray-700 dark:text-gray-200"
      } underline-offset-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition duration-300 text-xs sm:text-base ${className} leading-0 tracking-tighter sm:tracking-tight`}
    >
      {children}
    </Link>
  );
}
