// // "use client";

// // // import Image from "next/image";
// // import Heading from "../heading";
// // import { Users, Globe, Clock } from "lucide-react";
// // import Image from "next/image";

// // const mentorHighlights = [
// //   {
// //     icon: <Globe className="w-6 h-6" />,
// //     text: "Professionals from diverse industries and backgrounds.",
// //   },
// //   {
// //     icon: <Clock className="w-6 h-6" />,
// //     text: "Each mentor commits ~20 hours of guided volunteering.",
// //   },
// //   {
// //     icon: <Users className="w-6 h-6" />,
// //     text: "Together, they form a powerful, supportive community.",
// //   },
// // ];

// // const MeetMentors = () => {
// //   return (
// //     <section className="relative py-12 sm:py-16 md:py-20 lg:py-10 px-4 sm:px-6 lg:px-8 ">
// //       <div className="px-6 mx-auto">

// //         <div className="text-left mb-12">
// //           <Heading text="Who are our mentors?" />
// //         </div>

// //         {/* Who are our mentors section */}
// //         <div className="mt-16 sm:mt-20 lg:mt-24">
// //           <div className="">

// //             <div className="space-y-6 sm:space-y-8">
// //               {mentorHighlights.map((highlight, index) => (
// //                 <div
// //                   key={index}
// //                   className="flex items-start gap-4 sm:gap-6 group"
// //                 >
// //                   <div className="flex-shrink-0 bg-green-100 rounded-full p-3 group-hover:bg-green-200 transition-colors duration-300">
// //                     <div className="text-green-600">{highlight.icon}</div>
// //                   </div>
// //                   <div className="flex-1">
// //                     <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 leading-relaxed font-light">
// //                       • {highlight.text}
// //                     </p>
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>

// //             {/* Additional highlight box */}
// //             <div className="mt-8 sm:mt-10 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 sm:p-8 border border-green-100">
// //               <div className="flex items-center gap-4 mb-4">
// //                 <div className="bg-green-600 rounded-full p-2">
// //                   <Users className="w-5 h-5 text-white" />
// //                 </div>
// //                 <h4 className="text-xl font-semibold text-gray-900">
// //                   Community Impact
// //                 </h4>
// //               </div>
// //               <p className="text-gray-700 leading-relaxed">
// //                 Our diverse mentor network spans across industries, bringing
// //                 real-world expertise and genuine care to create meaningful
// //                 learning experiences for every student.
// //               </p>
// //             </div>
// //           </div>
// //         </div>

// //         <div className="mt-10 flex justify-center">
// //           <Image
// //             src="/claylab assets/mentorshipProgram/meetOurMentors/Mentors collage.jpg"
// //             alt="Mentors"
// //             width={800}
// //             height={400}
// //             className="w-full h-auto max-w-4xl rounded-lg shadow-lg"
// //           />
// //         </div>

// //       </div>
// //     </section>
// //   );
// // };

// // export default MeetMentors;

// "use client";

// // import Image from "next/image";
// import Heading from "../heading";
// import { Users, Globe, Clock, ExternalLink } from "lucide-react";
// import Image from "next/image";

// // import Link from "next/link";

// const mentorHighlights = [
//   {
//     icon: <Globe className="w-6 h-6" />,
//     text: "Professionals from diverse industries and backgrounds.",
//   },
//   {
//     icon: <Clock className="w-6 h-6" />,
//     text: "Each mentor commits ~20 hours of guided volunteering.",
//   },
//   {
//     icon: <Users className="w-6 h-6" />,
//     text: "Together, they form a powerful, supportive community.",
//   },
// ];

// const MeetMentors = () => {
//   return (
//     <section className="relative py-12 sm:py-16 md:py-20 lg:py-10 px-4 sm:px-6 lg:px-8 ">

//       <div className="px-6 mx-auto">
//         <div className="text-left ">
//           <Heading text="Who are our mentors?" />
//         </div>

//         {/* Who are our mentors section with image on left */}
//         <div className="mt-16 sm:mt-20 lg:mt-10">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
//             {/* Left side - Image */}
//             <div className="order-2 lg:order-1">
//               <Image
//                 src="/claylab assets/mentorshipProgram/meetOurMentors/Mentors collage.jpg"
//                 alt="Mentors"
//                 width={800}
//                 height={450}
//                 className="w-full h-auto rounded-lg shadow-lg"
//               />
//             </div>

//             {/* Right side - Content */}
//             <div className="order-1 lg:order-2">
//               <div className="space-y-6 sm:space-y-8">
//                 {mentorHighlights.map((highlight, index) => (
//                   <div
//                     key={index}
//                     className="flex items-start gap-4 sm:gap-6 group"
//                   >
//                     <div className="flex-shrink-0 bg-green-100 rounded-full p-3 group-hover:bg-green-200 transition-colors duration-300">
//                       <div className="text-green-600">{highlight.icon}</div>
//                     </div>
//                     <div className="flex-1">
//                       <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 leading-relaxed font-light">
//                         • {highlight.text}
//                       </p>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               {/* Additional highlight box */}
//               <div className="mt-8 sm:mt-10 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 sm:p-8 border border-green-100">
//                 <div className="flex items-center gap-4 mb-4">
//                   <div className="bg-green-600 rounded-full p-2">
//                     <Users className="w-5 h-5 text-white" />
//                   </div>

//                   <h4 className="text-xl font-semibold text-gray-900">
//                     Community Impact
//                   </h4>
//                 </div>

//                 <p className="text-gray-700 leading-relaxed">
//                   Our diverse mentor network spans across industries, bringing
//                   real-world expertise and genuine care to create meaningful
//                   learning experiences for every student.
//                 </p>

//                 {/* Clickable Points */}
//                 <div className="space-y-4 mt-4">
//                   <a
//                     href="https://padlet.com/claylabeducation/mentorcommunity"
//                     className="flex items-center gap-3 p-4 bg-white rounded-lg hover:bg-green-50 transition-all duration-200 group border border-green-200 hover:border-green-300"
//                   >
//                     <div className="flex-shrink-0 bg-green-100 rounded-full p-2 group-hover:bg-green-200 transition-colors">
//                       <Users className="w-4 h-4 text-green-600" />
//                     </div>
//                     <div className="flex-1">
//                       <span className="text-gray-800 font-medium group-hover:text-green-700 transition-colors">
//                         Mentorship Community
//                       </span>
//                     </div>
//                     <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-green-600 transition-colors" />
//                   </a>

//                   <a
//                     href="https://padlet.com/claylabeducation/mentorship-highlights-ecwn0fsmq7a2le7w"
//                     className="flex items-center gap-3 p-4 bg-white rounded-lg hover:bg-green-50 transition-all duration-200 group border border-green-200 hover:border-green-300"
//                   >
//                     <div className="flex-shrink-0 bg-blue-100 rounded-full p-2 group-hover:bg-blue-200 transition-colors">
//                       <Globe className="w-4 h-4 text-blue-600" />
//                     </div>
//                     <div className="flex-1">
//                       <span className="text-gray-800 font-medium group-hover:text-blue-700 transition-colors">
//                         Mentorship Highlights
//                       </span>
//                     </div>
//                     <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
//                   </a>
//                 </div>

//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default MeetMentors;



"use client";

import Heading from "../heading";
import { Users, Globe, Clock, ExternalLink } from "lucide-react";
import Image from "next/image";

const mentorHighlights = [
  {
    icon: <Globe className="w-6 h-6" />,
    text: "Professionals from diverse industries and backgrounds.",
  },
  {
    icon: <Clock className="w-6 h-6" />,
    text: (
      <>
        Each mentor commits ~
        <span className="font-bold text-green-600">20 hours of guided volunteering</span>.
      </>
    ),
  },
  {
    icon: <Users className="w-6 h-6" />,
    text: "Together, they form a powerful, supportive community.",
  },
];

const MeetMentors = () => {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-10 px-4 sm:px-6 lg:px-8 ">

      <div className="px-6 mx-auto">
        <div className="text-left ">
          <Heading text="Who are our mentors?" />
        </div>

        {/* Who are our mentors section with image on left */}
        <div className="mt-16 sm:mt-20 lg:mt-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left side - Image */}
            <div className="order-2 lg:order-1 h-full">
              <Image
                src="/claylab assets/mentorshipProgram/meetOurMentors/Mentors collage.jpg"
                alt="Mentors"
                width={800}
                height={450}
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Right side - Content */}
            <div className="order-1 lg:order-2">
              <div className="space-y-6 sm:space-y-8">
                {mentorHighlights.map((highlight, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 sm:gap-6 group"
                  >

                    <div className="flex-shrink-0 bg-green-100 rounded-full p-3 group-hover:bg-green-200 transition-colors duration-300">
                      <div className="text-green-600 flex items-center justify-center">{highlight.icon}</div>
                    </div>

                    <div className="flex-1">
                      <p className="text-lg sm:text-xl lg:text-xl text-gray-700 leading-relaxed font-light">
                        {highlight.text}
                      </p>
                    </div>

                  </div>
                ))}
              </div>

              {/* Additional highlight box */}
              <div className="mt-8 sm:mt-10 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 sm:p-8 border border-green-100">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-green-600 rounded-full p-2">
                    <Users className="w-5 h-5 text-white" />
                  </div>

                  <h4 className="text-xl font-semibold text-gray-900">
                    Community Impact
                  </h4>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  Our diverse mentor network spans across industries, bringing
                  real-world expertise and genuine care to create meaningful
                  learning experiences for every student.
                </p>

                {/* Clickable Points */}
                <div className="space-y-4 mt-4">
                  <a
                    href="https://padlet.com/claylabeducation/mentorcommunity"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 bg-white rounded-lg hover:bg-green-50 transition-all duration-200 group border border-green-200 hover:border-green-300"
                  >
                    <div className="flex-shrink-0 bg-green-100 rounded-full p-2 group-hover:bg-green-200 transition-colors">
                      <Users className="w-4 h-4 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <span className="text-gray-800 font-medium group-hover:text-green-700 transition-colors">
                        Mentorship Community
                      </span>
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-green-600 transition-colors" />
                  </a>

                  <a
                    href="https://padlet.com/claylabeducation/mentorship-highlights-ecwn0fsmq7a2le7w"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 bg-white rounded-lg hover:bg-green-50 transition-all duration-200 group border border-green-200 hover:border-green-300"
                  >
                    <div className="flex-shrink-0 bg-blue-100 rounded-full p-2 group-hover:bg-blue-200 transition-colors">
                      <Globe className="w-4 h-4 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <span className="text-gray-800 font-medium group-hover:text-blue-700 transition-colors">
                        Mentorship Highlights
                      </span>
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                  </a>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetMentors;