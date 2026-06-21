"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiArrowRight } from "react-icons/hi";

const rise = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
});

const pop = (delay = 0) => ({
  initial: { opacity: 0, scale: 0.92 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.55, delay, ease: "easeOut" as const },
});

const PAD = "max(24px, calc((100vw - 1200px) / 2 + 24px))";


export default function Hero() {
  return (
    <section id="hero" className="relative w-full min-h-screen flex flex-col overflow-hidden" style={{ paddingTop: "80px" }}>

      {/* Grid bg */}
      <div aria-hidden className="pointer-events-none absolute inset-0" style={{
        backgroundImage: `linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)`,
        backgroundSize: "64px 64px",
        maskImage: "radial-gradient(ellipse 75% 65% at 65% 40%, black, transparent)",
        WebkitMaskImage: "radial-gradient(ellipse 75% 65% at 65% 40%, black, transparent)",
      }} />

      {/* Glow blobs */}
      <div aria-hidden className="pointer-events-none absolute -top-24 right-0 w-[480px] h-[480px] rounded-full" style={{ background: "radial-gradient(circle, rgba(255,77,109,0.08) 0%, transparent 70%)", filter: "blur(48px)" }} />
      <div aria-hidden className="pointer-events-none absolute bottom-0 left-0 w-[360px] h-[360px] rounded-full" style={{ background: "radial-gradient(circle, rgba(255,77,109,0.05) 0%, transparent 70%)", filter: "blur(64px)" }} />

      {/* Main */}
      <div className="relative z-10 flex-1 flex items-center" style={{ padding: `0 ${PAD}` }}>
        <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-14 lg:gap-20 pt-10 lg:pt-0">

          {/* LEFT */}
          <div className="flex flex-col gap-6 max-w-xl w-full subtle-hero-michael">

            <motion.p {...rise(0.18)} style={{ fontFamily: "var(--font-mono), monospace", fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--text-muted)" }}>
              Michael
            </motion.p>

            <motion.h1 {...rise(0.24)} style={{ fontFamily: "var(--font-syne), sans-serif", fontSize: "clamp(45px, 8.5vw, 70px)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 0.95, color: "var(--text-primary)" }}>
              Frontend<br />
              <span style={{ color: "var(--accent)" }}>Engineer</span>
              <span style={{ color: "var(--text-primary)" }}>.</span>
            </motion.h1>

            <motion.p
              {...rise(0.32)}
              style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--text-secondary)", maxWidth: "400px" }}
            >
              I build the frontend layer that makes products feel{" "}
              <span style={{ color: "var(--text-primary)", fontWeight: 600 }}>
                world-class.
              </span>{" "}
              Fast, scalable and crafted to the highest standard.
            </motion.p>

            <motion.div {...rise(0.38)} className="flex flex-wrap items-center gap-3">
              <Link href="#projects" className="btn-primary">
                View My Work <HiArrowRight size={14} />
              </Link>
              <Link href="#contact" className="btn-secondary">
                Contact Me
              </Link>
            </motion.div>

            <motion.div {...rise(0.44)} className="flex items-center gap-2.5 flex-wrap">
              {[
                { href: "https://github.com/Badejomichael", icon: <FaGithub size={15} />,  label: "GitHub"   },
                { href: "https://x.com/myikhael",     icon: <FaXTwitter size={14} />, label: "X"        },
                { href: "https://wa.me/+2349053267316",      icon: <FaWhatsapp size={15} />, label: "WhatsApp" },
              ].map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="btn-icon">
                  {s.icon}
                </a>
              ))}
              <span className="ml-1 w-px h-4" style={{ background: "var(--border-mid)" }} />
              <span style={{ fontFamily: "var(--font-mono), monospace", fontSize: "11px", color: "var(--text-muted)" }}>
                thecodermikel@gmail.com
              </span>
            </motion.div>
          </div>

          {/* RIGHT — Photo */}
          <motion.div {...pop(0.3)} className="relative flex-shrink-0">
            <div className="absolute pointer-events-none" style={{ top: "-12px", left: "-12px", width: "44px", height: "44px", borderTop: "2px solid var(--accent)", borderLeft: "2px solid var(--accent)", borderRadius: "6px 0 0 0" }} />
            <div className="absolute pointer-events-none" style={{ bottom: "-12px", right: "-12px", width: "44px", height: "44px", borderBottom: "2px solid var(--accent)", borderRight: "2px solid var(--accent)", borderRadius: "0 0 6px 0" }} />

            <div
              className="relative overflow-hidden rounded-2xl border"
              style={{ width: "clamp(240px, 28vw, 340px)", height: "clamp(300px, 35vw, 420px)", borderColor: "var(--border-mid)", boxShadow: "var(--shadow-lg)" }}
            >
              <Image src="/pfp.png" alt="Michael — Frontend Engineer" fill priority className="object-cover object-top" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}