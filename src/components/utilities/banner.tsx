"use client";

import Image from "next/image";
import React from "react";
import { EB_Garamond } from "next/font/google";
import { motion } from "motion/react";

const EBGaramond = EB_Garamond({
  subsets: ["latin"],
  weight: "700",
});

const Banner = () => {
  const winterText = "WINTER".split("");

  return (
    <div className="flex justify-between items-center px-10 py-20 select-none">
      {/* Left Triangles */}
      <div className="flex flex-col">
        <Image src="/image.png" alt="pic 1" width={175} height={175} />
        <Image src="/image.png" alt="pic 1" width={175} height={175} />
        <Image src="/image.png" alt="pic 1" width={175} height={175} />
      </div>

      {/* Center Text */}
      <div className="text-center space-y-6">
        <h2 className="text-8xl font-bold">
          THIS{" "}
          {winterText.map((letter, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: i * 0.2 }}
              className="bg-gradient-to-r from-sky-400 to-sky-600 bg-clip-text text-transparent drop-shadow-lg"
            >
              {letter}
            </motion.span>
          ))}
        </h2>

        <h2 className="text-7xl font-light">WE BRING BACK</h2>

        <h1 className="text-8xl">
          THE{" "}
          <span
            className={`${EBGaramond.className} relative inline-block text-9xl italic line-through decoration-sky-500`}
          >
            HOOD
          </span>
        </h1>
      </div>

      {/* Right Triangles */}
      <div className="flex flex-col">
        <Image src="/image.png" alt="pic 1" width={175} height={175} />
        <Image src="/image.png" alt="pic 1" width={175} height={175} />
        <Image src="/image.png" alt="pic 1" width={175} height={175} />
      </div>
    </div>
  );
};

export default Banner;
