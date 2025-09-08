// "use client";

// import Heading from "../heading";
// import Image from "next/image";
// import { useState, useEffect } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// const images = {
//   img :"/claylab assets/home/pastEvents/event-01.jpg",
//   caption: "Event 1",
//   img: "/claylab assets/home/pastEvents/event-02.jpg",
//   caption2: "Event 2",
//   img: "/claylab assets/home/pastEvents/event-03.png",
//   caption3: "Event 3",
//   img4: "/claylab assets/home/pastEvents/event-04.JPG",
//   caption4: "Event 4",
//   img5: "/claylab assets/home/pastEvents/event-05.jpg",
//   caption5: "Event 5",
//   img6: "/claylab assets/home/pastEvents/event-06.jpg",
//   caption6: "Event 6",

// }

// const PastEvents = () => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const prev = () => {
//     setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
//   };

//   const next = () => {
//     setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
//   };

//   const goTo = (index: number) => setActiveIndex(index);

//   // Auto-play functionality
//   useEffect(() => {
//     const interval = setInterval(() => {
//       next();
//     }, 5000); // Change slide every 3 seconds

//     return () => clearInterval(interval);
//   }, [activeIndex]);

//   return (
//     <section className="py-8 sm:py-10 px-2 sm:px-4 md:px-16">
//       <Heading text="Past Events" />

//       <div className="relative flex items-center justify-center mt-6 sm:mt-8">

//         {/* Desktop Prev Button */}
//         <button
//           onClick={prev}
//           className="hidden sm:flex absolute left-2 z-40 bg-white/80 hover:bg-white shadow-md p-2 rounded-full"
//         >
//           <ChevronLeft className="w-5 h-5 text-gray-700" />
//         </button>

//         {/* Carousel */}
//         {/* <div className="relative flex justify-center items-center w-full max-w-full sm:max-w-7xl overflow-hidden h-[860px] sm:h-[400px]"> */}
//         <div className="relative flex justify-center items-center w-full max-w-full sm:max-w-7xl overflow-hidden h-[400px] sm:h-[400px]">

//           {images.map((img, index) => {
//             const isActive = index === activeIndex;
//             const isPrev = index === (activeIndex - 1 + images.length) % images.length;
//             const isNext = index === (activeIndex + 1) % images.length;

//              const baseStyles =
//               "absolute transition-all duration-500 ease-in-out rounded-xl shadow-md overflow-hidden";

//             if (isActive) {
//               return (
//                 <div
//                   key={index}
//                   className={`${baseStyles} z-30 w-[85%] sm:w-[70%] h-full scale-100 shadow-md bg-white border-4 border-green-500`}
//                 >
//                   <Image
//                     src={img}
//                     alt={`Event ${index + 1}`}
//                     width={800}
//                     height={600}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//               );
//             }

//             if (isPrev) {
//               return (
//                 <div
//                   key={index}
//                   className={`${baseStyles} z-20 left-0 w-[45%] sm:w-[35%] h-[85%] scale-95 opacity-60`}
//                 >
//                   <Image
//                     src={img}
//                     alt={`Event ${index + 1}`}
//                     width={600}
//                     height={300}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//               );
//             }

//             if (isNext) {
//               return (
//                 <div
//                   key={index}
//                   className={`${baseStyles} z-20 right-0 w-[45%] sm:w-[35%] h-[85%] scale-95 opacity-60`}
//                 >
//                   <Image
//                     src={img}
//                     alt={`Event ${index + 1}`}
//                     width={600}
//                     height={300}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//               );
//             }

//             return null;
//           })}
//         </div>

//         {/* Desktop Next Button */}
//         <button
//           onClick={next}
//           className="hidden sm:flex absolute right-2 z-40 bg-white/80 hover:bg-white shadow-md p-2 rounded-full"
//         >
//           <ChevronRight className="w-5 h-5 text-gray-700" />
//         </button>
//       </div>

//       {/* Mobile Navigation Buttons */}
//       <div className="flex sm:hidden justify-center gap-4 mt-4">
//         <button
//           onClick={prev}
//           className="bg-white/80 hover:bg-white shadow-md p-2 rounded-full"
//         >
//           <ChevronLeft className="w-5 h-5 text-gray-700" />
//         </button>
//         <button
//           onClick={next}
//           className="bg-white/80 hover:bg-white shadow-md p-2 rounded-full"
//         >
//           <ChevronRight className="w-5 h-5 text-gray-700" />
//         </button>
//       </div>

//       {/* Pagination Dots */}
//       <div className="flex justify-center gap-2 mt-4 sm:mt-6">
//         {images.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => goTo(index)}
//             className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition ${
//               index === activeIndex ? "bg-green-600" : "bg-gray-400"
//             }`}
//           />
//         ))}
//       </div>

//       {/* Gallery Button */}
//       <div className="flex justify-center mt-4 sm:mt-6">
//         <button className="bg-green-600 text-white px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm hover:bg-green-700 transition">
//           GALLERY
//         </button>
//       </div>
//     </section>
//   );
// };

// export default PastEvents;



"use client";

import Heading from "../heading";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Fixed images array structure
const images = [
  {
    src: "/claylab assets/home/pastEvents/event-01.jpg",
    caption: "School of Entrepreneurship Residential event (April 2024)"
  },
  {
    src: "/claylab assets/home/pastEvents/event-02.jpg",
    caption: "Sangam 3.0 event in Mumbai (September 2024)"
  },
  {
    src: "/claylab assets/home/pastEvents/event-03.JPG",
    caption: "School of Entrepreneurship Workshop in School (January 2024)"
  },
  {
    src: "/claylab assets/home/pastEvents/event-04.JPG",
    caption: "Sangam 2.0 event in Mumbai (March 2022)"
  },
  {
    src: "/claylab assets/home/pastEvents/event-05.jpg",
    caption: "School of Entrepreneurship Residential event (April 2025)"
  },
  {
    src: "/claylab assets/home/pastEvents/event-06.jpg",
    caption: "Claylab participated in Tresvista’s CSR Day"
  },
  {
    src: "/claylab assets/home/pastEvents/event-07.jpg",
    caption: "Post-session picture from a Classroom in Delhi"
  },
  {
    src: "/claylab assets/home/pastEvents/event-08.png",
    caption: "Student leaders in action on the ground"
  }
];

const PastEvents = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const next = () => {
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const goTo = (index: number) => setActiveIndex(index);

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-8 sm:py-10 px-2 sm:px-4 md:px-16 z-10">
      <h2 className="font-[var(--font-kind-sans)] text-2xl sm:text-5xl md:text-5xl underline text-gray-900 tracking-tight leading-snug mb-8">
        Past Events
      </h2>

      <div className="relative flex items-center justify-center mt-6 sm:mt-8">

        {/* Desktop Prev Button */}
        <button
          onClick={prev}
          className="hidden sm:flex absolute left-2 z-40 bg-white/80 hover:bg-white shadow-md p-2 rounded-full transition-all duration-200"
        >
          <ChevronLeft className="w-5 h-5 text-gray-700" />
        </button>

        {/* Carousel */}
        <div className="relative flex justify-center items-center w-full max-w-full sm:max-w-7xl overflow-hidden h-[400px] sm:h-[500px]">
          {images.map((image, index) => {
            const isActive = index === activeIndex;
            const isPrev = index === (activeIndex - 1 + images.length) % images.length;
            const isNext = index === (activeIndex + 1) % images.length;

            const baseStyles =
              "absolute transition-all duration-500 ease-in-out rounded-xl shadow-md overflow-hidden cursor-pointer";

            if (isActive) {
              return (
                <div
                  key={index}
                  className={`${baseStyles} z-30 w-[85%] sm:w-[70%] h-full scale-100 shadow-xl bg-white border-4 border-green-500`}
                  onClick={() => goTo(index)}
                >
                  <Image
                    src={image.src}
                    alt={image.caption}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover"
                    priority={index === 0}
                  />
                  {/* Caption overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <h3 className="text-white font-semibold text-2xl">{image.caption}</h3>
                  </div>
                </div>
              );
            }

            if (isPrev) {
              return (
                <div
                  key={index}
                  className={`${baseStyles} z-20 left-0 w-[45%] sm:w-[35%] h-[85%] scale-95 opacity-60 hover:opacity-80`}
                  onClick={() => goTo(index)}
                >
                  <Image
                    src={image.src}
                    alt={image.caption}
                    width={600}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
              );
            }

            if (isNext) {
              return (
                <div
                  key={index}
                  className={`${baseStyles} z-20 right-0 w-[45%] sm:w-[35%] h-[85%] scale-95 opacity-60 hover:opacity-80`}
                  onClick={() => goTo(index)}
                >
                  <Image
                    src={image.src}
                    alt={image.caption}
                    width={600}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
              );
            }

            return null;
          })}
        </div>

        {/* Desktop Next Button */}
        <button
          onClick={next}
          className="hidden sm:flex absolute right-2 z-40 bg-white/80 hover:bg-white shadow-md p-2 rounded-full transition-all duration-200"
        >
          <ChevronRight className="w-5 h-5 text-gray-700" />
        </button>
      </div>

      {/* Mobile Navigation Buttons */}
      <div className="flex sm:hidden justify-center gap-4 mt-4">
        <button
          onClick={prev}
          className="bg-white/80 hover:bg-white shadow-md p-2 rounded-full transition-all duration-200"
        >
          <ChevronLeft className="w-5 h-5 text-gray-700" />
        </button>
        <button
          onClick={next}
          className="bg-white/80 hover:bg-white shadow-md p-2 rounded-full transition-all duration-200"
        >
          <ChevronRight className="w-5 h-5 text-gray-700" />
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-2 mt-4 sm:mt-6">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-200 ${index === activeIndex ? "bg-green-600 scale-125" : "bg-gray-400 hover:bg-gray-500"
              }`}
          />
        ))}
      </div>

      {/* Gallery Button */}
      {/* <div className="flex justify-center mt-4 sm:mt-6">
        <button className="bg-green-600 text-white px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm hover:bg-green-700 transition-all duration-200 transform hover:scale-105">
          GALLERY
        </button> */}
      {/* </div> */}
    </section>
  );
};

export default PastEvents;