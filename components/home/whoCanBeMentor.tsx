import Heading from "../heading";
import Image from "next/image";
import { Button } from "../ui/button";

const WhoCanBeMentor = () => {
  return (
    <section className="py-8 sm:py-10 px-2 sm:px-4 md:px-16">
      <Heading text="Who Can Become a Mentor?" />
      {/* <div className="flex flex-col md:flex-row items-start gap-4 sm:gap-6"> */}
        <div className="flex flex-col md:flex-row items-start gap-16 mt-16">

        {/* Image */}
        <div className="w-full md:w-1/2 rounded-lg overflow-hidden ">
          <Image
            src="/claylab assets/home/becomeAMentor.png"
            alt="Volunteer Image"
            width={600}
            height={300}
            className="w-full h-auto object-cover shadow-md"
          />
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 space-y-2 py-4 sm:py-8 my-auto" >
          <ul className="list-disc list-inside text-lg sm:text-2xl gap-4 sm:gap-8 flex flex-col pb-4 sm:pb-8">
            <li className="" >Believes in volunteering and can give 2 hours per week at least for 3 months</li>
            <li>Is at least 20 years old and has had professional awareness and exposure</li>
            <li>Can patiently and humbly work with a child to help them learn and grow</li>
          </ul>
          <Button className="bg-gradient-to-r from-green-800 mx-auto to-green-600 hover:bg-gradient-to-r hover:from-green-700 hover:to-green-500 text-white rounded-md w-full sm:w-min px-8 sm:px-16 py-3 sm:py-4 text-base sm:text-lg">
            Join us
          </Button>

        </div>
      </div>
    </section>
  );
};

export default WhoCanBeMentor;
