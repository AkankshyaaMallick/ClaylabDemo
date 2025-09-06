

"use client";

import Image from "next/image";

// import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative w-full h-[60vh] sm:h-screen flex items-center overflow-hidden">
      <Image
        src="/claylab assets/mentorshipProgram/hero-01.jpg"
        alt="Background"
        fill
        className="object-cover object-center "
      />

      <div className="absolute inset-0 bg-black/70 "></div>

      <div className="flex flex-col gap-4 sm:gap-6 mx-4 sm:mx-8 md:mx-14 mt-16 sm:mt-32 text-start max-w-full sm:max-w-4xl z-10">

        <h1 className="text-white font-sourceSans font-thin leading-tight">
          <span className="block text-2xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-7xl">
            One Mentor. One Learner.{" "}
          </span>
          <span className="block text-2xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-7xl mt-2 sm:mt-3 lg:mt-4">
            {" "}
            A Journey That Changes
          </span>
          <span className="block text-2xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-7xl mt-2 sm:mt-3 lg:mt-4">
            Both.
          </span>
        </h1>

        <p className="text-white/80 font-sourceSans font-thin max-w-full sm:max-w-2xl lg:max-w-3xl text-sm sm:text-lg md:text-xl lg:text-2xl leading-relaxed">
          At Claylab, mentorship isn&apos;t just support — it&apos;s a
          relationship of trust, empathy, and joyful discovery. One mentor. One
          learner. A world of possibility.
        </p>

        {/* <Button className=" bg-gradient-to-r from-green-800 to-green-600 hover:from-green-700 hover:to-green-500 text-white rounded-md transition-all duration-300 transform hover:scale-105 w-56 xs:w-auto px-6 sm:px-8 md:px-12 lg:px-16 py-3 sm:py-4 lg:py-5 text-sm sm:text-base lg:text-lg font-medium">
          Join us
        </Button> */}
      </div>
    </section>
  );
}
