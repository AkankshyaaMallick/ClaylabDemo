// "use client"

// import Image from "next/image"

// export default function Hero() {
//   return (
//     <section className="relative w-full h-[60vh] sm:h-screen flex items-center overflow-hidden">
//       <Image
//         src="/claylab assets/general/HeroSectionImages/aboutUsHero.png"
//         alt="Background"
//         fill
//         className="object-cover object-center "
//       />

//       <div className="absolute inset-0 bg-black/40 "></div>

//       <div className="flex flex-col gap-4 sm:gap-6 mx-4 sm:mx-8 md:mx-14 mt-16 sm:mt-32 text-start max-w-full sm:max-w-4xl z-10">
//         <p style={{ fontWeight: "100" }} className="text-2xl sm:text-5xl md:text-7xl max-w-full sm:max-w-2xl text-white mb-2 sm:mb-6 leading-tight font-sourceSans font-thin" >
//           It started with three teachers, a handful of students, and a vision full of hope.
//         </p>
//         <h3 className="text-2xl sm:text-5xl md:text-7xl mb-2 sm:mb-[-32] text-white font-roughScript z-[5]">Our Story</h3>
        
//         <p style={{ fontWeight: "100" }} className="text-lg sm:text-base md:text-sm text-white/70 mb-4 sm:mb-8 max-w-full sm:max-w-6xl z-[10] font-sourceSans font-thin">
//           On April 27th, 2020, Claylab was born out of love - not as an institution, but as a promise. A promise that learning could feel like joy, not pressure. That students could bloom, shine, and fly, given the right care. Today, that promise lives on through our mentorship program — reaching students across India, nurturing their passions, and helping them become confident leaders of tomorrow.
//         </p>
//       </div>



      
//     </section>
//   )
// }













// MAIN HERO SECTION 

// "use client"
// import Image from "next/image"

// export default function Hero() {
//   return (
//     <section className="relative w-full h-[60vh] sm:h-screen flex items-center overflow-hidden">
//       <Image
//         src="/claylab assets/general/HeroSectionImages/aboutUsHero.png"
//         alt="Background"
//         fill
//         className="object-cover object-center "
//       />

//       <div className="absolute inset-0 bg-black/40 "></div>

//       <div className="flex flex-col gap-4 sm:gap-6 mx-4 sm:mx-8 md:mx-14 mt-16 sm:mt-32 text-start max-w-full sm:max-w-4xl z-10">
//         <p style={{ fontWeight: "100" }} className="text-2xl sm:text-5xl md:text-7xl max-w-full sm:max-w-2xl text-white mb-2 sm:mb-6 leading-tight font-sourceSans font-thin" >
//           Reimagining what schools can be for every teenager
//         </p>
//         {/* <h3 className="text-4xl sm:text-5xl md:text-7xl mb-2 sm:mb-[-32] text-white font-roughScript z-[5]">Our Story</h3> */}
        
//          <p style={{ fontWeight: "100" }} className="mt-2 text-sm sm:text-sm md:mt-6 md:text-xl lg:text-2xl xl:text-2xl text-white/70 mb-4 sm:mb-8 max-w-full sm:max-w-6xl z-[10] font-sourceSans font-thin">
//           We are a team of educators, dreamers, and doers — committed to ensuring that young people from underserved schools or schools in underserved communities or geographies have the same opportunities as anyone else to lead, learn, and succeed.
//         </p>
//       </div>

      
//     </section>
//   )
// }






// Final ONEE 

"use client"

import Image from "next/image"
import { useState, useEffect } from "react"

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const images = [
    "/claylab assets/aboutUs/hero-01.jpg",
    "/claylab assets/aboutUs/hero-02.JPG",
    "/claylab assets/aboutUs/hero-03.JPG"
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      )
    }, 3000) // Change image every 4 seconds

    return () => clearInterval(timer)
  }, [images.length])

  return (
    <section className="relative w-full h-[60vh] sm:h-screen flex items-center overflow-hidden">
      {/* Background Images */}
      {images.map((image, index) => (
        <Image
          key={index}
          src={image}
          alt={`Background ${index + 1}`}
          fill
          className={`object-cover object-center transition-opacity duration-1000 ${
            index === currentImageIndex ? 'opacity-200' : 'opacity-0'
          }`}
        />
      ))}

      <div className="absolute inset-0 bg-black/65"></div>

      <div className="flex flex-col gap-4 sm:gap-6 mx-4 sm:mx-8 md:mx-14 mt-16 sm:mt-32 text-start max-w-full sm:max-w-4xl z-10">
        <p style={{ fontWeight: "100" }} className="text-2xl sm:text-5xl md:text-7xl max-w-full sm:max-w-2xl text-white mb-2 sm:mb-6 leading-tight font-sourceSans font-thin">
          Reimagining what schools can be for every teenager
        </p>
        
        <p style={{ fontWeight: "100" }} className="mt-2 text-sm sm:text-sm md:mt-6 md:text-xl lg:text-2xl xl:text-2xl text-white/70 mb-4 sm:mb-8 max-w-full sm:max-w-6xl z-[10] font-sourceSans font-thin">
          We are a team of educators, dreamers, and doers — committed to ensuring that young people from underserved schools or schools in underserved communities or geographies have the same opportunities as anyone else to lead, learn, and succeed.
        </p>
      </div>

      {/* Image Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex 
                ? 'bg-white' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}