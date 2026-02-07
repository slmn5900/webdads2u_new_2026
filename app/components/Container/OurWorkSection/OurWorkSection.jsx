"use client";
import { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import MainLayout from "@/app/common/MainLayout";
import { useDispatch, useSelector } from "react-redux";
import { getAllOurWork } from "@/app/store/slice/ourWorkSlice";
import CustomImage from "@/app/common/Image";

const categories = [
  "All",
  "Website",
  "Mobile App",
  "SMM",
  "PPC",
  "Print",
  "SEO",
  "Branding",
  "Artificial Intelligence",
];

const industries = [
  "Corporate (31)",
  "Real Estate (31)",
  "Government (24)",
  "Business and Finance (22)",
  "Education (16)",
];

export default function OurWorkSection() {
  const dispatch = useDispatch();
  const [active, setActive] = useState("All");
  const [open, setOpen] = useState(false);

  const { works = [], loading } = useSelector((state) => state.ourWork);

  useEffect(() => {
    dispatch(getAllOurWork());
  }, [dispatch]);

  const filteredWorks = useMemo(() => {
    if (active === "All") return works;
    return works.filter((item) => item.category === active);
  }, [active, works]);

  return (
    <MainLayout className="relative py-30 text-white bg-black bg-[radial-gradient(#222_1px,transparent_1px)]">
      <div className="px-6 md:px-20">
        <p className="mb-2 text-sm flex items-center font-semibold gap-3">
          <span className="text-purple-500">●</span>
          <span>Our Work</span>
        </p>
        <div className="flex gap-8 text-gray-500 mb-10 overflow-x-auto">
          {categories?.map((item) => (
            <button
              key={item}
              onClick={() => setActive(item)}
              className={`whitespace-nowrap ${
                active === item ? "text-white" : ""
              }`}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="relative w-72 mb-12">
          <button
            onClick={() => setOpen(!open)}
            className="w-full flex justify-between items-center px-5 py-2 text-xs rounded-full border border-purple-500"
          >
            Explore All Industries
            <ChevronDown size={18} />
          </button>

          {open && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute z-20 mt-2 w-full overflow-hidden backdrop-blur bg-white/10"
            >
              {industries.map((item) => (
                <div
                  key={item}
                  className="px-4 py-3 text-white text-xs hover:bg-white hover:text-black cursor-pointer"
                >
                  {item}
                </div>
              ))}
            </motion.div>
          )}
        </div>
        <div className="grid md:grid-cols-2 gap-10">
          {loading && <p>Loading...</p>}
          {!loading && filteredWorks.length === 0 && <p>No projects found.</p>}
          {filteredWorks?.map((project) => (
            <motion.div
              key={project._id}
              whileHover={{ scale: 1.02 }}
              className="group"
            >
              <div className="relative rounded-3xl overflow-hidden h-[420px]">
                <CustomImage
                  src={project.ourWorkImage}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex items-center justify-between mt-5">
                <div>
                  <h3 className="text-2xl mb-2">{project.title}</h3>

                  <div className="flex gap-3 text-sm text-gray-400 flex-wrap">
                    {project.services?.map((service, i) => (
                      <span key={i}>
                        <span className="text-purple-500">●</span> {service}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
