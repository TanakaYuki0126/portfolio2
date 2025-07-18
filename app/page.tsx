import Image from "next/image";
import localImage from "../public/works/photo/IMGP2507-1.jpg";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Image src={localImage} alt="Main Picture" priority />
    </main>
  );
}
