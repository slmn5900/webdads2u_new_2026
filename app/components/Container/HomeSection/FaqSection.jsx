"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, X } from "lucide-react";
import { faqs } from "@/app/utils/mockdata";

export default function FAQSection() {
  const [active, setActive] = useState(null);
  return (
    <section className="relative bg-black py-32 overflow-hidden px-3 md:px-20">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] " />
      <div className="relative z-10 mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-20">
        <div className="lg:sticky lg:top-0 self-start">
          <div className="mb-6 flex items-center gap-2 text-sm text-gray-300">
            <span className="h-2 w-2 rounded-full bg-purple-500" />
            FAQs
          </div>
          <h2 className="text-4xl font-medium text-white leading-tight mb-6">
            Transformation with <br />
            Smart UX & <br />
            Scalable Tech
          </h2>
          <p className="text-gray-400 leading-relaxed max-w-lgc text-sm">
            You have the vision — we engineer for the future. At Digital
            Gravity, we embrace modern technology with creativity to deliver
            scalable and intelligent digital products.
          </p>
        </div>
        <div
          className="
            space-y-4
            max-h-[90vh]
            overflow-y-auto
            pr-2
            scrollbar-hide
            scrollbar-thumb-white/10
          "
        >
          {faqs?.map((faq, i) => {
            const isOpen = active === i;
            return (
              <motion.div
                key={i}
                className="rounded-2xl border border-white/10 bg-white/5"
              >
                <button
                  onClick={() => setActive(isOpen ? null : i)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left text-white"
                >
                  <span className="text-sm">{faq.q}</span>
                  {isOpen ? <X size={18} /> : <Plus size={18} />}
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-white leading-relaxed text-xs">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
