import { useState, useEffect, useRef } from "react";

const stats = [
  {
    value: "96%",
    numericValue: 96,
    description: [
      "Mentors feel they are making",
      "a positive difference in the society",
      "while volunteering at ClayClub.",
    ],
  },
  {
    value: "92%",
    numericValue: 92,
    description: [
      "Mentees reported that the program",
      "helped them do better in school",
      "activities and in academics.",
    ],
  },
  {
    value: "75%",
    numericValue: 75,
    description: [
      "Mentees showed improved career readiness",
      "from level 2 to level 3",
      "on our rubric.",
    ],
  },
];

const statsRow2 = [
  {
    value: "25%",
    numericValue: 25,
    description: [
      "Mentees participated in structures",
      "apart from mentorship like Clay talkies,",
      "competitions for pairs, etc.",
    ],
  },
  {
    value: "16%",
    numericValue: 16,
    description: [
      "Super Mentors and SM Coach trainings",
      "were conducted",
      "for our Mentors.",
    ],
  },
];


const CountUpNumber = ({ target, suffix = "%" }: { target: number; suffix?: string }) => {
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
      className="text-5xl font-openSans font-light transition-all duration-300"
    >
      {count}{suffix}
    </h2>
  )
}


const StatisticsCommon = () => {
  return (
    <>
      {/* First row - 3 columns */}
      {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`border-4 rounded-2xl p-6 flex flex-col justify-between h-48 ${"bg-gradient-to-r from-green-600 to-green-200"} min-w-[200px]`}
          >
            <h2
              className={`text-4xl font-openSans font-light ${
                index === 0 ? "text-Black" : "text-[#00391C]"
              }`}
            >
              {stat.value}
            </h2>
            <div
              className={`flex flex-col text-lg text-right ${
                index === 0 ? "text-black" : "text-[#00391C]"
              }`}
            >
              {stat.description.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          </div>
        ))}
      </div> */}

      {/* Second row - 2 columns */}
      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {statsRow2.map((stat, index) => (
          <div
            key={index}
            className="border-4 rounded-2xl p-6 flex flex-col justify-between h-48 bg-gradient-to-r from-green-600 to-green-200 min-w-[200px]"
          >
            <h2 className="text-4xl font-openSans font-light text-black">
              {stat.value}
            </h2>
            <div className="flex flex-col text-xl text-right text-black">
              {stat.description.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          </div>
        ))}
      </div> */}


        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`rounded-2xl p-6 flex flex-col justify-between h-48 min-w-[200px] transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl cursor-pointer group ${
                index === 0
                  ? "bg-gradient-to-r from-green-800 to-green-600 hover:from-green-200 hover:to-green-200/40 hover:shadow-lg"
                  : "bg-gradient-to-r from-green-600 to-green-100/30 hover:from-green-200 hover:to-green-200/40 hover:shadow-lg"
              }`}
            >
              <div className={`${index === 0 ? "text-green-600 " : "text-green-900 "} transition-transform duration-300`}>
                <CountUpNumber target={stat.numericValue} />
              </div>
              <div
                className={`flex flex-col text-sm text-right transition-all duration-300 group-hover:translate-x-1 ${
                  index === 0 ? "text-white group-hover:text-green-100" : "text-[#00391C] group-hover:text-green-800"
                }`}
              >
                {stat.description.map((line, i) => (
                  <p key={i} className="leading-relaxed">{line}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {statsRow2.map((stat, index) => (
            <div
              key={index}
              className={"rounded-2xl p-6 flex flex-col justify-between h-48 min-w-[200px] transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl cursor-pointer group bg-gradient-to-r from-green-600 to-green-100/30 hover:from-green-200 hover:to-green-200/40"
              }
            >
              <div className={"text-green-900 text-4xl font-bold  transition-transform duration-300"}>
                <CountUpNumber target={stat.numericValue} />
              </div>
              <div
                className={`flex flex-col text-sm text-right transition-all duration-300 group-hover:translate-x-1 ${
                  index === -1 ? "text-white group-hover:text-green-100" : "text-[#00391C] group-hover:text-green-800"
                }`}
              >
                {stat.description.map((line, i) => (
                  <p key={i} className="leading-relaxed">{line}</p>
                ))}
              </div>
            </div>
          ))}
        </div>


    </>
  );
};

export default StatisticsCommon;
