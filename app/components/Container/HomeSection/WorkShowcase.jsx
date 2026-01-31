"use client";
import { motion } from "framer-motion";
import { useState, useMemo } from "react";
import MainLayout from "@/app/common/MainLayout";
import Image from "next/image";
import ArrowSvg from "@/app/assets/arrow.svg";
import { MdOutlineArrowOutward } from "react-icons/md";
import Link from "next/link";
import { works } from "@/app/utils/mockdata";

const categories = [
  "All",
  "Website",
  "Mobile App",
  "SMM",
  "PPC",
  "SEO",
  "Branding",
];

const WorkShowcase = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const filteredWorks = useMemo(() => {
    if (activeCategory === "All") return works;
    return works.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <MainLayout
      className="
        relative mt-16 py-10 md:py-24
        px-3 lg:px-20
        bg-linear-to-br
        from-[#0a050e]
        via-[#7658a2]
        to-[#04040b]
      "
    >
      <div className=" mb-6 md:mb-16">
        <p className="text-sm font-medium text-gray-300 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-purple-500" />A Glimpse of
          Our Best Work
        </p>
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between ">
          <h2 className="text-4xl font-medium text-white leading-tight">
            12+ Years Exp but Countless Innovations
          </h2>
          <div className="flex gap-4 overflow-x-auto scrollbar-hide">
            {categories?.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`flex items-center gap-2 px-6 py-2  whitespace-nowrap transition-all
                    ${
                      isActive ? "text-white" : "text-gray-400 hover:text-white"
                    }
                  `}
                >
                  {isActive && (
                    <Image src={ArrowSvg} alt="arrow" width={16} height={16} />
                  )}
                  <span className="text-sm font-medium">{cat}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
      <div
        className="
          flex gap-6 overflow-x-auto pb-4
          sm:grid sm:grid-cols-2
          lg:grid-cols-3
        "
      >
        {filteredWorks?.map((item, idx) => (
          <Link
            key={item.id}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="
        group
        min-w-[280px]
        sm:min-w-0
        cursor-pointer
      "
            >
              <div className="relative overflow-hidden rounded-3xl">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={600}
                  height={800}
                  priority={idx === 0}
                  className="
                  w-full
                  h-[260px]
                  sm:h-[340px]
                  lg:h-[420px]
                  object-cover
                  transition-transform duration-700
                  group-hover:scale-105
                "
                />

                <div
                  className="
                  absolute inset-0
                  bg-linear-to-t
                  from-black/90
                  via-black/50
                  to-transparent
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity duration-500
                "
                />

                <div
                  className="
                  absolute bottom-6 left-6 right-6
                  opacity-0 translate-y-4
                  group-hover:opacity-100 group-hover:translate-y-0
                  transition-all duration-500
                "
                >
                  <p className="text-sm leading-relaxed text-white/90">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <h3 className="text-2xl font-medium text-white leading-snug line-clamp-2">
                  {item.title}
                </h3>

                <MdOutlineArrowOutward
                  size={28}
                  className="
                  opacity-0
                  group-hover:opacity-100
                  group-hover:translate-x-1
                  transition-all duration-300
                  text-white
                "
                />
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </MainLayout>
  );
};

export default WorkShowcase;
