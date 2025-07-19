import Image from "next/image";

export default async function Page({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const { key } = await searchParams;
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/photography?id=${id}&key=${key}`
  );
  const result = await data.json();
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative w-full h-[calc(100vh-80px)]">
        <Image
          src={result.url}
          alt="image"
          fill
          objectFit="contain"
          objectPosition="top"
        />
      </div>
    </div>
  );
}
