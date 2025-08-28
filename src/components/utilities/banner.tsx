import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="flex justify-between items-center ml-5 mr-5 mt-15 mb-15 select-none">
      <div>
        <Image src="/vercel.svg" alt="pic 1" width={200} height={200}></Image>
        <Image src="/vercel.svg" alt="pic 1" width={200} height={200}></Image>
        <Image src="/vercel.svg" alt="pic 1" width={200} height={200}></Image>
      </div>
      <div className="relative">
        <h2 className="text-9xl absolute right-[-60px] bottom-1">
          <span className="absolute bottom-40">THIS</span>
          <span className="text-sky-300">WINTER</span>
        </h2>
        <h2 className="text-7xl">
          <span className="absolute bottom-50 left-35">WE</span>
          <span className="absolute bottom-15 left-45">BRING</span>
          <span className="absolute left-40">BACK</span>
        </h2>
        <h1 className="absolute top-15 right-30">
          <span className="text-8xl">THE</span>
          <span className="text-9xl absolute right-[-450px] top-20 line-through">
            HOOD
          </span>
        </h1>
      </div>
      <div>
        <Image src="/vercel.svg" alt="pic 1" width={200} height={200}></Image>
        <Image src="/vercel.svg" alt="pic 1" width={200} height={200}></Image>
        <Image src="/vercel.svg" alt="pic 1" width={200} height={200}></Image>
      </div>
    </div>
  );
};

export default Banner;
