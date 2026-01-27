"use client";

import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

const items = [
  {
    title: "Our Mission",
    content:
      "Be fearless, challenge the norms, and inspire everyone to achieve excellence. We aim to create meaningful digital experiences that empower brands to grow, adapt, and lead in a fast-evolving world.",
  },
  {
    title: "Our Vision",
    content:
      "To become a globally trusted digital partner that drives innovation, shapes future-ready brands, and delivers technology-driven growth across industries and borders.",
  },
  {
    title: "Our Values",
    content:
      "Innovation, integrity, collaboration, and excellence guide everything we do. We believe in building long-term partnerships through transparency, creativity, and measurable impact.",
  },
];

export default function MissionVisionSection() {
  const [active, setActive] = useState(0);
  return (
    <div className="relative min-h-screen w-full overflow-hidden text-white bg-black px-4 md:px-20">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[40%] h-[70%] bg-purple-600/30 blur-[120px]" />
      <div className="relative z-10  mx-auto  py-24 grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <h2 className="text-4xl md:text-5xl  font-light leading-13">
            What Moves and Defines Us
          </h2>
        </div>
        <div className="space-y-8">
          {items.map((item, index) => {
            const isOpen = active === index;
            return (
              <div key={index}>
                <button
                  onClick={() => setActive(isOpen ? -1 : index)}
                  className="w-full flex items-center justify-between text-left"
                >
                  <h3 className="text-2xl md:text-3xl font-light">
                    {item.title}
                  </h3>
                  {isOpen ? (
                    <ChevronUp className="opacity-70" />
                  ) : (
                    <ChevronDown className="opacity-70" />
                  )}
                </button>
                <div
                  className={`overflow-hidden transition-all duration-500 ease-out ${
                    isOpen ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-white/80 max-w-xl">{item.content}</p>
                </div>
                {isOpen && <div className="mt-6 h-px w-full bg-white/40" />}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
