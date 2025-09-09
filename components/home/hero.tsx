// "use client"

// import { useEffect } from "react"
// import { Button } from "@/components/ui/button"
// import Image from "next/image"

// export default function Hero() {


//   const images = [
//     "/claylab assets/home/hero-01.jpg",
//     "/claylab assets/home/hero-02.jpg",
//     "/claylab assets/home/hero-03.JPG",
//     "/claylab assets/home/hero-04.JPG"
//   ]

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentImageIndex((prevIndex) => 
//         prevIndex === images.length - 1 ? 0 : prevIndex + 1
//       )
//     }, 4000) // Change image every 4 seconds

//     return () => clearInterval(timer)
//   }, [images.length])


//   return (
//     <section className="relative w-full h-[80vh] sm:h-screen flex items-center overflow-hidden">
//       <Image
//         src="/claylab assets/home/hero.jpg"
//         alt="Background"
//         fill
//         className="object-cover object-center "
//       />

//       <div className="absolute inset-0 bg-black/40 "></div>

//       <div className="flex flex-col gap-2 sm:gap-8 mx-4 sm:mx-8 md:mx-14 mt-32 sm:mt-44 text-start max-w-full sm:max-w-4xl z-10">
        
//         {/* <p style={{fontWeight: "100"}} className="text-3xl sm:text-6xl md:text-7xl text-white mb-4 sm:mb-6 leading-tight font-sourceSans font-thin" >
//           Empowering Youth <br />
//           Through Mentorship & <br />
//           Entrepreneurship
//         </p> */}


//         <h1 className="text-white font-sourceSans font-thin leading-tight">
//           <span className="block text-2xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-7xl">
//             {'Empowering every'}   
//           </span>
//           <span className="block text-2xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-7xl mt-2 sm:mt-3 lg:mt-4">
//            {' teenager with skills for '}
//           </span>
//           <span className="block text-2xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-7xl mt-2 sm:mt-3 lg:mt-4">
//            {'life, leadership and livelihoods'}
//           </span>
//         </h1>

//         <p style={{fontWeight:"100"}} className="text-xl sm:text-2xl md:text-2xl text-white/70 mb-6 sm:mb-8 max-w-full sm:max-w-lg font-sourceSans font-thin">
//           We partner with schools to prepare students for the future — helping them grow into confident leaders, problem-solvers, and change-makers.
//         </p>

//         <Button className="bg-gradient-to-r from-green-800 to-green-600 hover:bg-gradient-to-r hover:from-green-700 hover:to-green-500 text-white rounded-md w-full sm:w-min px-8 sm:px-16 py-3 sm:py-4 text-base sm:text-lg">
//           Join us
//         </Button>
//       </div>
//     </section>
//   )
// }





"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const images = [
    "/claylab assets/home/hero-01.jpg",
    "/claylab assets/home/hero-02.jpg",
    "/claylab assets/home/hero-03.jpg",
    "/claylab assets/home/hero-04.jpg"
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
    <section className="relative w-full h-[80vh] sm:h-screen flex items-center overflow-hidden">
      {/* Background Images Carousel */}
      {images.map((image, index) => (
        <Image
          key={index}
          src={image}
          alt={`Hero Background ${index + 1}`}
          fill
          className={`object-cover object-center transition-opacity duration-1000 ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}

      <div className="absolute inset-0 bg-black/70"></div>

      <div className="flex flex-col gap-2 sm:gap-8 mx-4 sm:mx-8 md:mx-14 mt-32 sm:mt-44 text-start max-w-full sm:max-w-4xl z-10">
        
        <h1 className="text-white font-sourceSans font-thin leading-tight">
          <span className="block text-2xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-7xl">
            {'Empowering every'}   
          </span>
          <span className="block text-2xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-7xl mt-2 sm:mt-3 lg:mt-4">
           {' teenager for life,'}
          </span>
          <span className="block text-2xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-7xl mt-2 sm:mt-3 lg:mt-4">
           {' leadership and livelihoods'}
          </span>
        </h1>

        <p style={{fontWeight:"100"}} className="text-xl sm:text-2xl md:text-2xl text-white/70 mb-6 sm:mb-8 max-w-full sm:max-w-lg font-sourceSans font-thin">
          We partner with schools to prepare students for the future — helping them grow into confident leaders, problem-solvers, and change-makers.
        </p>

        <Button className="hidden sm:flex bg-gradient-to-r from-green-800 to-green-600 hover:bg-gradient-to-r hover:from-green-700 hover:to-green-500 text-white rounded-md w-full sm:w-min px-8 sm:px-16 py-3 sm:py-4 text-base sm:text-lg">
  Join us
</Button>


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