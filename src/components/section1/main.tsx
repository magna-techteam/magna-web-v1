import Image from "next/image";
import { ArrowIcon } from "@/components/arrowIcon/main";
import { Gilda_Display } from "next/font/google";

const gilda = Gilda_Display({ subsets: ["latin"], weight: "400" });

const Main = () => {
  return (
    <main className="relative min-w-screen h-auto px-5 md:px-[120px] pt-24">
      <div className="absolute bottom-0 -z-10 h-full w-full -mx-5 md:-mx-[120px]">
        <Image
          src="/images/section1-bg.png"
          alt="background-section1"
          objectFit="cover"
          fill
          priority
        />
      </div>
      <div className="flex flex-col gap-12 w-full">
        <h1 className="text-4xl md:text-7xl">
          <p className="mb-3">
            We're <b>Magna</b>
          </p>
          <p>
            Greatness <span className={gilda.className}>Start Here</span>
          </p>
        </h1>
        <p className="text-lg font-medium text-white/70">
          Magna Partners was established in 2024 as a collectively developed
          network of organizations and communities that focused on solving the
          problems of youths: high schoolers, college students, and young
          professionals, with various types of products and services.
        </p>
        <button className="flex gap-3 items-center">
          <p className="text-lg">Contact Us</p>
          <div className="border border-white/30 p-2 rounded-full">
            <ArrowIcon height={14} width={14} />
          </div>
        </button>
        <Image
          src="/images/section1-hero.png"
          alt="section1-hero"
          className="w-full"
          width={300}
          height={300}
        />
      </div>
    </main>
  );
};

export default Main;
