"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { FadeUp } from "./MotionDiv";
import { FaGithub } from "react-icons/fa";
import { HiExternalLink } from "react-icons/hi";

const PROJECTS = [
  {
    num: "01",
    title: "EarnID",
    desc: "On-chain income verification protocol for Africa's 35M+ freelancers. Mints tamper-proof income credentials as NFTs on Solana. Built for Superteam Nigeria, it includes a full dashboard with earnings management, monthly charts, PDF export and public verification with no login required.",
    tags: ["Next.js", "TypeScript", "Solana Web3.js", "Supabase", "Tailwind CSS", "Framer Motion"],
    live: "https://earnid.netlify.app",
    github: "https://github.com/Badejomichael/earnid.git",
    video: "/videos/earnid.mp4",
  },
  {
    num: "02",
    title: "Zarflow",
    desc: "Full-featured finance dashboard with role-based access control, real-time data visualization and complex state management. Features an Admin and Viewer role with zero UI leakage, interactive balance trend charts and a dynamic Insights engine.",
    tags: ["Next.js", "TypeScript", "Recharts", "React Context API", "Tailwind CSS", "Framer Motion"],
    live: "https://zarflow.netlify.app",
    github: "https://github.com/Badejomichael/zarflow.git",
    video: "/videos/zarflow.mp4",
  },
  {
    num: "03",
    title: "KalshiForge",
    desc: "Prediction market simulation platform inspired by professional trading interfaces. Features a dynamic simulation engine with real-time probability inputs, market creation flows and financial-grade UX with full cross-device responsiveness.",
    tags: ["Next.js", "TypeScript", "Recharts", "Framer Motion", "React Icons"],
    live: "https://kalshiforge.netlify.app",
    github: "https://github.com/Badejomichael/Kalshi-Forge.git",
    video: "/videos/kalshiforge.mp4",
  },
  {
    num: "04",
    title: "ClaimFlow",
    desc: "Web3 airdrop claim dApp with multi-step transaction flows, wallet connection and conditional eligibility verification. Built with robust error handling and accessible loading states across all interaction points.",
    tags: ["Next.js", "TypeScript", "Wagmi", "RainbowKit", "Framer Motion"],
    live: "https://claim-flowhq.vercel.app",
    github: "https://github.com/Badejomichael/claim-flow.git",
    video: "/videos/claimflow.mp4",
  },
  {
    num: "05",
    title: "Chef's Secret",
    desc: "A clean and elegant recipe discovery experience powered by the Spoonacular API. Browse thousands of recipes with search, dietary filters and rich detail pages built for a seamless user experience.",
    tags: ["HTML", "CSS", "Bootstrap", "JavaScript", "Spoonacular API"],
    live: "https://mikelchef-secret.netlify.app",
    github: "https://github.com/Badejomichael/chef-secret.git",
    video: "/videos/chefsecret.mp4",
  },
];

const PAD = "max(24px, calc((100vw - 1200px) / 2 + 24px))";

export default function Projects() {
  return (
    <section id="projects" className="section-pad relative w-full overflow-hidden">
      {/* Glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(255,77,109,0.05) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="relative z-10 w-full" style={{ padding: `0 ${PAD}` }}>

        {/* Header */}
        <FadeUp delay={0.1} style={{ marginBottom: "64px" }}>
          <p className="eyebrow" style={{ marginBottom: "16px" }}>Work</p>
          <h2 className="section-heading">
            Selected{" "}
            <span style={{ color: "var(--accent)" }}>projects.</span>
          </h2>
        </FadeUp>

        {/* Projects list */}
        <div className="flex flex-col" style={{ gap: "0" }}>
          {PROJECTS.map((p, i) => {
            const isEven = i % 2 === 1;
            return (
              <ProjectRow key={p.num} project={p} reverse={isEven} index={i} />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProjectRow({
  project,
  reverse,
  index,
}: {
  project: (typeof PROJECTS)[number];
  reverse: boolean;
  index: number;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.65, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
      onViewportEnter={() => videoRef.current?.play()}
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "clamp(32px, 5vw, 64px)",
        alignItems: "center",
        padding: "56px 0",
        borderBottom: "1px solid var(--border)",
        direction: reverse ? "rtl" : "ltr",
      }}
      className="project-row"
    >
      {/* Video */}
      <div style={{ direction: "ltr", position: "relative" }}>
        {/* Corner frames on video */}
        <div
          aria-hidden
          style={{
            position: "absolute", top: "-10px", left: "-10px",
            width: "32px", height: "32px",
            borderTop: "2px solid var(--accent)",
            borderLeft: "2px solid var(--accent)",
            borderRadius: "4px 0 0 0",
            zIndex: 1, pointerEvents: "none",
          }}
        />
        <div
          aria-hidden
          style={{
            position: "absolute", bottom: "-10px", right: "-10px",
            width: "32px", height: "32px",
            borderBottom: "2px solid var(--accent)",
            borderRight: "2px solid var(--accent)",
            borderRadius: "0 0 4px 0",
            zIndex: 1, pointerEvents: "none",
          }}
        />

        <div
          className="relative overflow-hidden rounded-xl border"
          style={{
            aspectRatio: "16/9",
            borderColor: "var(--border-mid)",
            boxShadow: "var(--shadow-lg)",
            background: "var(--bg-card)",
          }}
        >
          <video
            ref={videoRef}
            src={project.video}
            muted
            loop
            playsInline
            preload="metadata"
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
        </div>
      </div>

      {/* Text */}
      <div style={{ direction: "ltr", display: "flex", flexDirection: "column", gap: "20px" }}>
        <span
          style={{
            fontFamily: "var(--font-mono), monospace",
            fontSize: "11px",
            letterSpacing: "0.16em",
            color: "var(--text-muted)",
          }}
        >
          {project.num}
        </span>

        <h3
          style={{
            fontFamily: "var(--font-syne), sans-serif",
            fontSize: "clamp(22px, 3vw, 32px)",
            fontWeight: 700,
            letterSpacing: "-0.03em",
            color: "var(--text-primary)",
            lineHeight: 1.1,
          }}
        >
          {project.title}
        </h3>

        <p
          style={{
            fontSize: "14px",
            lineHeight: 1.8,
            color: "var(--text-secondary)",
          }}
        >
          {project.desc}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap" style={{ gap: "6px" }}>
          {project.tags.map((t) => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center" style={{ gap: "20px" }}>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
            style={{
              gap: "6px",
              fontFamily: "var(--font-syne), sans-serif",
              fontSize: "13px",
              fontWeight: 600,
              color: "var(--accent)",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.opacity = "0.7"}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.opacity = "1"}
          >
            <HiExternalLink size={15} />
            Live Site
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
            style={{
              gap: "6px",
              fontFamily: "var(--font-syne), sans-serif",
              fontSize: "13px",
              fontWeight: 600,
              color: "var(--text-muted)",
              transition: "color 0.2s",
            }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "var(--text-primary)"}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "var(--text-muted)"}
          >
            <FaGithub size={14} />
            GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
}