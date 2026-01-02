"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaReact, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiTypescript } from "react-icons/si";
import { PiRainbowBold } from "react-icons/pi";
import { TbBrandFramerMotion } from "react-icons/tb";

export default function About() {
  return (
    <section
      id="about"
      className="w-full flex flex-col items-center justify-center py-15 md:py-20"
    >
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <h2 className="text-white text-4xl md:text-5xl font-semibold">
          About Me
        </h2>
        <div className="w-24 h-[3px] bg-[#a55bff] mt-3 mx-auto rounded-full" />
      </motion.div>

      {/* About Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="
          max-w-3xl w-full
          bg-[#111]/60 backdrop-blur-xl
          border border-white/10
          rounded-2xl
          p-8 md:p-10
          shadow-[0_0_20px_rgba(0,0,0,0.5)]
        "
      >
        {/* PFP */}
        <div className="flex justify-center mb-6">
          <div className="w-28 h-28 rounded-full overflow-hidden border border-white/10 shadow-lg">
            <Image
              src="/pfp.png"
              alt="Avatar"
              width={200}
              height={200}
              className="object-cover"
            />
          </div>
        </div>

        {/* Text */}
        <p className="text-gray-300 leading-relaxed text-lg text-center">
          I’m <span className="text-white font-medium">Michael</span>, a
          frontend developer passionate about building immersive, modern, and
          visually strong interfaces.  
          I focus on clean execution, subtle animations, and premium UI
          aesthetics using tools like React, Next.js, Tailwind, and Framer Motion.
          <br />
          <br />
          I also build Web3-focused frontends using RainbowKit for clean wallet
          connections and smooth user experiences.
        </p>
      </motion.div>

      {/* Skills */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
      >
        <Skill icon={<FaReact size={28} />} label="React" />
        <Skill icon={<SiNextdotjs size={28} />} label="Next.js" />
        <Skill icon={<SiTypescript size={28} />} label="TypeScript" />
        <Skill icon={<SiTailwindcss size={28} />} label="Tailwind CSS" />
        <Skill icon={<FaHtml5 size={28} />} label="HTML" />
        <Skill icon={<FaCss3Alt size={28} />} label="CSS" />
        <Skill icon={<PiRainbowBold size={28} />} label="RainbowKit" />
        <Skill icon={<TbBrandFramerMotion size={28} />} label="Framer Motion" />
      </motion.div>
    </section>
  );
}

function Skill({ icon, label }: { icon: any; label: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.07 }}
      className="
        flex flex-col items-center justify-center
        bg-[#111]/50 backdrop-blur-xl
        border border-white/10
        px-4 py-6 rounded-xl
        shadow-[0_0_12px_rgba(0,0,0,0.4)]
        text-gray-200
        cursor-default
      "
    >
      <div className="text-[#a55bff] mb-2">{icon}</div>
      <span className="text-sm font-medium">{label}</span>
    </motion.div>
  );
}
