"use client";
import contactbg from "@/app/assets/contact-bg.webp";
import MainLayout from "@/app/common/MainLayout";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Phone } from "lucide-react";
import moon from "@/app/assets/moon.webp";
import { useEffect, useState } from "react";
import Notification from "@/app/common/Notification";
import { useDispatch, useSelector } from "react-redux";
import {
  clearError,
  clearMessage,
  createProduct,
} from "@/app/store/slice/contact";
import { errorAlert } from "@/app/utils/alertService";

const ContactSection = () => {
  const dispatch = useDispatch();
  const { loading, message, error } = useSelector((state) => state.contact);
  const [showNotification, setShowNotification] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    dispatch(createProduct(form));
  };

  useEffect(() => {
    if (message) {
      setShowNotification(true);
      dispatch(clearMessage());
      setForm({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    }
    if (error) {
      errorAlert(error);
      dispatch(clearError());
    }
  }, [message, error]);

  return (
    <>
      <MainLayout
        className="relative w-full min-h-screen flex items-center bg-cover bg-center py-30 px-3 md:px-20"
        style={{
          backgroundImage: `url(${contactbg.src})`,
        }}
      >
        <div className="relative z-10   grid lg:grid-cols-2 items-center">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-purple-500 text-xs font-medium" />
              <p className="text-white/70">Contact Us</p>
            </div>
            <h1 className="text-white text-4xl font-medium leading-12 mb-6">
              Grow Your Business With <br />
              Our Expertise.
            </h1>
            <p className="text-white/70 max-w-xl mb-10 text-xs">
              We acknowledge the significance of taking a holistic approach to
              every task and hold belief in the potency of simplicity in our Web
              Design & Development Company in Chennai.!
            </p>
            <button className="bg-linear-to-r from-purple-600 to-pink-500 text-white px-8 py-3 rounded-full hover:scale-105 transition">
              Lets Get Started
            </button>
          </div>
          <div />
        </div>
      </MainLayout>

      <MainLayout className="relative w-full min-h-screen flex items-center bg-cover bg-center px-3 md:px-20 bg-black">
        <div className=" grid lg:grid-cols-2 gap-16 items-center w-full">
          <div>
            <h1 className="text-white text-4xl md:text-5xl font-medium leading-tight mb-6">
              Grow Your Business With <br />
              <span className="text-pink-500">Our Expertise</span>
            </h1>
            <p className="text-white/70 max-w-xl mb-10 text-sm">
              We acknowledge the significance of taking a holistic approach to
              every task and hold belief in the potency of simplicity in our Web
              Design & Development Company in Chennai.
            </p>
            <button className="bg-linear-to-r from-purple-600 to-pink-500 text-white px-8 py-3 rounded-full hover:scale-105 transition">
              Lets Get Started
            </button>
          </div>

          <div className="relative w-full">
            <div className="absolute -inset-1 rounded-3xl bg-linear-to-r from-purple-600 to-pink-600 blur-xl opacity-40" />
            <div className="relative rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 p-8 space-y-6 shadow-2xl">
              <h2 className="text-2xl font-medium text-white">
                Ready To Get Started?
              </h2>

              <div className="grid md:grid-cols-2 gap-4">
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="w-full rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-white placeholder:text-white/60 outline-none focus:ring-2 focus:ring-purple-500"
                />

                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-white placeholder:text-white/60 outline-none focus:ring-2 focus:ring-purple-500"
                />

                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Phone"
                  className="w-full rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-white placeholder:text-white/60 outline-none focus:ring-2 focus:ring-purple-500"
                />

                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className="w-full rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-white outline-none focus:ring-2 focus:ring-purple-500 transition"
                >
                  <option value="" disabled className="text-gray-500">
                    Select the service
                  </option>
                  <option value="website" className="text-black">
                    Website Development
                  </option>
                  <option value="app" className="text-black">
                    App Development
                  </option>
                  <option value="seo" className="text-black">
                    SEO
                  </option>
                  <option value="digital" className="text-black">
                    Digital Marketing
                  </option>
                  <option value="brochure" className="text-black">
                    Brochure Design
                  </option>
                  <option value="logo" className="text-black">
                    Logo Design
                  </option>
                </select>
              </div>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                placeholder="Message"
                className="w-full rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-white placeholder:text-white/60 outline-none focus:ring-2 focus:ring-purple-500 resize-none"
              />
              <button
                onClick={handleSubmit}
                disabled={loading}
                className="w-full bg-linear-to-r from-purple-600 to-pink-500 py-3 rounded-xl text-white hover:scale-105 transition disabled:opacity-50"
              >
                {loading ? "Sending..." : "Submit"}
              </button>
            </div>
          </div>
        </div>
      </MainLayout>
      <MainLayout className="relative w-full py-20 bg-black text-white overflow-hidden flex items-center px-3 md:px-20">
        <div className=" grid lg:grid-cols-3 gap-10 items-center relative z-10">
          <div className="hidden lg:block">
            <p className="text-gray-300 leading-relaxed text-xs">
              Our team here drives forward-thinking solutions.
            </p>
          </div>
          <div className="flex justify-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
              className="relative w-[400px] h-[400px] lg:w-[900px]"
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
            <h2 className="text-3xl font-light">INDIA</h2>
            <div className="flex items-start gap-3 text-gray-300 text-xs">
              <MapPin size={18} />
              <p>
                FIRST FLOOR, 2ND PORTION, 36, Saraswathi Nagar Main Rd,
                Thirumullaivoyal, Chennai, Tamil Nadu 600062
              </p>
            </div>
            <div className="flex items-center gap-3 text-gray-300 text-xs">
              <Phone size={18} />
              <p>+91-88256 07550</p>
            </div>
          </div>
        </div>
      </MainLayout>
      {showNotification && (
        <Notification
          title="Thank You!"
          message="Your form has been submitted successfully. Our team will contact you shortly."
          onClose={() => setShowNotification(false)}
        />
      )}
    </>
  );
};

export default ContactSection;
