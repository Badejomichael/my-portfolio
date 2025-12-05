"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* BACKDROP BLUR WHEN MENU OPENS */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 backdrop-blur-md bg-black/40 z-40 md:hidden"
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* NAVBAR */}
      <nav
        className="
          fixed top-4 left-1/2 -translate-x-1/2
          w-[92%] md:w-[85%] lg:w-[70%]
          z-50
          backdrop-blur-xl
          bg-[#0c0c0c]/40
          border border-white/10
          rounded-2xl
          shadow-[0_0_20px_rgba(0,0,0,0.25)]
          transition-shadow
        "
      >
        <div className="h-16 flex items-center justify-between px-6">

          {/* LOGO */}
          <Link
            href="/"
            className="text-white font-semibold text-xl tracking-wide"
          >
            Michael
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-10">
            {["About", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="
                  group relative text-gray-300 hover:text-white transition
                  pb-1
                "
              >
                {item}

                {/* Underline */}
                <span
                  className="
                    absolute left-0 bottom-0 h-[2px] w-0 bg-[#a55bff]
                    transition-all duration-300
                    group-hover:w-full
                  "
                />

                {/* Glow on hover */}
                <span
                  className="
                    absolute inset-0 rounded-md blur-md opacity-0
                    group-hover:opacity-100
                    transition duration-300
                    bg-[#a55bff]/50
                  "
                />
              </a>
            ))}
          </div>

          {/* MOBILE HAMBURGER */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex flex-col justify-center items-center w-9 h-9"
          >
            <motion.span
              initial={false}
              animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
              className="w-7 h-[2px] bg-white block rounded"
            />
            <motion.span
              initial={false}
              animate={open ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="w-7 h-[2px] bg-white block rounded my-1"
            />
            <motion.span
              initial={false}
              animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
              className="w-7 h-[2px] bg-white block rounded"
            />
          </button>

        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="
                md:hidden flex flex-col gap-4
                bg-[#0c0c0c]/60 backdrop-blur-xl
                border-t border-white/10
                px-6 py-4 rounded-b-2xl
              "
            >
              {["About", "Projects", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className="
                    text-gray-200 text-lg relative group
                  "
                >
                  {item}

                  {/* Glow on hover for mobile too */}
                  <span
                    className="
                      absolute inset-0 rounded-md blur-md opacity-0
                      group-hover:opacity-100
                      transition duration-300
                      bg-[#a55bff]/40
                    "
                  />
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
