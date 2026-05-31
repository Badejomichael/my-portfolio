"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BsSun, BsMoon } from "react-icons/bs";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { useTheme } from "./ThemeProvider";

const LINKS = [
  { label: "About",      href: "#about",      num: "01" },
  { label: "Work",       href: "#projects",   num: "02" },
  { label: "Experience", href: "#experience", num: "03" },
  { label: "Contact",    href: "#contact",    num: "04" },
];

export default function Navbar() {
  const [open, setOpen]         = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggle }       = useTheme();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50"
        style={{ width: "min(92%, 1100px)" }}
      >
        <div
          className="flex items-center justify-between rounded-2xl border backdrop-blur-xl transition-all duration-300"
          style={{
            height: scrolled ? "54px" : "62px",
            padding: "0 24px",
            background: "var(--nav-bg)",
            borderColor: scrolled ? "var(--border-mid)" : "var(--border)",
            boxShadow: scrolled ? "var(--shadow-lg)" : "var(--shadow)",
          }}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group" style={{ flexShrink: 0 }}>
            <span style={{
              fontFamily: "var(--font-syne), sans-serif",
              fontSize: "17px",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "var(--text-primary)",
            }}>
              Michael
            </span>
            <span
              className="w-1.5 h-1.5 rounded-full transition-transform duration-300 group-hover:scale-[2]"
              style={{ background: "var(--accent)" }}
            />
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center list-none" style={{ gap: "32px" }}>
            {LINKS.map((l) => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  className="relative group"
                  style={{
                    fontFamily: "var(--font-mono), monospace",
                    fontSize: "11px",
                    fontWeight: 400,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--text-muted)",
                    textDecoration: "none",
                  }}
                >
                  <span
                    style={{ transition: "color 0.2s ease" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "var(--text-primary)")}
                    onMouseLeave={e => (e.currentTarget.style.color = "var(--text-muted)")}
                  >
                    {l.label}
                  </span>
                  <span
                    className="absolute -bottom-0.5 left-0 h-px w-0 group-hover:w-full transition-all duration-300"
                    style={{ background: "var(--accent)" }}
                  />
                </Link>
              </li>
            ))}
          </ul>

          {/* Right controls */}
          <div className="flex items-center gap-2" style={{ flexShrink: 0 }}>
            <button onClick={toggle} aria-label="Toggle theme" className="btn-icon">
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={theme}
                  initial={{ opacity: 0, rotate: -20, scale: 0.8 }}
                  animate={{ opacity: 1, rotate: 0,   scale: 1   }}
                  exit={{    opacity: 0, rotate:  20, scale: 0.8 }}
                  transition={{ duration: 0.18 }}
                  style={{ display: "flex" }}
                >
                  {theme === "dark" ? <BsSun size={14} /> : <BsMoon size={14} />}
                </motion.span>
              </AnimatePresence>
            </button>

            {/* Hire Me — desktop only */}
            <Link
              href="#contact"
              className="btn-primary"
              style={{ padding: "9px 20px", fontSize: "13px", display: "none" }}
              id="hire-me-desktop"
            >
              Hire Me
            </Link>
            <style>{`
              @media (min-width: 768px) { #hire-me-desktop { display: inline-flex !important; } }
            `}</style>

            {/* Hamburger */}
            <button
              onClick={() => setOpen(!open)}
              aria-label={open ? "Close menu" : "Open menu"}
              className="menu-icon btn-icon md:hidden"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={open ? "x" : "m"}
                  initial={{ opacity: 0, rotate: -15 }}
                  animate={{ opacity: 1, rotate: 0   }}
                  exit={{    opacity: 0, rotate:  15 }}
                  transition={{ duration: 0.15 }}
                  style={{ display: "flex" }}
                >
                  {open ? <HiOutlineX size={17} /> : <HiOutlineMenuAlt3 size={17} />}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
        </div>

        {/* ── MOBILE DRAWER ── */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.97 }}
              animate={{ opacity: 1, y: 8,   scale: 1     }}
              exit={{    opacity: 0, y: -10, scale: 0.97  }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="md:hidden rounded-2xl border overflow-hidden"
              style={{
                background: "var(--nav-bg)",
                borderColor: "var(--border-mid)",
                backdropFilter: "blur(24px)",
                WebkitBackdropFilter: "blur(24px)",
              }}
            >
              {/* Nav links */}
              <ul className="list-none" style={{ padding: "8px 8px 4px" }}>
                {LINKS.map((l, i) => (
                  <motion.li
                    key={l.label}
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0  }}
                    transition={{ delay: i * 0.06, duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between rounded-xl group"
                      style={{
                        padding: "14px 16px",
                        textDecoration: "none",
                        transition: "background 0.18s ease",
                      }}
                      onMouseEnter={e => {
                        (e.currentTarget as HTMLElement).style.background = "var(--surface)";
                      }}
                      onMouseLeave={e => {
                        (e.currentTarget as HTMLElement).style.background = "transparent";
                      }}
                    >
                      {/* Left — number + label */}
                      <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                        <span
                          style={{
                            fontFamily: "var(--font-mono), monospace",
                            fontSize: "10px",
                            color: "var(--accent)",
                            letterSpacing: "0.08em",
                            lineHeight: 1,
                            flexShrink: 0,
                          }}
                        >
                          {l.num}
                        </span>
                        <span
                          style={{
                            fontFamily: "var(--font-syne), sans-serif",
                            fontSize: "18px",
                            fontWeight: 700,
                            letterSpacing: "-0.02em",
                            color: "var(--text-primary)",
                            lineHeight: 1,
                            transition: "color 0.18s ease",
                          }}
                        >
                          {l.label}
                        </span>
                      </div>

                      {/* Right — arrow */}
                      <motion.span
                        style={{
                          fontFamily: "var(--font-mono), monospace",
                          fontSize: "16px",
                          color: "var(--text-muted)",
                          lineHeight: 1,
                          display: "block",
                          transition: "color 0.18s ease, transform 0.18s ease",
                        }}
                        whileHover={{ x: 3 }}
                      >
                        →
                      </motion.span>
                    </Link>
                  </motion.li>
                ))}
              </ul>

              {/* Divider */}
              <div style={{ height: "1px", background: "var(--border)", margin: "0 16px" }} />

              {/* Bottom row — theme toggle + Hire Me button */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: LINKS.length * 0.06 + 0.05 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "12px",
                }}
              >
                <Link
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="btn-primary"
                  style={{ flex: 1, justifyContent: "center", fontSize: "13px", padding: "11px 20px" }}
                >
                  Hire Me
                </Link>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Backdrop */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{    opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden"
            style={{ background: "rgba(0,0,0,0.5)", backdropFilter: "blur(4px)" }}
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}