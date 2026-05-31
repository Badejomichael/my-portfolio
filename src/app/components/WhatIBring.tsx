"use client";

import { motion } from "framer-motion";
import { TbBolt, TbCode, TbCube, TbDeviceMobile } from "react-icons/tb";

const rise = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

const VALUES = [
  {
    icon: <TbBolt size={22} />,
    title: "Performance Engineering",
    desc: "I do not ship slow. Every project I touch is optimized for real-world speed, from bundle size to interaction latency. Fast is a feature.",
  },
  {
    icon: <TbCode size={22} />,
    title: "Clean, Scalable Code",
    desc: "I write code that other engineers can read, extend and trust. Reusable components, clear architecture and no shortcuts that haunt the team later.",
  },
  {
    icon: <TbCube size={22} />,
    title: "Web3 Native Thinking",
    desc: "I understand blockchain UX from the ground up. Wallet flows, on-chain interactions and decentralized interfaces feel native to me, not bolted on.",
  },
  {
    icon: <TbDeviceMobile size={22} />,
    title: "Mobile-First Always",
    desc: "Every interface I build starts from the smallest screen. Responsive is not an afterthought, it is the foundation everything else is built on.",
  },
];

const PAD = "max(24px, calc((100vw - 1200px) / 2 + 24px))";

export default function WhatIBring() {
  return (
    <section
      id="whatibring"
      className="section-pad relative w-full overflow-hidden"
    >
      {/* Glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-0 w-[600px] h-[300px] rounded-full"
        style={{
          background: "radial-gradient(ellipse, rgba(255,77,109,0.06) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="relative z-10 w-full" style={{ padding: `0 ${PAD}` }}>

        {/* Header */}
        <motion.div
          {...rise(0)}
          style={{ marginBottom: "56px", maxWidth: "600px" }}
        >
          <p className="eyebrow" style={{ marginBottom: "16px" }}>What I Bring</p>
          <h2 className="section-heading">
            Not just code.{" "}
            <span style={{ color: "var(--accent)" }}>A standard.</span>
          </h2>
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.75,
              color: "var(--text-secondary)",
              marginTop: "16px",
            }}
          >
            The principles I carry into every project, every team and every line
            of code I write.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          style={{ gap: "12px" }}
        >
          {VALUES.map((v, i) => (
            <motion.div
              key={v.title}
              {...rise(0.08 + i * 0.08)}
              className="card card-accent"
              style={{ padding: "28px 24px" }}
            >
              {/* Icon */}
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "10px",
                  background: "var(--accent-dim)",
                  color: "var(--accent)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "20px",
                  border: "1px solid var(--accent-border)",
                }}
              >
                {v.icon}
              </div>

              {/* Title */}
              <h3
                style={{
                  fontFamily: "var(--font-syne), sans-serif",
                  fontSize: "15px",
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  color: "var(--text-primary)",
                  lineHeight: 1.25,
                  marginBottom: "10px",
                }}
              >
                {v.title}
              </h3>

              {/* Desc */}
              <p
                style={{
                  fontSize: "13px",
                  lineHeight: 1.75,
                  color: "var(--text-muted)",
                }}
              >
                {v.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}