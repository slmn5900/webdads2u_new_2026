"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MainLayout from "@/app/common/MainLayout";
import schedule from "@/app/assets/schedule.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";

const HeroSection = () => {
  const router = useRouter();
  const headlines = [
    "Better Digital Marketing Solution",
    "Better Web Development Solution",
    "Better Branding Solution",
    "Better Automation Solution",
    "Better App Development Solution",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % headlines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleNavigate = () => {
    router.push("/contact");
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <video
        src="/videos/heroBanner.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent" />
      <MainLayout className="relative z-10 px-4 md:px-20 h-full flex items-end pb-6">
        <div className="w-full flex flex-col items-center text-center text-white">
          <AnimatePresence mode="wait">
            <motion.h1
              key={current}
              className="
                min-h-[57px] md:min-h-[58px]
                text-xl md:text-3xl lg:text-4xl
                font-medium leading-tight 
              "
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {headlines[current]}
            </motion.h1>
          </AnimatePresence>
          <p className="text-xs md:text-sm opacity-90 max-w-xl">
            Where Innovation meets Execution for Business Growth.
          </p>
          <div className="flex gap-6 items-center mt-4">
            <button
              onClick={handleNavigate}
              className="
            cursor-pointer
    group relative flex items-center gap-3
    overflow-hidden
    rounded-full
    bg-white
    px-3 py-2
    text-sm font-medium text-black
    shadow-lg
  "
            >
              <span
                className="
      absolute inset-0
      bg-linear-to-r from-purple-600 to-pink-600
      translate-y-full
      group-hover:translate-y-0
      transition-transform duration-500 ease-out
    "
              />
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white font-bold">
                Schedule a call
              </span>
              <span className="relative z-10 w-8 h-8 rounded-full overflow-hidden border border-white">
                <Image
                  src={schedule}
                  className="w-8 h-8 rounded-full"
                  alt="avatar"
                />
              </span>
            </button>
            <span className="text-xs underline capitalize">see our work</span>
          </div>
        </div>
      </MainLayout>
    </section>
  );
};

export default HeroSection;
