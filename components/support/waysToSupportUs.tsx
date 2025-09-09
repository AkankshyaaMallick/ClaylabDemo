import React from "react";

const WaysToSupportUs = () => {
  return (
    <div className="pt-12 sm:pt-16 md:pt-20 pb-2  sm:pb-4 md:pb-6 px-4 sm:px-6 md:px-16">

      <div className="mx-auto text-center">
        {/* Header */}
        <h2 className="text-3xl sm:text-5xl font-sourceSans font-thin leading-tight text-gray-800 mb-12 underline">
          Ways You Can Support Us
        </h2>

        {/* Two Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Column 1 */}
          <div className="bg-gradient-to-br from-green-50 via-white to-green-100 shadow-lg rounded-xl p-8 flex flex-col items-center text-center h-full">
            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">
              Help Claylab build excellent schools
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed text-base sm:text-lg">
              For academic year 2026-27, we are building a{" "}
              <span className="font-bold">₹50 lakh Corpus Fund</span> through{" "}
              <span className="font-bold">500 donors</span>, each contributing{" "}
              <span className="font-bold">₹10,000</span>.
              <br />
              This will help Claylab transform into its next chapter — placing
              full-time Fellows in schools to teach life skills and
              entrepreneurship.
              <br />
              <span className="font-bold text-green-600">
                Be 1 of 500. Help us build Claylab more impactful and
                transformational.
              </span>
            </p>
            <div className="mt-auto">
              <a
                href="https://forms.gle/uoeZpdKNSfiPNZfw8"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-medium text-lg transition-transform hover:scale-105"
              >
                Connect with us
              </a>
            </div>
          </div>

          {/* Column 2 */}
          <div className="bg-gradient-to-br from-green-50 via-white to-green-100 shadow-lg rounded-xl p-8 flex flex-col items-center text-center h-full">
            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">
              Support students directly for their education
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed text-base sm:text-lg">
              You can support a child’s education directly. We provide support
              to the least privileged students to help them continue with their
              education.
              <br />
              We select students based on their needs and efforts, and directly
              work with the schools to ensure that these students continue to
              thrive.
              <br />
              <span className="font-bold text-green-600">
                 Be 1 of 200 donors, we are looking for, for 200 students in need.
              </span>
            </p>
            <div className="mt-auto">
              <a
                href="https://forms.gle/uoeZpdKNSfiPNZfw8"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-medium text-lg transition-transform hover:scale-105"
              >
                Connect with us
              </a>
            </div>
          </div>
        </div>
      </div>
       <div className="">
  <div className="text-center">
    <h1 className="text-2xl mt-16 mb-6 sm:text-3xl md:text-6xl font-hendrigo text-gray-800 italic">
      Transparency & Trust.
    </h1>
    <p className="text-lg sm:text-xl md:text-2xl text-gray-800 leading-relaxed text-center">
      We are committed to full transparency. <br />
      You can view our annual reports, audits, and compliance details on our{" "}
      <a
        href="/about"
        className="text-green-600 font-semibold hover:underline transition-colors"
      >
        About Us page
      </a>
      .
    </p>
  </div>
</div>

    </div>
    
  );
};

export default WaysToSupportUs;
