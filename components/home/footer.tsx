// import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
// import Image from "next/image";

// const Footer = () => {
//   return (
//     <footer className="bg-clay-light-hover px-4 sm:px-8 md:px-16 py-8 md:py-10 text-black w-full">
//       {/* Top grid: Logo, Nav, Address */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-b border-[#2e6651] pb-8">
//         {/* Logo + Email */}
//         <div className="flex flex-col gap-2 items-start">
//           <Image
//             src="/claylab assets/general/claylab-logo.png"
//             alt="Claylab Logo"
//             width={120}
//             height={40}
//             className="w-auto h-8 md:h-12"
//           />
//           <a
//             href="mailto:claylableducation@gmail.com"
//             className="text-xs sm:text-sm underline break-all"
//           >
//             claylableducation@gmail.com
//           </a>
//         </div>

//         {/* Nav + Address */}
//         <div className="flex flex-col gap-4 items-start md:items-end">
//           <nav className="flex flex-wrap gap-4 sm:gap-6 justify-start md:justify-end align-center text-xs sm:text-sm w-full">
//             <a href="/about" className="hover:underline block">About us</a>
//             <a href="/support" className="hover:underline block">Support us</a>
//             <a href="/entrepreneurship" className="hover:underline block">Entrepreneurship</a>
//             <a href="/mentorship" className="hover:underline block">Mentorship</a>
//           </nav>
//           <address className="text-left md:text-end text-xs sm:text-sm w-full break-words">
//             525 First floor Sector 9–A Gurugram, Haryana 122001 India
//           </address>
//         </div>
//       </div>

//       {/* Social Icons */}
//       <div className="flex flex-wrap justify-center md:justify-end items-center gap-3 sm:gap-4 mt-4 w-full">
//         <a
//           href="#"
//           className="flex items-center gap-2 text-xs sm:text-sm px-3 sm:px-4 py-2 border border-black rounded-full hover:bg-black hover:text-white transition"
//         >
//           <FaXTwitter /> Twitter
//         </a>
//         <a
//           href="#"
//           className="flex items-center gap-2 text-xs sm:text-sm px-3 sm:px-4 py-2 border border-black rounded-full hover:bg-black hover:text-white transition"
//         >
//           <FaInstagram /> Instagram
//         </a>
//         <a
//           href="#"
//           className="flex items-center gap-2 text-xs sm:text-sm px-3 sm:px-4 py-2 border border-black rounded-full hover:bg-black hover:text-white transition"
//         >
//           <FaFacebookF /> Facebook
//         </a>
//       </div>
//     </footer>
//   );
// };

// export default Footer;




// 'use client'

// import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
// import Image from "next/image";
// import Link from "next/link"

// const Footer = () => {
//   return (
//     <footer className="bg-clay-light-hover px-4 sm:px-8 md:px-16 py-8 md:py-10 text-black w-full">
//       {/* Top grid: Logo + Email on left, Nav + Address on right */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 border-b border-[#2e6651] pb-8">
//         {/* Logo + Email */}
//         <div className="flex flex-col gap-2 items-start">
//           <Image
//             src="/claylab assets/general/claylab-logo.png"
//             alt="Claylab Logo"
//             width={120}
//             height={40}
//             className="w-auto h-8 md:h-12"
//           />
//           <a
//             href="mailto:claylableducation@gmail.com"
//             className="text-xl underline break-all"
//           >
//             contact@claylab.education 
//           </a>
//         </div>

//         {/* Nav + Address */}
//         <div className="flex flex-col gap-6 items-start lg:items-end">
//           {/* Navigation - spread horizontally */}
//           <nav className="grid grid-cols-2 sm:grid-cols-5 gap-4 lg:gap-8 justify-start lg:justify-end text-lg sm:text-m w-full lg:w-auto">
//             <Link href="/" className="hover:underline text-center lg:text-right whitespace-nowrap">Home</Link>
//             <Link href="/about" className="hover:underline text-center lg:text-right whitespace-nowrap">About us</Link>
//             <Link href="/mentorship" className="hover:underline text-center lg:text-right whitespace-nowrap">Mentorship</Link>
//             <Link href="/entrepreneurship" className="hover:underline text-center lg:text-right whitespace-nowrap">Entrepreneurship</Link>
//             <Link href="/support" className="hover:underline text-center lg:text-right whitespace-nowrap">Support us</Link>
//           </nav>
          
//           {/* Address - stacked vertically */}
//           <address className="text-left lg:text-right text-xs sm:text-sm w-full lg:w-auto not-italic leading-relaxed">
//             <div>525 First floor</div>
//             <div>Sector 9–A</div>
//             <div>Gurugram, Haryana 122001</div>
//             <div>India</div>
//           </address>
//         </div>
//       </div>

//       {/* Social Icons */}
//       <div className="flex flex-wrap justify-center lg:justify-end items-center gap-3 sm:gap-4 mt-6 w-full">
//         <a
//           href="#"
//           className="flex items-center gap-2 text-xs sm:text-sm px-3 sm:px-4 py-2 border border-black rounded-full hover:bg-black hover:text-white transition"
//         >
//           <FaXTwitter /> Twitter
//         </a>
//         <a
//           href="#"
//           className="flex items-center gap-2 text-xs sm:text-sm px-3 sm:px-4 py-2 border border-black rounded-full hover:bg-black hover:text-white transition"
//         >
//           <FaInstagram /> Instagram
//         </a>
//         <a
//           href="#"
//           className="flex items-center gap-2 text-xs sm:text-sm px-3 sm:px-4 py-2 border border-black rounded-full hover:bg-black hover:text-white transition"
//         >
//           <FaFacebookF /> Facebook
//         </a>
//       </div>
//     </footer>
//   );
// };

// export default Footer;



'use client'

import { FaInstagram,FaLinkedinIn  } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="bg-clay-light-hover px-4 sm:px-8 md:px-16 py-8 md:py-10 text-black w-full">
      {/* Top grid: Logo + Email on left, Nav + Address on right */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 border-b border-[#2e6651] pb-8">
        {/* Logo + Email */}
        <div className="flex flex-col gap-2 items-start">
          <Image
            src="/claylab assets/general/claylab-logo.png"
            alt="Claylab Logo"
            width={120}
            height={40}
            className="w-auto h-8 md:h-12"
          />
          <a
            href="mailto:contact@claylab.education"
            className="text-sm sm:text-base lg:text-xl underline break-all hover:text-green-700 transition-colors"
          >
            contact@claylab.education 
          </a>
        </div>

        {/* Nav + Address */}
        <div className="flex flex-col gap-6 items-start lg:items-end">
          {/* Navigation - better responsive layout */}
          <nav className="flex flex-wrap gap-x-4 gap-y-2 sm:gap-x-6 lg:gap-x-8 justify-start lg:justify-end w-full">
            <Link 
              href="/" 
              className="hover:underline hover:text-green-700 transition-colors text-sm sm:text-base whitespace-nowrap"
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="hover:underline hover:text-green-700 transition-colors text-sm sm:text-base whitespace-nowrap"
            >
              About us
            </Link>
            <Link 
              href="/mentorship" 
              className="hover:underline hover:text-green-700 transition-colors text-sm sm:text-base whitespace-nowrap"
            >
              Mentorship
            </Link>
            <Link 
              href="/school-of-entrepreneurship" 
              className="hover:underline hover:text-green-700 transition-colors text-sm sm:text-base whitespace-nowrap"
            >
              School of Entrepreneurship
            </Link>
            <Link 
              href="/support" 
              className="hover:underline hover:text-green-700 transition-colors text-sm sm:text-base whitespace-nowrap"
            >
              Support us
            </Link>
          </nav>
          
          {/* Address - responsive alignment */}
          <address className="text-left lg:text-right text-xs sm:text-sm w-full lg:w-auto not-italic leading-relaxed text-gray-700">
            <div className="flex flex-col space-y-1">
              <span>525 First floor</span>
              <span>Sector 9–A</span>
              <span>Gurugram, Haryana 122001</span>
              <span>India</span>
            </div>
          </address>
        </div>
      </div>

      {/* Social Icons - responsive layout */}
      <div className="flex flex-row sm:flex-row justify-center lg:justify-end items-center gap-3 sm:gap-4 mt-6 w-full">
        
        <a
          href="https://www.instagram.com/claylab.education/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 text-xs sm:text-sm px-3 sm:px-4 py-2 border border-black rounded-full hover:bg-[#E1306C] hover:text-white transition-all duration-200 w-full sm:w-auto max-w-[200px] sm:max-w-none"
        >
          <FaInstagram className="text-base" /> 
          <span>Instagram</span>
        </a>

        <a
          href="https://www.linkedin.com/company/claylabeducationfoundation"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 text-xs sm:text-sm px-3 sm:px-4 py-2 border border-black rounded-full hover:bg-[#0077b5] hover:text-white transition-all duration-200 w-full sm:w-auto max-w-[200px] sm:max-w-none"
        >
          <FaLinkedinIn className="text-base" /> 
          <span>LinkedIn</span>
        </a>

      </div>
    </footer>
  );
};

export default Footer;