// 'use client'

// import Image from "next/image";
// import Heading from "../heading";


// const mentorshipProgram = () => {
//   return (
//     <section className="relative sm:py-10 md:py-2 lg:py-18 px-4 sm:px-6 lg:px-8">
//       <div className=" px-6 mx-auto">
//         <div className="text-left mb-10">
//           <Heading text="Mentorship Program (Grade 10)" />
//         </div>

//         <p className=" text-3xl font-semibold "> How does it work? </p>

//         <div className="flex flex-col xl:flex-row justify-between items-start gap-8 sm:gap-12 lg:gap-16 xl:gap-20">
//           {/* Image Grid */}
//           <div>


//           </div>



//         </div>
//       </div>
//     </section>
//   );
// };

// export default mentorshipProgram ;

'use client'

// import Image from "next/image";

import Heading from "../heading";
import { CheckCircle, Users, Target, BookOpen, MapPin, Network, FileText } from "lucide-react";

const mentorshipProgram = () => {
  const keyOutputs = [
    {
      id: 1,
      title: "SWOT Analysis",
      description: "Comprehensive analysis of strengths, weaknesses, opportunities, and threats",
      icon: <Target className="w-6 h-6" />
    },
    {
      id: 2,
      title: "Goal Setting",
      description: "Strategic planning and setting achievable academic and career goals",
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      id: 3,
      title: "Reflective Journaling",
      description: "Regular self-reflection and personal growth documentation",
      icon: <BookOpen className="w-6 h-6" />
    },
    {
      id: 4,
      title: "Career Pathways Exploration",
      description: "In-depth exploration of various career options and requirements",
      icon: <MapPin className="w-6 h-6" />
    },
    {
      id: 5,
      title: "Networking with 5 Professionals",
      description: "Direct interaction and learning from industry professionals",
      icon: <Network className="w-6 h-6" />
    },
    {
      id: 6,
      title: "CV Building & Interview Practice",
      description: "Professional resume creation and interview skills development",
      icon: <FileText className="w-6 h-6" />
    }
  ];

  return (
    <section className="relative px-4 sm:px-6 lg:px-8 ">
      <div className=" px-6 mx-auto">
        {/* Header */}
        <h2 className="font-[var(--font-kind-sans)] text-2xl sm:text-5xl md:text-5xl underline text-gray-900 tracking-tight leading-snug mb-8">
              Mentorship Program (Grade 10)
            </h2>

        {/* How does it work section */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 mb-8">How does it work?</h3>

          <div className="">
            <div className="flex items-start gap-6 mb-8">
              <div className="flex-shrink-0 bg-green-100 rounded-full p-3">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Each Grade 10 student is mapped with a unique mentor —{" "}
                  <span className="font-bold text-green-600">a working professional volunteering </span>
                   to guide one child.<br />
                  Together, the mentor and mentee work on{" "}
                  <span className="font-semibold text-green-600">6 key outputs:</span>
                </p>

              </div>
            </div>

            {/* Key Outputs Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {keyOutputs.map((output) => (
                <div
                  key={output.id}
                  className="group rounded-xl p-6  border-green-100 hover:border-green-400 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 bg-green-600 text-white rounded-lg p-2 group-hover:scale-110 transition-transform duration-300">
                      {output.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 group-hover:text-green-700 transition-colors">
                        {output.id}. {output.title}
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {output.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Message */}
            <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-xl p-6 text-white">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
                <p className="text-lg leading-relaxed">
                  These outputs collectively help students plan their future comprehensively, while building confidence and clarity.
                </p>
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};

export default mentorshipProgram;