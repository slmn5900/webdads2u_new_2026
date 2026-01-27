"use client";
import Image from "next/image";
import { motion } from "framer-motion";
const dummyLogo = (name) => {
  const initials = name
    .split(" ")
    .map((n) => n)
    .join("")
    .slice(0, 3)
    .toUpperCase();

  return `data:image/svg+xml;utf8,
    <svg xmlns='http://www.w3.org/2000/svg' width='320' height='160'>
      <rect width='100%' height='100%' rx='16' fill='%23181818'/>
      <text x='50%' y='50%'
        dominant-baseline='middle'
        text-anchor='middle'
        font-size='48'
        font-family='Arial, Helvetica, sans-serif'
        fill='%23a855f7'
        font-weight='600'>
        ${initials}
      </text>
    </svg>`;
};

const clients = [
  { name: "Beyond", desc: "Responsive web design development" },
  { name: "GBM", desc: "Corporate digital platform" },
  { name: "SkillBridge", desc: "Learning management system" },
  { name: "Emdad", desc: "Enterprise portal" },
  { name: "MediaPro", desc: "Brand website experience" },
  { name: "Sanad", desc: "Government digital service" },
  { name: "Sharjah Investment Forum", desc: "Event platform" },
  { name: "Atmosphere Burj Khalifa", desc: "Luxury hospitality site" },
  { name: "EXA", desc: "Startup landing" },
  { name: "Terra Nexus", desc: "Web3 product UI" },
];

export default function OurClients() {
  return (
    <section className="relative overflow-hidden bg-black py-28">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)]" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-[420px] w-[420px] rounded-full bg-purple-600/30 blur-[160px]" />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mb-20 text-center">
          <div className="mb-4 flex items-center justify-center gap-2 text-sm text-gray-300">
            <span className="h-2 w-2 rounded-full bg-purple-500" />
            Our Clients
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mx-auto max-w-3xl text-4xl md:text-5xl font-medium leading-12 text-white"
          >
            The stories <br /> we designed
          </motion.h2>
        </div>
        <div className="grid grid-cols-2 gap-x-10 gap-y-16 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 px-20">
          {clients?.map((client, i) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.05,
                duration: 0.6,
              }}
              className="relative group h-[120px] flex items-center justify-center  transition"
            >
              <Image
                src={dummyLogo(client.name)}
                alt={client.name}
                width={160}
                height={80}
                className="max-h-10 w-auto opacity-70 grayscale transition-all duration-300 group-hover:-translate-y-4 group-hover:opacity-100 group-hover:grayscale-0"
              />
              <div className="absolute bottom-3 left-0 right-0 text-center opacity-0 translate-y-3 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                <p className="text-xs text-gray-400 px-4">
                  Responsive web design & development
                </p>
              </div>
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition">
                <div className="absolute inset-0 bg-purple-500/10 blur-xl" />
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-24 flex items-center justify-end gap-4 text-gray-300">
          <div className="h-10 w-10 rounded-full bg-linear-to-br from-purple-500 to-indigo-500" />
          <span className="text-sm">500+ Clients worldwide</span>
        </div>
      </div>
    </section>
  );
}
