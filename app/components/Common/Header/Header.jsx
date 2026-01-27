"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Phone, Mail } from "lucide-react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import webdadaslogo from "@/app/assets/webdadaslogo.svg";

const menuItems = [
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Works", path: "/projects" },
  { label: "Contact", path: "/contact" },
];

const servicesData = {
  categories: [
    { title: "Web Development", color: "from-blue-500 to-cyan-500" },
    { title: "Ecommerce Development", color: "from-emerald-500 to-teal-500" },
    { title: "ERP Software", color: "from-amber-500 to-orange-500" },
    { title: "Digital Marketing", color: "from-rose-500 to-pink-500" },
    {
      title: "Search Engine Optimization",
      color: "from-indigo-500 to-purple-500",
    },
    {
      title: "Artificial Intelligence",
      color: "from-violet-500 to-fuchsia-500",
    },
    { title: "Virtual Reality", color: "from-green-500 to-emerald-500" },
    { title: "Video Production", color: "from-red-500 to-rose-500" },
    { title: "UI/UX Design", color: "from-purple-500 to-indigo-500" },
    { title: "IT Resource Outpouring", color: "from-sky-500 to-blue-500" },
    {
      title: "Social Media Marketing",
      color: "from-fuchsia-500 to-purple-500",
    },
    {
      title: "Generative Engine Optimization",
      color: "from-cyan-500 to-blue-500",
    },
    { title: "Augmented Reality", color: "from-lime-500 to-green-500" },
    {
      title: "Digital Branding & Creatives",
      color: "from-amber-500 to-yellow-500",
    },
    { title: "2D/3D Video Animation", color: "from-pink-500 to-rose-500" },
  ],
  clients: [
    "BECYOND",
    "DIFC",
    "fludubar",
    "SEPHORA",
    "SQUIED",
    "skillbridge",
    "EXO",
    "EMDAD",
    "mediaPr6",
    "AMD",
    "CHANA",
  ],
  rating: "5-Star Rated, Works with GCC Giants",
};

const MenuToggle = ({ isOpen, toggle }) => (
  <motion.button
    onClick={toggle}
    className="lg:hidden relative z-50 w-10 h-10 flex items-center justify-center"
  >
    <div className="relative w-6 h-5">
      <motion.span
        className="absolute left-0 top-0 w-full h-[3px] bg-white rounded-full"
        animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 9 : 0 }}
      />
      <motion.span
        className="absolute left-0 top-1/2 w-full h-[3px] bg-white rounded-full"
        animate={{ opacity: isOpen ? 0 : 1 }}
      />
      <motion.span
        className="absolute left-0 bottom-0 w-full h-[3px] bg-white rounded-full"
        animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -9 : 0 }}
      />
    </div>
  </motion.button>
);

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const [servicesTimeout, setServicesTimeout] = useState(null);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
  }, [isMenuOpen]);

  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (!isDesktop) return;
      setIsScrolled(window.scrollY > window.innerHeight * 0.15);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [isDesktop]);

  const handleNavClick = (item) => {
    setIsMenuOpen(false);
    router.push(item.path);
  };

  const handleServicesMouseEnter = () => {
    if (servicesTimeout) {
      clearTimeout(servicesTimeout);
    }
    setIsServicesHovered(true);
  };

  const handleServicesMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsServicesHovered(false);
    }, 300); // Delay to allow moving to dropdown
    setServicesTimeout(timeout);
  };

  const handleDropdownMouseEnter = () => {
    if (servicesTimeout) {
      clearTimeout(servicesTimeout);
    }
    setIsServicesHovered(true);
  };

  const handleDropdownMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsServicesHovered(false);
    }, 300);
    setServicesTimeout(timeout);
  };

  return (
    <>
      <motion.header className="fixed top-0 z-50 w-full pt-2">
        <motion.div
          className={`mx-auto rounded-full relative ${
            isScrolled
              ? "bg-black/60 backdrop-blur-xl border border-white/10"
              : ""
          }`}
          animate={{ maxWidth: isScrolled ? "75%" : "100%" }}
        >
          <div className="flex items-center justify-between px-6 py-4 lg:grid lg:grid-cols-[auto_1fr_auto]">
            <Link href="/">
              <Image src={webdadaslogo} alt="logo" width={120} />
            </Link>
            <nav className="hidden lg:flex justify-center gap-6 ">
              {menuItems?.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={
                    item.label === "Services"
                      ? handleServicesMouseEnter
                      : undefined
                  }
                  onMouseLeave={
                    item.label === "Services"
                      ? handleServicesMouseLeave
                      : undefined
                  }
                >
                  <button
                    onClick={() => handleNavClick(item)}
                    className="relative group text-sm font-medium text-white cursor-pointer"
                  >
                    {item.label}
                    <span
                      className={`absolute left-0 -bottom-1 h-[3px] bg-white transition-all duration-300 
                      ${
                        pathname === item.path
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      }`}
                    />
                  </button>
                  {item.label === "Services" && isServicesHovered && (
                    <motion.div
                      className="absolute left-28 -translate-x-1/2 top-full mt-6 w-screen max-w-5xl px-8"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      onMouseEnter={handleDropdownMouseEnter}
                      onMouseLeave={handleDropdownMouseLeave}
                    >
                      <div className="bg-black/90 backdrop-blur-xl border border-white/50 rounded-2xl p-8 shadow-2xl">
                        <div className="grid grid-cols-3 gap-4 mb-8">
                          {servicesData.categories.map((service, index) => (
                            <motion.div
                              key={index}
                              className="group relative overflow-hidden rounded-xl p-4 cursor-pointer"
                              whileHover={{ scale: 1.02 }}
                              transition={{ duration: 0.2 }}
                            >
                              <div
                                className={`absolute inset-0  opacity-10 group-hover:opacity-20 transition-opacity duration-300`}
                              />
                              <div className="absolute inset-0 border border-white/5 rounded-xl" />
                              <div className="relative">
                                <div className="flex items-center justify-between mb-2">
                                  <h3 className="text-sm font-semibold text-white">
                                    {service.title}
                                  </h3>
                                  <ArrowRight
                                    size={14}
                                    className="text-white/50 group-hover:text-white transform group-hover:translate-x-1 transition-all duration-300"
                                  />
                                </div>
                                <div className="h-1 w-8 rounded-full bg-linear-to-r from-white/30 to-transparent" />
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              ))}
            </nav>
            <div className="flex items-center gap-3">
              <Link
                href="/contact"
                className="hidden lg:flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold text-white
                bg-linear-to-r from-purple-600 to-fuchsia-600 hover:from-purple-700 hover:to-fuchsia-700"
              >
                Hire us <ArrowRight size={16} />
              </Link>
              <button className="hidden lg:flex text-white h-8 w-8 items-center justify-center rounded-full border border-white/20 hover:bg-purple-500/20">
                <Mail size={14} />
              </button>
              <button className="hidden lg:flex text-white h-8 w-8 items-center justify-center rounded-full border border-white/20 hover:bg-purple-500/20">
                <Phone size={14} />
              </button>
              <MenuToggle
                isOpen={isMenuOpen}
                toggle={() => setIsMenuOpen(!isMenuOpen)}
              />
            </div>
          </div>
        </motion.div>
      </motion.header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/40 lg:hidden"
            onClick={() => setIsMenuOpen(false)}
          >
            <motion.div
              className="absolute right-0 top-0 h-full w-4/5 bg-black px-10"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
            >
              <button onClick={() => setIsMenuOpen(false)}>
                <X size={28} />
              </button>
              <div className="mt-16 flex flex-col gap-3">
                {menuItems?.map((item, i) => (
                  <motion.button
                    key={item.label}
                    onClick={() => handleNavClick(item)}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="text-2xl font-bold text-left cursor-pointer text-white"
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
