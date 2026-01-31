"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const rightServices = [
  {
    title: "Adobe Experience Manager Development",
    description:
      "We deliver enterprise-grade Adobe Experience Manager solutions tailored to your business needs. Our AEM specialists handle integration, hosting, migration, and performance optimization to ensure seamless digital experiences across all platforms.",
  },
  {
    title: "Sitecore Development",
    description:
      "Digital Gravity is redefining online customer engagement by generating experiences. It aims to help businesses with customized solutions according to their customer needs. With our expert developers, we help businesses with solutions that streamline their internal procedures and increase customer experience.",
  },
  {
    title: "Episerver (Optimizely)",
    description:
      "We implement Optimizely CMS solutions that enable rapid content deployment, A/B testing, and conversion optimization. Our team ensures high-performing digital ecosystems using Episerver technology.",
  },
];

export default function StickyServicesSection() {
  const [open, setOpen] = useState(null);

  return (
    <section className="relative min-h-screen bg-black text-white">
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-20 px-10 lg:px-20 py-32">
        <div className="sticky top-32 h-fit">
          <h2 className="text-4xl lg:text-5xl leading-tight font-light">
            The Best Website &<br />
            Web Application
            <br />
            Development
            <br />
            Company In Dubai
          </h2>
        </div>
        <div>
          {rightServices?.map((item, index) => (
            <div key={index} className="border-b border-white/20 py-10">
              <button
                onClick={() => setOpen(open === index ? null : index)}
                className="w-full flex items-center justify-between text-left"
              >
                <h3 className="text-3xl font-light">{item.title}</h3>

                <motion.span
                  animate={{ rotate: open === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown />
                </motion.span>
              </button>
              <AnimatePresence>
                {open === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="overflow-hidden"
                  >
                    <div className="mt-6">
                      <p className="text-white/70 leading-relaxed max-w-xl mb-6">
                        {item.description}
                      </p>

                      <button className="px-6 py-2 rounded-full bg-purple-600 hover:bg-purple-700 transition text-sm">
                        Learn More
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
