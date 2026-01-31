"use client";

import Image from "next/image";
import detailsBanner from "@/app/assets/detailsbanne.webp";
import { serviceContent } from "@/app/utils/mockdata";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function ServiceDetailsHero({ slug }) {
  const content = serviceContent[slug] || serviceContent.default;

  return (
    <section className="relative min-h-screen flex items-center text-white overflow-hidden">
      <Image
        src={detailsBanner}
        alt="Service background"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/60" />
      <motion.div
        className="relative z-10 max-w-3xl px-20"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
      >
        <div className="flex items-center gap-2 mb-2">
          <span className="h-2 w-2 rounded-full bg-purple-500" />
          <p className="text-sm tracking-widest capitalize">{content.tag}</p>
        </div>

        <h1 className="text-4xl leading-13 mb-3">{content.title}</h1>
        <p className="text-white max-w-xl">{content.description}</p>
      </motion.div>
      <motion.div
        className="absolute right-20 top-1/2 -translate-y-1/2 w-[400px] bg-black/60 backdrop-blur-xl border border-white/20 rounded-3xl p-6"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.2 }}
      >
        <h3 className="text-xl font-semibold mb-4">Have any questions?</h3>
        <input
          className="w-full mb-3 bg-transparent border border-white/20 rounded-lg px-4 py-2"
          placeholder="Name*"
        />
        <input
          className="w-full mb-3 bg-transparent border border-white/20 rounded-lg px-4 py-2"
          placeholder="Email*"
        />
        <input
          className="w-full mb-3 bg-transparent border border-white/20 rounded-lg px-4 py-2"
          placeholder="Phone*"
        />

        <textarea
          className="w-full mb-4 bg-transparent border border-white/20 rounded-lg px-4 py-2 h-28"
          placeholder="Tell us about your project"
        />

        <button className="w-32 py-2 rounded-full bg-purple-600 hover:bg-purple-700 transition">
          Submit
        </button>
      </motion.div>
    </section>
  );
}
