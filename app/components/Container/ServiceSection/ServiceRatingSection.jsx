"use client";
import React from "react";
import { motion, useInView } from "framer-motion";
import MainLayout from "@/app/common/MainLayout";
import imgservice from "@/app/assets/imgservice-rating-bg.webp";

const CountUp = ({ value }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  const number = parseInt(value);
  return (
    <motion.span
      ref={ref}
      initial={{ count: 0 }}
      animate={isInView ? { count: number } : {}}
      transition={{ duration: 2, ease: "easeOut" }}
    >
      {isInView && Math.floor(number)}
      {value.replace(/[0-9]/g, "")}
    </motion.span>
  );
};

const ServiceRatingSection = ({ title, description, stats = [] }) => {
  return (
    <MainLayout
      className="relative bg-black bg-cover bg-center text-white py-15 px-6 md:px-20"
      style={{
        backgroundImage: imgservice ? `url(${imgservice.src})` : "none",
      }}
    >
      <div className="absolute inset-0 bg-black/60" />
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
        <motion.div
          className="col-span-12 md:col-span-4 space-y-10"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.25,
              },
            },
          }}
        >
          {stats?.map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, x: 40 },
                show: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-5xl font-bold">
                <CountUp value={item.value} />
              </h3>

              <p className="text-sm text-gray-300 mt-1 text-right">
                {item.label}
              </p>
              <motion.div
                className="h-[3px] bg-white/40 mt-3"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </MainLayout>
  );
};

export default ServiceRatingSection;
