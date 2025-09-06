import React from "react";

const CommunitySection = () => {
  const videos = [
    { id: "zj-UIToIEPE", url: "https://www.youtube.com/watch?v=zj-UIToIEPE&t=3s", delay: "0s", duration: "4s" },
    { id: "7HYLFjgPs1c", url: "https://www.youtube.com/watch?v=7HYLFjgPs1c", delay: "0.5s", duration: "5s" },
    { id: "hnhuMQ5OYUA", url: "https://www.youtube.com/watch?v=hnhuMQ5OYUA", delay: "1s", duration: "4.5s" },
    { id: "9aebtFSiTFY", url: "https://www.youtube.com/watch?v=9aebtFSiTFY", delay: "1.5s", duration: "5.5s" },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="font-[var(--font-kind-sans)] text-2xl sm:text-5xl md:text-5xl underline text-gray-900 tracking-tight leading-snug mb-8">
              Join the Claylab community of supporters.
            </h2>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-700 leading-relaxed mb-12">
          Let’s empower every child with life skills, leadership skills, and livelihood.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {videos.map((video, index) => (
            <a
              key={video.id}
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 hover:scale-105"
              style={{ animation: `float ${video.duration} ease-in-out ${video.delay} infinite` }}
            >
              <img
                src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                alt="Video Thumbnail"
                className="w-full h-64 object-cover rounded-3xl"
              />

              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="text-white text-5xl sm:text-6xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg">
                  ▶
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
      `}</style>
    </section>
  );
};

export default CommunitySection;
