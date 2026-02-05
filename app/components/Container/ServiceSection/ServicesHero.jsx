"use client";
import serviceBg from "@/app/assets/service-bg.webp";
import MainLayout from "@/app/common/MainLayout";
import { motion } from "framer-motion";
export default function ServicesHero() {
  return (
    <MainLayout
      className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: `url(${serviceBg.src})`,
      }}
    >
      <div className="absolute inset-0 bg-[#0b0216]/70 backdrop-blur-[1px]" />
      <div className="relative z-10 max-w-6xl px-6 text-center">
        <div className="flex items-center justify-center gap-2 mb-6 text-xs tracking-widest text-white/80">
          <span className="w-2 h-2 rounded-full bg-purple-500" />
          <span>Services</span>
        </div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
            delay: 0.2,
          }}
          className="text-white font-light leading-tight text-4xl md:text-5xl"
        >
          We Build Powerful Digital Experiences <br />
          <span className="font-normal">
            That Help Your Business Grow Faster
          </span>
        </motion.h1>

        <p className="mt-6 text-white/70 max-w-2xl mx-auto text-sm md:text-base">
          From strategy and design to development and marketing — we deliver
          complete digital solutions tailored to your brand goals.
        </p>
      </div>
    </MainLayout>
  );
}
