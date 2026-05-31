"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { TbFileCv } from "react-icons/tb";

export default function ResumeDownloadButton() {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.a
      href="/Michael_FrontendEngineer_Resume.pdf"
      download
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label="Download Resume"
      className="fixed bottom-6 left-6 z-50 flex items-center overflow-hidden"
      style={{
        height: "42px",
        borderRadius: "8px",
        background: "var(--bg-card)",
        border: "1px solid var(--border-mid)",
        boxShadow: "var(--shadow-lg)",
        textDecoration: "none",
        cursor: "pointer",
        transition: "border-color 0.25s ease, box-shadow 0.25s ease",
        ...(hovered && {
          borderColor: "var(--accent-border)",
          boxShadow: `var(--shadow-lg), 0 0 20px var(--accent-glow)`,
        }),
      }}
    >
      {/* Icon */}
      <div
        style={{
          width: "42px",
          height: "42px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          color: hovered ? "var(--accent)" : "var(--text-muted)",
          transition: "color 0.25s ease",
        }}
      >
        <TbFileCv size={18} />
      </div>

      {/* Expanding label */}
      <AnimatePresence>
        {hovered && (
          <motion.span
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "auto", opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: "var(--font-mono), monospace",
              fontSize: "11px",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--accent)",
              whiteSpace: "nowrap",
              paddingRight: "14px",
              overflow: "hidden",
              display: "block",
            }}
          >
            Resume
          </motion.span>
        )}
      </AnimatePresence>
    </motion.a>
  );
}