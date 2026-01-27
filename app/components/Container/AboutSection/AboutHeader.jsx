"use client";
const AboutHeader = () => {
  return (
    <div className="relative h-screen  overflow-hidden text-white">
      <div className="absolute inset-0 overflow-hidden">
        <iframe
          src="https://player.vimeo.com/video/1024271179?background=1&autoplay=1&loop=1&muted=1&controls=0"
          allow="autoplay; fullscreen; picture-in-picture"
          frameBorder="0"
          className="
            absolute inset-0
            w-[120%] h-[120%]
            -left-[10%] -top-[10%]
          "
        />
      </div>
      <div className="relative z-10 h-full px-4 md:px-20 flex items-center">
        <div
          className="
            grid grid-cols-1 lg:grid-cols-[40%_20%_40%]
            w-full items-center
          "
        >
          <div>
            <span className="flex items-center gap-2 text-sm text-white mb-8">
              <span className="w-2 h-2 rounded-full bg-purple-500" />
              Our Story
            </span>
            <h1 className="text-2xl md:text-4xl  font-light leading-tight">
              From Dubai’s #1 Tech Nerds to a Global Force
            </h1>
          </div>
          <div />
          <div className="text-sm md:text-sm text-white/80 leading-relaxed max-w-sm">
            <p>
              With 10+ years of experience, 500+ prestigious clients, 50+ expert
              developers, and a 200+ strong team, Digital Gravity stands Dubai’s
              No.1 digital transformation and marketing agency. We deliver
              efficient web, mobile, and marketing solutions powered by
              Innovative AI and emerging tech like AR, VR, and Blockchain.
              Expanding globally across the{" "}
              <span className="bg-purple-600/30 px-2 py-1 rounded">USA</span>{" "}
              and{" "}
              <span className="bg-purple-600/30 px-2 py-1 rounded">
                MENA region
              </span>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHeader;
