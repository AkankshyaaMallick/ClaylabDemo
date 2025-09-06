import React from "react";
import Image from "next/image";
import Heading from "../heading";

interface PartnerImage {
  imgUrl: string;
  link: string;
}

const Partners: React.FC = () => {
  const ImageData: PartnerImage[] = [
    {
      imgUrl: "/claylab assets/entrepreneurshipProgram/ourPartners/image 26.png",
      link: "https://www.teachforindia.org/",
    },
    {
      imgUrl: "/claylab assets/entrepreneurshipProgram/ourPartners/image 31.png",
      link: "https://www.thecircleindia.org/",
    },
    {
      imgUrl: "/claylab assets/entrepreneurshipProgram/ourPartners/unltd.png",
      link: "https://unltdindia.org/",
    },
    {
      imgUrl: "/claylab assets/entrepreneurshipProgram/ourPartners/eivolvefulllogo.png",
      link: "https://www.eivolve.org",
    },
    {
      imgUrl: "/claylab assets/entrepreneurshipProgram/ourPartners/image 29.png",
      link: "https://nanakmattapublicschool.org/",
    },
    {
      imgUrl: "/claylab assets/entrepreneurshipProgram/ourPartners/image 25.png",
      link: "https://shiningstarschoolramnagar.com/",
    },
    {
      imgUrl: "/claylab assets/entrepreneurshipProgram/ourPartners/image 30.png",
      link: "https://www.academyglorious.com/",
    },
    {
      imgUrl: "/claylab assets/entrepreneurshipProgram/ourPartners/umang.png",
      link: "https://www.umangharyana.org.in/",
    },
    {
      imgUrl: "/claylab assets/entrepreneurshipProgram/ourPartners/image 32.png",
      link: "https://www.schaeffler.co.in/en/",
    },
  ];

  return (
    <div className="flex flex-col gap-4 max-w-screen z-10 mt-8">
      <div className="px-4 sm:px-16">
        <h2 className="font-[var(--font-kind-sans)] text-2xl sm:text-5xl md:text-4xl underline text-gray-900 tracking-tight leading-snug mb-8">
        Our Partners & Supporters
      </h2>
      </div>

      <div className="overflow-hidden px-4 sm:px-16 group">
        <div className="flex animate-scroll group-hover:[animation-play-state:paused]">
          {/* First set of images */}
          {ImageData.map((data: PartnerImage, index: number) => (
            <a
              key={`${data.imgUrl}-${index}`}
              href={data.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mx-8 flex-shrink-0"
            >
              <Image
                className="h-16 !w-auto"
                src={data.imgUrl}
                height={60}
                width={80}
                alt="partner logo"
              />
            </a>
          ))}
          {/* Duplicate set for seamless loop */}
          {ImageData.map((data: PartnerImage, index: number) => (
            <a
              key={`${data.imgUrl}-duplicate-${index}`}
              href={data.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mx-8 flex-shrink-0"
            >
              <Image
                className="h-16 !w-auto"
                src={data.imgUrl}
                height={60}
                width={80}
                alt="partner logo"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
