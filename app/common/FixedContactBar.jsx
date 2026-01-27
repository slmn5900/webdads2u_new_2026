"use client";

import { Phone, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const contacts = [
  {
    icon: FaWhatsapp,
    href: "https://wa.me/XXXXXXXXXX",
    label: "WhatsApp",
  },
  {
    icon: Mail,
    href: "mailto:hello@yourdomain.com",
    label: "Email",
  },
  {
    icon: Phone,
    href: "tel:+91XXXXXXXXXX",
    label: "Call",
  },
];

const smoothEase = [0.22, 1, 0.36, 1];

export default function FixedContactBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShow(window.scrollY > window.innerHeight * 0.2); // 👈 20%
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.5, ease: smoothEase }}
          className="fixed right-3 bottom-15 z-50 hidden md:flex flex-col gap-4"
        >
          {contacts.map((Item, i) => (
            <a
              key={i}
              href={Item.href}
              aria-label={Item.label}
              className="
                group
                w-8 h-8
                rounded-full
                flex items-center justify-center
                bg-black/60
                backdrop-blur-md
                border border-white/10
                text-white
                transition-all duration-300
                hover:scale-110
                hover:border-purple-500/50
                hover:bg-purple-600/20
              "
            >
              <Item.icon className="w-3 h-3 opacity-80 group-hover:opacity-100" />
            </a>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
