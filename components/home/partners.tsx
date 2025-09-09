import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface PartnerImage {
  imgUrl: string;
  link: string;
}

const Partners: React.FC = () => {
  const ImageData: PartnerImage[] = [
    { imgUrl: "/claylab assets/entrepreneurshipProgram/ourPartners/image 26.png", link: "https://www.teachforindia.org/" },
    { imgUrl: "/claylab assets/entrepreneurshipProgram/ourPartners/image 31.png", link: "https://www.thecircleindia.org/" },
    { imgUrl: "/claylab assets/entrepreneurshipProgram/ourPartners/unltd.png", link: "https://unltdindia.org/" },
    { imgUrl: "/claylab assets/entrepreneurshipProgram/ourPartners/eivolvefulllogo.png", link: "https://www.eivolve.org" },
    { imgUrl: "/claylab assets/entrepreneurshipProgram/ourPartners/image 29.png", link: "https://nanakmattapublicschool.org/" },
    { imgUrl: "/claylab assets/entrepreneurshipProgram/ourPartners/image 25.png", link: "https://shiningstarschoolramnagar.com/" },
    { imgUrl: "/claylab assets/entrepreneurshipProgram/ourPartners/image 30.png", link: "https://www.academyglorious.com/" },
    { imgUrl: "/claylab assets/entrepreneurshipProgram/ourPartners/umang.png", link: "https://www.umangharyana.org.in/" },
    { imgUrl: "/claylab assets/entrepreneurshipProgram/ourPartners/image 32.png", link: "https://www.schaeffler.co.in/en/" },
  ];

  const loopedLogos = [...ImageData, ...ImageData];
  const trackRef = useRef<HTMLDivElement>(null);
  const [trackWidth, setTrackWidth] = useState(0);

  useEffect(() => {
    if (trackRef.current) {
      setTrackWidth(trackRef.current.scrollWidth / 2); // width of one set
    }

    const handleResize = () => {
      if (trackRef.current) {
        setTrackWidth(trackRef.current.scrollWidth / 2);
      }
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex flex-col gap-4 max-w-screen z-10 mt-8">
      <div className="px-4 sm:px-16">
        <h2 className="font-[var(--font-kind-sans)] text-2xl sm:text-5xl md:text-4xl underline text-gray-900 tracking-tight leading-snug mb-8">
          Our Partners & Supporters
        </h2>
      </div>

      <div className="overflow-hidden px-6 sm:px-16 group">
        <div
          ref={trackRef}
          className="carousel-track"
          style={{
            animation: trackWidth
              ? `scroll ${trackWidth / 50}s linear infinite` // duration scales with width
              : "none",
            ["--scrollWidth" as any]: `${trackWidth}px`,
          }}
        >
          {loopedLogos.map((data, index) => (
            <a
              key={`${data.imgUrl}-${index}`}
              href={data.link}
              target="_blank"
              rel="noopener noreferrer"
              className="carousel-item"
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

      <style jsx>{`
        .carousel-track {
          display: flex;
          align-items: center;
          width: max-content;
          will-change: transform;
        }
        .carousel-item {
          margin: 0 2rem;
          flex: 0 0 auto;
          display: inline-flex;
          align-items: center;
        }
        .group:hover .carousel-track {
          animation-play-state: paused;
        }
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(calc(-1 * var(--scrollWidth)));
          }
        }
      `}</style>
    </div>
  );
};

export default Partners;
