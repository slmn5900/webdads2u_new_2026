"use client";

import { Facebook, Instagram, Youtube, Linkedin, Dribbble } from "lucide-react";
import { motion } from "framer-motion";
import Footerbottomimg from "@/app/assets/footerbottomimg.svg";

const Footer = () => {
  const socials = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/webdads2u-digital-marketing-5559913a7/",
    },
    {
      name: "Facebook",
      icon: Facebook,
      href: "https://www.facebook.com/Webdads2u",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://www.instagram.com/webdads2u/",
    },
    {
      name: "YouTube",
      icon: Youtube,
      href: "https://www.youtube.com/webdads2u",
    },
  ];
  return (
    <footer className="relative overflow-hidden bg-[#1c1c1c] text-gray-400">
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 pt-20 pb-40">
        <div className="relative pb-10 overflow-hidden">
          <div className="absolute inset-0 bg-radial from-white/5 via-transparent to-transparent pointer-events-none" />
          <div className="relative flex flex-col items-center text-center">
            <motion.div
              className="text-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <p className="text-lg tracking-wide opacity-80">Digital</p>
              <h2 className="text-6xl font-bold tracking-tight">
                We<span>b</span>dads
              </h2>
            </motion.div>

            <div className="flex items-center w-full mt-6 gap-8">
              <motion.span
                className="flex-1 h-[3px]"
                style={{
                  background:
                    "linear-gradient(90deg, transparent 0%, #a855f7 50%, transparent 100%)",
                  backgroundSize: "200% 100%",
                }}
                animate={{ backgroundPosition: ["0% 50%", "100% 50%"] }}
                transition={{
                  duration: 3,
                  ease: "linear",
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
              <div className="flex gap-6 text-white">
                {socials?.map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.name}
                    className="hover:opacity-70 transition"
                  >
                    <item.icon className="w-5 h-5 cursor-pointer" />
                  </a>
                ))}
              </div>
              <motion.span
                className="flex-1 h-[3px]"
                style={{
                  background:
                    "linear-gradient(90deg, transparent 0%, #a855f7 50%, transparent 100%)",
                  backgroundSize: "200% 100%",
                }}
                animate={{ backgroundPosition: ["100% 50%", "0% 50%"] }}
                transition={{
                  duration: 3,
                  ease: "linear",
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            </div>
          </div>
        </div>
        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <ul className="space-y-4 text-sm">
              {[
                "Work",
                "Contact Us",
                "Career",
                "Blog",
                "Privacy Policy",
                "Terms & Conditions",
                "Refund Policy",
              ].map((item) => (
                <li
                  key={item}
                  className="hover:text-white transition cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-6 text-white font-semibold text-lg">
              Website Development
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                "Web Portal Development",
                "WordPress Web Development",
                "ReactJs Web Development",
                "PHP Web Development",
                "Custom Web Development",
              ].map((item) => (
                <li key={item} className="hover:text-white transition">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-6 text-white font-semibold text-lg">
              SEO Services
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                "Digital Marketing",
                "PPC Service",
                "E-Commerce SEO Service",
                "Local SEO Service",
                "Off Page SEO",
                "Link Building Service",
                "Content Writing Service",
              ].map((item) => (
                <li key={item} className="hover:text-white transition">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-6 text-white font-semibold text-lg">
              Mobile App Development
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                "iOS App Development",
                "Android App Development",
                "Flutter App Development",
                "React Native App Development",
                "Mobile App UI/UX Design",
              ].map((item) => (
                <li key={item} className="hover:text-white transition">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute bottom-10 left-1/2 -translate-x-1/2 w-[700px] h-[60px] bg-linear-to-r from-transparent via-purple-600/40 to-transparent blur-2xl" />
      <div className="pointer-events-none absolute bottom-6 left-0 w-full px-6 md:px-20 py-4">
        <img
          src={Footerbottomimg.src}
          alt="Footer decorative text"
          className="w-full opacity-25 translate-y-4 md:translate-y-8"
        />
      </div>

      <div className="relative z-20 border-t border-white/10 bg-linear-to-r from-[#0f0f14] via-[#14141c] to-[#0f0f14]">
        <div className="mx-auto max-w-7xl px-6 md:px-12 py-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/80">
          <div className="flex items-center gap-6">
            <a href="/privacy-policy" className="hover:text-white transition">
              Privacy Policy
            </a>
            <span className="h-4 w-px bg-white/30" />
            <a href="/terms-conditions" className="hover:text-white transition">
              Terms & Conditions
            </a>
          </div>
          <div className="text-white/80">© 2026. Webdads.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
