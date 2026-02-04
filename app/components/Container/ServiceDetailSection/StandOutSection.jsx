"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import linevictor from "@/app/assets/line-vector.svg";

export default function StandOutSection({ title, items }) {
  const [active, setActive] = useState(null);
  return (
    <section className="relative overflow-hidden bg-black py-32 text-white">
      <Image
        src={linevictor}
        alt="background lines"
        fill
        priority
        className="pointer-events-none"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-[420px] w-[400px] rounded-full bg-purple-600/30 blur-[160px]" />
      </div>
      <div className="relative z-10">
        <h2 className="text-4xl md:text-5xl font-light mb-10 px-10 lg:px-20">
          {title}
        </h2>
        <div className="flex gap-8 overflow-x-auto scrollbar-hide">
          {items?.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="min-w-[300px] lg:min-w-[380px] bg-white/5 border border-white/20 rounded-3xl p-8 relative backdrop-blur"
            >
              <h3 className="text-md mb-4 font-medium">{item.title}</h3>
              <p className="text-white/70 leading-relaxed text-sm">
                {item.description}
              </p>
              <button
                onClick={() => setActive(active === index ? null : index)}
                className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-white text-black flex items-center justify-center"
              >
                <Plus size={18} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
