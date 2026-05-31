"use client";

import { motion } from "framer-motion";
import {
  SiTypescript, SiJavascript, SiHtml5, SiCss3,
  SiReact, SiNextdotjs, SiTailwindcss, SiFramer,
  SiSupabase, SiSolana, SiGit, SiGithub, SiVercel,
} from "react-icons/si";
import { PiRainbowBold } from "react-icons/pi";
import { RiBarChartBoxLine } from "react-icons/ri";
import { TbBrandFramerMotion } from "react-icons/tb";
import { TbSchool } from "react-icons/tb";

const rise = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

const TOOLS = [
  { icon: <SiReact size={18} />,              name: "React"          },
  { icon: <SiNextdotjs size={18} />,          name: "Next.js"        },
  { icon: <SiTypescript size={18} />,         name: "TypeScript"     },
  { icon: <SiJavascript size={18} />,         name: "JavaScript"     },
  { icon: <SiTailwindcss size={18} />,        name: "Tailwind CSS"   },
  { icon: <TbBrandFramerMotion size={18} />,  name: "Framer Motion"  },
  { icon: <SiHtml5 size={18} />,              name: "HTML5"          },
  { icon: <SiCss3 size={18} />,              name: "CSS3"           },
  { icon: <PiRainbowBold size={18} />,        name: "RainbowKit"     },
  { icon: <SiSolana size={18} />,             name: "Solana Web3.js" },
  { icon: <SiSupabase size={18} />,           name: "Supabase"       },
  { icon: <RiBarChartBoxLine size={18} />,    name: "Recharts"       },
  { icon: <SiGit size={18} />,               name: "Git"            },
  { icon: <SiGithub size={18} />,            name: "GitHub"         },
  { icon: <SiVercel size={18} />,            name: "Vercel"         },
];

const PAD = "max(24px, calc((100vw - 1200px) / 2 + 24px))";

export default function About() {
  return (
    <section id="about" className="section-pad relative w-full overflow-hidden">

      {/* Glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(255,77,109,0.06) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="relative z-10 w-full" style={{ padding: `0 ${PAD}` }}>

        {/* Header */}
        <motion.div {...rise(0)} style={{ marginBottom: "56px" }}>
          <p className="eyebrow" style={{ marginBottom: "16px" }}>About Me</p>
          <h2 className="section-heading">
            Turning ideas into
            <br />
            <span style={{ color: "var(--accent)" }}>real products.</span>
          </h2>
        </motion.div>

        {/* Two column layout */}
        <div
          className="grid grid-cols-1 lg:grid-cols-2"
          style={{ gap: "clamp(40px, 6vw, 80px)", alignItems: "start" }}
        >

          {/* LEFT — Bio */}
          <motion.div {...rise(0.1)} className="flex flex-col" style={{ gap: "20px" }}>
            <p style={{ fontSize: "16px", lineHeight: 1.85 }}>
              I am{" "}
              <span style={{ color: "var(--text-primary)", fontWeight: 600 }}>
                Michael
              </span>
              , a Frontend Engineer with 4+ years of experience building
              production-ready web applications. I specialize in creating
              performant, accessible and visually polished user interfaces
              that solve real problems.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.85 }}>
              I work across the full frontend spectrum, from crafting scalable
              design systems and data-rich dashboards to building seamless
              Web3 experiences. My focus is always on writing clean,
              maintainable code that teams can build on.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.85 }}>
              I thrive in collaborative environments, work well with design and
              product teams, and take ownership of features from conception to
              deployment. When the interface is right, users do not notice it.
              They just{" "}
              <em style={{ color: "var(--text-primary)", fontWeight: 500 }}>
                feel it.
              </em>
            </p>

            {/* Stats row */}
            <motion.div
              {...rise(0.18)}
              className="grid grid-cols-3"
              style={{ gap: "10px", marginTop: "8px" }}
            >
              {[
                { value: "4+", label: "Years Exp." },
                { value: "∞", label: "Problems solved" },
                { value: "2",  label: "Companies" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="card card-accent"
                  style={{ padding: "18px 16px" }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-syne), sans-serif",
                      fontSize: "28px",
                      fontWeight: 800,
                      color: "var(--accent)",
                      lineHeight: 1,
                      display: "block",
                    }}
                  >
                    {s.value}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-mono), monospace",
                      fontSize: "10px",
                      color: "var(--text-muted)",
                      letterSpacing: "0.06em",
                      marginTop: "4px",
                      display: "block",
                    }}
                  >
                    {s.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT — Tools */}
          <motion.div {...rise(0.14)} className="flex flex-col" style={{ gap: "24px" }}>

            {/* Education */}
            <div
              className="card"
              style={{ padding: "18px 20px", display: "flex", alignItems: "center", gap: "14px" }}
            >
              <div
                style={{
                  width: "36px", height: "36px", borderRadius: "8px",
                  background: "var(--accent-dim)", color: "var(--accent)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <TbSchool size={18} />
              </div>
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-syne), sans-serif",
                    fontSize: "14px", fontWeight: 600,
                    color: "var(--text-primary)", lineHeight: 1.3,
                  }}
                >
                  B.Eng. Computer Engineering
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-mono), monospace",
                    fontSize: "11px", color: "var(--text-muted)", marginTop: "3px",
                  }}
                >
                  University of Benin, Nigeria · Expected 2027
                </p>
              </div>
            </div>

            {/* Tools label */}
            <p
              style={{
                fontFamily: "var(--font-mono), monospace",
                fontSize: "11px",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "var(--text-muted)",
              }}
            >
              Tools I build with
            </p>

            {/* Tools grid */}
            <div
              className="grid grid-cols-3"
              style={{ gap: "8px" }}
            >
              {TOOLS.map((tool) => (
                <div
                  key={tool.name}
                  className="card"
                  style={{
                    padding: "12px 14px",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    transition: "border-color 0.2s ease, box-shadow 0.2s ease",
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--accent-border)";
                    (e.currentTarget as HTMLElement).style.boxShadow = `var(--shadow), 0 0 16px var(--accent-glow)`;
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow)";
                  }}
                >
                  <span style={{ color: "var(--accent)", flexShrink: 0, display: "flex" }}>
                    {tool.icon}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-inter), sans-serif",
                      fontSize: "12px",
                      fontWeight: 500,
                      color: "var(--text-primary)",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {tool.name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}