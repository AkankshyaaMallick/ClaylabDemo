"use client";

import React from "react";
import Hero from "@/components/entrepreneurship/hero";
import Syllabus from "@/components/entrepreneurship/syllabus";
import WorkshopCard from "@/components/entrepreneurship/whatYouGet";
import Impact from "@/components/entrepreneurship/impact";

// import Statistics from "@/components/entrepreneurship/statistics"

export default function Home() {
  return (
    <div className="flex flex-col max-w-screen bg-clay-light-hover gap-10">
      <Hero />
      <Syllabus />
      <WorkshopCard />
      {/* <Statistics /> */}
      <Impact />

    </div>
  );
}