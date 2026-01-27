"use client";
import { motion } from "framer-motion";
const partners = [
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
    url: "https://www.facebook.com/business/partners",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
    url: "https://www.facebook.com/business/partners",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
    url: "https://www.facebook.com/business/partners",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
    url: "https://www.facebook.com/business/partners",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/3/3f/HubSpot_Logo.svg",
    url: "https://www.hubspot.com/partners",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/3/3f/HubSpot_Logo.svg",
    url: "https://www.hubspot.com/partners",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    url: "https://partner.microsoft.com",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    url: "https://partner.microsoft.com",
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
        <a
          key={index}
          href={logo.url}
          target="_blank"
          rel="noopener noreferrer"
          className="
            group flex items-center justify-center
            h-32 w-60 rounded-2xl
            borde border-2 border-white/15
            bg-white/5 backdrop-blur-sm
            transition-all duration-300
            hover:border-white/30
            hover:bg-white/10
          "
        >
          <img
            src={logo.src}
            alt="Partner logo"
            className="
              h-[60px] w-auto object-contain
              transition
              group-hover:grayscale-0
              group-hover:opacity-100
            "
            loading="lazy"
          />
        </a>
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
