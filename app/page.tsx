import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen pb-20 gap-8 sm:p-10">
      <header className="w-full">
        <nav className="w-full flex justify-center">
          <div>
            <div>tayutai - yuki</div>
            <div>揺蕩</div>
          </div>
        </nav>
      </header>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          src="/works/photo/IMGP2507-1.jpg"
          alt="Main Picture"
          width={5934}
          height={3945}
        />
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        @2025 tayutai All rights reserved.
      </footer>
    </div>
  );
}
