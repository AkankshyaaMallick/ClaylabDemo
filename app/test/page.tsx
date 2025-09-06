"use client";

import Image from "next/image";
import Heading from "@/components/heading";

export default function ReportsSection() {
  const reports = [
    {
      title: "Annual Report 2024-25",
      description: "Coming Soon . . .",
      link: "",
      year: "2024-25",
      type: "Report",
    },
    {
      title: "Annual Report 2023-24",
      description:
        "A comprehensive overview of our activities and achievements in 2023-24.",
      link: "https://drive.google.com/file/d/1nVU4GJMA8aXNdfCBJvxtrIIwbLYQcZ4u/view?usp=drive_link",
      year: "2023-24",
      type: "Report",
    },
    {
      title: "Annual Report 2022-23",
      description:
        "Our financial performance for the fourth quarter of 2022-23.",
      link: "https://drive.google.com/file/d/10i5fZkw62ShsChlrJoPGbJCPYKuCTcN0/view?usp=drive_link",
      year: "2022-23",
      type: "Report",
    },
    {
      title: "Annual Report 2021-22",
      description: "An analysis of the impact of our programs in 2021-22.",
      link: "https://drive.google.com/file/d/1iMW3eXGSjYmp8yKzPnzftoTCOgQ_Mrtb/view?usp=drive_link",
      year: "2021-22",
      type: "Report",
    },
    {
      title: "Annual Report 2020-21",
      description:
        "A comprehensive overview of our activities and achievements in 2020-21.",
      link: "https://drive.google.com/file/d/1xxiHSrDqDPrzN2kMP0JQnovcvVrQ9fmU/view?usp=drive_link",
      year: "2020-21",
      type: "Report",
    },
    {
      title: "Registration Documents",
      description:
        "Official registration and incorporation documents of the organization.",
      link: "https://drive.google.com/drive/folders/1i576O-p5Dpfx1Ksqlk-_lY6uFNNHCtl3?usp=sharing",
      year: "",
      type: "registration",
    },
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Report":
        return "bg-gradient-to-br from-emerald-500 to-green-600"; // Better green gradient
      case "registration":
        return "bg-gradient-to-br from-amber-500 to-orange-600"; // Better orange gradient
      default:
        return "bg-gradient-to-br from-slate-500 to-gray-600";
    }
  };

  const handleReportClick = (link: string) => {
    if (link) {
      window.open(link, "_blank");
    }
  };

  return (
    <section className="text-center py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 rounded-none shadow-md w-full mx-auto">
      {/* Icon */}
      <div className="flex justify-center mb-4 sm:mb-6">
        <Image
          src={"/claylab assets/aboutUs/documentIcon.png"}
          height={80}
          width={60}
          alt={"document icon"}
          className="h-16 w-auto sm:h-20 md:h-24"
        />
      </div>

      <Heading text="REPORTS & DOCUMENTATION" />

      {/* Description */}
      <p className="max-w-2xl mx-auto text-gray-700 text-sm sm:text-base md:text-lg mb-8 sm:mb-10 leading-relaxed">
        We prioritize transparency as we believe it is crucial to foster trust
        and accountability in our actions and initiatives.
      </p>

      {/* Reports Grid - Folder Style */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 sm:gap-6 mb-8 sm:mb-10 max-w-6xl mx-auto">
        {reports.map((report, index) => (
          <div
            key={index}
            className={`relative group ${
              report.link ? "cursor-pointer" : "opacity-75"
            }`}
            onClick={() => handleReportClick(report.link)}
          >
            {/* Folder Shape */}
            <div className="relative">
              {/* Folder Tab */}
              <div 
                className={`absolute -top-2 left-4 w-12 h-4 ${getTypeColor(report.type)} rounded-t-md z-10 shadow-sm`}
              />
              
              {/* Main Folder Body */}
              <div 
                className={`w-full h-32 ${getTypeColor(report.type)} rounded-md shadow-lg 
                  ${report.link ? 'group-hover:shadow-xl group-hover:scale-105' : ''} 
                  transition-all duration-300 relative overflow-hidden border border-white/20`}
              >
                {/* Folder Highlight */}
                <div className="absolute top-0 left-0 w-full h-8 bg-white bg-opacity-30" />
                
                {/* Document Icon */}
                <div className="flex items-center justify-center h-full">
                  <svg
                    className="w-12 h-12 text-white drop-shadow-md"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                  </svg>
                </div>

                {/* Status Indicator */}
                {!report.link && (
                  <div className="absolute bottom-2 left-2">
                    <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse border-2 border-white shadow-sm"/>
                  </div>
                )}
              </div>
            </div>

            {/* Folder Label */}
            <div className="mt-3 px-1">
              <h3 className="text-xs sm:text-sm font-medium text-gray-800 line-clamp-2 text-center leading-tight">
                {report.title}
              </h3>
              {report.year && (
                <p className="text-xs text-gray-500 mt-1 text-center">
                  {report.year}
                </p>
              )}
            </div>

            {/* Hover Tooltip */}
            {report.link && (
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                <div className="bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap shadow-lg">
                  Click to view
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Status Legend */}
      <div className="flex justify-center gap-6 mb-6 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-4 h-3 bg-gradient-to-br from-emerald-500 to-green-600 rounded-sm shadow-sm" />
          <span className="text-gray-600">Annual Reports</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-3 bg-gradient-to-br from-amber-500 to-orange-600 rounded-sm shadow-sm" />
          <span className="text-gray-600">Registration Docs</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse border border-white shadow-sm" />
          <span className="text-gray-600">Coming Soon</span>
        </div>
      </div>

      {/* Last Update Info */}
      <div className="flex justify-center">
        <div className="bg-green-50 border border-green-200 rounded-lg px-4 py-2 shadow-sm">
          <p className="text-green-800 text-sm font-medium">
            Last update: 28th August 2025
          </p>
        </div>
      </div>
    </section>
  );
}