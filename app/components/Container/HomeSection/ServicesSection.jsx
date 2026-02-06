"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { serviceCategories } from "@/app/utils/commonMockdata";

export default function ServicesSection() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [selectedService, setSelectedService] = useState(null);
  const currentCategory = serviceCategories?.[activeCategory];
  const isDetailMode = selectedService !== null;

  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)]" />
      <div className="absolute right-0 top-0 h-full w-[40%] bg-purple-600/20 blur-[120px]" />
      <div className="relative z-10 px-3 md:px-20 py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-16 relative">
          <motion.div
            className="lg:col-span-5"
            animate={{
              x: isDetailMode ? -80 : 0,
              opacity: isDetailMode ? 0.3 : 1,
              scale: isDetailMode ? 0.92 : 1,
            }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <span className="h-3 w-3 rounded-full bg-purple-500 animate-pulse" />
              <p className="uppercase tracking-widest text-sm text-gray-300">
                Our Services
              </p>
            </div>

            <div
              data-lenis-prevent
              className="space-y-4 max-h-[400px] overflow-y-auto pr-2 scrollbar-hide"
            >
              {serviceCategories.map((cat, idx) => {
                const active = idx === activeCategory;
                return (
                  <motion.button
                    key={cat.title}
                    onClick={() => {
                      setActiveCategory(idx);
                      setSelectedService(null);
                    }}
                    whileHover={{ x: 8 }}
                    className={`relative flex items-center gap-4 cursor-pointer text-left w-full ${
                      active
                        ? "text-white"
                        : "text-gray-400 hover:text-gray-200"
                    }`}
                  >
                    {active && (
                      <span className="text-4xl rotate-45 inline-block">🚀</span>
                    )}

                    <h3
                      className={`text-4xl md:text-5xl font-light leading-tight ${
                        active
                          ? "bg-linear-to-r from-purple-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent"
                          : "opacity-60"
                      }`}
                    >
                      {cat.title}
                    </h3>

                    {active && (
                      <motion.span
                        layoutId="activeGlow"
                        className="absolute -bottom-3 left-8 h-[3px] w-32 bg-purple-500 blur-sm"
                      />
                    )}
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
          <motion.div
            className="lg:col-span-7"
            animate={{ x: isDetailMode ? -60 : 0 }}
            transition={{ duration: 0.5 }}
          >
            <AnimatePresence mode="wait">
              {!isDetailMode ? (
                <motion.div
                  key="list"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  className="rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-8 lg:p-10 min-h-[400px]"
                >
                  <ul>
                    {currentCategory?.items.map((item) => (
                      <motion.li
                        key={item.name}
                        onClick={() => setSelectedService(item)}
                        whileHover={{ x: 6 }}
                        className="py-4 cursor-pointer group flex gap-3 items-center text-lg md:text-2xl"
                      >
                        <span>{item.name}</span>

                        <span className="bg-linear-to-r from-purple-500 via-fuchsia-500 to-pink-500 rounded-full opacity-0 group-hover:opacity-100 text-sm px-3 py-1 transition-opacity text-white">
                          Explore
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ) : (
                <motion.div
                  key="detail"
                  initial={{ opacity: 0, x: 60 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -60 }}
                  className="rounded-3xl bg-linear-to-br from-purple-900/20 to-indigo-900/10 backdrop-blur-xl border border-purple-500/20 p-8 lg:p-12 min-h-[500px]"
                >
                  <div className="flex items-center gap-4 mb-8">
                    <button
                      onClick={() => setSelectedService(null)}
                      className="text-4xl text-purple-400 hover:-translate-x-2 transition-transform"
                    >
                      ←
                    </button>

                    <h2 className="text-3xl md:text-4xl font-semibold">
                      {selectedService?.name}
                    </h2>
                  </div>

                  <p className="text-gray-300 leading-relaxed">
                    {selectedService?.description}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
