"use client";
import Link from "next/link";
import { Facebook, Instagram, Youtube, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import Footerbottomimg from "@/app/assets/footerbottomimg.svg";
import schedule from "@/app/assets/schedule.svg";
import Image from "next/image";

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
      <div className="relative z-10   px-4 md:px-20 pt-20 pb-40">
        <div className="relative pb-10 overflow-hidden">
          <div className="relative flex flex-col items-center text-center">
            <motion.div
              className="text-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-lg opacity-80 mb-3">Digital</p>
              <Image
                src={schedule}
                className="w-15 h-15 rounded-full"
                alt="avatar"
              />
            </motion.div>
            <div className="flex items-center w-full mt-6 gap-8">
              <span className="flex-1 h-[3px] bg-linear-to-r from-transparent via-purple-500 to-transparent" />
              <div className="flex gap-6 text-white">
                {socials.map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-70 transition"
                  >
                    <item.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
              <span className="flex-1 h-[3px] bg-linear-to-r from-transparent via-purple-500 to-transparent" />
            </div>
          </div>
        </div>
        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <ul className="space-y-4 text-sm">
              {[
                { label: "Work", path: "/work" },
                { label: "Contact Us", path: "/contact" },
                { label: "Career", path: "/career" },
                { label: "Blog", path: "/blog" },
                { label: "Privacy Policy", path: "/privacy-policy" },
                { label: "Terms & Conditions", path: "/terms-conditions" },
                { label: "Refund Policy", path: "/refund-policy" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.path}
                    className="hover:text-white transition"
                  >
                    {item.label}
                  </Link>
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
                "web-portal-development",
                "wordpress-development",
                "reactjs-development",
                "php-development",
                "custom-web-development",
              ].map((slug) => (
                <li key={slug}>
                  <Link
                    href={`/${slug}`}
                    className="hover:text-white transition capitalize"
                  >
                    {slug.replaceAll("-", " ")}
                  </Link>
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
                "digital-marketing",
                "ppc-service",
                "ecommerce-seo",
                "local-seo",
                "off-page-seo",
                "link-building",
                "content-writing",
              ].map((slug) => (
                <li key={slug}>
                  <Link
                    href={`/${slug}`}
                    className="hover:text-white transition capitalize"
                  >
                    {slug.replaceAll("-", " ")}
                  </Link>
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
                "ios-app-development",
                "android-app-development",
                "flutter-app-development",
                "react-native-development",
                "mobile-ui-ux-design",
              ].map((slug) => (
                <li key={slug}>
                  <Link
                    href={`/${slug}`}
                    className="hover:text-white transition capitalize"
                  >
                    {slug.replaceAll("-", " ")}
                  </Link>
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
          className="w-full opacity-25 translate-y-4 md:translate-y-12"
        />
      </div>
      <div className="relative z-20 border-t border-white/10 bg-linear-to-r from-[#0f0f14] via-[#14141c] to-[#0f0f14]">
        <div className="px-4BBhbha md:px-12 py-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/80">
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <span className="h-4 w-px bg-white/30" />
            <Link href="/terms-conditions">Terms & Conditions</Link>
          </div>
          <div className="uppercase">© {new Date().getFullYear()}. Webdads Private Limited</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
