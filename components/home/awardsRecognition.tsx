// // import Heading from "../heading";
// // import Image from "next/image";

// // const AwardsAndRecognitions = () => {

// //  const awardsData = [
// //     {
// //       logo: "/claylab assets/home/awardsAndRecognition/1631346672537 1.png",
// //       title: "SCHAEFFLER",
// //       description:
// //         "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
// //     },
// //     {
// //       logo: "/claylab assets/home/awardsAndRecognition/22993000000075010 1.png",
// //       title: "United India",
// //       description: "Lorem Ipsum is simply dummy text of the printing...",
// //     },
// //     {
// //       logo: "/claylab assets/home/awardsAndRecognition/csm_reference_schaeffler_logo_7d852610eb 1.png",
// //       title: "Wipro",
// //       description: "Lorem Ipsum is simply dummy text of the printing...",
// //     },
// //     {
// //       logo: "/claylab assets/home/awardsAndRecognition/csm_reference_schaeffler_logo_7d852610eb 1.png",
// //       title: "Shubh 107.8 FM",
// //       description: "Lorem Ipsum has been the industry's standard dummy...",
// //     },
// //     {
// //       logo: "/claylab assets/home/awardsAndRecognition/download.png",
// //       title: "Foundation",
// //       description: "Lorem Ipsum is simply dummy text of the printing...",
// //     },
// //     {
// //       logo: "/claylab assets/home/awardsAndRecognition/images 1.png",
// //       title: "Teach For All",
// //       description: "Lorem Ipsum is simply dummy text of the printing...",
// //     },
// //   ];

// //   return (
// //     <section className="py-8 sm:py-12 px-2 sm:px-4 md:px-16">
// //       <Heading text="Awards & Recognitions" />

// //       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mt-6 sm:mt-8">
// //         {awardsData.map((award, idx) => (
// //           <div
// //             key={idx}
// //             className="bg-white rounded-xl p-3 sm:p-4 shadow-sm border text-center flex flex-col items-center gap-2 transition-transform duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
// //           >
// //             <div className="w-[50px] h-[50px] sm:w-[70px] sm:h-[70px] relative">
// //               <Image
// //                 src={award.logo}
// //                 alt={award.title}
// //                 fill
// //                 className="object-contain"
// //               />
// //             </div>
// //             <h4 className="text-xs sm:text-sm font-semibold mt-1 sm:mt-2">{award.title}</h4>
// //             <p className="text-[10px] sm:text-xs text-gray-600">{award.description}</p>
// //           </div>
// //         ))}
// //       </div>
// //     </section>
// //   );
// // };

// // export default AwardsAndRecognitions;

// import Heading from "../heading";
// import Image from "next/image";

// const AwardsAndRecognitions = () => {
//   const awardsData = [
//     {
//       logo: "/claylab assets/home/awardsAndRecognition/1631346672537 1.png",
//       title: "SCHAEFFLER",
//       description:
//         "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
//       category: "Partnership",
//     },
//     {
//       logo: "/claylab assets/home/awardsAndRecognition/22993000000075010 1.png",
//       title: "United India",
//       description: "Lorem Ipsum is simply dummy text of the printing...",
//       category: "Recognition",
//     },
//     {
//       logo: "/claylab assets/home/awardsAndRecognition/csm_reference_schaeffler_logo_7d852610eb 1.png",
//       title: "Wipro",
//       description: "Lorem Ipsum is simply dummy text of the printing...",
//       category: "Award",
//     },
//     {
//       logo: "/claylab assets/home/awardsAndRecognition/csm_reference_schaeffler_logo_7d852610eb 1.png",
//       title: "Shubh 107.8 FM",
//       description: "Lorem Ipsum has been the industry's standard dummy...",
//       category: "Media",
//     },
//     {
//       logo: "/claylab assets/home/awardsAndRecognition/download.png",
//       title: "Foundation",
//       description: "Lorem Ipsum is simply dummy text of the printing...",
//       category: "Partnership",
//     },
//     {
//       logo: "/claylab assets/home/awardsAndRecognition/images 1.png",
//       title: "Teach For All",
//       description: "Lorem Ipsum is simply dummy text of the printing...",
//       category: "Education",
//     },
//   ];

//   return (
//     // <section className="py-12 sm:py-16 sm:px-6  ">
//     //   <div className="max-w-7xl mx-auto">
//     //     <div className=" mb-12">
//     //       <Heading text="Awards & Recognitions" />

//     <section className="py-8 sm:py-10 px-2 sm:px-4 md:px-16 ">
//       <div className="max-w-7xl">
//         <div className=" mb-12">
//           <Heading text="Awards & Recognitions" />

//           {/* <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
//             Celebrating our achievements and partnerships that drive innovation and excellence
//           </p> */}

//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
//           {awardsData.map((award, idx) => (
//             <div
//               key={idx}
//               className="mx-auto group relative bg-clay-light-hover rounded-2xl p-6 shadow-xl hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden"
//             >
//               {/* Background decoration */}
//               <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full -mr-10 -mt-10 opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>

//               {/* Category badge */}
//               <div className="inline-block px-3 py-1 mb-4 text-xs font-medium text-blue-600 bg-blue-100 rounded-full">
//                 {award.category}
//               </div>

//               {/* Logo */}
//               <div className="relative w-16 h-16 mx-auto mb-4 p-2 bg-gray-50 rounded-xl group-hover:bg-white transition-colors duration-300">
//                 <Image
//                   src={award.logo}
//                   alt={award.title}
//                   fill
//                   className="object-contain p-1"
//                 />
//               </div>

//               {/* Content */}
//               <div className="text-center space-y-3">
//                 <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
//                   {award.title}
//                 </h3>
//                 <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
//                   {award.description}
//                 </p>
//               </div>

//               {/* Hover effect overlay */}
//               <div className="absolute inset-0 bg-gradient-to-t from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
//             </div>
//           ))}
//         </div>

//         {/* Optional: View More Button */}
//         {/* <div className="text-center mt-12">
//           <button className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-md hover:shadow-lg">
//             View All Recognitions
//             <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//             </svg>
//           </button>
//         </div> */}
//       </div>
//     </section>
//   );
// };

// export default AwardsAndRecognitions;

import Heading from "../heading";
import Image from "next/image";

const AwardsAndRecognitions = () => {
  const awardsData = [
    {
      logo: "/claylab assets/home/awardsAndRecognition/1631346672537 1.png",
      title: "SCHAEFFLER",
      description:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
      category: "Partnership",
    },
    {
      logo: "/claylab assets/home/awardsAndRecognition/22993000000075010 1.png",
      title: "United India",
      description: "Lorem Ipsum is simply dummy text of the printing...",
      category: "Recognition",
    },
    {
      logo: "/claylab assets/home/awardsAndRecognition/csm_reference_schaeffler_logo_7d852610eb 1.png",
      title: "Wipro",
      description: "Lorem Ipsum is simply dummy text of the printing...",
      category: "Award",
    },
    {
      logo: "/claylab assets/home/awardsAndRecognition/csm_reference_schaeffler_logo_7d852610eb 1.png",
      title: "Shubh 107.8 FM",
      description: "Lorem Ipsum has been the industry's standard dummy...",
      category: "Media",
    },
    {
      logo: "/claylab assets/home/awardsAndRecognition/download.png",
      title: "Foundation",
      description: "Lorem Ipsum is simply dummy text of the printing...",
      category: "Partnership",
    },
    {
      logo: "/claylab assets/home/awardsAndRecognition/images 1.png",
      title: "Teach For All",
      description: "Lorem Ipsum is simply dummy text of the printing...",
      category: "Education",
    },
  ];

  return (
    // <section className="py-8 sm:py-10 lg:px-16 pr-2 md:pr-16">
    <section className="py-6 sm:py-8 lg:py-10 px-4 sm:px-8 lg:pl-16 lg:pr-16 md:pr-16">
      <div className="mx-auto">
        <div className="mb-12">
          <Heading text="Awards & Recognitions" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-items-center">
          {awardsData.map((award, idx) => (
            <div
              key={idx}
              className="group relative bg-clay-light-hover rounded-2xl p-6 shadow-xl hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden w-full"
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full -mr-10 -mt-10 opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>

              {/* Category badge */}
              <div className="inline-block px-3 py-1 mb-4 text-xs font-medium text-blue-600 bg-blue-100 rounded-full">
                {award.category}
              </div>

              {/* Logo */}
              <div className="relative w-16 h-16 mx-auto mb-4 p-2 bg-gray-50 rounded-xl group-hover:bg-white transition-colors duration-300">
                <Image
                  src={award.logo}
                  alt={award.title}
                  fill
                  className="object-contain p-1"
                />
              </div>

              {/* Content */}
              <div className="text-center space-y-3">
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                  {award.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                  {award.description}
                </p>
              </div>
              {/* Hover effect overlay */}

              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsAndRecognitions;
