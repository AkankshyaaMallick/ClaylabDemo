// import Heading from "../heading"
// import Image from 'next/image'


// export const mentorshipSteps = [
//   {
//     id: 'I',
//     title: 'Apply mentorship',
//     image: '/claylab assets/mentorshipProgram/mentorshipJourney/63d5361a-6f2b-4d23-818d-6e6da3c26d8a 2.png',
//     bg: 'bg-[#e1f0e6]',
//   },
//   {
//     id: 'II',
//     title: 'Get matched',
//     image: '/claylab assets/mentorshipProgram/mentorshipJourney/ChatGPT Image Jun 19, 2025, 10_38_44 PM 5-1.png',
//     bg: 'bg-[#e1f0e6]',
//   },
//   {
//     id: 'III',
//     title: 'Start mentoring',
//     image: '/claylab assets/mentorshipProgram/mentorshipJourney/ChatGPT Image Jun 19, 2025, 10_38_44 PM 5-2.png',
//     bg: 'bg-[#d1ebd8]',
//   },
//   {
//     id: 'IV',
//     title: 'Grow together',
//     image: '/claylab assets/mentorshipProgram/mentorshipJourney/ChatGPT Image Jun 19, 2025, 10_38_44 PM 5.png',
//     bg: 'bg-[#d1ebd8]',
//   },
// ];


// const MentorshipJourney = () => {
//   return <div className="flex flex-col gap-4 px-4 md:px-16  ">

//     <Heading text={"Ready to start your mentorship journey"} />
//     <div className="py-12 px-4">
//       <div className="max-w-6xl flex justify-between gap-6">
//         {mentorshipSteps.map((step, index) => (
//           <div
//             key={index}
//             className={` ${index%2==0 ? "bg-gradient-to-b from-green-200 to-green-800" : "bg-[#C3D7C4]"} rounded-2xl p-5 flex flex-col items-center text-center shadow-sm transition-transform duration-300 hover:scale-105 hover:shadow-lg cursor-pointer`}
//           >
//             <Image
//               src={step.image}
//               alt={step.title}
//               width={200}
//               height={200}
//               className="rounded-lg"
//             />
//             <div className="mt-3 flex items-center gap-2 font-serif">
//               <span className="text-2xl flex justify-center align-center items-center font-bold rounded-full bg-gray-200 h-10 w-10">
//                 {step.id}
//               </span>
//               <span className={`text-xl font-bold ${index%2==0 ? "text-white" : "text-green-700"}`}>{step.title}</span>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   </div>
// }

// export default MentorshipJourney









import Heading from "../heading"
import Image from 'next/image'

export const mentorshipSteps = [
  {
    id: 'I',
    title: 'Curiosity towards the Mentee',
    image: '/claylab assets/mentorshipProgram/mentorshipJourney/63d5361a-6f2b-4d23-818d-6e6da3c26d8a 2.png',
    bg: 'bg-[#e1f0e6]',
  },
  {
    id: 'II',
    title: 'Co-Learning ',
    image: '/claylab assets/mentorshipProgram/mentorshipJourney/ChatGPT Image Jun 19, 2025, 10_38_44 PM 5-1.png',
    bg: 'bg-[#e1f0e6]',
  },
  {
    id: 'III',
    title: 'Patience for results',
    image: '/claylab assets/mentorshipProgram/mentorshipJourney/ChatGPT Image Jun 19, 2025, 10_38_44 PM 5-2.png',
    bg: 'bg-[#d1ebd8]',
  },
  {
    id: 'IV',
    title: 'Act – Reflect – Repeat ',
    image: '/claylab assets/mentorshipProgram/mentorshipJourney/ChatGPT Image Jun 19, 2025, 10_38_44 PM 5.png',
    bg: 'bg-[#d1ebd8]',
  },
];

const MentorshipJourney = () => {
  return (
    <section className=" lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="px-6">
        {/* Header */}
        <h2 className="font-[var(--font-kind-sans)] text-2xl sm:text-5xl md:text-5xl underline text-gray-900 tracking-tight leading-snug mb-8">
              Our Approach
            </h2>
        <div>
          <p className="mt-16 text-2xl">
            At Claylab, we believe mentorship is not about lecturing, but about walking the journey together. Every mentor–mentee relationship is guided by these principles:
          </p>
        </div>



        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-6 xl:gap-8">
          {mentorshipSteps.map((step, index) => (
            <div
              key={step.id}
              className={`
                ${index % 2 === 0
                  ? "bg-gradient-to-b from-green-200 to-green-800"
                  : "bg-[#C3D7C4]"
                } 
                rounded-2xl p-4 sm:p-5 md:p-6 flex flex-col items-center text-center 
                shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-lg 
                cursor-pointer group
              `}
            >
              {/* Image Container */}
              <div className="relative w-full aspect-square mb-4 sm:mb-5 md:mb-6 overflow-hidden rounded-lg">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
              </div>

              {/* Step Info */}
              <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 font-serif">
                {/* Step Number */}
                <span className="text-lg sm:text-xl md:text-2xl flex justify-center items-center font-bold rounded-full bg-gray-200 h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 flex-shrink-0">
                  {step.id}
                </span>

                {/* Step Title */}
                <span className={`
                  text-sm sm:text-base md:text-lg lg:text-xl font-bold text-center sm:text-left
                  ${index % 2 === 0 ? "text-white" : "text-green-700"}
                `}>
                  {step.title}
                </span>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 text-2xl" >This approach ensures that every student grows into a confident leader, ready for the challenges of the 21st century.</p>

        {/* Optional CTA Section */}
        {/* <div className="text-center mt-12 sm:mt-16 lg:mt-20">
          <button className="inline-flex items-center px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white rounded-lg sm:rounded-xl font-medium text-sm sm:text-base md:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Start Your Journey Today
          </button>
        </div> */}


      </div>
    </section>
  )
}

export default MentorshipJourney