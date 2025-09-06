"use client";
import React, { useState, useEffect } from "react";
import { IoMdRocket } from "react-icons/io";

interface JourneyPhase {
  title: string;
  description: string;
  color: string;
  duration: number; // in seconds
}

const Syllabus = () => {
  const [currentPhase, setCurrentPhase] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(true);

  const phases: JourneyPhase[] = [
    {
      title: "Ideation & Mapping",
      description: "Brainstorming and identifying opportunities",
      color: "#10B981",
      duration: 1,
    },
    {
      title: "Building Solutions",
      description: "Developing user-centered solutions",
      color: "#F59E0B",
      duration: 1,
    },
    {
      title: "Piloting",
      description: "Testing solutions in a controlled environment",
      color: "#EF4444",
      duration: 1,
    },
    {
      title: "Reflection & Innovation",
      description: "Analyzing results and innovating",
      color: "#EC4899",
      duration: 1,
    },
    {
      title: "Full-Scale Execution",
      description: "Implementing solutions on a large scale",
      color: "#8B5CF6",
      duration: 1,
    },
    {
      title: "Storytelling & Pitching",
      description: "Communicating ideas effectively",
      color: "#3B82F6",
      duration: 1,
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentPhase < phases.length - 1) {
        setCurrentPhase((prev) => prev + 1);
      } else {
        // Rocket reached the bottom → fade out
        setIsVisible(false);

        // After fade-out, reset back to top
        setTimeout(() => {
          setCurrentPhase(0);
          setIsVisible(true);
        }, 1000);
      }
    }, phases[currentPhase].duration * 1000);

    return () => clearTimeout(timer);
  }, [currentPhase, phases]);

  // 🚀 Rocket moves TOP → BOTTOM
  const getRocketPosition = (): string => {
    const stepHeight = 191; // adjust this for spacing
    const targetPosition = currentPhase * stepHeight;
    return `translateY(${targetPosition}px)`;
  };

  // Highlight phases as rocket passes
  const getPhaseOpacity = (index: number): number => {
    if (index === currentPhase) return 1; // Highlight the current phase
    if (index < currentPhase) return 1;   // Past phases stay lit
    return 0.4;                           // Future phases dim
  };


  return (
    <div className="py-8 sm:py-12 md:py-16 px-2 sm:px-4 md:px-16 gap-3 sm:gap-4 flex flex-col">
      <h3 className="text-4xl sm:text-5xl font-sourceSans font-thin text-green-800 mb-[-2%] underline">
        Syllabus
      </h3>

      <div className="mx-auto my-8 w-full">
        <div className="flex flex-col lg:flex-row gap-36">
          {/* Left Side - Timeline */}
          <div className="relative">
            <div className="flex flex-col items-center">
              <div className="relative flex flex-col items-center">
                <div className="absolute right-2.5 top-0 bottom-0 w-0.5 border-l-2 border-dashed border-black opacity-60 z-5"></div>

                {/* Phases (normal top → bottom order) */}
                <div className="flex flex-col items-center space-y-20">
                  {phases.map((phase, index) => (
                    <div
                      key={index}
                      className="flex items-center w-full max-w-2xl relative"
                      style={{
                        opacity: getPhaseOpacity(index),
                        transition: "opacity 0.5s ease",
                      }}
                    >
                      <div className="bg-white rounded-lg p-6 shadow-lg mr-8 flex-1">
                        <h3
                          className="text-xl font-bold mb-2"
                          style={{ color: phase.color }}
                        >
                          {phase.title}
                        </h3>
                        <p className="text-gray-600">{phase.description}</p>
                      </div>

                      <div className="relative z-10">
                        <div
                          className="w-6 h-6 rounded-full border-4 border-white shadow-lg"
                          style={{ backgroundColor: phase.color }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* 🚀 Rocket (moves downward) */}
                <div
                  className={`absolute right-3 z-20 transition-transform duration-1000 ease-in-out ${isVisible ? "opacity-100" : "opacity-0"
                    }`}
                  style={{
                    transform: `${getRocketPosition()} translateX(50%)`,
                    top: "0px",
                    transition: "transform 1s ease-in-out, opacity 1s ease",
                  }}
                >
                  <div className="text-4xl filter drop-shadow-lg relative">
                    {/* Rocket rotated 180° (points downward) */}
                    <IoMdRocket className="text-red-500 transform rotate-180" />

                    {/* 🔥 Trail flipped to match rocket orientation */}
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                      <div className="w-3 h-5 bg-gradient-to-t from-orange-600 via-yellow-600 to-transparent rounded-full opacity-100 animate-pulse"></div>
                    </div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="w-80 mt-6 mx-auto ml-5">
                  <div className="bg-gray-700 rounded-full h-2 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-green-600 transition-all duration-1000 ease-out rounded-full"
                      style={{
                        width: `${((currentPhase + 1) / phases.length) * 100}%`,
                      }}
                    ></div>
                  </div>
                  <div className="text-center text-black text-sm mt-2">
                    Journey Progress:{" "}
                    {Math.round(((currentPhase + 1) / phases.length) * 100)}%
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side Content */}
          <div className="lg:w-1/2 flex flex-col justify-center">
            <h2 className="text-4xl font-sourceSans font-thin text-gray-800 underline">
              Course Overview
            </h2>
            <p className="text-3xl font-semibold text-gray-700 leading-relaxed mb-20">
              <span className="font-bold text-green-600">
                Grade 11 and 12 Students
              </span>{" "}
              take a 9-month journey of building real projects, structured
              around 6 stages
            </p>

            {/* Polaroid-style Images */}
            <div className="flex flex-col items-center space-y-8">
              {[
                { src: "/claylab assets/sample1.jpg", caption: "Every great journey begins with an idea." },
                { src: "/claylab assets/sample2.jpg", caption: "Solutions are built step by step with creativity." },
                { src: "/claylab assets/sample3.jpg", caption: "Your story is as important as your solution." },
              ].map((img, index) => (
                <div
                  key={index}
                  className="relative w-full max-w-md group transform transition-transform duration-300 hover:rotate-1 hover:scale-115"
                >
                  <div className="bg-white p-4 shadow-lg rounded-xl border border-gray-200 overflow-hidden">
                    <img
                      src={img.src}
                      alt={`Sample ${index + 1}`}
                      className="w-full rounded-lg"
                    />
                    {/* Caption appears only on hover */}
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-center text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg p-4">
                      {img.caption}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>


        </div>
      </div>
    </div>
  );
};

export default Syllabus;
