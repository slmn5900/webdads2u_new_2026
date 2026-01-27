"use client";
import React, { useRef } from "react";
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import MainLayout from "@/app/common/MainLayout";

const CaseStudySlider = () => {
  const x = useMotionValue(0);
  const sliderRef = useRef(null);
  const speed = 0.5;

  useAnimationFrame(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const contentWidth = slider.scrollWidth / 2;
    x.set(x.get() - speed);

    if (Math.abs(x.get()) >= contentWidth) {
      x.set(0);
    }
  });

  return (
    <>
      <MainLayout className="relative py-15 overflow-hidde  ">
        <div className="pointer-events-none absolute left-0 top-0 h-full w-44 z-20 bg-linear-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-44 z-20 bg-linear-to-l from-white to-transparent" />
        <div
          className="relative z-10 mt-3 overflow-hidden px-"
          onMouseEnter={() => x.stop?.()}
        >
          <motion.div
            ref={sliderRef}
            className="flex w-max items-center"
            style={{ x }}
          >
            {[
              "Digital Marketing",
              "CRM & ERP Development",
              "Branding",
              "E-Commerce Development",
              "Mobile App Development",
              "Digital Marketing",
              "CRM & ERP Development",
              "Branding",
              "E-Commerce Development",
              "Mobile App Development",
            ].map((item, index) => (
              <div
                key={index}
                className="mx-6 text-lg md:text-3xl font-medium font-serif tracking-wide
                     text-gray-300 whitespace-nowrap select-none flex items-center"
              >
                <div className="text-xl px-3">•</div>
                <a
                  href="#"
                  className="flex items-center gap-2 transition-opacity hover:opacity-70"
                >
                  {item}
                </a>
              </div>
            ))}
          </motion.div>
        </div>
      </MainLayout>
      <MainLayout className={" px-3 md:px-20"}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="text-sm uppercase tracking-widest text-gray-600 ">
              Case Study
            </p>
            <h2 className="font-serif text-[36px] md:text-[44px] lg:text-[52px] leading-12 text-[#1f1d4d]">
              Some of Our Successful Projects That Delivered Strong Business
              Results Globally
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          >
            <p className="text-lg leading-relaxed text-gray-700">
              We build high-performing digital solutions that turn ideas into
              revenue-driven outcomes. With a focus on innovation, simplicity,
              and client success, We've helped brands across industries scale
              faster as a leading web design and development company in chennai.
            </p>
          </motion.div>
        </div>
      </MainLayout>
    </>
  );
};

export default CaseStudySlider;
