"use client";
import React from "react";
import { motion } from "framer-motion";
import MainLayout from "@/app/common/MainLayout";
import imgservice from "@/app/assets/imgservice-rating-bg.webp";

const ServiceRatingSection = ({ title, description, stats = [] }) => {
  return (
    <section
      className="relative bg-black bg-cover bg-center text-white py-24 px-6 md:px-20"
      style={{
        backgroundImage: imgservice ? `url(${imgservice.src})` : "none",
      }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <MainLayout>
        <div className="relative grid grid-cols-12 gap-12 items-center">
          <motion.div
            className="col-span-12 md:col-span-8"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-light mb-6 leading-13">
              {title}
            </h2>
            <p className="text-gray-300 text-xs mb-5">{description}</p>
          </motion.div>
          <div className="col-span-12 md:col-span-4 space-y-10">
            {stats?.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h3 className="text-5xl font-bold">{item.value}</h3>
                <p className="text-sm text-gray-300 mt-1 text-right">
                  {item.label}
                </p>
                <div className="h-[3px] bg-white/40 mt-3 w-full" />
              </motion.div>
            ))}
          </div>
        </div>
      </MainLayout>
    </section>
  );
};

export default ServiceRatingSection;
