// // "use client";

// // import {useState} from "react";
// // import TeamMemberRow from "./TeamMemberRow";

// // interface TeamMember {
// //   name: string;
// //   role: string;
// //   image: string;
// //   linkedin: string;
// // }

// // // const team: TeamMember[] = [
// // //   {
// // //     name: "Ashish",
// // //     role: "Director",
// // //     image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// // //   },
// // //   {
// // //     name: "Vivek",
// // //     role: "Chief Executive officer & Director",
// // //     image: "https://images.unsplash.com/photo-1623366302587-b38b1ddaefd9?q=80&w=1625&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// // //   },
// // //   {
// // //     name: "Purva",
// // //     role: "Chief Executive Officer",
// // //     image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// // //   },
// // //   {
// // //     name: "Brototy",
// // //     role: "Co–Founder",
// // //     image: "https://images.unsplash.com/photo-1688001247541-43bbd88f77b9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQxfHx8ZW58MHx8fHx8",
// // //   },
// // //   {
// // //     name: "Aarti",
// // //     role: "Senior Program Manager",
// // //     image: "https://images.unsplash.com/photo-1681779279774-79d871470b6f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIzfHx8ZW58MHx8fHx8",
// // //   },
// // //   {
// // //     name: "Tabassum",
// // //     role: "Program Manager",
// // //     image: "https://images.unsplash.com/photo-1566498107258-afcb40b506e2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDUwfHx8ZW58MHx8fHx8",
// // //   },
// // //   {
// // //     name: "Neha Garg",
// // //     role: "Associate",
// // //     image: "https://images.unsplash.com/photo-1564805280186-5d7056d538ca?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDY1fHx8ZW58MHx8fHx8",
// // //   },
// // // ];
// 'use client'

// const team: TeamMember[] = [
//   {
//     name: "Vivek Kaushik",
//     role: "CEO / Co-founder / Director",
//     image: "/claylab assets/aboutUs/team/Vivek Kaushik.jpg",
//     linkedin: "https://www.linkedin.com/in/viveksrkaushik"
//   },
//   {
//     name: "Ashish Alawadhi",
//     role: "Director",
//     image: "/claylab assets/aboutUs/team/Ashish Alawadhi.jpg",
//     linkedin: "https://www.linkedin.com/in/ashish-alawadhi-6b72a323"
//   },
//   {
//     name: "Purva Parwani",
//     role: "COO / Co-founder",
//     image: "/claylab assets/aboutUs/team/Purva Parwani.jfif",
//     linkedin: "https://linkedin.com/in/purva"
//   },
//   {
//     name: "Brototy Mishra",
//     role: "Co-founder, Advisory Board Member",
//     image: "/claylab assets/aboutUs/team/Brototy Mishra.jpg",
//     linkedin: "https://www.linkedin.com/in/brototy-mishra"
//   },
//   {
//     name: "Aarti Singh",
//     role: "Senior Program Manager",
//     image: "/claylab assets/aboutUs/team/Aarti Singh.jpg",
//     linkedin: "https://www.linkedin.com/in/aarti-singh"
//   },
//   {
//     name: "Tabassum Shaikh",
//     role: "Program Manager - Curriculum and Learning",
//     image: "/claylab assets/aboutUs/team/Tabassum Shaikh.jpg",
//     linkedin: "https://www.linkedin.com/in/tabassumshaikh88"
//   },
//   {
//     name: "Pardeep Bansal",
//     role: "Program Manager and Student Coach",
//     image: "/claylab assets/aboutUs/team/Pardeep Bansal.jpg",
//     linkedin: "https://www.linkedin.com/in/pardeep-bansal-307605317"
//   },
//   {
//     name: "Muskan Shaikh",
//     role: "Program Associate, Outreach & School Relations",
//     image: "/claylab assets/aboutUs/team/Muskan Shaikh.jpg",
//     linkedin: "https://www.linkedin.com/in/muskan-shaikh-b0a2b3282"
//   },
//   {
//     name: "Vishakha Jain",
//     role: "Student Entrepreneurship Coach",
//     image: "/claylab assets/aboutUs/team/Vishakha Jain.jpg",
//     linkedin: "https://www.linkedin.com/in/vishakha-nitin-jain"
//   }
// ];





// // export default function OurTeam() {
// //   const [activeIndex, setActiveIndex] = useState(0);
// //   const [manualOverride, setManualOverride] = useState(false);

// //   return (
// //     <section className="py-8 sm:py-12 px-2 sm:px-4 md:px-16">
// //       <h2 className="text-4xl md:text-5xl font-bold mb-16 text-left">
// //         <span className="border-b-4 border-green-600 pb-2">Our Team</span>
// //       </h2>

// //       <div className="relative w-full flex flex-col gap-4">
// //         {team.map((member, index) => (
// //           <TeamMemberRow
// //             key={member.name}
// //             member={member}
// //             index={index}
// //             activeIndex={activeIndex}
// //             setActiveIndex={setActiveIndex}
// //             manualOverride={manualOverride}
// //             setManualOverride={setManualOverride}
// //           />
// //         ))}
// //       </div>
// //     </section>
// //   );
// // }



// import { useState } from "react";
// import Image from "next/image";
// import { FaLinkedinIn, FaExternalLinkAlt } from "react-icons/fa";

// interface TeamMember {
//   name: string;
//   role: string;
//   image: string;
//   linkedin: string;
// }

// interface TeamMemberRowProps {
//   member: TeamMember;
//   index: number;
//   activeIndex: number;
//   setActiveIndex: (index: number) => void;
//   manualOverride: boolean;
//   setManualOverride: (override: boolean) => void;
// }

// export default function TeamMemberRow({
//   member,
//   index,
//   activeIndex,
//   setActiveIndex,
//   manualOverride,
//   setManualOverride
// }: TeamMemberRowProps) {
//   const [imageError, setImageError] = useState(false);
//   const isActive = activeIndex === index;

//   const handleLinkedInClick = (e: React.MouseEvent) => {
//     e.stopPropagation();
//     window.open(member.linkedin, '_blank', 'noopener,noreferrer');
//   };

//   return (
//     <div
//       className={`group relative cursor-pointer transition-all duration-500 ease-in-out rounded-xl overflow-hidden ${
//         isActive
//           ? 'bg-gradient-to-r from-green-50 to-blue-50 shadow-xl scale-[1.02]'
//           : 'bg-white hover:bg-gray-50 shadow-md hover:shadow-lg'
//       }`}
//       onClick={() => {
//         setActiveIndex(index);
//         setManualOverride(true);
//       }}
//     >
//       <div className="flex items-center p-6 gap-6">
//         {/* Profile Image */}
//         <div className="relative flex-shrink-0">
//           <div
//             className={`relative overflow-hidden rounded-full transition-all duration-300 ${
//               isActive ? 'w-24 h-24 md:w-28 md:h-28' : 'w-20 h-20 md:w-24 md:h-24'
//             }`}
//           >
//             {!imageError ? (
//               <Image
//                 src={member.image}
//                 alt={member.name}
//                 fill
//                 className="object-cover transition-transform duration-300 group-hover:scale-110"
//                 onError={() => setImageError(true)}
//               />
//             ) : (
//               <div className="w-full h-full bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center text-white font-bold text-xl">
//                 {member.name.split(' ').map(n => n[0]).join('')}
//               </div>
//             )}
//           </div>
          
//           {/* LinkedIn Badge */}
//           <button
//             onClick={handleLinkedInClick}
//             className={`absolute -bottom-1 -right-1 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-2 shadow-lg transition-all duration-200 transform hover:scale-110 ${
//               isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
//             }`}
//             aria-label={`View ${member.name}'s LinkedIn profile`}
//           >
//             <FaLinkedinIn size={12} />
//           </button>
//         </div>

//         {/* Member Info */}
//         <div className="flex-grow min-w-0">
//           <h3 className={`font-bold transition-all duration-300 ${
//             isActive ? 'text-2xl md:text-3xl text-green-700' : 'text-xl md:text-2xl text-gray-800'
//           }`}>
//             {member.name}
//           </h3>
//           <p className={`transition-all duration-300 mt-1 ${
//             isActive ? 'text-lg text-blue-600 font-medium' : 'text-base text-gray-600'
//           }`}>
//             {member.role}
//           </p>
          
//           {/* LinkedIn Link - Visible when active */}
//           {isActive && (
//             <button
//               onClick={handleLinkedInClick}
//               className="inline-flex items-center gap-2 mt-3 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-md"
//             >
//               <FaLinkedinIn size={16} />
//               <span>Connect on LinkedIn</span>
//               <FaExternalLinkAlt size={12} />
//             </button>
//           )}
//         </div>

//         {/* Expand Indicator */}
//         <div className="flex-shrink-0">
//           <div
//             className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
//               isActive
//                 ? 'border-green-500 bg-green-500 text-white'
//                 : 'border-gray-300 text-gray-400 group-hover:border-green-400 group-hover:text-green-400'
//             }`}
//           >
//             <span className={`transform transition-transform duration-300 ${isActive ? 'rotate-45' : ''}`}>
//               +
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* Active State Bottom Border */}
//       <div
//         className={`h-1 bg-gradient-to-r from-green-500 to-blue-500 transition-all duration-300 ${
//           isActive ? 'opacity-100' : 'opacity-0'
//         }`}
//       />
//     </div>
//   );
// }


"use client";

import { useState } from "react";
import Image from "next/image";
import { FaLinkedinIn, FaExternalLinkAlt } from "react-icons/fa";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  linkedin: string;
}

const team: TeamMember[] = [
  {
    name: "Vivek Kaushik",
    role: "CEO / Co-founder / Director",
    image: "/claylab assets/aboutUs/team/Vivek Kaushik-01.jpg",
    linkedin: "https://www.linkedin.com/in/viveksrkaushik"
  },
  {
    name: "Ashish Alawadhi",
    role: "Director",
    image: "/claylab assets/aboutUs/team/Ashish Alawadhi.jpg",
    linkedin: "https://www.linkedin.com/in/ashish-alawadhi-6b72a323"
  },
  {
    name: "Purva Parwani",
    role: "COO / Co-founder",
    image: "/claylab assets/aboutUs/team/Purva Parwani-01.jpg",
    linkedin: "https://www.linkedin.com/in/purvaparwani"
  },
  {
    name: "Brototy Mishra",
    role: "Co-founder, Advisory Board Member",
    image: "/claylab assets/aboutUs/team/Brototy Mishra.jpg",
    linkedin: "https://www.linkedin.com/in/brototy-mishra"
  },
  {
    name: "Aarti Singh",
    role: "Senior Program Manager",
    image: "/claylab assets/aboutUs/team/Aarti Singh-01.jpg",
    linkedin: "https://www.linkedin.com/in/aarti-singh-8a6811153/"
  },
  {
    name: "Tabassum Shaikh",
    role: "Program Manager - Curriculum and Learning",
    image: "/claylab assets/aboutUs/team/Tabassum Shaikh-01.jpg",
    linkedin: "https://www.linkedin.com/in/tabassumshaikh88"
  },
  {
    name: "Pardeep Bansal",
    role: "Program Manager and Student Coach",
    image: "/claylab assets/aboutUs/team/Pardeep Bansal.jpg",
    linkedin: "https://www.linkedin.com/in/pardeep-bansal-307605317"
  },
  {
    name: "Muskan Shaikh",
    role: "Program Associate, Outreach & School Relations",
    image: "/claylab assets/aboutUs/team/Muskan Shaikh-01.jpg",
    linkedin: "https://www.linkedin.com/in/muskan-shaikh-b0a2b3282"
  },
  {
    name: "Vishakha Jain",
    role: "Student Entrepreneurship Coach",
    image: "/claylab assets/aboutUs/team/Vishakha Jain.jpg",
    linkedin: "https://www.linkedin.com/in/vishakha-nitin-jain"
  }
];

interface TeamMemberRowProps {
  member: TeamMember;
  index: number;
  activeIndex: number;
  setActiveIndex: (index: number) => void;
  manualOverride: boolean;
  setManualOverride: (override: boolean) => void;
}

function TeamMemberRow({
  member,
  index,
  activeIndex,
  setActiveIndex,
  setManualOverride
}: TeamMemberRowProps) {
  const [imageError, setImageError] = useState(false);
  const isActive = activeIndex === index;

  const handleLinkedInClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(member.linkedin, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      className={`group relative cursor-pointer transition-all duration-500 ease-in-out rounded-xl overflow-hidden ${
        isActive
          ? 'bg-gradient-to-r from-green-50 to-blue-50 shadow-xl scale-[1.02]'
          : 'bg-white hover:bg-gray-50 shadow-md hover:shadow-lg'
      }`}
      onClick={() => {
        setActiveIndex(index);
        setManualOverride(true);
      }}
    >
      <div className="flex items-center p-6 gap-6">
        {/* Profile Image */}
        <div className="relative flex-shrink-0">
          <div
            className={`relative overflow-hidden rounded-full transition-all duration-300 ${
              isActive ? 'w-24 h-24 md:w-28 md:h-28' : 'w-20 h-20 md:w-24 md:h-24'
            }`}
          >
            {!imageError ? (
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center text-white font-bold text-xl">
                {member.name.split(' ').map(n => n[0]).join('')}
              </div>
            )}
          </div>
          
          {/* LinkedIn Badge */}
          <button
            onClick={handleLinkedInClick}
            className={`absolute -bottom-1 -right-1 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-2 shadow-lg transition-all duration-200 transform hover:scale-110 ${
              isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
            }`}
            aria-label={`View ${member.name}'s LinkedIn profile`}
          >
            <FaLinkedinIn size={12} />
          </button>
        </div>

        {/* Member Info */}
        <div className="flex-grow min-w-0">
          <h3 className={`font-bold transition-all duration-300 ${
            isActive ? 'text-2xl md:text-3xl text-green-700' : 'text-xl md:text-2xl text-gray-800'
          }`}>
            {member.name}
          </h3>
          <p className={`transition-all duration-300 mt-1 ${
            isActive ? 'text-lg text-blue-600 font-medium' : 'text-base text-gray-600'
          }`}>
            {member.role}
          </p>
          
          {/* LinkedIn Link - Visible when active */}
          {isActive && (
            <button
              onClick={handleLinkedInClick}
              className="inline-flex items-center gap-2 mt-3 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-md"
            >
              <FaLinkedinIn size={16} />
              <span>LinkedIn</span>
              <FaExternalLinkAlt size={12} />
            </button>
          )}
        </div>

        {/* Expand Indicator */}
        <div className="flex-shrink-0">
          <div
            className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
              isActive
                ? 'border-green-500 bg-green-500 text-white'
                : 'border-gray-300 text-gray-400 group-hover:border-green-400 group-hover:text-green-400'
            }`}
          >
            <span className={`transform transition-transform duration-300 ${isActive ? 'rotate-45' : ''}`}>
              +
            </span>
          </div>
        </div>
      </div>

      {/* Active State Bottom Border */}
      <div
        className={`h-1 bg-gradient-to-r from-green-500 to-blue-500 transition-all duration-300 ${
          isActive ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  );
}



export default function OurTeam() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [manualOverride, setManualOverride] = useState(false);

  return (
    <section className="py-8 sm:py-12 px-2 sm:px-4 md:px-16">
      <h2 className="font-[var(--font-kind-sans)] text-2xl sm:text-5xl md:text-5xl underline text-gray-900 tracking-tight leading-snug mb-8">
              Our Team
            </h2>

      <div className="relative w-full flex flex-col gap-4">
        {team.map((member, index) => (
          <TeamMemberRow
            key={member.name}
            member={member}
            index={index}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            manualOverride={manualOverride}
            setManualOverride={setManualOverride}
          />
        ))}
      </div>
    </section>
  );
}