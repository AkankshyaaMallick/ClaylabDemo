"use client";

import React, { useEffect, useRef, useState } from "react";

const stats = [
  {
    number: 5000,
    label: "Students supported in Last Five years",
  },
  {
    number: 3000,
    label: "Volunteers actively engaged",
  },
  {
    number: 20,
    label: "Schools currently partnered",
  },
];

const CountUpNumber = ({
  target,
  suffix = "+",
}: {
  target: number;
  suffix?: string;
}) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const newCount = Math.min(Math.round(increment * currentStep), target);
      setCount(newCount);

      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isVisible, target]);

  return (
    <h2
      ref={elementRef}
      className="text-4xl font-openSans font-light transition-all duration-300"
    >
      {count}
      {suffix}
    </h2>
  );
};

export default function countingNo() {


  return (
    
    
    <div className="py-10 sm:py-10 flex flex-col ">
      <div className="">
        <div className="text-center">
          <h1 className="text-2xl mb-6 sm:text-3xl md:text-6xl font-hendrigo text-gray-800 italic">
            Why Support Matters.
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-800 leading-relaxed text-center mb-12">
          Claylab’s impact has always been powered by its people
        </p>
        </div>
      </div>

      <div className="w-5xl sm:w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center px-2 sm:px-4 gap-4 sm:gap-0">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col text-center gap-2 sm:gap-6 w-full sm:w-auto transition-transform duration-300 scale-105"
          >
            <div className="text-4xl sm:text-4xl underline">
              {" "}
              <CountUpNumber target={stat.number} />
            </div>
            <div className="text-lg sm:text-3xl flex flex-col text-center max-w-56 gap-2 sm:gap-6">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      <img
        src="/claylab assets/general/brushGraphics2.png"
        alt="Brush underline"
        className="mx-auto w-2/3"
      />

        <div className="px-4 mx-auto text-2xl text-center" > 
            <p className="text-center mt-8"> Your support allows us to go beyond academics — </p>
            Bringing life skills, mentorship, and entrepreneurship directly into classrooms.<br/> 
            Every contribution, big or small, adds to this community movement. </div>
      
    </div>
  );
}
