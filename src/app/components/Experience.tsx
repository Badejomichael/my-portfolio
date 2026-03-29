"use client";

import { motion } from "framer-motion";

export default function Experience() {
  const experience = [
    {
      company: "TheCanvas",
      role: "Frontend Developer",
      year: "2025",
      accent: "#a55bff",
      accentBg: "rgba(165,91,255,0.12)",
      accentBorder: "rgba(165,91,255,0.25)",
      accentText: "#c89dff",
      glowLine: "rgba(165,91,255,0.4)",
      desc: "Built and delivered the full frontend experience for TheCanvas NFT with advanced interactive tools and seamless Web3 integration.",
      highlights: [
        "Developed the complete production website",
        "Implemented wallet connection & Web3 interactions",
        "Built an eligibility checker system",
        "Created a custom NFT trait mixer",
      ],
      tags: ["Next.js", "RainbowKit", "Wagmi", "Framer Motion"],
    },
    {
      company: "Mysticsverse",
      role: "Frontend Developer",
      year: "2025",
      accent: "#5DE4FF",
      accentBg: "rgba(93,228,255,0.1)",
      accentBorder: "rgba(93,228,255,0.2)",
      accentText: "#5DE4FF",
      glowLine: "rgba(93,228,255,0.4)",
      desc: "Engineered a responsive platform for Mysticsverse NFT focused on performance, smooth animations, and intuitive blockchain interactions.",
      highlights: [
        "Built the full frontend architecture",
        "Implemented wallet connection & Web3 interactions",
        "Optimized UI performance and responsiveness",
      ],
      tags: ["Next.js", "TypeScript", "Web3 UX", "Tailwind CSS"],
    },
  ];

  return (
    <section 
    className="w-full px-6 md:px-20 lg:px-40 py-20"
    id="experience">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-white text-4xl md:text-5xl font-semibold">
          Experience
        </h2>
        <div className="w-24 h-[3px] bg-[#a55bff] mt-3 mx-auto rounded-full" />
      </motion.div>

      {/* Timeline */}
      <div className="relative flex flex-col">
        {/* Vertical line */}
        <div className="absolute left-[27px] top-10 bottom-10 w-px bg-gradient-to-b from-transparent via-[#a55bff]/30 to-transparent hidden md:block" />

        {experience.map((exp, i) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className={`flex gap-8 ${i < experience.length - 1 ? "pb-12" : ""}`}
          >
            {/* Dot */}
            <div className="hidden md:flex flex-col items-center w-14 flex-shrink-0">
              <div
                className="w-3.5 h-3.5 rounded-full mt-6 z-10 flex-shrink-0"
                style={{
                  background: exp.accent,
                  boxShadow: `0 0 0 4px ${exp.accentBg}`,
                }}
              />
            </div>

            {/* Card */}
            <div
              className="flex-1 rounded-2xl p-7 border relative overflow-hidden
                         bg-white/[0.03] hover:border-white/15 transition-colors duration-300"
              style={{ borderColor: "rgba(255,255,255,0.08)" }}
            >
              {/* Top shimmer */}
              <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{
                  background: `linear-gradient(90deg, transparent, ${exp.glowLine}, transparent)`,
                }}
              />

              {/* Header */}
              <div className="flex items-start justify-between flex-wrap gap-3 mb-4">
                <div>
                  <h3 className="text-white text-xl font-semibold tracking-tight">
                    {exp.company}
                  </h3>
                  <p className="text-gray-600 text-xs mt-0.5">{exp.year}</p>
                </div>
                <span
                  className="text-xs font-medium px-3 py-1.5 rounded-full border"
                  style={{
                    background: exp.accentBg,
                    color: exp.accentText,
                    borderColor: exp.accentBorder,
                  }}
                >
                  {exp.role}
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed mb-5">
                {exp.desc}
              </p>

              {/* Highlights */}
              <ul className="space-y-2 mb-5">
                {exp.highlights.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-gray-300">
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: exp.accent }}
                    />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Tags */}
              <div
                className="flex flex-wrap gap-2 pt-4"
                style={{ borderTop: "0.5px solid rgba(255,255,255,0.06)" }}
              >
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] px-2.5 py-1 rounded-full bg-white/5 text-gray-500 border border-white/[0.08]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}