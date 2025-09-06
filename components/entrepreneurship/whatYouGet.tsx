"use client"

import Image from "next/image"
import { MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import Heading from "../heading"

interface CardProps {
  title: string;
  description: string;
  tags: string[];
  location: string;
  image: string;
}

export const cardsData = [
  {
    title: "Workshops",
    description: "Interactive sessions on design thinking, problem solving, business basics.",
    tags: ["equality", "employment", "education"],
    location: "Haryana",
    image: "/claylab assets/entrepreneurshipProgram/whatYouGet/football.png",
  },
  {
    title: "Mentorship",
    description: "1:1 guidance from real-world entrepreneurs and startup coaches.",
    tags: ["equality", "employment", "education"],
    location: "Pune",
    image: "/claylab assets/entrepreneurshipProgram/whatYouGet/sexed.png",
  },
  {
    title: "Projects",
    description: "Build your own startup idea and pitch it to a panel.",
    tags: ["equality", "employment", "education"],
    location: "Mumbai",
    image: "/claylab assets/entrepreneurshipProgram/whatYouGet/crochet.png",
  },
  {
    title: "Presentation",
    description: "Final showcase to mentors, educators, and community leaders.",
    tags: ["equality", "employment", "education"],
    location: "Delhi",
    image: "/claylab assets/entrepreneurshipProgram/whatYouGet/menstrual.png",
  },
  {
    title: "Make your Own Toy",
    description: "Build your own startup idea and pitch it to a panel.",
    tags: ["equality", "employment", "education"],
    location: "Haryana",
    image: "/claylab assets/entrepreneurshipProgram/whatYouGet/sports.png",
  },
  {
    title: "Evening School",
    description: "1:1 guidance from real-world entrepreneurs and startup coaches.",
    tags: ["community", "empowerment", "education"],
    location: "Gurgaon",
    image: "/claylab assets/entrepreneurshipProgram/whatYouGet/mental.png",
  },
  {
    title: "Book Talk",
    description: "Interactive sessions on design thinking, problem solving, business basics.",
    tags: ["education"],
    location: "Pune",
    image: "/claylab assets/entrepreneurshipProgram/whatYouGet/football.png",
  },
  {
    title: "Preserving Our Culture",
    description: "Final showcase to mentors, educators, and community leaders.",
    tags: ["equality", "education"],
    location: "Mumbai",
    image: "/claylab assets/entrepreneurshipProgram/whatYouGet/toy4 1.png",
  },
];


function WorkshopCard({ title, description, tags, location, image }: CardProps) {
  return (

    <div className="max-w-sm h-full flex flex-col rounded-3xl overflow-hidden bg-gradient-to-b from-green-200 to-green-800 shadow-md p-4">
      <div className="relative w-full h-48 rounded-2xl overflow-hidden">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>

      <div className="mt-4 flex flex-col flex-1">
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-semibold font-serif text-white">{title}</h2>
          <p className="text-sm text-white">{description}</p>

          <div className="flex flex-wrap gap-2 mt-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="bg-white text-gray-700 text-xs font-medium px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between mt-auto pt-5">
          <div className="flex items-center gap-1 text-white text-sm">
            <MapPin size={16} className="text-white" />
            {location}
          </div>
          <Image src={"/claylab assets/general/WifiIcon.png"} alt={"wifi-icon"} height={16} width={16} className="h-auto ml-auto mr-3  w-6 " />
          <Button className="rounded-full bg-[#3eb769] px-4 py-1 h-8 text-white text-sm hover:bg-[#35a85f]">
            Support
          </Button>
        </div>
      </div>
    </div>
  );
}

export default function WorkshopGrid() {
  return (
    <section className="py-8 sm:py-10 px-2 sm:px-4 md:px-16 min-h-screen">
      <Heading text={"Student Projects"} />
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
        {cardsData.map((card, index) => (
          <WorkshopCard key={index} {...card} />
        ))}
      </div>
    </section>
  );
}