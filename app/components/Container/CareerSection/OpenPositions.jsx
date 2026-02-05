"use client";
import React, { useState } from "react";
import MainLayout from "@/app/common/MainLayout";
import linevictor from "@/app/assets/line-vector.svg";
import { useRouter } from "next/navigation";
import { careers } from "@/app/utils/careerDetailsMockdata";

const filters = ["All Locations", "UK", "INDIA"];

export default function OpenPositions() {
  const router = useRouter();
  const [active, setActive] = useState("All Locations");

  return (
    <MainLayout>
      <section
        className="relative py-28 px-4 md:px-20 overflow-hidden bg-black"
        style={{
          backgroundImage: `
            url(${linevictor.src}),
            linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: "cover, 40px 40px, 40px 40px",
        }}
      >
        <div className="relative text-white">
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 bg-purple-500 rounded-full" />
              <p className="text-sm text-gray-300">Open Positions</p>
            </div>

            <h2 className="text-4xl md:text-5xl font-light leading-tight max-w-xl">
              Why Choose a Career at <br /> Webdads
            </h2>
          </div>

          <div className="flex gap-3 mb-10 flex-wrap">
            {filters.map((item) => (
              <button
                key={item}
                onClick={() => setActive(item)}
                className={`px-5 py-2 rounded-full border text-sm transition ${
                  active === item
                    ? "border-purple-500 text-purple-400"
                    : "border-white/20 text-gray-300"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <p className="text-gray-400 mb-6">
            Open Positions ({careers.length})
          </p>

          <div className="space-y-6">
            {careers.map((job, i) => (
              <div
                key={i}
                className="border border-white/40 rounded-xl p-5 flex items-center justify-between gap-6 backdrop-blur"
              >
                <div>
                  <h3 className="text-xl font-semibold">{job.title}</h3>
                  <p className="text-sm text-gray-400 mt-1">{job.meta}</p>
                </div>

                <button
                  onClick={() => router.push(`/careers/${job.slug}`)}
                  className="px-6 py-2 rounded-full bg-purple-600 hover:bg-purple-700 transition"
                >
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
