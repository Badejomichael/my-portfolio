"use client";

import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useRef } from "react";

/* ================================
   PROJECTS
================================ */
export default function Projects() {
  const projects = [
    {
      video: "/project1.mp4",
      title: "KalshiForge – Prediction Market Creator",
      desc: "A future-concept simulation inspired by Kalshi where users build custom prediction markets with financial-grade UX and smooth state transitions.",
      tags: ["Next.js", "TypeScript", "Framer Motion", "Recharts"],
      live: "https://kalshiforge.netlify.app",
      github: "https://github.com/Badejomichael/Kalshi-Forge.git",
    },
    {
      video: "/project2.mp4",
      title: "MicroKalshi – Event Market Dashboard",
      desc: "A real-time animated market dashboard inspired by Kalshi with clean hierarchy and smooth transitions.",
      tags: ["Next.js", "TypeScript", "Framer Motion"],
      live: "https://micro-kalshi.vercel.app",
      github: "https://github.com/Badejomichael/MicroKalshi",
    },
    {
      video: "/project3.mp4",
      title: "ClaimFlow – Mock Airdrop dApp",
      desc: "A Web3-focused, animated claim interface using RainbowKit + Wagmi.",
      tags: ["Next.js", "RainbowKit", "Wagmi", "Web3 UX"],
      live: "https://claim-flowhq.vercel.app",
      github: "https://github.com/Badejomichael/claim-flow.git",
    },
    {
      video: "/project4.mp4",
      title: "Weather Dashboard",
      desc: "Live weather data UI with a clean, responsive interface.",
      tags: ["React", "API"],
      live: "https://mikel-weather-web-app.netlify.app",
      github: "https://github.com/Badejomichael/weather-webapp",
    },
    {
      video: "/project5.mp4",
      title: "Chef’s Secret – Recipe Explorer",
      desc: "A clean recipe browsing experience powered by Spoonacular API.",
      tags: ["HTML", "CSS", "Bootstrap", "JavaScript"],
      live: "https://mikelchef-secret.netlify.app/",
      github: "https://github.com/Badejomichael/chef-secret.git",
    },
  ];

  return (
    <section
      id="projects"
      className="w-full px-6 md:px-20 lg:px-40 py-20 relative"
    >
      {/* Vertical timeline */}
      <div className="hidden lg:block absolute left-8 top-40 bottom-20 w-px bg-gradient-to-b from-transparent via-[#5DE4FF]/30 to-transparent" />

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="text-white text-4xl md:text-5xl font-semibold">
          Projects
        </h2>
        <div className="w-24 h-[3px] bg-[#5DE4FF] mt-3 mx-auto rounded-full" />
      </motion.div>

      <div className="flex flex-col gap-24 md:gap-32">
        {projects.map((p, i) => {
          const videoRef = useRef<HTMLVideoElement | null>(null);

          return (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.55, delay: i * 0.05 }}
              onViewportEnter={() => videoRef.current?.play()}
              className="relative"
            >
              {/* Project Number */}
              <div className="hidden lg:flex absolute -left-16 top-0 text-[#5DE4FF]/60 text-xl font-semibold select-none">
                {String(i + 1).padStart(2, "0")}
              </div>

              <div className="flex flex-col lg:flex-row-reverse gap-14 lg:gap-20 items-start lg:items-center group">
                {/* VIDEO */}
                <div className="relative w-full lg:w-[650px]">
                  {/* Glow */}
                  <div className="absolute inset-0 blur-3xl bg-[#5DE4FF]/10 opacity-40 group-hover:opacity-60 transition-all duration-500" />

                  <video
                    ref={videoRef}
                    src={p.video}
                    muted
                    loop
                    playsInline
                    autoPlay
                    preload="metadata"
                    className="
                      relative rounded-xl w-full
                      shadow-[0_0_50px_rgba(0,0,0,0.4)]
                      group-hover:scale-[1.015]
                      transition-all duration-500 ease-[cubic-bezier(.4,0,.2,1)]
                    "
                  />
                </div>

                {/* TEXT */}
                <div className="w-full md:w-[500px]">
                  <h3 className="text-white text-3xl font-semibold tracking-tight">
                    {p.title}
                  </h3>

                  <p className="text-gray-300 mt-4 leading-relaxed">
                    {p.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-5">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 text-xs rounded-full bg-[#a55bff]/15 text-[#e6d2ff]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-6 mt-6">
                    <a
                      href={p.live}
                      target="_blank"
                      className="flex items-center gap-2 text-[#5DE4FF] hover:underline"
                    >
                      <FaExternalLinkAlt /> Live
                    </a>
                    <a
                      href={p.github}
                      target="_blank"
                      className="flex items-center gap-2 text-gray-300 hover:text-white"
                    >
                      <FaGithub /> GitHub
                    </a>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="mt-16 h-px bg-gradient-to-r from-transparent via-[#5DE4FF]/15 to-transparent" />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
