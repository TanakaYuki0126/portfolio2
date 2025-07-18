import Link from "next/link";

interface HeaderLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function HeaderLink({
  href,
  children,
  className,
}: HeaderLinkProps) {
  return (
    <Link
      href={href}
      className={`text-gray-500 hover:text-gray-700 transition duration-300 ${className}`}
    >
      {children}
    </Link>
  );
}
