"use client";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBlogs } from "@/app/store/slice/blog";
import CustomImage from "@/app/common/Image";
import { useRouter } from "next/navigation";

const marqueeVariants = {
  animate: {
    x: ["0%", "-50%"],
    transition: {
      repeat: Infinity,
      repeatType: "loop",
      duration: 30,
      ease: "linear",
    },
  },
};

export default function BlogSection() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { blogs } = useSelector((state) => state.blog);

  useEffect(() => {
    dispatch(getAllBlogs());
  }, [dispatch]);

  return (
    <section className="bg-[#0b0b12] py-28 overflow-hidden">
      <div className="mx-auto">
        <motion.div
          className="mb-16 px-6 md:px-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="mb-3 text-sm text-gray-400 flex gap-3 items-center">
            <span className="inline-block h-2 w-2 rounded-full bg-purple-500" />
            Our Blog
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-white md:w-[80%]">
            What’s Happening in The Industry?
          </h2>
        </motion.div>
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-8 w-max"
            variants={marqueeVariants}
            animate="animate"
          >
            {[...blogs, ...blogs].map((blog, i) => (
              <article
                key={`${blog._id}-${i}`}
                onClick={() => router.push(`/blog/${blog._id}`)}
                className="group min-w-[320px] max-w-[320px] cursor-pointer"
              >
                <div className="relative h-60 overflow-hidden rounded-2xl">
                  <CustomImage
                    src={blog.blogImage[0]}
                    alt={blog.title}
                    fill
                    sizes="320px"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <span className="rounded-full bg-white/20 backdrop-blur-lg border border-white/30 px-3 py-1 text-xs text-white shadow-lg">
                    {blog.project}
                  </span>

                  <h3 className="mb-4  mt-2 text-lg font-medium text-white leading-snug">
                    {blog.title}
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <span>By {blog.author}</span>
                    <span>•</span>
                    <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
                  </div>
                </div>
              </article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
