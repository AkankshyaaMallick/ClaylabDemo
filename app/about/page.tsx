"use client";

import React from "react";
import Hero from "@/components/about/hero";
import OurJourney from "@/components/about/ourJourney";
import ReportsSection from "@/components/about/reports";
import OurTeam from "@/components/about/ourTeam";
import WhoWeAre from "@/components/about/whoWeAre";
import WhereWeWork from "@/components/about/whereWeWork";

// import Claylab from "@/components/about/claylab";
// import StatutoryInfo from "@/components/about/statutoryInformation";

export default function Home() {
  return (
    <div className="flex flex-col max-w-screen bg-clay-light-hover gap-10">
      <Hero />
      {/* <Claylab /> */}
      <WhoWeAre />
      <WhereWeWork />
      <OurJourney />
      <OurTeam />
      <ReportsSection />
      {/* <StatutoryInfo /> */}
    </div>
  );
}