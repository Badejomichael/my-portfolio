"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeUp } from "./MotionDiv";
import { FaGithub, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiArrowRight } from "react-icons/hi";


type SendStatus = "idle" | "sending" | "success" | "error";

const PAD = "max(24px, calc((100vw - 1200px) / 2 + 24px))";

const inputStyle = {
  width: "100%",
  padding: "12px 16px",
  borderRadius: "8px",
  border: "1px solid var(--border-mid)",
  background: "var(--surface)",
  color: "var(--text-primary)",
  fontFamily: "var(--font-inter), sans-serif",
  fontSize: "14px",
  outline: "none",
  transition: "border-color 0.2s ease",
};

const labelStyle = {
  fontFamily: "var(--font-mono), monospace",
  fontSize: "11px",
  letterSpacing: "0.12em",
  textTransform: "uppercase" as const,
  color: "var(--text-muted)",
  marginBottom: "8px",
  display: "block",
};

export default function Contact() {
  const [status, setStatus] = useState<SendStatus>("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    try {
      setStatus("sending");
      const data = new FormData(form);
      const payload = {
        name: data.get("name"),
        email: data.get("email"),
        message: data.get("message"),
      };
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Failed");
      form.reset();
      setStatus("success");
      setTimeout(() => setStatus("idle"), 4000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <section id="contact" className="section-pad relative w-full overflow-hidden">
      {/* Glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-0 w-[500px] h-[300px] rounded-full"
        style={{
          background: "radial-gradient(ellipse, rgba(255,77,109,0.07) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="relative z-10 w-full" style={{ padding: `0 ${PAD}` }}>

        {/* Header */}
        <FadeUp delay={0} style={{ marginBottom: "56px" }}>
          <p className="eyebrow" style={{ marginBottom: "16px" }}>Contact</p>
          <h2 className="section-heading">
            Let us build
            <br />
            <span style={{ color: "var(--accent)" }}>something great.</span>
          </h2>
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.75,
              color: "var(--text-secondary)",
              marginTop: "16px",
              maxWidth: "440px",
            }}
          >
            Open to new opportunities, collaborations and interesting problems
            to solve. Drop a message and I will get back to you.
          </p>
        </FadeUp>

        {/* Grid */}
        <div
          className="grid grid-cols-1 lg:grid-cols-2"
          style={{ gap: "clamp(40px, 6vw, 80px)", alignItems: "start" }}
        >
          {/* LEFT — Form */}
          <FadeUp delay={0.1}>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col"
              style={{ gap: "20px" }}
            >
              {/* Name */}
              <div>
                <label htmlFor="name" style={labelStyle}>Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  style={inputStyle}
                  onFocus={e => (e.currentTarget.style.borderColor = "var(--accent)")}
                  onBlur={e => (e.currentTarget.style.borderColor = "var(--border-mid)")}
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" style={labelStyle}>Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="your@email.com"
                  style={inputStyle}
                  onFocus={e => (e.currentTarget.style.borderColor = "var(--accent)")}
                  onBlur={e => (e.currentTarget.style.borderColor = "var(--border-mid)")}
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" style={labelStyle}>Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Tell me about your project..."
                  style={{ ...inputStyle, resize: "none" }}
                  onFocus={e => (e.currentTarget.style.borderColor = "var(--accent)")}
                  onBlur={e => (e.currentTarget.style.borderColor = "var(--border-mid)")}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "sending"}
                className="btn-primary"
                style={{
                  width: "100%",
                  justifyContent: "center",
                  opacity: status === "sending" ? 0.7 : 1,
                  cursor: status === "sending" ? "not-allowed" : "pointer",
                }}
              >
                {status === "sending" ? "Sending..." : "Send Message"}
                {status !== "sending" && <HiArrowRight size={15} />}
              </button>

              {/* Status messages */}
              <AnimatePresence>
                {status === "success" && (
                  <motion.p
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    style={{
                      fontFamily: "var(--font-mono), monospace",
                      fontSize: "12px",
                      color: "#22c55e",
                      textAlign: "center",
                      letterSpacing: "0.04em",
                    }}
                  >
                    Message sent. I will be in touch soon.
                  </motion.p>
                )}
                {status === "error" && (
                  <motion.p
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    style={{
                      fontFamily: "var(--font-mono), monospace",
                      fontSize: "12px",
                      color: "var(--accent)",
                      textAlign: "center",
                      letterSpacing: "0.04em",
                    }}
                  >
                    Something went wrong. Please try again.
                  </motion.p>
                )}
              </AnimatePresence>
            </form>
          </FadeUp>

          {/* RIGHT — Info */}
          <FadeUp delay={0.18}
            className="flex flex-col"
            style={{ gap: "32px" }}
          >
            {/* Direct contact */}
            <div className="flex flex-col" style={{ gap: "16px" }}>
              <p
                style={{
                  fontFamily: "var(--font-mono), monospace",
                  fontSize: "11px",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--text-muted)",
                }}
              >
                Direct Contact
              </p>

              <a
                href="mailto:thecodermikel@gmail.com"
                style={{
                  fontFamily: "var(--font-syne), sans-serif",
                  fontSize: "clamp(16px, 2vw, 20px)",
                  fontWeight: 600,
                  color: "var(--text-primary)",
                  letterSpacing: "-0.02em",
                  transition: "color 0.2s",
                }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--text-primary)")}
              >
                thecodermikel@gmail.com
              </a>

              <a
                href="https://wa.me/+2349053267316"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
                style={{
                  gap: "10px",
                  fontFamily: "var(--font-syne), sans-serif",
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "var(--text-secondary)",
                  transition: "color 0.2s",
                  width: "fit-content",
                }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--text-secondary)")}
              >
                <FaWhatsapp size={16} />
                Message on WhatsApp
              </a>
            </div>

            {/* Divider */}
            <div style={{ height: "1px", background: "var(--border)" }} />

            {/* Socials */}
            <div className="flex flex-col" style={{ gap: "16px" }}>
              <p
                style={{
                  fontFamily: "var(--font-mono), monospace",
                  fontSize: "11px",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--text-muted)",
                }}
              >
                Find Me Online
              </p>
              <div className="flex items-center" style={{ gap: "10px" }}>
                {[
                  { href: "https://github.com/Badejomichael", icon: <FaGithub size={16} />, label: "GitHub" },
                  { href: "https://x.com/myikhael",     icon: <FaXTwitter size={15} />, label: "X" },
                  { href: "https://wa.me/+2349053267316",      icon: <FaWhatsapp size={16} />, label: "WhatsApp" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="btn-icon"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div style={{ height: "1px", background: "var(--border)" }} />

            {/* Availability card */}
            <div
              className="card card-accent"
              style={{ padding: "20px 24px" }}
            >
              <span className="dot-live" style={{ marginBottom: "10px", display: "flex" }}>
                Available for Work
              </span>
              <p
                style={{
                  fontSize: "13px",
                  lineHeight: 1.7,
                  color: "var(--text-muted)",
                  marginTop: "8px",
                }}
              >
                Open to full-time remote roles, contract work and freelance
                collaborations. Based in Nigeria, working globally.
              </p>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}