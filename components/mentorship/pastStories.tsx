// // import Image from 'next/image'

// // const ImageData = [
// //   {
// //     ImageUrl: "/claylab assets/mentorshipProgram/pastStories/bg1.png",
// //     pfpUrl: "/claylab assets/mentorshipProgram/pastStories/pfp1.png"
// //   }, {
// //     ImageUrl: "/claylab assets/mentorshipProgram/pastStories/bg2.png",
// //     pfpUrl: "/claylab assets/mentorshipProgram/pastStories/pfp2.png"
// //   }, {
// //     ImageUrl: "/claylab assets/mentorshipProgram/pastStories/bg3.png",
// //     pfpUrl: "/claylab assets/mentorshipProgram/pastStories/pfp3.png"
// //   }, {
// //     ImageUrl: "/claylab assets/mentorshipProgram/pastStories/bg4.png",
// //     pfpUrl: "/claylab assets/mentorshipProgram/pastStories/pfp4.png"
// //   }
// // ]

// // const PastStories = () => {
// //   return <div className='py-8 sm:py-12 md:py-16 px-2 sm:px-4 md:px-16 gap-3 sm:gap-4 flex flex-col '>

// //     <h3 className='text-center font-roughScript text-3xl sm:text-6xl font-bold text-green-800 mb-[-2%]'>Past Stories</h3>
// //     <Image src={"/claylab assets/general/brushGraphics2.png"} height={8} width={200} className="max-w-xs sm:max-w-3xl mx-auto" alt={"underline"} />
// //     <div className="flex flex-wrap justify-center gap-4 mx-auto w-full">
// //       {ImageData.map((imageCard) => {
// //         return <div key={imageCard.ImageUrl} className='relative flex w-fit'>
// //           <Image className='rounded-xl w-32 sm:w-60 h-auto' src={imageCard.ImageUrl} height={200} width={120} alt={"Image-bg"} />
// //           <Image className="rounded-full absolute bottom-[-5%] left-[37%]" src={imageCard.pfpUrl} height={75} width={75} alt={"Image-pfp"} />
// //         </div>
// //       })}
// //     </div>
// //   </div>
// // }

// // export default PastStories









// import Image from 'next/image'

// const ImageData = [
//   {
//     ImageUrl: "/claylab assets/mentorshipProgram/pastStories/bg1.png",
//     pfpUrl: "/claylab assets/mentorshipProgram/pastStories/pfp1.png"
//   }, {
//     ImageUrl: "/claylab assets/mentorshipProgram/pastStories/bg2.png",
//     pfpUrl: "/claylab assets/mentorshipProgram/pastStories/pfp2.png"
//   }, {
//     ImageUrl: "/claylab assets/mentorshipProgram/pastStories/bg3.png",
//     pfpUrl: "/claylab assets/mentorshipProgram/pastStories/pfp3.png"
//   }, {
//     ImageUrl: "/claylab assets/mentorshipProgram/pastStories/bg4.png",
//     pfpUrl: "/claylab assets/mentorshipProgram/pastStories/pfp4.png"
//   }
// ]

// const PastStories = () => {
//   return (
//     <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         {/* Header Section */}
//         <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
//           <h3 className="font-roughScript text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-green-800 mb-2 sm:mb-4">
//             Past Stories
//           </h3>

//           {/* Decorative Underline */}
//           <div className="flex justify-center">
//             <Image 
//               src="/claylab assets/general/brushGraphics2.png" 
//               height={8} 
//               width={200} 
//               className="w-24 sm:w-32 md:w-48 lg:w-64 xl:w-80 h-auto" 
//               alt="decorative underline" 
//             />
//           </div>
//         </div>

//         {/* Stories Grid */}
//         <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-6 xl:gap-8 place-items-center">
//           {ImageData.map((imageCard, index) => (
//             <div 
//               key={imageCard.ImageUrl} 
//               className="relative group cursor-pointer transition-transform duration-300 hover:scale-105"
//             >
//               {/* Background Story Image */}
//               <div className="relative w-32 sm:w-40 md:w-48 lg:w-52 xl:w-60 aspect-[3/4] overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
//                 <Image 
//                   src={imageCard.ImageUrl}
//                   alt={`Story ${index + 1} background`}
//                   fill
//                   sizes="(max-width: 480px) 50vw, (max-width: 1024px) 33vw, 25vw"
//                   className="object-cover transition-transform duration-300 group-hover:scale-110"
//                   loading="lazy"
//                 />
//               </div>

//               {/* Profile Picture Overlay */}
//               <div className="absolute -bottom-3 sm:-bottom-4 left-1/2 transform -translate-x-1/2">
//                 <div className="relative w-12 h-12 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 xl:w-24 xl:h-24">
//                   <Image 
//                     src={imageCard.pfpUrl}
//                     alt={`Story ${index + 1} profile`}
//                     fill
//                     sizes="(max-width: 640px) 64px, (max-width: 1024px) 80px, 96px"
//                     className="object-cover rounded-full border-2 sm:border-3 md:border-4 border-white shadow-lg transition-transform duration-300 group-hover:scale-110"
//                     loading="lazy"
//                   />
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Optional CTA Section */}
//         <div className="text-center mt-12 sm:mt-16 lg:mt-20">
//           <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
//             Every story is unique. Every journey transforms lives. Start your own mentorship story today.
//           </p>

//           <button className="inline-flex items-center px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white rounded-lg sm:rounded-xl font-medium text-sm sm:text-base md:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
//             Share Your Story
//           </button>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default PastStories



import Image from 'next/image'

const ImageData = [
  {
    ImageUrl: "/claylab assets/mentorshipProgram/pastStories/1.png",
    /* pfpUrl: "/claylab assets/mentorshipProgram/pastStories/pfp1.png" */
  }, {
    ImageUrl: "/claylab assets/mentorshipProgram/pastStories/2.png",
    /* pfpUrl: "/claylab assets/mentorshipProgram/pastStories/pfp2.png" */
  }, {
    ImageUrl: "/claylab assets/mentorshipProgram/pastStories/3.png",
    /* pfpUrl: "/claylab assets/mentorshipProgram/pastStories/pfp3.png" */
  }, {
    ImageUrl: "/claylab assets/mentorshipProgram/pastStories/4.png",
    /* pfpUrl: "/claylab assets/mentorshipProgram/pastStories/pfp4.png" */
  }
]

const PastStories = () => {
  return (
    <section className="py-10 sm:py-10 md:py-10 lg:py-10 px-4 sm:px-6 lg:px-8">
      <div className=" mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          <h3 className="font-hendrigo text-5xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl  text-green-800 mb-2 sm:mb-4">
            Pair of the month
          </h3>

          {/* Decorative Underline */}
          <div className="flex justify-center">
            <Image
              src="/claylab assets/general/brushGraphics2.png"
              height={8}
              width={200}
              className="w-24 sm:w-32 md:w-48 lg:w-64 xl:w-80 h-auto"
              alt="decorative underline"
            />
          </div>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-6 xl:gap-8 place-items-center">
          {ImageData.map((imageCard, index) => (
            <div
              key={imageCard.ImageUrl}
              className="relative group cursor-pointer transition-transform duration-300 hover:scale-105 w-full max-w-[180px] sm:max-w-[200px] md:max-w-[240px] lg:max-w-[260px] xl:max-w-[300px]"
            >
              {/* Background Story Image */}
              <div className="relative w-full aspect-[3/4] overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Image
                  src={imageCard.ImageUrl}
                  alt={`Story ${index + 1} background`}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
              </div>

              {/* Profile Picture Overlay */}
              {/* <div className="absolute -bottom-4 sm:-bottom-5 md:-bottom-6 left-1/2 transform -translate-x-1/2">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32">
                  <Image
                    src={imageCard.pfpUrl}
                    alt={`Story ${index + 1} profile`}
                    fill
                    sizes="(max-width: 640px) 80px, (max-width: 1024px) 96px, 128px"
                    className="object-cover rounded-full transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
              </div>
              */}


            </div>
          ))}
        </div>

        


      </div>
    </section>
  )
}

export default PastStories