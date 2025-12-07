"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaTwitter } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen w-full flex flex-col items-center justify-center text-center px-6 bg-black"
    >
      {/* PFP */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative w-40 h-40 md:w-48 md:h-48 md:mt-10"
      >
        {/* subtle glow ring */}
        <div className="absolute inset-0 rounded-full border border-[#5DE4FF]/20 shadow-[0_0_20px_#5DE4FF20]"></div>

        <Image
          src="/pfp.png"
          alt="profile"
          fill
          className="rounded-full object-cover"
        />
      </motion.div>

      {/* NAME */}
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mt-8 text-4xl md:text-5xl font-semibold text-white font-space-grotesk"
      >
        Michael
      </motion.h1>

      {/* ROLE */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.18 }}
        className="mt-3 text-gray-400 text-lg"
      >
        Creative Frontend Developer
      </motion.p>

      {/* SUBTEXT */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.25 }}
        className="mt-4 max-w-lg text-gray-500 text-sm md:text-base leading-relaxed"
      >
        I build sleek, animated, and clean user interfaces with a strong focus on
        performance, modern design, and seamless user experience.
      </motion.p>

      {/* BUTTONS */}
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.32 }}
        className="mt-6 flex gap-4"
        >
        {/* Primary Button (Hire Me) */}
        <a
            href="#contact"
            className="
            px-6 py-3 rounded-xl font-medium text-black
            bg-gradient-to-r from-[#FF8AE2] via-[#5DE4FF] to-[#FFE45E]
            shadow-[0_0_25px_rgba(255,138,226,0.35)]
            hover:shadow-[0_0_35px_rgba(255,138,226,0.45)]
            hover:scale-[1.05]
            transition-all duration-300
            "

        >
            Hire Me
        </a>

        {/* Secondary Button (Projects) */}
        <a
            href="#projects"
            className="
            px-6 py-3 rounded-xl font-medium text-white
            border border-white/10
            bg-[#111]/60 backdrop-blur-xl
            hover:border-[#5DE4FF]
            hover:text-[#5DE4FF]
            hover:scale-[1.03]
            transition-all duration-300
            "
        >
            Projects
        </a>
        </motion.div>


      {/* SOCIALS */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-8 flex gap-6 text-xl text-gray-500"
      >
        <a href="https://github.com/Badejomichael/" className="hover:text-[#5DE4FF] transition"><FaGithub /></a>
        <a href="https://x.com/therepublikan_" className="hover:text-[#B57BFF] transition"><FaTwitter /></a>
      </motion.div>
    </section>
  );
}
