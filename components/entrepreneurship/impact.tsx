import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

const Impact = () => {
  return (
    <div className="relative w-full">
      {/* Background image container with increased height */}
      <div className="relative w-full h-[350px] sm:h-[300px] md:h-[350px] lg:h-[400px] flex justify-end overflow-hidden">
        <Image
          src="/claylab assets/entrepreneurshipProgram/applySectionBg.png"
          alt="apply-section-bg"
          fill
          className="object-cover object-right"
          priority
        />

        {/* Overlay content */}
        <section className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-16 gap-4 sm:gap-6">
          <h2 className="text-lg sm:text-2xl md:text-4xl font-semibold text-black tracking-wide">
            READY TO TURN YOUR IDEAS INTO IMPACT?
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-[#2D2D2D] max-w-3xl mx-auto leading-relaxed">
            For Academic Year 2026-27, we are seeking school partners, from
            suburban or rural parts of Haryana and Uttarakhand, who are ready to
            collaborate with us for the implementation of the School of
            Entrepreneurship program in their schools.
            <br />
            <span className="font-bold text-green-600"> Drop us an email </span>{' '}
            and we will connect with you and take it forward.
          </p>

          {/* Mailto Button */}
          <a
            href="mailto:contact@claylab.education"
            className="mt-4 flex items-center gap-2 bg-gradient-to-r from-[#2E9C4B] to-[#76E293] text-white font-medium px-4 sm:px-6 py-2 rounded-full shadow-md transition-transform duration-300 text-sm sm:text-base hover:scale-105"
          >
            <span>Want to partner</span>
            <ArrowRight className="p-1 bg-white text-green-500 rounded-full" />
          </a>
        </section>
      </div>

      {/* Optional decorative circle */}
      <div className="hidden sm:block absolute right-0 bottom-0 w-[80px] sm:w-[120px] h-[80px] sm:h-[120px] rounded-full bg-[#CFEEDC] opacity-40 translate-x-1/2 translate-y-1/2" />
    </div>
  )
}

export default Impact
