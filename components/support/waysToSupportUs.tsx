import Image from "next/image";

const WaysToSupportUs = () => {
  return (
    <div className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-16">
      <div className="mx-auto">
        {/* Header */}
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-8 underline">
          Ways You Can Support Us
        </h2>

        {/* QR Code Section */}
        <div className="text-center mb-12">
          <div className="inline-block  bg-white rounded-lg shadow-md">
            <Image
              src="/qrCode.svg"
              width={250}
              height={250}
              alt="QR Code for donations"
              className="mx-auto"
            />
          </div>

          {/* Payment Options */}
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md font-medium transition-colors">
              Monthly payment
            </button>
            <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md font-medium transition-colors">
              One time support
            </button>
            <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md font-medium transition-colors">
              Bank Transfer
            </button>
          </div>
        </div>

        {/* Corpus Fund Section */}
        <div className="mb-12 text-center">
          <h3 className="text-5xl font-bold text-gray-800 mb-4">
            Be 1 of 1000 Founding Supporters (Corpus Fund)
          </h3>
          <p className="text-gray-700 mb-6 max-w-3xl mx-auto leading-relaxed text-2xl ">
            We are building a ₹50 lakh Corpus Fund through 1000 donors, each
            contributing ₹5000. This will help Claylab transform into its next
            chapter - placing full-time Fellows in schools to teach life skills
            and entrepreneurship.
          </p>
          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md font-medium text-lg transition-colors">
            Donate ₹5,000
          </button>
        </div>

        {/* Sponsor Students Section */}
        <div className="mb-12 text-center">
          <h3 className=" font-semibold text-gray-800 mb-6 text-6xl ">
            Sponsor Students and Schools
          </h3>

          <div className="space-y-4 text-2xl">
            <div className="flex items-start gap-3 justify-center">
              <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700">
                <span className="font-semibold">{'₹2,000/month:'}</span> Sponsor a
                {`child's education in our partner schools.`}
              </p>
            </div>
            <div className="flex items-start gap-3 justify-center">
              <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700">
                <span className="font-semibold">₹1,000/month:</span> Support
                life-skills and entrepreneurship classes for one student.
              </p>
            </div>
            <div className="flex items-start gap-3 justify-center">
              <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700">
                <span className="font-semibold">₹6 lakhs/year:</span> Transform
                a school by supporting 100 students.
              </p>
            </div>
          </div>
        </div>

        {/* Support in Other Ways Section */}
        <div className="text-center mt-24">
          <h3 className=" font-semibold text-gray-800 mb-6 text-7xl ">
            Support in Other Ways
          </h3>
          <div className="space-y-4 text-2xl">
            <div className="flex items-start gap-3 justify-center">
              <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700">
                Contribute to school infrastructure (computer labs, libraries,
                learning spaces).
              </p>
            </div>
            <div className="flex items-start gap-3 justify-center">
              <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700">
                Partner with us through CSR and institutional giving.
              </p>
            </div>
            <div className="flex items-start gap-3 justify-center">
              <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700">
                Volunteer your time as a mentor or trainer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaysToSupportUs;
