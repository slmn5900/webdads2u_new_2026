"use client";
import { motion } from "framer-motion";
import client1 from "@/app/assets/client1.svg";
import client2 from "@/app/assets/client2.svg";
import client3 from "@/app/assets/client3.svg";
import client4 from "@/app/assets/client4.svg";
import client5 from "@/app/assets/client5.svg";
import client6 from "@/app/assets/client6.svg";
import client7 from "@/app/assets/client7.svg";
import client8 from "@/app/assets/client8.svg";
import client9 from "@/app/assets/client9.svg";
import client10 from "@/app/assets/client10.svg";
import client11 from "@/app/assets/client11.svg";
import client12 from "@/app/assets/client12.svg";
import Image from "next/image";

const partners = [
  {
    src: client1,
  },
  {
    src: client2,
  },
  {
    src: client3,
  },
  {
    src: client4,
  },
  {
    src: client5,
  },
  {
    src: client6,
  },
  {
    src: client7,
  },
  {
    src: client8,
  },
  {
    src: client9,
  },
  {
    src: client10,
  },
  {
    src: client11,
  },
  {
    src: client12,
  },
];

const row1 = partners.slice(0, Math.ceil(partners.length / 2));
const row2 = partners.slice(Math.ceil(partners.length / 2));
const marqueeVariants = {
  left: {
    x: ["0%", "-50%"],
    transition: {
      x: { repeat: Infinity, repeatType: "loop", duration: 40, ease: "linear" },
    },
  },
  right: {
    x: ["-50%", "0%"],
    transition: {
      x: { repeat: Infinity, repeatType: "loop", duration: 22, ease: "linear" },
    },
  },
};

const LogoRow = ({ logos, direction }) => (
  <div className="overflow-hidden">
    <motion.div
      className="flex gap-6 w-max"
      variants={marqueeVariants}
      animate={direction}
    >
      {[...logos, ...logos].map((logo, index) => (
        <div
          key={index}
          rel="noopener noreferrer"
          className="
            group flex items-center justify-center
            h-32 w-60 rounded-2xl
            border border-white/15
            bg-white/5 backdrop-blur-sm
            transition-all duration-300
            hover:border-white/30
            hover:bg-white/10
          "
        >
          <Image
            src={logo.src}
            alt="Partner logo"
            width={140}
            height={60}
            className="
              object-contain
              transition
              group-hover:opacity-100
            "
          />
        </div>
      ))}
    </motion.div>
  </div>
);

const PartnersRecognition = () => {
  return (
    <section className="relative bg-[#1e1f23] py-20 overflow-hidden">
      <div className="mx-auto  space-y-10">
        <LogoRow logos={row1} direction="left" />
        <LogoRow logos={row2} direction="right" />
      </div>
    </section>
  );
};

export default PartnersRecognition;
