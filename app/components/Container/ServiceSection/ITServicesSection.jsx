"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const itService = {
  title: "IT Services and Solutions",
  label: "We Are Expert Of",
  description:
    "Our developed software systems help you run your business efficiently by supporting automation and core processes across multiple departments including HR, finance, manufacturing, supply chain, procurement, and more.",
  image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80",
  points: [
    "NetSuite",
    "SAP",
    "Microsoft Dynamics 365",
    "Oracle Cloud",
    "Odoo",
    "CRM Development",
  ],
};

export default function ITServicesSection() {
  return (
    <section className="relative bg-black text-white py-28 overflow-hidden px-3 md:px-20">
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)]" />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 text-center mb-24 "
      >
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="w-2.5 h-2.5 rounded-full bg-purple-500" />
          <span className="text-sm tracking-widest text-white/80 uppercase">
            {itService.label}
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl  font-semibold leading-13">
          {itService.title}
        </h2>
      </motion.div>
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-14 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center"
        >
          <p className="text-white/70 leading-relaxed">
            {itService.description}
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
              src={itService.image}
              alt={itService.title}
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
          {itService.points.map((item, i) => (
            <li key={i} className="text-white font-medium">
              {item}
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
