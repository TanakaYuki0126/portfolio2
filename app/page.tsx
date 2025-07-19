import Image from "next/image";
import localImage from "../public/works/photo/IMGP2507-1.jpg";

export default function Home() {
  return (
    <main className="flex flex-col items-center h-[calc(100vh-80px)] relative">
      <Image
        src={localImage}
        alt="Main Picture"
        priority
        objectFit="contain"
        objectPosition="top"
        fill
      />
    </main>
  );
}
