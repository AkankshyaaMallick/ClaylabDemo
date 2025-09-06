import React from "react";
import Image from "next/image";
import Heading from "../heading";

interface PartnerImage {
  imgUrl: string;
}

const Partners: React.FC = () => {
  const ImageData: PartnerImage[] = [
    {
      imgUrl:
        "/claylab assets/entrepreneurshipProgram/ourPartners/image 26.png",
    },
    {
      imgUrl:
        "/claylab assets/entrepreneurshipProgram/ourPartners/image 31.png",
    },
    {
      imgUrl:
        "/claylab assets/entrepreneurshipProgram/ourPartners/unltd.png",
    },
    {
      imgUrl:
        "/claylab assets/entrepreneurshipProgram/ourPartners/eivolvefulllogo.png",
    },
    {
      imgUrl:
        "/claylab assets/entrepreneurshipProgram/ourPartners/image 29.png",
    },
    {
      imgUrl:
        "/claylab assets/entrepreneurshipProgram/ourPartners/image 25.png",
    },
    {
      imgUrl:
        "/claylab assets/entrepreneurshipProgram/ourPartners/image 30.png",
    },
    {
      imgUrl:
        "/claylab assets/entrepreneurshipProgram/ourPartners/umang.png",
    },
    {
      imgUrl:
        "/claylab assets/entrepreneurshipProgram/ourPartners/image 32.png",
    },
  ];

  return (
    <div className="flex flex-col gap-4  max-w-screen z-10 mt-8">
      
      <div className="px-4 sm:px-16 ">
        <Heading text="Our Partners" />
      </div>

      <div className="overflow-hidden px-4 sm:px-16 ">
        <div className="flex animate-scroll">
          {/* First set of images */}
          {ImageData.map((data: PartnerImage, index: number) => (
            <Image
              className="h-16 !w-auto mx-8 flex-shrink-0"
              key={`${data.imgUrl}-${index}`}
              src={data.imgUrl}
              height={60}
              width={80}
              alt="partner logo"
            />
          ))}
          {/* Duplicate set for seamless loop */}
          {ImageData.map((data: PartnerImage, index: number) => (
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
    </div>
  );
};

export default Partners;
