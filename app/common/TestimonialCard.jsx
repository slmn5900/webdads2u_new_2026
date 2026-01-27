"use client";

import { motion } from "framer-motion";

export default function TestimonialCard() {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
      className="
        min-w-[260px] sm:min-w-0
        h-[420px]
        rounded-[28px]
        bg-[#f4f4f4]
        p-5
        shadow-[0_20px_60px_rgba(0,0,0,0.12)]
      "
    >
      <div className="h-full bg-white rounded-[22px] p-6 flex flex-col">
        <div className="text-purple-600 text-3xl font-bold mb-4">“</div>
        <div
          className="
            flex-1
            text-sm text-gray-700 leading-relaxed
            overflow-y-auto pr-3
            scrollbar-thin
            scrollbar-thumb-purple-600
            scrollbar-track-transparent
          "
        >
          <strong>The Success of EMDAD's Website Launch</strong>
          <br />
          <br />
          Just writing to express our appreciation to Digital Gravity and their
          team for their efforts that contributed to the success of the EMDAD
          website at its launch.
          <br />
          <br />A special thanks to Aashir for showing leadership and resilience
          each step of the way, attending to our requirements, and delivering
          beyond expectations.
        </div>
      </div>
    </motion.div>
  );
}
