// "use client"

// import React, { useEffect, useRef, useState } from "react";

// const stats = [
//   {
//     number: 5000,
//     label: "Students supported in Last 5 year",
//   },
//   {
//     number: 3000,
//     label: "Volunteers engaged",
//   },
//   {
//     number: 20,
//     label: "Schools partnered",
//   },
//   // {
//   //   number: "100+",
//   //   label: "Mentors engaged",
//   // },
//   // {
//   //   number: "1000+",
//   //   label: `children helping everyday`,
//   // },
// ]


// const CountUpNumber = ({ target, suffix = "+" }: { target: number; suffix?: string }) => {
//   const [count, setCount] = useState(0)
//   const [isVisible, setIsVisible] = useState(false)
//   const elementRef = useRef<HTMLHeadingElement>(null)

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true)
//         }
//       },
//       { threshold: 0.1 }
//     )

//     if (elementRef.current) {
//       observer.observe(elementRef.current)
//     }

//     return () => observer.disconnect()
//   }, [])

//   useEffect(() => {
//     if (!isVisible) return

//     const duration = 2000
//     const steps = 60
//     const increment = target / steps
//     const stepDuration = duration / steps

//     let currentStep = 0
//     const timer = setInterval(() => {
//       currentStep++
//       const newCount = Math.min(Math.round(increment * currentStep), target)
//       setCount(newCount)

//       if (currentStep >= steps) {
//         clearInterval(timer)
//       }
//     }, stepDuration)

//     return () => clearInterval(timer)
//   }, [isVisible, target])

//   return (
//     <h2
//       ref={elementRef}
//       className="text-4xl font-openSans font-light transition-all duration-300"
//     >
//       {count}{suffix}
//     </h2>
//   )
// }


// export default function Stats() {
//   return (
//     <div className="py-10 sm:py-10 flex flex-col ">
//       <div className="w-5xl sm:w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center px-2 sm:px-4 gap-4 sm:gap-0">
//         {stats.map((stat, index) => (
//           <div key={index} className="flex flex-col text-center gap-2 sm:gap-6 w-full sm:w-auto transition-transform duration-300 scale-105">
//             <div className="text-2xl sm:text-4xl underline ">  <CountUpNumber target={stat.number} /></div>
//             <div className="text-lg sm:text-3xl flex flex-col text-center max-w-56 gap-2 sm:gap-6">{stat.label}</div>
//           </div>
//         ))}
//       </div>
//       <img
//         src="/claylab assets/general/brushGraphics2.png"
//         alt="Brush underline"
//         className="mx-auto w-2/3"
//       />
//     </div>
//   )
// }



"use client"

import React, { useEffect, useRef, useState } from "react";

const stats = [
  {
    number: 5000,
    label: "Students supported in Last Five years",
  },
  {
    number: 3000,
    label: "Volunteers actively engaged till now",
  },
  {
    number: 20,
    label: "Schools currently partnered with us for impact",
  },
  // {
  //   number: "100+",
  //   label: "Mentors engaged",
  // },
  // {
  //   number: "1000+",
  //   label: `children helping everyday`,
  // },
]


const CountUpNumber = ({ target, suffix = "+" }: { target: number; suffix?: string }) => {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const duration = 2000
    const steps = 60
    const increment = target / steps
    const stepDuration = duration / steps

    let currentStep = 0
    const timer = setInterval(() => {
      currentStep++
      const newCount = Math.min(Math.round(increment * currentStep), target)
      setCount(newCount)

      if (currentStep >= steps) {
        clearInterval(timer)
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [isVisible, target])

  return (
    <h2
      ref={elementRef}
      className="text-4xl font-openSans font-light transition-all duration-300"
    >
      {count}{suffix}
    </h2>
  )
}


export default function Stats() {
  return (
    <div className="py-10 sm:py-10 flex flex-col ">
      <div className="w-5xl sm:w-5xl mx-auto flex flex-col sm:flex-row justify-between items-start px-2 sm:px-4 gap-8 sm:gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col text-center gap-4 w-full sm:w-auto transition-transform duration-300 scale-105 min-h-[120px] justify-between">
            <div className="text-2xl sm:text-4xl underline">
              <CountUpNumber target={stat.number} />
            </div>
            <div className="text-lg sm:text-2xl leading-tight px-2 flex-1 flex items-center justify-center">
              <span className="max-w-[200px]">{stat.label}</span>
            </div>
          </div>
        ))}
      </div>
      <img
        src="/claylab assets/general/brushGraphics2.png"
        alt="Brush underline"
        className="mx-auto w-2/3"
      />
    </div>
  )
}