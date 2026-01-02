"use client";

import { motion } from "framer-motion";
import { HiOutlineDocumentArrowDown } from "react-icons/hi2";

export default function ResumeDownloadButton() {
  return (
    <motion.a
      href="/resume.pdf"
      download
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="
        fixed bottom-6 left-6 z-50
        group
      "
      aria-label="Download Resume"
    >

      <div
        className="
          w-14 h-14
          flex items-center justify-center
          rounded-2xl
          backdrop-blur-xl
          bg-[#111]/70
          border border-white/10
          shadow-[0_0_20px_rgba(93,228,255,0.25)]
          hover:shadow-[0_0_30px_rgba(181,123,255,0.35)]
          transition-all duration-300
        "
      >
        <HiOutlineDocumentArrowDown
          size={26}
          className="
            text-[#5DE4FF]
            group-hover:text-[#B57BFF]
            transition-colors duration-300
          "
        />
      </div>

      {/* TOOLTIP */}
      <span
        className="
          pointer-events-none
          absolute left-full bottom-1/2 translate-y-1/2 ml-4
          whitespace-nowrap
          px-3 py-1.5 text-sm
          rounded-lg
          bg-[#111]/80 backdrop-blur-md
          border border-white/10
          text-gray-200
          opacity-0 scale-95
          group-hover:opacity-100 group-hover:scale-100
          transition-all duration-300
          shadow-lg
        "
      >
        Download Resume
      </span>
    </motion.a>
  );
}
