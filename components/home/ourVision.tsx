import Image from "next/image";

const OurVision = () => {
  return (
    <section className="py-8 sm:py-12 px-4 sm:px-6 md:px-16 ">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Our Vision:
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-black rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-lg sm:text-xl md:text-2xl text-gray-800 leading-relaxed">
                  We want every school in India to provide holistic education that goes beyond textbooks — focusing on life skills, leadership, and future readiness.
                </p>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-black rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-lg sm:text-xl md:text-2xl text-gray-800 leading-relaxed">
                  We want at least 75% of our students to graduate as employable, confident young adults, prepared for both livelihoods and leadership.
                </p>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-black rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-lg sm:text-xl md:text-2xl text-gray-800 leading-relaxed">
                  We want schools to become agents of change in their communities — driving sustainability, citizenship, and social transformation, not just academic results.
                </p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/claylab assets/home/ourVision/ourVision.png"
                alt="Students and teacher in classroom setting"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OurVision;