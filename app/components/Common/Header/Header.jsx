"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Phone, Mail } from "lucide-react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import webdadaslogo from "@/app/assets/webdadaslogo.svg";
import webdadaslogo1 from "@/app/assets/webdadaslogo1.svg";
import HireUsModal from "@/app/common/HireUsModal";

const menuItems = [
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Works", path: "/projects" },
  { label: "Contact", path: "/contact" },
];

const servicesData = [
  {
    title: "web design and developemnt",
    children: [
      "UI UX Design",
      "Wordpress Web Development",
      "ReactJS Web Development",
      "Real Time Application Development",
      "Nextjs Development",
    ],
  },
  {
    title: "Digital Solutions ",
    children: [
      "Digital Marketing",
      "SEO",
      "LLM SEO",
      "GEO",
      "Local SEO",
      "Pay Per Click Ads",
      "E-mail Marketing",
      "App Store Optimization",
      "Social media marketing",
    ],
  },
  {
    title: "App Development",
    children: [
      "IOS App Development",
      "Android App Development",
      "Flutter App Development",
      "Hybrid App Development ",
      "Location based app development ",
    ],
  },
  {
    title: "Web Design",
    children: [
      "HTML5 Website Design",
      "Domain Registration",
      "Hosting",
      "Responsive Website",
      "UI/UX Design",
      "Website Redesign",
      "Maintenance",
    ],
  },
  {
    title: "Branding",
    children: [
      "Logo Design",
      "Flyer Design",
      "Brochure Design",
      "Brand Identity",
      "Motion Graphics",
      "Video Production",
      "Package Designing",
      "Social Media Posters",
      "Corporate Identity",
    ],
  },
  {
    title: "Software Development",
    children: [
      "SAAS Application Development",
      "Customized CRM",
      "Customized ERP",
      "HRMS Software",
      "B2B Web App Development",
      "Project Management Automation",
      "Workflow Automation",
    ],
  },

  // {
  //   title: "E-Commerce Development",
  //   children: ["WooCommerce", "OpenCart", "Shopify"],
  // },

  {
    title: "Emerging Technologies",
    children: [
      "Gen AI",
      "AI & ML",
      "Data Science & Analytics",
      "LLM",
      "Blockchain Development",
    ],
  },
];

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
  const [openService, setOpenService] = useState(null);
  const [hireOpen, setHireOpen] = useState(false);
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
    setIsServicesHovered(false);
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

  const goToService = (service, child) => {
    const slug = child.toLowerCase().replace(/&/g, "and").replace(/\s+/g, "-");
    setIsServicesHovered(false);
    setOpenService(null);
    router.push(`/${slug}`);
  };

  const goToMainService = (serviceTitle) => {
    const slug = serviceTitle
      .toLowerCase()
      .replace(/&/g, "and")
      .replace(/\s+/g, "-");

    setIsServicesHovered(false);
    setOpenService(null);
    router.push(`/${slug}`);
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
              <Image
                src={isScrolled ? webdadaslogo : webdadaslogo1}
                alt="logo"
                width={120}
                className="transition-all duration-300"
              />
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
                      className="absolute left-28 -translate-x-1/2 top-full mt-6 w-screen max-w-6xl px-8"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      onMouseEnter={handleDropdownMouseEnter}
                      onMouseLeave={handleDropdownMouseLeave}
                    >
                      <div className="bg-black/90 backdrop-blur-xl border border-white/50 rounded-2xl p-8 shadow-2xl">
                        <div className="grid grid-cols-4 gap-8">
                          {servicesData?.map((service, index) => (
                            <div key={index}>
                              <button
                                onMouseEnter={() => setOpenService(index)}
                                onClick={() => goToMainService(service.title)}
                                className="flex items-center justify-between w-full text-white font-semibold mb-3 cursor-pointer hover:text-purple-400 transition"
                              >
                                {service.title}

                                <motion.span
                                  animate={{
                                    rotate: openService === index ? 90 : 0,
                                  }}
                                >
                                  <ArrowRight size={16} />
                                </motion.span>
                              </button>
                              <AnimatePresence>
                                {openService === index && (
                                  <motion.ul
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className="space-y-2 text-sm text-white/70"
                                  >
                                    {service.children.map((child, i) => (
                                      <li
                                        key={i}
                                        onClick={() =>
                                          goToService(service.title, child)
                                        }
                                        className="hover:text-white cursor-pointer transition"
                                      >
                                        {child}
                                      </li>
                                    ))}
                                  </motion.ul>
                                )}
                              </AnimatePresence>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              ))}
            </nav>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setHireOpen(true)}
                className="hidden lg:flex items-center cursor-pointer gap-2 px-5 py-2 rounded-full text-sm font-semibold text-white
bg-linear-to-r from-purple-600 to-fuchsia-600 hover:from-purple-700 hover:to-fuchsia-700"
              >
                Hire us <ArrowRight size={16} />
              </button>

              <a
                href="mailto:info@webdads2u.com"
                className="hidden lg:flex text-white h-8 w-8 items-center justify-center rounded-full border border-white/20 hover:bg-purple-500/20"
              >
                <Mail size={14} />
              </a>
              <a
                href="tel:+97148346571"
                className="hidden lg:flex text-white h-8 w-8 items-center justify-center rounded-full border border-white/20 hover:bg-purple-500/20"
              >
                <Phone size={14} />
              </a>
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
      <HireUsModal open={hireOpen} onClose={() => setHireOpen(false)} />
    </>
  );
}
