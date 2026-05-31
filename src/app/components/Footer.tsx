"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const LINKS = [
  { label: "About",      href: "#about"      },
  { label: "Work",       href: "#projects"   },
  { label: "Experience", href: "#experience" },
  { label: "Contact",    href: "#contact"    },
];

const PAD = "max(24px, calc((100vw - 1200px) / 2 + 24px))";

export default function Footer() {
  return (
    <footer
      className="relative w-full"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div
        className="relative z-10 w-full"
        style={{ padding: `48px ${PAD}` }}
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between"
          style={{ gap: "32px" }}
        >
          {/* Logo + copyright */}
          <div className="flex flex-col" style={{ gap: "8px" }}>
            <Link href="/" className="flex items-center group" style={{ gap: "6px", width: "fit-content" }}>
              <span
                style={{
                  fontFamily: "var(--font-syne), sans-serif",
                  fontSize: "17px",
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  color: "var(--text-primary)",
                }}
              >
                Michael
              </span>
              <span
                className="w-1.5 h-1.5 rounded-full transition-transform duration-300 group-hover:scale-[2]"
                style={{ background: "var(--accent)" }}
              />
            </Link>
            <p
              style={{
                fontFamily: "var(--font-mono), monospace",
                fontSize: "11px",
                color: "var(--text-muted)",
                letterSpacing: "0.04em",
              }}
            >
              &copy; {new Date().getFullYear()} Michael. All rights reserved.
            </p>
          </div>

          {/* Nav links */}
          <ul
            className="hidden md:flex items-center list-none flex-wrap"
            style={{ gap: "28px" }}
          >
            {LINKS.map((l) => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  style={{
                    fontFamily: "var(--font-mono), monospace",
                    fontSize: "11px",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--text-muted)",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "var(--text-muted)")}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Socials */}
          <div className="flex items-center" style={{ gap: "8px" }}>
            {[
              { href: "https://github.com/Badejomichael", icon: <FaGithub size={15} />,  label: "GitHub"   },
              { href: "https://x.com/therepublikan_",     icon: <FaXTwitter size={14} />, label: "X"        },
              { href: "https://wa.me/+2349053267316",      icon: <FaWhatsapp size={15} />, label: "WhatsApp" },
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
        </motion.div>
      </div>
    </footer>
  );
}