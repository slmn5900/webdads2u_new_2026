"use client";

import { motion } from "framer-motion";

const posts = [
  "/social/1.jpg",
  "/social/2.jpg",
  "/social/3.jpg",
  "/social/4.jpg",
  "/social/5.jpg",
];

export default function SocialAutoScroll() {
  return (
    <section className="bg-black py-24 overflow-hidden">
      <div className="px-6 mb-12">
        <h2 className="text-4xl md:text-5xl font-light text-white">
          Connect on <br /> Our Social
        </h2>
      </div>
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-6 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 40,
            ease: "linear",
          }}
          whileHover={{ animationPlayState: "paused" }}
        >
          {[...posts, ...posts].map((img, i) => (
            <div
              key={i}
              className="w-[280px] h-[360px] rounded-2xl overflow-hidden shrink-0"
            >
              <img src={img} alt="" className="w-full h-full object-cover" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
