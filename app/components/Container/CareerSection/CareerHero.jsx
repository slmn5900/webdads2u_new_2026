import MainLayout from "@/app/common/MainLayout";
import React from "react";
import linevictor from "@/app/assets/line-vector.svg";
import Image from "next/image";

const CareerHero = () => {
  return (
    <MainLayout className="relative w-full h-screen bg-black overflow-hidden flex items-center justify-center">
      <Image
        src={linevictor.src}
        alt="Career Background"
        fill
        priority
        className="object-cover"
      />
      <div className="relative z-10 text-center max-w-4xl px-6">
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="w-2 h-2 rounded-full bg-purple-500" />
          <p className="text-sm text-white tracking-wide">Careers</p>
        </div>
        <h1 className="text-white text-4xl md:text-6xl font-semibold leading-15">
          Build the Future of Digital <br /> Transformation with Us
        </h1>
        <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
          Work on meaningful digital projects, collaborate with passionate
          people, and help businesses and brands grow in a fast-moving digital
          world.
        </p>
      </div>
    </MainLayout>
  );
};

export default CareerHero;
