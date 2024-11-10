import Usa from "@/components/usa-map";
import { Anton_SC } from "next/font/google";

const Anton = Anton_SC({
  subsets: ["latin"],
  display: "swap",
  weight: "400"
});

export default function Home() {

  return (
    <div className="flex flex-col m-8 md:m-16">

      <main className="flex flex-col justify-center items-center w-full h-full">

        <h1 className={"text-5xl " + Anton.className}>Places I&apos;ve Been</h1>
        <Usa />

      </main>

      {/* <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      </footer> */}

    </div>
  );
}
