
"use client";

import React from "react";
import Hero from "@/components/support/hero";
import FAQ from "@/components/support/faq";
import CountingNo from "@/components/support/countingNo";
import WaysToSupportUs from "@/components/support/waysToSupportUs";
import CommunitySection from "@/components/support/CommunitySection";


// import { useEffect, useRef, useState } from "react";
// import TheImpact from "@/components/support/theImpact";



export default function Home() {

  return (
    <div className="flex flex-col max-w-screen bg-clay-light-hover gap-10">
      <Hero />
      <CountingNo />
      <WaysToSupportUs/>
      {/* <TheImpact /> */}
      <CommunitySection/>
      <FAQ />
    </div>
  );
}




