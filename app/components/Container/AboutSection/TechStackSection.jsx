"use client";

import { motion } from "framer-motion";
import {
  Atom,
  Layers,
  Code,
  Braces,
  Coffee,
  Flame,
  Rocket,
} from "lucide-react";

const techs = [
  { icon: Layers, color: "text-green-400" },
  { icon: Code, color: "text-orange-500" },
  { icon: Atom, color: "text-cyan-400" },
  { icon: Braces, color: "text-purple-400" },
  { icon: Coffee, color: "text-blue-400" },
  { icon: Flame, color: "text-orange-400" },
  { icon: Rocket, color: "text-white" },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    scale: 0.85,
    filter: "blur(6px)",
  },
  show: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 20,
      mass: 0.6,
    },
  },
};

export default function TechStackSection() {
  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden px-6 flex flex-col justify-center">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[85%] h-[70%] bg-purple-600/20 blur-[180px]" />
      <div className="relative z-10 text-center max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-light leading-tight mt-5 md:mt-0">
          Advanced Tech Stack for <br />
          Performance, Scalability & Innovation
        </h2>
        <p className="mt-6 text-white/70 text-sm md:text-base max-w-3xl mx-auto">
          Our team of experts is well-versed in advanced technologies and their
          right uses, ensuring no compromise on your business growth.
        </p>
      </div>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="
          relative z-10 mt-20
          w-full
          grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7
          gap-10
        "
      >
        {techs.map((tech, index) => {
          const Icon = tech.icon;
          return (
            <motion.div
              key={index}
              variants={item}
              whileHover={{
                scale: 1.18,
                boxShadow: "0 0 160px rgba(80,180,255,0.55)",
              }}
              whileTap={{ scale: 0.96 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 18,
              }}
              className="
                aspect-square
                rounded-3xl
                bg-linear-to-br from-white/10 via-white/5 to-white/0
                backdrop-blur-xl
                border border-white/10
                flex items-center justify-center
                relative overflow-hidden
                cursor-pointer
                origin-center
              "
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                whileHover={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="
                  absolute inset-0 rounded-3xl
                  bg-white/5
                  shadow-[inset_0_0_60px_rgba(80,180,255,0.35)]
                "
              />
              <Icon
                className={`relative z-10 w-14 h-14 md:w-16 md:h-16 ${tech.color}`}
              />
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
