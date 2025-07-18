import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/photography`
  );
  const result = await data.json();
  const items = result.Items;

  return (
    <div className="w-full gap-4 flex flex-col items-center">
      <p>Photography</p>
      <div className="w-full flex flex-wrap justify-center">
        {items.map((item) => {
          return (
            <div
              key={item.id.S}
              className="relative flex justify-center items-center m-5 w-[300px] h-[300px]"
            >
              <Link
                href="/"
                className="w-auto h-auto hover:opacity-50 transition duration-300"
              >
                <Image
                  src={item.url.S}
                  alt="sample"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
