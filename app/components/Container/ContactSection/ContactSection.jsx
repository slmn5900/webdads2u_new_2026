"use client";
import contactbg from "@/app/assets/contact-bg.webp";
import MainLayout from "@/app/common/MainLayout";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Phone } from "lucide-react";
import moon from "@/app/assets/moon.webp";

const ContactSection = () => {
  return (
    <>
      <MainLayout
        className="relative w-full min-h-screen flex items-center bg-cover bg-center py-30 px-3 md:px-20"
        style={{
          backgroundImage: `url(${contactbg.src})`,
        }}
      >
        <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 items-center">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-purple-500 text-xs font-medium" />
              <p className="text-white/70">Contact Us</p>
            </div>
            <h1 className="text-white text-4xl  font-medium leading-12 mb-6">
              Let’s get in touch and make <br /> things happen.
            </h1>
            <p className="text-white/70 max-w-xl mb-10 text-xs">
              Simply click the button below to fill out a quick form, and we’ll
              be in touch soon. Whether you have questions, ideas, or want to
              explore how we can work together, this is the best place to reach
              us. Let’s make something great happen!
            </p>
            <button className="bg-linear-to-r from-purple-600 to-pink-500 text-white px-8 py-3 rounded-full hover:scale-105 transition">
              Lets Get Started
            </button>
          </div>
          <div />
        </div>
      </MainLayout>
      <MainLayout className="relative w-full min-h-screen bg-black text-white overflow-hidden flex items-center px-3 md:px-20">
        <div className=" grid lg:grid-cols-3 gap-10  items-center relative z-10">
          <div className="hidden lg:block">
            <p className="text-gray-300 leading-relaxed text-xs">
              Our team here drives forward-thinking solutions, ensuring
              high-quality service and a deep understanding of local markets
            </p>
          </div>
          <div className="flex justify-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
              className="relative w-[400px] h-[400px] lg:w-[900px] lg:h-[900px]"
            >
              <Image
                src={moon}
                fill
                priority
                alt="Moon"
                className="object-contain"
              />
            </motion.div>
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-light">Dubai UAE</h2>
            <div className="flex items-start gap-3 text-gray-300 text-xs">
              <MapPin size={18} />
              <p>
                Office M-13, The Curve Building,
                <br />
                Sheikh Zayed Road, Dubai, UAE
              </p>
            </div>

            <div className="flex items-center gap-3 text-gray-300 text-xs">
              <Phone size={18} />
              <div>
                <p>+971 4 242 1375</p>
                <p>+971 4 834 6571</p>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default ContactSection;
