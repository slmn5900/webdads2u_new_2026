"use client";
import Image from "next/image";
import detailsBanner from "@/app/assets/detailsbanne.webp";
import { motion } from "framer-motion";
import MainLayout from "@/app/common/MainLayout";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import {
  createEnquiry,
  clearError,
  clearMessage,
} from "@/app/store/slice/enquirySlice";
import { errorAlert, successAlert } from "@/app/utils/alertService";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function ServiceDetailsHero({ serviceData }) {
  const dispatch = useDispatch();
  const { loading, error, message } = useSelector((state) => state.enquiry);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    projectDescription: "",
  });


  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createEnquiry(form));
  };

  useEffect(() => {
    if (message) {
      successAlert(message);
      dispatch(clearMessage());
      setForm({
        name: "",
        email: "",
        phone: "",
        projectDescription: "",
      });
    }

    if (error) {
      errorAlert(error);
      dispatch(clearError());
    }
  }, [message, error, dispatch]);

  return (
    <MainLayout className="relative min-h-screen flex items-center text-white overflow-hidden">
      <Image
        src={detailsBanner}
        alt="Service background"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/60" />

      <motion.div
        className="relative z-10 max-w-3xl px-20"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
      >
        <div className="flex items-center gap-2 mb-2">
          <span className="h-2 w-2 rounded-full bg-purple-500" />
          <p className="text-sm tracking-widest capitalize">
            {serviceData?.title}
          </p>
        </div>

        <h1 className="text-6xl leading-15 mb-3">{serviceData?.subTitle}</h1>

        <p className="text-white text-xs max-w-xl">
          {serviceData?.description}
        </p>
      </motion.div>
      <motion.form
        onSubmit={handleSubmit}
        className="absolute right-20 top-1/2 -translate-y-1/2 w-[400px] bg-black/60 backdrop-blur-xl border border-white/20 rounded-3xl p-6"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.2 }}
      >
        <h3 className="text-xl font-semibold mb-4">Have any questions?</h3>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full mb-3 bg-transparent border border-white/20 rounded-lg px-4 py-2"
          placeholder="Name*"
        />
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full mb-3 bg-transparent border border-white/20 rounded-lg px-4 py-2"
          placeholder="Email*"
        />
        <input
          name="phone"
          value={form.phone}
          onChange={handleChange}
          required
          className="w-full mb-3 bg-transparent border border-white/20 rounded-lg px-4 py-2"
          placeholder="Phone*"
        />
        <textarea
          name="projectDescription"
          value={form.projectDescription}
          onChange={handleChange}
          className="w-full mb-4 bg-transparent border border-white/20 rounded-lg px-4 py-2 h-28"
          placeholder="Tell us about your project"
        />
        <button
          disabled={loading}
          className="w-32 py-2 rounded-full bg-purple-600 hover:bg-purple-700 transition disabled:opacity-50"
        >
          {loading ? "Sending..." : "Submit"}
        </button>
      </motion.form>
    </MainLayout>
  );
}
