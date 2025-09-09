const WhoWeAre = () => {
  return (
    <section className="pt-12 sm:pt-16 px-4 sm:px-6 md:px-12 pb-0 -mb-12">

      <div className="mx-auto max-w-7xl flex flex-col md:flex-row gap-12 items-center">
        {/* Left Column - Text Content */}
        <div className="md:w-1/2">
          {/* Main Heading with Underline */}
          <div className="mb-12">
            <h2 className="font-[var(--font-kind-sans)] text-2xl sm:text-5xl md:text-5xl underline text-gray-900 tracking-tight leading-snug mb-8">
              Who are we and our culture
            </h2>
          </div>

          {/* Content */}
          <div className="space-y-8">
            {/* Opening Statement */}
            <p className="text-xl sm:text-2xl md:text-xl text-gray-800 leading-relaxed font-light">
              At Claylab, we are not just teachers or facilitators — we are co-travellers with our students.
            </p>

            {/* ECO Section */}
            <div className="space-y-6">
              <p className="text-xl sm:text-2xl md:text-2xl text-gray-800 leading-relaxed">
                We believe in <strong className="font-bold">ECO</strong>
              </p>

              {/* ECO Points */}
              <div className="space-y-4 ml-4 sm:ml-6">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-lg sm:text-xl md:text-xl text-gray-800 leading-relaxed">
                    <strong className="font-semibold">Empathy with Rigor:</strong> Caring deeply for our students while holding high expectations.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-lg sm:text-l md:text-xl text-gray-800 leading-relaxed">
                    <strong className="font-semibold">Collaboration & Trust:</strong> Working as a team that learns from each other, just as our students do.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-lg sm:text-l md:text-xl text-gray-800 leading-relaxed">
                    <strong className="font-semibold">Ownership & Reflection:</strong> Modeling the same responsibility and self-learning we want our students to develop.
                  </p>
                </div>
              </div>
            </div>

            {/* Closing Statement */}
            <p className="text-l sm:text-xl md:text-xl text-gray-800 leading-relaxed font-light">
              We see ourselves as sparks — igniting curiosity, agency, and ambition in every teenager we meet.
            </p>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <img
            src="/claylab assets/aboutUs/side.jpg"
            alt="Who We Are"
            className="w-full  h-[500px] object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
