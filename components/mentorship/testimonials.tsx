// 'use client';


// export const testimonials = [
//   {
//     quote: `"I didn't even know what a pitch was. Now I can explain my idea in 30 seconds!"`,
//     name: 'Anaya H., Ahmedabad',
//     bgColor: 'bg-[#fbc7c7]', // soft red-pink
//   },
//   {
//     quote: `"This was the first time I felt like a real founder. My mentor believed in me before I did."`,
//     name: 'Vihaan K., Jaipur',
//     bgColor: 'bg-[#78cdf6]', // light blue
//   },
//   {
//     quote: `"Our project was messy and hard — but we never gave up. That's when I knew I was an entrepreneur."`,
//     name: 'Div. P., Ranchi',
//     bgColor: 'bg-[#c3e6c2]', // mint green
//   },
//   {
//     quote: `"I always thought business was boring. Turns out it's just solving problems with passion."`,
//     name: 'Iqra. M., Hyderabad',
//     bgColor: 'bg-[#ffe07d]', // yellow
//   },
//   {
//     quote: `"My favorite part? Demo Day. I was nervous, but then I saw everyone clapping for our idea."`,
//     name: 'Aarav S., Mumbai',
//     bgColor: 'bg-[#dcc4f3]', // light violet
//   },
//   {
//     quote: `"They didn't just teach us — they listened. I felt seen."`,
//     name: 'Nikhil L., Bengaluru',
//     bgColor: 'bg-[#fbc2e2]', // pink
//   },
// ];


// export default function TestimonialsGrid() {
//   return (
//     <section className="py-8 sm:py-12 md:py-16 px-2 sm:px-4">
//       <div className="max-w-full sm:max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
//         {testimonials.map((t, i) => (
//           <div
//             key={i}
//             className={`${t.bgColor} rounded-md shadow-[10px_10px_20px_rgba(0,0,0,0.3)] p-6 sm:p-8 min-h-[180px] sm:min-h-[300px] flex flex-col justify-between transition-transform duration-300 cursor-pointer`}
//           >
//             <p className="text-base sm:text-xl font-medium text-right leading-snug font-roughScript">{t.name}</p>
//             <p className="text-lg sm:text-3xl md:text-4xl text-center font-medium mt-2 sm:mt-4 font-roughScript">
//               {t.quote}
//             </p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }











'use client';

export const testimonials = [
  {
    quote: `"I didn't even know what a pitch was. Now I can explain my idea in 30 seconds!"`,
    name: 'Anaya H., Ahmedabad',
    bgColor: 'bg-[#fbc7c7]', // soft red-pink
  },
  {
    quote: `"This was the first time I felt like a real founder. My mentor believed in me before I did."`,
    name: 'Vihaan K., Jaipur',
    bgColor: 'bg-[#78cdf6]', // light blue
  },
  {
    quote: `"Our project was messy and hard — but we never gave up. That's when I knew I was an entrepreneur."`,
    name: 'Div. P., Ranchi',
    bgColor: 'bg-[#c3e6c2]', // mint green
  },
  {
    quote: `"I always thought business was boring. Turns out it's just solving problems with passion."`,
    name: 'Iqra. M., Hyderabad',
    bgColor: 'bg-[#ffe07d]', // yellow
  },
  {
    quote: `"My favorite part? Demo Day. I was nervous, but then I saw everyone clapping for our idea."`,
    name: 'Aarav S., Mumbai',
    bgColor: 'bg-[#dcc4f3]', // light violet
  },
  {
    quote: `"They didn't just teach us — they listened. I felt seen."`,
    name: 'Nikhil L., Bengaluru',
    bgColor: 'bg-[#fbc2e2]', // pink
  },
];

export default function TestimonialsGrid() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Optional Header Section */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          <h2 className="font-intrudingCat text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-green-800 mb-4">
            What Our Students Say
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from real students who transformed their ideas into reality
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-6 xl:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`
                ${testimonial.bgColor} 
                
                shadow-[8px_8px_16px_rgba(0,0,0,0.15)] 
                hover:shadow-[12px_12px_24px_rgba(0,0,0,0.25)] 
                p-4 sm:p-6 md:p-8 
                min-h-[390px] sm:min-h-[390px] md:min-h-[390px] lg:min-h-[390px] 
                flex flex-col justify-between 
                transition-all duration-300 
                cursor-pointer 
                hover:scale-105 
                hover:-translate-y-2
                group
              `}
            >
              {/* Quote */}
              <blockquote className="flex-1 flex items-center justify-center">
                <p className="font-intrudingCat text-4xl sm:text-base md:text-lg lg:text-xl xl:text-3xl text-center font-medium leading-relaxed sm:leading-relaxed md:leading-loose  text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
                {/* <p className="font-intrudingCat text-base sm:text-xl md:text-xl lg:text-2xl xl:text-3xl  text-center font-medium leading-relaxed sm:leading-relaxed md:leading-loose text-gray-800 group-hover:text-gray-900 transition-colors duration-300"> */}

                  {testimonial.quote}
                </p>
              </blockquote>
              
              {/* Attribution */}
              <footer className="mt-4 sm:mt-6">
                <cite className="font-intrudingCat text-1xl sm:text-sm md:text-base lg:text-xl font-semibold text-right block text-gray-700 group-hover:text-gray-800 transition-colors duration-300 not-italic">
                  — {testimonial.name}
                </cite>
              </footer>
            </div>
          ))}
        </div>


        {/* Optional CTA Section */}
        {/* <div className="text-center mt-12 sm:mt-16 lg:mt-20">
          <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Ready to create your own success story?
          </p>
          
          <button className="inline-flex items-center px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white rounded-lg sm:rounded-xl font-medium text-sm sm:text-base md:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Join Our Program
          </button>
        </div> */}


      </div>
    </section>
  );
}