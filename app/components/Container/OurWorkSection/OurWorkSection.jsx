"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import MainLayout from "@/app/common/MainLayout";
const categories = [
  "All",
  "Website",
  "Mobile App",
  "SMM",
  "PPC",
  "Print",
  "SEO",
  "Branding",
  "Artificial Intelligence",
];

const industries = [
  "Corporate (31)",
  "Real Estate (31)",
  "Government (24)",
  "Business and Finance (22)",
  "Education (16)",
];

const projects = [
  {
    title: "Bloom Holding",
    tags: ["Design", "Development"],
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200",
  },
  {
    title: "Alfanar",
    tags: ["Website"],
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200",
  },
];

export default function OurWorkSection() {
  const [active, setActive] = useState("All");
  const [open, setOpen] = useState(false);

  return (
    <>
      <MainLayout className="relative py-30 text-white bg-black bg-[radial-gradient(#222_1px,transparent_1px)]">
        <div className=" px-6 md:px-20">
          <p className="mb-2 text-sm flex items-center  font-semibold gap-3">
            <span className="text-purple-500 ">●</span>{" "}
            <span className="text-white">Our Work</span>
          </p>

          <div className="flex gap-8 text-gray-500 mb-10 overflow-x-auto">
            {categories.map((item) => (
              <button
                key={item}
                onClick={() => setActive(item)}
                className={`whitespace-nowrap ${active === item && "text-white"}`}
              >
                {item}
              </button>
            ))}
          </div>
          <div className="relative w-72 mb-12">
            <button
              onClick={() => setOpen(!open)}
              className="w-full flex justify-between items-center px-5 py-2 text-xs rounded-full border border-purple-500"
            >
              Explore All Industries
              <ChevronDown size={18} />
            </button>

            {open && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute z-20 mt-2 w-full  overflow-hidden backdrop-blur bg-white/10"
              >
                {industries.map((item) => (
                  <div
                    key={item}
                    className="px-4 py-3 text-white text-xs hover:bg-white hover:text-black cursor-pointer"
                  >
                    {item}
                  </div>
                ))}
              </motion.div>
            )}
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            {projects.map((project) => (
              <motion.div
                key={project.title}
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <div className="relative rounded-3xl overflow-hidden h-[420px]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex items-center justify-between mt-5">
                  <div>
                    <h3 className="text-2xl  mb-2">{project.title}</h3>
                    <div className="flex gap-3 text-sm text-gray-400">
                      {project.tags.map((tag) => (
                        <span key={tag}>
                          <span className="text-purple-500">●</span> {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <button
                    className="px-5 py-2 text-xs font-semibold rounded-full 
bg-linear-to-r from-purple-600 to-fuchsia-600 
hover:from-purple-700 hover:to-fuchsia-700 
transition"
                  >
                    View Case Study
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </MainLayout>
    </>
  );
}
