"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import slide from "@/app/assets/blog1.avif";
import slide1 from "@/app/assets/blog2.webp";
import slide2 from "@/app/assets/blog3.webp";

const blogs = [
  {
    title: "SEO Algorithm Updates for the year 2023",
    image: slide,
    category: ["Digital Marketing", "DG NEWS"],
    author: "Umair Khan",
    readTime: "November 17, 2023",
  },
  {
    title: "Introduction to Python – A developer perspective",
    image: slide1,
    category: ["Python"],
    author: "Maria Khan",
    readTime: "December 2, 2023",
  },
  {
    title: "What is CRM Software Development",
    image: slide2,
    category: ["Web Development"],
    author: "Asghar Paracha",
    readTime: "March 19, 2024",
  },
  {
    title: "The 9 Best SaaS Marketing Agencies in 2024",
    image: slide,
    category: ["Web Development"],
    author: "Asghar Paracha",
    readTime: "9 minutes read",
  },
];

const marqueeVariants = {
  animate: {
    x: ["0%", "-50%"],
    transition: {
      repeat: Infinity,
      repeatType: "loop",
      duration: 30,
      ease: "linear",
    },
  },
};

export default function BlogSection() {
  return (
    <section className="bg-[#0b0b12] py-28 overflow-hidden">
      <div className="mx-auto">
        <motion.div
          className="mb-16 px-6 md:px-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="mb-3 text-sm text-gray-400 flex gap-3 items-center">
            <span className="inline-block h-2 w-2 rounded-full bg-purple-500" />
            Our Blog
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-white md:w-[80%]">
            What’s Happening in The Industry?
          </h2>
        </motion.div>
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-8 w-max"
            variants={marqueeVariants}
            animate="animate"
          >
            {[...blogs, ...blogs].map((blog, i) => (
              <article
                key={`${blog.title}-${i}`}
                className="group min-w-[320px] max-w-[320px]"
              >
                <div className="relative h-60 overflow-hidden rounded-2xl">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    sizes="320px"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
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
