"use client";

import MainLayout from "@/app/common/MainLayout";
import { motion } from "framer-motion";
import Image from "next/image";

const advertisingService = {
  title: "Advertising and Creative",
  label: "We Know How To Do",
  description:
    "We craft powerful advertising and creative strategies that connect brands with audiences through impactful storytelling, compelling visuals, and data-driven campaigns across digital platforms.",
  image:
    "https://images.unsplash.com/photo-1606851094291-6efae152bb87?w=900&q=80",
  points: [
    "Brand Strategy",
    "Creative Campaigns",
    "Social Media Advertising",
    "Performance Marketing",
    "Content Creation",
    "Visual Design",
  ],
};

export default function AdvertisingCreativeSection() {
  return (
    <MainLayout className="relative bg-black text-white py-28 overflow-hidden px-3 md:px-20">
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)]" />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 text-center mb-24"
      >
        <div className="flex items-center justify-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-purple-500" />
          <span className="text-sm tracking-widest text-white/80 uppercase">
            {advertisingService.label}
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl  font-semibold leading-13">
          Advertising <span className="font-normal">and Creative</span>
        </h2>
      </motion.div>
      <div className="relative z-10  grid grid-cols-1 lg:grid-cols-3 gap-14 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center"
        >
          <p className="text-white/70 leading-relaxed">
            {advertisingService.description}
          </p>

          <button className="mt-8 w-fit px-6 py-3 rounded-full bg-purple-600 hover:bg-purple-700 transition text-sm">
            Discover More
          </button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <div className="relative h-[420px] w-full rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src={advertisingService.image}
              alt={advertisingService.title}
              fill
              className="object-cover"
            />
          </div>
        </motion.div>
        <motion.ul
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center space-y-3 text-sm"
        >
          {advertisingService.points.map((item, i) => (
            <li key={i} className="text-white font-medium">
              {item}
            </li>
          ))}
        </motion.ul>
      </div>
    </MainLayout>
  );
}
