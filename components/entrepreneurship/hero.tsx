"use client";

import Image from "next/image";

// import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    // <section className="relative w-full h-[80vh] sm:h-screen flex flex-col items-center overflow-hidden">
    <section className="relative w-full h-[80vh] sm:h-screen flex flex-col items-center overflow-hidden">
      <Image
        src="/claylab assets/general/HeroSectionImages/hero.png"
        alt="Background"
        fill
        className="object-cover object-center "
      />

      <div className="absolute inset-0 bg-black/60 "></div>

      {/* <div className="flex flex-col gap-6 sm:gap-8 m-auto w-full px-4 sm:px-8 md:px-0"> */}

      <div className="flex flex-col gap-6 sm:gap-8 m-auto w-full px-4 sm:px-8 md:px-0">
        <div className="flex flex-col gap-4 mx-0 sm:mx-8 md:mx-14 mt-20 sm:mt-16 text-start max-w-full sm:max-w-4xl z-10">
          <p
            style={{ fontWeight: "100" }}
            className="text-3xl sm:text-5xl md:text-7xl text-white mb-4 sm:mb-6 leading-tight font-sourceSans font-thin"
          >
            Build • Lead • Change
          </p>
          <p
            style={{ fontWeight: "100" }}
            className="text-base sm:text-2xl md:text-3xl text-white/90 mb-6 sm:mb-8 max-w-full sm:max-w-lg font-sourceSans font-thin"
          >
            The School of Entrepreneurship empowers school students to become
            solution-builders — through handson workshops, real-world projects,
            and 1:1 mentorship.
          </p>
          {/* <Button className="bg-gradient-to-r from-green-800 to-green-600 hover:bg-gradient-to-r hover:from-green-700 hover:to-green-500 text-white rounded-md w-full sm:w-min px-8 sm:px-16 py-3 sm:py-4 text-base sm:text-lg">
            Join us
          </Button> */}
        </div>

        {/* <div className="flex flex-col gap-4 text-center max-w-screen z-10 mt-8">
          <p className="text-center text-base sm:text-xl md:text-2xl font-sourceSans font-thin w-full text-white ">
            Our Partners
          </p>

          <div className="flex p-4 px-16 justify-around">

            {ImageData.map((data) => {
              return (
                <Image
                  className={"h-16 !w-auto"}
                  key={data.imgUrl}
                  src={data.imgUrl}
                  height={60}
                  width={80}
                  alt={"partner logo"}
                />
              );
            })}

          </div>{" "}
        </div> */}

        {/* <div className="flex flex-col gap-4 text-center max-w-screen z-10 mt-8">
          <p className="text-center text-base sm:text-xl md:text-2xl font-sourceSans font-thin w-full text-white ">
            Our Partners
          </p>

          <div className="overflow-hidden px-4">
            <div className="flex animate-scroll">
              {/* First set of images */}
              {/* {ImageData.map((data, index) => (
                <Image
                  className="h-16 !w-auto mx-8 flex-shrink-0"
                  key={`${data.imgUrl}-${index}`}
                  src={data.imgUrl}
                  height={60}
                  width={80}
                  alt="partner logo"
                />
              ))} */}
              {/* Duplicate set for seamless loop */}
              {/* {ImageData.map((data, index) => (
                <Image
                  className="h-16 !w-auto mx-8 flex-shrink-0"
                  key={`${data.imgUrl}-duplicate-${index}`}
                  src={data.imgUrl}
                  height={60}
                  width={80}
                  alt="partner logo"
                />
              ))}
            </div>
          </div>
        </div>   */}


        
      </div>
    </section>
  );
}
