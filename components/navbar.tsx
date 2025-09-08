// // "use client"

// // import Link from "next/link"
// // import Image from "next/image"
// // import { Button } from "@/components/ui/button"
// // import { Menu, X } from "lucide-react"
// // import { useState } from "react"

// // export default function Navbar() {
// //   const [isOpen, setIsOpen] = useState(false)
// //   // const [hasMounted, setHasMounted] = useState(false)
// //   // const pathName = usePathname()
// //   // const segments = pathName.split("/")
// //   // const lastSegment = segments[segments.length - 1]

// //   // useEffect(() => {
// //   //   setHasMounted(true)
// //   // }, [])

// //   // const textColor = hasMounted && lastSegment === "support" ? "text-black" : "text-white"

// //   return (
// //     <header className={`w-full flex items-center justify-between px-4 sm:px-6 md:px-14 py-4 md:py-6 z-30 bg-transparent ${isOpen ? "bg-black/95" : ""}`}>
// //       {/* // <header className={`w-full flex items-center justify-between px-4 sm:px-6 md:px-14 py-4 md:py-6 z-30 bg-transparent`}> */}

// //       <div className="text-2xl md:text-3xl font-bold flex-shrink-0">
// //         <Image
// //           src={"/claylab assets/general/claylab-logo.png"}
// //           height={32}
// //           width={120}
// //           alt="claylab-logo"
// //           className="w-auto h-8 md:h-10"
// //         />
// //       </div>

// //       {/* Desktop Nav */}
// //       <nav className={`hidden md:flex items-center space-x-6 md:space-x-8 `}>
// //         <Link className="hover:underline cursor-pointer" href="/">Home</Link>
// //         <Link className="hover:underline cursor-pointer" href="/about">About Us</Link>
// //         <Link className="hover:underline cursor-pointer" href="/mentorship">Mentorship</Link>
// //         <Link className="hover:underline cursor-pointer" href="/entrepreneurship">Entrepreneurship</Link>
// //         <Link className="hover:underline cursor-pointer" href="/support">
// //         <Button className="bg-clay-normal hover:bg-green-600 rounded-full px-4">
// //           Support Us
// //         </Button>
// //         </Link>
// //       </nav>

// //       {/* Mobile Hamburger Icon */}
// //       <button
// //         className="md:hidden text-black ml-2 p-2 rounded focus:outline-none focus:ring-2 "
// //         onClick={() => setIsOpen(!isOpen)}
// //         aria-label="Toggle Menu"
// //       >
// //         {isOpen ? <X size={28} /> : <Menu size={28} />}
// //       </button>

// //       {isOpen && (
// //         // <div className="fixed inset-0 w-full h-full bg-black/95 text-white flex flex-col items-center justify-center space-y-8 py-10 px-6 md:hidden z-40 overflow-y-auto">
// //           <div className="fixed inset-0 w-full h-full bg-transparent text-white flex flex-col items-center justify-center space-y-8 py-10 px-6 md:hidden z-40 overflow-y-auto">

// //           <Link className="hover:underline cursor-pointer text-2xl" href="/" onClick={() => setIsOpen(false)}>Home</Link>
// //           <Link className="hover:underline cursor-pointer text-2xl" href="/about" onClick={() => setIsOpen(false)}>About Us</Link>
// //           <Link className="hover:underline cursor-pointer text-2xl" href="/mentorship" onClick={() => setIsOpen(false)}>Mentorship Program</Link>
// //           <Link className="hover:underline cursor-pointer text-2xl" href="/entrepreneurship" onClick={() => setIsOpen(false)}>Entrepreneurship Program</Link>
// //           <Button
// //             className="bg-clay-normal hover:bg-green-600 text-white rounded-full px-8 py-3 text-lg"
// //             onClick={() => setIsOpen(false)}
// //           >
// //             Support Us
// //           </Button>
// //         </div>
// //       )}
// //     </header>
// //   )
// // }

// "use client"

// import Link from "next/link"
// import Image from "next/image"
// import { Button } from "@/components/ui/button"
// import { Menu, X } from "lucide-react"
// import { useState } from "react"

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false)

//   return (
//     <header className="w-full flex items-center justify-between px-4 sm:px-6 md:px-14 py-4 md:py-6 z-30 bg-transparent fixed top-0 left-0 right-0">

//       <div className="text-2xl md:text-3xl font-bold flex-shrink-0">
//         <Image
//           src={"/claylab assets/general/claylab-logo.png"}
//           height={32}
//           width={120}
//           alt="claylab-logo"
//           className="w-auto h-8 md:h-10"
//         />
//       </div>

//       {/* Desktop Nav */}
//       <nav className={`hidden md:flex items-center space-x-6 md:space-x-8 text-white`}>
//         <Link className="hover:underline cursor-pointer" href="/">Home</Link>
//         <Link className="hover:underline cursor-pointer" href="/about">About Us</Link>
//         <Link className="hover:underline cursor-pointer" href="/mentorship">Mentorship</Link>
//         <Link className="hover:underline cursor-pointer" href="/entrepreneurship">Entrepreneurship</Link>
//         <Link className="hover:underline cursor-pointer" href="/support">
//         <Button className="bg-clay-normal hover:bg-green-600 rounded-full px-4">
//           Support Us
//         </Button>
//         </Link>
//       </nav>

//       {/* Mobile Hamburger Icon */}
//       <button
//         className="md:hidden text-white ml-2 p-2 rounded focus:outline-none focus:ring-2"
//         onClick={() => setIsOpen(!isOpen)}
//         aria-label="Toggle Menu"
//       >
//         {isOpen ? <X size={28} /> : <Menu size={28} />}
//       </button>

//       {isOpen && (
//         <div className="fixed inset-0 w-full h-full bg-black/95 text-white flex flex-col items-center justify-center space-y-8 py-10 px-6 md:hidden z-40 overflow-y-auto">
//           <Link className="hover:underline cursor-pointer text-2xl" href="/" onClick={() => setIsOpen(false)}>Home</Link>
//           <Link className="hover:underline cursor-pointer text-2xl" href="/about" onClick={() => setIsOpen(false)}>About Us</Link>
//           <Link className="hover:underline cursor-pointer text-2xl" href="/mentorship" onClick={() => setIsOpen(false)}>Mentorship Program</Link>
//           <Link className="hover:underline cursor-pointer text-2xl" href="/entrepreneurship" onClick={() => setIsOpen(false)}>Entrepreneurship Program</Link>
//           <Button
//             className="bg-clay-normal hover:bg-green-600 text-white rounded-full px-8 py-3 text-lg"
//             onClick={() => setIsOpen(false)}
//           >
//             Support Us
//           </Button>
//         </div>
//       )}
//     </header>
//   )
// }











"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { title: "Home", href: "/" },
    { title: "About Us", href: "/about" },
    { title: "Mentorship", href: "/mentorship" },
    { title: "School of Entrepreneurship", href: "/school-of-entrepreneurship" },
    { title: "Support Us", href: "/support" },
  ];

  // Close menu when clicking outside or pressing escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={`w-full flex items-center justify-between px-4 sm:px-6 md:px-14 py-4 md:py-6 z-50 fixed top-0 left-0 right-0 transition-all duration-300 ${"bg-transparent"}`}
    >
      <div className="text-2xl md:text-3xl font-bold flex-shrink-0">
        <Link href="/">
          <Image
            src={"/claylab assets/general/claylab-logo.png"}
            height={32}
            width={120}
            alt="claylab-logo"
            className="w-auto h-8 md:h-10"
            
            />
            </Link>
      </div>

      {/* Desktop Nav */}
      <nav
        className={`hidden md:flex items-center space-x-6 md:space-x-8 ${
          isScrolled ? "text-black" : "text-white"
        }`}
      >
        {navItems.map((item) => (
          <Link
            key={item.title}
            className="hover:underline cursor-pointer transition-colors duration-200"
            href={item.href}
          >
            <Button className="bg-clay-normal hover:bg-green-600 rounded-full px-4 transition-all duration-200 hover:scale-105">
              {item.title}
            </Button>
          </Link>
        ))}
      </nav>


      {/* Mobile Hamburger Icon */}
      <button
        className={`md:hidden ml-2 p-2 rounded focus:outline-none focus:ring-2 transition-colors duration-200 ${
          isScrolled
            ? "text-black hover:bg-black/10"
            : "text-white hover:bg-white/10"
        }`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
        aria-expanded={isOpen}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 md:hidden z-40"
            onClick={closeMenu}
            aria-hidden="true"
          />

          {/* Mobile Menu */}
          <div className="fixed inset-0 w-full h-full bg-black text-white flex flex-col items-center justify-center space-y-8 py-10 px-6 md:hidden z-50">
            {/* Close button */}
            <button
              className="absolute top-6 right-6 p-2 rounded hover:bg-white/10 transition-colors duration-200"
              onClick={closeMenu}
              aria-label="Close Menu"
            >
              <X size={28} />
            </button>

            {/* Logo */}
            <div className="mb-8">
              <Image
                src={"/claylab assets/general/claylab-logo.png"}
                height={40}
                width={150}
                alt="claylab-logo"
                className="w-auto h-10"
              />
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-col items-center space-y-6">
        
              { navItems.map((item) => (
                <Link
                  key={item.title}
                  className="text-2xl font-medium hover:text-green-600 transition-colors duration-200"
                  href={item.href}
                  onClick={closeMenu}
                >
                  {item.title}
                </Link>
              ))}

            </nav>
          </div>
        </>
      )}
    </header>
  );
}
