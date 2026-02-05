"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import designed1 from "@/app/assets/designed1.svg";
import designed2 from "@/app/assets/designed2.svg";
import designed3 from "@/app/assets/designed3.svg";
import designed4 from "@/app/assets/designed4.svg";
import designed5 from "@/app/assets/designed5.svg";
import designed6 from "@/app/assets/designed6.svg";
import designed7 from "@/app/assets/designed7.svg";
import designed8 from "@/app/assets/designed8.svg";
import designed9 from "@/app/assets/designed9.svg";
import designed10 from "@/app/assets/designed10.svg";
import linevictor from "@/app/assets/line-vector.svg";
import gif from "@/app/assets/globe2.gif";

const clients = [
  { name: "Food & Beverage", img: designed1 },
  { name: "Beauty & Wellness", img: designed2 },
  { name: "Travel & Hospitality", img: designed3 },
  { name: "Logistics & Transportation", img: designed4 },
  { name: "Manufacturing & Industrial", img: designed5 },
  { name: "Real Estate & Infrastructure", img: designed6 },
  { name: "Banking, Finance & Insurance", img: designed7 },
  { name: "E-commerce & Retail", img: designed8 },
  { name: "Healthcare & Medical Services", img: designed9 },
  { name: "Education & EdTech", img: designed10 },
];

export default function OurClients() {
  return (
    <section className="relative overflow-hidden bg-black">
      <div className="absolute inset-0" />
      <Image
        src={linevictor}
        alt="background lines"
        fill
        priority
        className="pointer-events-none  "
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-[420px] w-[420px] rounded-full bg-purple-600/30 blur-[160px]" />
      </div>
      <div className="pointer-events-none absolute inset-6 rounded-2xl" />
      <div className="pointer-events-none absolute inset-6 rounded-2xl" />
      <div className="relative z-10 mx-auto max-w-7xl px-6 my-10">
        <div className="mb-20 text-center">
          <div className="mb-4 flex items-center justify-center gap-2 text-sm text-gray-300">
            <span className="h-2 w-2 rounded-full bg-purple-500" />
            Our Clients
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-3xl text-4xl md:text-5xl font-medium text-white"
          >
            The Industries <br /> we serve
          </motion.h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-10  px-4 md:px-20">
          {clients?.map((client, i) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group relative h-[120px] flex flex-col items-center justify-center"
            >
              <Image
                src={client.img}
                alt={client.name}
                width={180}
                height={80}
                className="max-h-30 w-auto  grayscale transition-all duration-300
                group-hover:-translate-y-3 group-hover:opacity-100 group-hover:grayscale-0"
              />
              <p className="mt-3 text-xs text-gray-400 opacity-0 transition-all duration-300 group-hover:opacity-100">
                {client.name}
              </p>
            </motion.div>
          ))}
        </div>
        {/* <div className=" flex items-center justify-end gap-4 text-gray-300">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 40,
              ease: "linear",
            }}
          >
            <Image
              src={gif}
              alt="globe rotation"
              width={50}
              height={50}
              className="pointer-events-none"
            />
          </motion.div>
          <span className="text-sm">100+ Clients worldwide</span>
        </div> */}
      </div>
    </section>
  );
}
