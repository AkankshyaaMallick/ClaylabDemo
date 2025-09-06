// import React from "react";
// import Image from "next/image";

// export default function MentorshipForm() {
//   return (
//     <div className="w-full flex flex-col md:flex-row items-center justify-center p-6 md:p-16 md:px-24  gap-12 font-sans">
//       {/* Left Text Section */}
//       <div className="w-full md:w-1/2 pl-4 text-left relative">
//         <Image
//           className="absolute top-0 z-0"
//           src={"/claylab assets/general/circleGraphics.png"}
//           height={300}
//           width={300}
//           alt={"bg image graphics"}
//         />
//         <h1 className="text-4xl md:text-5xl relative z-10 font-light leading-tight text-green-800 space-y-2">
//           <div>
//             Your{" "}
//             <span className="italic font-semibold text-green-800">Journey</span>
//           </div>
//           <div>starts with</div>
//           <div>one step</div>
//           <div className="mt-2 gap-2 flex flex-col">
//             <p className="text-5xl font-normal">Apply now</p>
//             <Image
//               src={"/claylab assets/general/brushGraphics1.png"}
//               height={8}
//               width={300}
//               className="max-w-2xl mr-auto"
//               alt={"underline"}
//             />
//           </div>
//         </h1>
//       </div>

//       {/* Right Form Section */}
//       {/* <form className="w-full md:w-2/5 flex flex-col gap-6">
//         <input
//           type="text"
//           placeholder="Your Name"
//           className="bg-transparent border-b border-green-600 focus:outline-none focus:border-green-800 text-sm py-2 placeholder:text-green-800"
//         />
//         <input
//           type="email"
//           placeholder="Your E-mail"
//           className="bg-transparent border-b border-green-600 focus:outline-none focus:border-green-800 text-sm py-2 placeholder:text-green-800"
//         />
//         <textarea
//           placeholder="Share your thoughts"
//           className="bg-transparent border-b border-green-600 focus:outline-none focus:border-green-800 text-sm py-2 placeholder:text-green-800 resize-none"
//           rows={2}
//         />

//         <button
//           type="submit"
//           className="mt-4 bg-[#2f5e37] text-white text-sm py-2.5 rounded-lg hover:bg-[#264e2f] transition-all"
//         >
//           Apply mentorship
//         </button>
//       </form> */}
//     </div>
//   );
// }

import React from "react";
import Image from "next/image";

export default function MentorshipForm() {
  return (
    <div className="w-full flex items-center justify-center p-6 md:p-16 md:px-24 min-h-screen font-sans">
      {/* Centered Content Section */}
      <div className="text-center relative max-w-4xl">
        <Image
          className="absolute top-0 left-1/2 transform -translate-x-1/2 z-0"
          src={"/claylab assets/general/circleGraphics.png"}
          height={800}
          width={700}
          alt={"bg image graphics"}
        />
        <h1 className="text-5xl md:text-7xl lg:text-8xl relative z-10 font-light leading-tight text-green-800 space-y-4">
          <div>
            Your{" "}
            <span className="italic font-semibold text-green-800">Journey</span>
          </div>
          <div>starts with</div>
          <div>one step</div>
          <div className="mt-6 gap-4 flex flex-col items-center">
            {/* <p className="text-6xl md:text-7xl lg:text-8xl font-semibold hover:cursor-pointer">
              Apply now
            </p> */}
            <button
              className="text-xl 
            md:text-5xl 
            lg:text-5xl 
            font-semibold 
            text-white 
            bg-gradient-to-r from-green-700 to-green-800 
            hover:from-green-800 
            hover:to-green-900 
            transition-all 
            duration-300 
            ease-in-out 
            transform 
            hover:scale-105 
            focus:outline-none
            px-6 py-6
            focus:ring-4 focus:ring-green-300 focus:ring-opacity-50 active:scale-95 cursor-pointer rounded-full shadow-2xl hover:shadow-green-500/30 border border-green-600 hover:border-green-500"
            
            >
              <a
                href="https://linktr.ee/claylabeducation"
                target="_blank"
                rel="noopener noreferrer"

              >
              Apply now
              </a>
            </button>

            <Image
              src={"/claylab assets/general/brushGraphics1.png"}
              height={100}
              width={400}
              className="max-w-3xl"
              alt={"underline"}
            />
          </div>
        </h1>
      </div>

      {/* Right Form Section */}
      {/* <form className="w-full md:w-2/5 flex flex-col gap-6">
        <input
          type="text"
          placeholder="Your Name"
          className="bg-transparent border-b border-green-600 focus:outline-none focus:border-green-800 text-sm py-2 placeholder:text-green-800"
        />
        <input
          type="email"
          placeholder="Your E-mail"
          className="bg-transparent border-b border-green-600 focus:outline-none focus:border-green-800 text-sm py-2 placeholder:text-green-800"
        />
        <textarea
          placeholder="Share your thoughts"
          className="bg-transparent border-b border-green-600 focus:outline-none focus:border-green-800 text-sm py-2 placeholder:text-green-800 resize-none"
          rows={2}
        />

        <button
          type="submit"
          className="mt-4 bg-[#2f5e37] text-white text-sm py-2.5 rounded-lg hover:bg-[#264e2f] transition-all"
        >
          Apply mentorship
        </button>
      </form> */}
    </div>
  );
}
