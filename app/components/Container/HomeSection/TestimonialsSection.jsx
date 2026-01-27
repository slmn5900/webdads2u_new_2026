"use client";
import VideoCard from "@/app/common/VideoCard";
import { useState } from "react";

const testimonials = [
  { video: "/videos/testimonial1.mp4" },
  { video: "/videos/testimonia2.mp4" },
  { video: "/videos/testimonia3.mp4" },
  { video: "/videos/testimonial1.mp4" },
  { video: "/videos/testimonia3.mp4" },
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="bg-white py-24">
      <div className="px-4 sm:px-6 lg:px-20 mb-16">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-2.5 h-2.5 rounded-full bg-purple-600" />
          <span className="text-sm font-medium tracking-wide text-purple-600">
            Client Testimonials & Reviews
          </span>
          <span className="flex-1 h-px bg-linear-to-r from-purple-600/60 to-transparent" />
        </div>

        <h2 className="text-4xl md:text-5xl font-light">
          Don't Take Our Words!
          <br />
          Hear From Our Esteemed Clients!
        </h2>
      </div>
      <div
        className="
          flex gap-4 overflow-x-auto pb-4 px-4
          sm:grid sm:grid-cols-2
          lg:grid-cols-5
          sm:overflow-visible
        "
      >
        {testimonials.map((item, index) => (
          <VideoCard
            key={index}
            video={item.video}
            isActive={activeIndex === index}
            onActivate={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </section>
  );
}
