"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import Heading from "../heading"
import Link from "next/link";

interface CardProps {
  title: string;
  description: string;
  tags: string[];
  location: string;
  image: string;
}

export const cardsData = [
  {
    title: "Teaching football",
    description: "Interactive sessions on design thinking, problem solving, business basics.",
    tags: ["equality", "employment", "education"],
    location: "Haryana",
    image: "/claylab assets/entrepreneurshipProgram/whatYouGet/football.png",
  },
  {
    title: "Sex education",
    description: "1:1 guidance from real-world entrepreneurs and startup coaches.",
    tags: ["equality", "employment", "education"],
    location: "Pune",
    image: "/claylab assets/entrepreneurshipProgram/whatYouGet/sexed.png",
  },
  {
    title: "Crochet Shop",
    description: "Build your own startup idea and pitch it to a panel.",
    tags: ["equality", "employment", "education"],
    location: "Mumbai",
    image: "/claylab assets/entrepreneurshipProgram/whatYouGet/crochet.png",
  },
  {
    title: "Sustainable Menstrual Products",
    description: "Final showcase to mentors, educators, and community leaders.",
    tags: ["equality", "employment", "education"],
    location: "Delhi",
    image: "/claylab assets/entrepreneurshipProgram/whatYouGet/menstrual.png",
  },
  {
    title: "Sports for everyone",
    description: "Build your own startup idea and pitch it to a panel.",
    tags: ["equality", "employment", "education"],
    location: "Haryana",
    image: "/claylab assets/entrepreneurshipProgram/whatYouGet/sports.png",
  },
  {
    title: "Good mental health for teenagers",
    description: "1:1 guidance from real-world entrepreneurs and startup coaches.",
    tags: ["community", "empowerment", "education"],
    location: "Gurgaon",
    image: "/claylab assets/entrepreneurshipProgram/whatYouGet/mental.png",
  },
  {
    title: "Eco-friendly Artisans",
    description: "Interactive sessions on design thinking, problem solving, business basics.",
    tags: ["education"],
    location: "Pune",
    image: "/claylab assets/entrepreneurshipProgram/whatYouGet/innovation.png",
  },
  {
    title: "Engaging videos for Science learners",
    description: "Final showcase to mentors, educators, and community leaders.",
    tags: ["equality", "education"],
    location: "Mumbai",
    image: "/claylab assets/entrepreneurshipProgram/whatYouGet/science.png",
  },
];

function WorkshopCard({ title, description, tags, location, image }: CardProps) {
  return (
    <div className="max-w-sm w-full flex flex-col rounded-2xl overflow-hidden shadow-lg group relative cursor-pointer bg-white mx-auto">
      {/* Polaroid-style image with thick border and extra bottom space */}
      <div className="relative w-full h-[580px] bg-white border-8 border-white shadow-lg rounded-2xl overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Overlay for hover */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition duration-300 flex flex-col justify-center items-center text-center p-4">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {title}
          </h2>

          <Link
  href="https://give.do/fundraisers/scholarships-for-500-student-leaders-from-less-privileged-background"
  target="_blank"
>
  <Button
    className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full bg-[#3eb769] px-4 py-1 h-8 text-white text-sm hover:bg-[#35a85f]"
  >
    Support
  </Button>
</Link>
        </div>
      </div>
    </div>
  );
}

export default function WorkshopGrid() {
  return (
    <section className="py-8 sm:py-10 px-2 sm:px-4 md:px-16 min-h-screen">
      <Heading text={"Student Projects" } />
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 justify-items-center">
        {cardsData.map((card, index) => (
          <WorkshopCard key={index} {...card} />
        ))}
      </div>
    </section>
  );
}
