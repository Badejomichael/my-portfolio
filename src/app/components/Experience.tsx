"use client";

import { FadeUp } from "./MotionDiv";

const EXPERIENCE = [
  {
    period: "2025 — Present",
    company: "TheCanvas & Mysticsverse",
    role: "Lead Frontend Engineer",
    contract: true,
    desc: "Architected and shipped high-traffic NFT infrastructure serving thousands of concurrent users globally on the Monad network, owning the frontend end-to-end from design system to production deployment.",
    highlights: [
      "Built a custom real-time validation engine using Wagmi and RainbowKit for wallet eligibility and minting permissions, achieving zero downtime under peak load.",
      "Engineered an interactive NFT Trait Mixer with complex dynamic state management, enabling instant preview of thousands of asset combinations with zero perceptible latency.",
      "Optimized frontend performance for mobile-first environments, improving accessibility scores and reducing interaction friction across all decentralized applications.",
      "Collaborated directly with stakeholders to translate branding and technical requirements into scalable production-ready component systems.",
    ],
    tags: ["Next.js", "TypeScript", "React", "RainbowKit", "Wagmi", "Framer Motion", "Tailwind CSS"],
  },
];

const PAD = "max(24px, calc((100vw - 1200px) / 2 + 24px))";

export default function Experience() {
  return (
    <section id="experience" className="section-pad relative w-full overflow-hidden">
      {/* Glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 bottom-1/4 w-[380px] h-[380px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(255,77,109,0.05) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="relative z-10 w-full" style={{ padding: `0 ${PAD}` }}>

        {/* Header */}
        <FadeUp delay={0}  style={{ marginBottom: "56px" }}>
          <p className="eyebrow" style={{ marginBottom: "16px" }}>Experience</p>
          <h2 className="section-heading">
            Where I have{" "}
            <span style={{ color: "var(--accent)" }}>built.</span>
          </h2>
        </FadeUp>

        {/* Experience list */}
        <div className="flex flex-col" style={{ gap: "0" }}>
          {EXPERIENCE.map((exp, i) => (
            <FadeUp
              key={exp.company}
              delay={(0.1 + i * 0.1)}
              style={{
                display: "grid",
                gridTemplateColumns: "180px 1fr",
                gap: "clamp(24px, 4vw, 56px)",
                padding: "40px 0",
                borderBottom: "1px solid var(--border)",
              }}
              className="exp-row"
            >
              {/* Left — period */}
              <div className="flex flex-col" style={{ gap: "8px", paddingTop: "4px" }}>
                <span
                  style={{
                    fontFamily: "var(--font-mono), monospace",
                    fontSize: "11px",
                    color: "var(--text-muted)",
                    letterSpacing: "0.06em",
                    lineHeight: 1.5,
                  }}
                >
                  {exp.period}
                </span>
                {exp.contract && (
                  <span className="tag" style={{ width: "fit-content" }}>
                    Contract
                  </span>
                )}
              </div>

              {/* Right — content */}
              <div className="flex flex-col" style={{ gap: "16px" }}>
                {/* Company + role */}
                <div className="flex flex-col" style={{ gap: "8px" }}>
                  <h3
                    style={{
                      fontFamily: "var(--font-syne), sans-serif",
                      fontSize: "clamp(18px, 2.5vw, 24px)",
                      fontWeight: 700,
                      letterSpacing: "-0.02em",
                      color: "var(--text-primary)",
                      lineHeight: 1.1,
                    }}
                  >
                    {exp.company}
                  </h3>
                  <span className="tag-accent tag" style={{ width: "fit-content" }}>
                    {exp.role}
                  </span>
                </div>

                {/* Description */}
                <p style={{ fontSize: "14px", lineHeight: 1.8, color: "var(--text-secondary)" }}>
                  {exp.desc}
                </p>

                {/* Highlights */}
                <ul className="flex flex-col" style={{ gap: "10px", listStyle: "none" }}>
                  {exp.highlights.map((point, pi) => (
                    <li
                      key={pi}
                      className="flex"
                      style={{ gap: "12px", alignItems: "flex-start" }}
                    >
                      <span
                        style={{
                          color: "var(--accent)",
                          fontSize: "14px",
                          flexShrink: 0,
                          marginTop: "3px",
                          lineHeight: 1,
                        }}
                      >
                        →
                      </span>
                      <span
                        style={{
                          fontSize: "14px",
                          lineHeight: 1.75,
                          color: "var(--text-secondary)",
                        }}
                      >
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap" style={{ gap: "6px", marginTop: "4px" }}>
                  {exp.tags.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}