"use client";

export default function OurJourney() {
  return (
    <section className="relative py-8 sm:py-12 md:py-16 px-2 sm:px-4">
      <div className="max-w-full md:max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {/* Left Sticky Section */}

        {/* <div className="sticky top-20 h-fit self-start ">
          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-3xl sm:text-6xl md:text-8xl font-roughScript text-green-900 leading-tight">
              Our Story
            </h2>
            <p className="text-xl sm:text-2xl font-medium max-w-md mt-40">
              Claylab was started, in July 2020, by 3 Teach For India Fellows - Vivek, Brototy, and Purva who themselves had just taught Grade 10 students from municipality schools in Mumbai.
            </p>
          </div>
        </div> */}

        <div className=" h-fit self-start">
          <div className="bg-clay-light-hover space-y-4 sm:space-y-6">
            <h2 className="font-hendrigo text-2xl sm:text-4xl md:text-6xl lg:text-[6rem] text-green-900 leading-tight">
              Our Story
            </h2>
            <p className="text-2xl sm:text-3xl md:text4xl font-medium  sm:mt-80 md:mt-96">
              Claylab was started, in July 2020, by 3 Teach For India Fellows -
              Vivek, Brototy, and Purva who themselves had just taught Grade <strong>10 </strong>
              students from municipality schools in Mumbai.
            </p>
          </div>
        </div>

        {/* Right Scrollable Section */}
        <div className="bg-clay-light-hover space-y-6 sm:space-y-12 text-base sm:text-lg md:text-2xl text-gray-800">
          <p>
            With a mission to handhold their students till they get decent employment,
            Claylab focussed on holistic education of students.
            As it all happened in the middle of the pandemic, most of our programs were
            started as online spaces and with the time, we narrowed  down on 2 flagship
            initiatives — the <span className="font-bold">Mentorship Program</span> and the <span className="font-bold">School of Entrepreneurship</span>.
            Together, these have supported thousands of students to build social capital,
            leadership skills, and entrepreneurial mindsets.
          </p>
          <p>
            Today, Claylab is moving closer to its larger dream:
            <span className="font-bold"> transforming entire schools into spaces of future-readiness.</span>
          </p>
        </div>


      </div>
      <div className="mt-16 pt-8 border-t border-gray-300">
        <p className="text-lg sm:text-xl md:text-2xl text-gray-800 leading-relaxed text-center mb-6">
          Our strength lies in our people — a diverse team of educators,
          mentors, and leaders who bring passion and purpose to every
          classroom.
        </p>

        <div className="text-center">
          <p className="text-2xl sm:text-3xl md:text-6xl font-hendrigo text-gray-800 italic">
            Meet the people behind Claylab.
          </p>
        </div>
      </div>
    </section>
  );
}
