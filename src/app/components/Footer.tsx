"use client";

import { motion } from "framer-motion";
import { FaGithub, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-10 pb-10 pt-16 relative">
      {/* Top glowing line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#5DE4FF]/20 to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center text-center"
      >
        {/* Name */}
        <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">
          Michael
        </h3>

        {/* Subtitle */}
        <p className="mt-2 text-sm text-gray-400">
          Creative Frontend Developer
        </p>

        {/* Socials */}
        <div className="flex items-center gap-6 mt-6 text-xl">
          <a
            href="https://github.com/Badejomichael"
            target="_blank"
            className="text-gray-400 hover:text-[#5DE4FF] transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://x.com/therepublikan_"
            target="_blank"
            className="text-gray-400 hover:text-[#B57BFF] transition"
          >
            <FaTwitter />
          </a>
        </div>

        {/* Bottom text */}
        <p className="mt-8 text-xs text-gray-500">
          © {new Date().getFullYear()} Michael. All rights reserved.
        </p>
      </motion.div>

      {/* Bottom glowing line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#B57BFF]/20 to-transparent" />
    </footer>
  );
}
