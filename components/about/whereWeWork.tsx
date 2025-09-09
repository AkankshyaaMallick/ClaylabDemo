import Image from "next/image";

const WhereWeWork = () => {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-16 ">
      <div className=" mx-auto">
        {/* Main Heading with Underline */}

        <div className="mb-12">
  <h2 className="text-3xl sm:text-4xl underline md:text-5xl font-normal text-gray-900 mb-2">
    Where we work
  </h2>
</div>


        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-start">
          {/* Left - India Map */}
          <div className="relative">
            <div className="relative w-full h-[500px] sm:h-[500px] lg:h-[500px]">
              <div className="text-center">
                <div className="w-full h-full rounded-lg flex items-center justify-center p-4">
                  <Image
                    src="/claylab assets/aboutUs/whereWeWork/map.svg"
                    alt="India Map"
                    fill
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right - Text Content */}

          {/* <div className="space-y-6">
            <p className="text-lg sm:text-xl md:text-2xl text-gray-800 leading-relaxed py-16">
              We currently partner with schools in{" "}
              <strong className="font-semibold">Maharashtra</strong> (Mumbai,
              Pune) and <strong className="font-semibold">Uttarakhand</strong>{" "}
              (Udham Singh nagar district, Nainital and Chamawat),{" "}
              <strong className="font-semibold">Delhi</strong> and{" "}
              <strong className="font-semibold">Haryana</strong> (Sonepat) Each
              partnership is a step towards our vision of schools becoming hubs
              of life-readiness and community transformation.
            </p>
          </div> */}

          <div className="flex items-center justify-center h-full">
            <div className="space-y-6 max-w-lg">
              <p className="text-lg sm:text-xl md:text-2xl text-gray-800 leading-relaxed">
                We currently partner with schools in{" "}
                <strong className="font-semibold">Maharashtra</strong> (Mumbai,
                Pune) and <strong className="font-semibold">Uttarakhand</strong>{" "}
                (Udham Singh nagar district, Nainital and Champawat ),{" "}
                <strong className="font-semibold">Delhi</strong> and{" "}
                <strong className="font-semibold">Haryana</strong> (Sonepat) Each
                partnership is a step towards our vision of schools becoming hubs
                of life-readiness and community transformation. <br /><br /><br />
                We partner with those Affordable Private Schools who really believe in the dream of quality education for every child, irrespective of their social or financial background.
              </p>
            </div>
          </div>


        </div>

      </div>
    </section>
  );
};

export default WhereWeWork;
