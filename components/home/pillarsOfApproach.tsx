// "use client";

// import Heading from "../heading";
// import Image from "next/image";

// const pillars = [
//   {
//     title: "Quality Education",
//     description: "We focus on providing strong foundational knowledge that empowers learners for life.",
//     image: "/claylab assets/home/pillarsOfApproach/Component 1pillarsOfApproach.png",
//   },
//   {
//     title: "Community-Driven Support",
//     description: "Youth are supported by a collective network of mentors, peers, and community members.",
//     image: "/claylab assets/home/pillarsOfApproach/Component 2pillarsOfApproach.png",
//   },
//   {
//     title: "Child-Centered Learning",
//     description: "We adapt learning styles and pace to suit each child's unique needs and talents.",
//     image: "/claylab assets/home/pillarsOfApproach/Component 3pillarsOfApproach.png",
//   },
//   {
//     title: "Mentorship with Heart",
//     description: "Our mentors lead with empathy, compassion, and commitment to growth.",
//     image: "/claylab assets/home/pillarsOfApproach/Component 4pillarsOfApproach.png",
//   },
// ];

// const PillarsOfApproach = () => {
//   return (
//     <section className="py-8 sm:py-10 px-2 sm:px-4 md:px-16">
//       <Heading text="Pillars of Approach" />
//       {/* <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
//         {pillars.map((pillar, index) => ( */}

//       <div className="mt-16 grid gap-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
//         {pillars.map((pillar, index) => (

//           <div
//             key={index}
//             className="relative h-[220px] sm:h-[400px] rounded-lg overflow-hidden group shadow-lg hover:shadow-xl transition-shadow duration-300 hover:scale-105 cursor-pointer transition-transform"
//           >
//             {/* Background Image */}
//             <Image
//               src={pillar.image}
//               alt={pillar.title}
//               width={800}
//               height={400}
//               className="w-full h-full object-cover"
//             />

//             {/* Overlay */}
//             <div className="absolute inset-0 bg-black/30">
//               {/* Title */}
//               {/* <div className="absolute bottom-2 sm:bottom-4 w-full text-center px-2 sm:px-4 transition-all duration-500 ease-in-out group-hover:opacity-0 group-hover:translate-y-5">
//                 <h3 className="text-white text-lg sm:text-4xl text-start font-semibold">{pillar.title}</h3>
//               </div> */}

//               {/* Description */} {/* This need to be fixed later in animation*/}
//               {/* <div className="absolute inset-0 flex items-center justify-center px-2 sm:px-4 text-center">
//                 <p className="text-white text-xs sm:text-xl max-w-xs opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out">
//                   {pillar.description}
//                 </p>
//               </div> */}

//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default PillarsOfApproach;

"use client";

import Heading from "../heading";
import Image from "next/image";

const pillars = [
  {
    title: "Life Skills",
    description:
      " Building agency, confidence, and practical 21st-century skills that help teenagers thrive in the real world.",
    image: "/claylab assets/home/pillarsOfApproach/first-one.jpg",
  },
  {
    title: "Entrepreneurial Thinking",
    description:
      "Encouraging students to identify problems, design solutions, and lead projects that create real impact.",
    image: "/claylab assets/home/pillarsOfApproach/secondPillarsOfApproach.JPG",
  },
  {
    title: "Social Capital",
    description:
      "Connecting students with mentors, networks, and opportunities that expand horizons and open doors.",
    image: "/claylab assets/home/pillarsOfApproach/Social Capital.jpg",
  },
  {
    title: "Learn by Doing",
    description:
      "Students don’t just learn — they practice. From running community projects to pitching ideas, they see their learning come alive.",
    image: "/claylab assets/home/pillarsOfApproach/Learn by Doing.png",
  },
];

const PillarsOfApproach = () => {
  return (
    <section className="py-8 sm:py-10 px-2 sm:px-4 md:px-16">
      {/* <Heading text="Pillars of Approach" /> */}
      <h2 className="font-[var(--font-kind-sans)] text-2xl sm:text-5xl md:text-5xl underline text-gray-900 tracking-tight leading-snug mb-8">
              The Claylab Approach
            </h2>

      <h1 className="text-2xl mt-8">
        We prepare students for the future through four interconnected pillars :
      </h1>

      <div className="mt-10 grid gap-4 sm:gap-6 md:gap-8 lg:gap-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {pillars.map((pillar, index) => (
          <div
            key={index}
            className="relative h-[280px] sm:h-[350px] md:h-[320px] lg:h-[480px] rounded-lg overflow-hidden group shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
          >
            {/* Background Image */}
            <Image
              src={pillar.image}
              alt={pillar.title}
              width={800}
              height={400}
              className="w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 sm:bg-black/60"></div>

            <div className="absolute inset-0">
              {/* Title */}
              <div className="absolute bottom-2 sm:bottom-4 md:bottom-6 w-full text-center px-2 sm:px-4 md:px-6 transition-all duration-500 ease-in-out group-hover:opacity-0 group-hover:translate-y-5">
                <h3 className="font-[var(--font-kind-sans)] text-white text-xl sm:text-xl md:text-xl lg:text-2xl xl:text-2xl text-start font-semibold leading-tight break-words">
                  {pillar.title}
                </h3>
              </div>

              {/* Description */}
              <div className="absolute inset-0 flex items-center justify-center px-2 sm:px-4 md:px-6 text-center">
                <p className="text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl max-w-[90%] sm:max-w-xs md:max-w-sm lg:max-w-md opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PillarsOfApproach;
