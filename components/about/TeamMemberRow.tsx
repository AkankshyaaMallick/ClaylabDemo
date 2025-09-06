"use client";

import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

interface Props {
  member: {
    name: string;
    role: string;
    image: string;
  };
  index: number;
  activeIndex: number;
  setActiveIndex: (index: number) => void;
  manualOverride: boolean;
  setManualOverride: (value: boolean) => void;
}

export default function TeamMemberRow({
  member,
  index,
  activeIndex,
  setActiveIndex,
  manualOverride,
  setManualOverride,
}: Props) {
  const { ref, inView } = useInView({
    threshold: 1,
    rootMargin: "-40% 0px -40% 0px",
  });

  useEffect(() => {
    if (!manualOverride && inView && activeIndex !== index) {
      setManualOverride(false);
      if (index > activeIndex) setActiveIndex(activeIndex + 1);
      else if (index < activeIndex) setActiveIndex(activeIndex - 1);
    }
  }, [inView]);

  const handleClick = () => {
    setActiveIndex(index);
    setManualOverride(activeIndex === index ? !manualOverride : true);
  };

  const isActive = activeIndex === index;

  return (
    <div
      ref={ref}
      onClick={handleClick}
      className={`relative w-full px-4 py-6 cursor-pointer transition-colors duration-300 ${
        isActive ? "bg-green-50" : "hover:bg-green-50"
      }`}
    >
      {/* Name & Role Row */}
      <div className="flex items-center justify-between">
        <span className={`text-lg md:text-xl font-medium ${isActive ? "text-green-800 font-bold" : "text-black"}`}>
          {member.name}
        </span>
        <span className={`text-sm md:text-base text-right ${isActive ? "text-green-800 font-bold" : "text-black"}`}>
          {member.role}
        </span>
      </div>

      {/* Bottom Border Line */}
      <div className="absolute bottom-0 left-[15%] right-[15%] h-[1px] bg-gradient-to-r from-[#FFFFFF] via-[#474747] to-[#FFFFFF]" />

      {/* Active Image (Mobile: below row, Desktop: floating inline) */}
      {isActive && (
        <>
          {/* Desktop Image */}
          <div className="hidden md:block absolute top-[30%] left-[45%] transform -translate-y-1/2 z-10 w-[200px] h-[200px] rounded-xl overflow-hidden shadow-md transition-all duration-300">
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Mobile Image - below line */}
          <div className="md:hidden mt-4 mb-6 w-full flex justify-center transition-all duration-500">
            <div className="w-[160px] h-[160px] rounded-xl overflow-hidden shadow-md bg-green-100 bg-opacity-50">
              <Image
                src={member.image}
                alt={member.name}
                width={160}
                height={160}
                className="object-cover rounded-xl transition-all duration-500"
                priority
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
}