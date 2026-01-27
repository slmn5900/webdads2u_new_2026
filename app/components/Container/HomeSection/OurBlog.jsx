"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import slide1 from "@/app/assets/slide1.png";
import slide2 from "@/app/assets/slide2.png";

const blogs = [
  {
    title: "Introducing Aardvark: OpenAI’s Agentic Security Researcher",
    image: slide1,
    category: ["Artificial Intelligence (AI)", "DG NEWS"],
    author: "Umair Khan",
    readTime: "7 minutes read",
  },
  {
    title: "Why Homebuyers Skip Your Website And How to Fix It",
    image: slide2,
    category: ["Web Design"],
    author: "Maria Khan",
    readTime: "5 minutes read",
  },
  {
    title: "The 9 Best SaaS Marketing Agencies in 2024",
    image: slide1,
    category: ["Digital Marketing"],
    author: "Asghar Paracha",
    readTime: "9 minutes read",
  },
  {
    title: "The 9 Best SaaS Marketing Agencies in 2024",
    image: slide2,
    category: ["Digital Marketing"],
    author: "Asghar Paracha",
    readTime: "9 minutes read",
  },
];

const marqueeVariants = {
  loop: {
    x: ["0%", "-50%"],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 35,
        ease: "linear",
      },
    },
  },
};

export default function BlogSection() {
  return (
    <section className="bg-[#0b0b12] py-28 overflow-hidden">
      <div>
        <motion.div
          className="mb-16 text-left mx-3 px-3 md:px-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <p className="mb-3 text-sm text-gray-400 flex gap-3 items-center">
            <span className="inline-block h-2 w-2 rounded-full bg-purple-500" />
            Our Blog
          </p>
          <h2 className="text-4xl md:text-5xl font-medium text-white md:w-[80%]">
            What’s Happening in The Industry?
          </h2>
        </motion.div>
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-8 w-max"
            variants={marqueeVariants}
            animate="loop"
          >
            {[...blogs, ...blogs].map((blog, i) => (
              <article
                key={i}
                className="group min-w-[100px]   rounded-3xl overflow-hidden"
              >
                <div className="relative h-60  overflow-hidden">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110 rounded-xl"
                  />
                </div>

                <div className="p-6">
                  <div className="mb-4 flex flex-wrap gap-2">
                    {blog.category.map((cat, idx) => (
                      <span
                        key={idx}
                        className="rounded-full bg-white/5 px-3 py-1 text-xs text-gray-300"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>

                  <h3 className="mb-4 text-lg font-medium text-white leading-snug">
                    {blog.title}
                  </h3>

                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <span>By {blog.author}</span>
                    <span>•</span>
                    <span>{blog.readTime}</span>
                  </div>
                </div>
              </article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
