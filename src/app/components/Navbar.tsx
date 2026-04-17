"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BsSun, BsMoon } from "react-icons/bs";
import { useTheme } from "./ThemeProvider";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, toggle } = useTheme();

  return (
    <>
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

      <nav
        className="
        fixed top-4 left-1/2 -translate-x-1/2
        w-[92%] md:w-[85%] lg:w-[70%]
        z-50 backdrop-blur-xl
        bg-[#0c0c0c]/40 dark:bg-[#0c0c0c]/40
        light:bg-white/70
        border border-white/10 dark:border-white/10
        rounded-2xl shadow-[0_0_20px_rgba(0,0,0,0.25)]
        transition-all duration-300
      "
      >
        <div className="h-16 flex items-center justify-between px-6">
          <Link
            href="/"
            className="text-white dark:text-white font-semibold text-xl tracking-wide
            [html:not(.dark)_&]:text-gray-900"
          >
            Michael
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10">
            {["About", "Projects", "Experience", "Contact"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="group relative text-gray-300 dark:text-gray-300 hover:text-white
                  [html:not(.dark)_&]:text-gray-600 [html:not(.dark)_&]:hover:text-gray-900
                  transition pb-1"
              >
                {item}
                <span
                  className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#a55bff]
                  transition-all duration-300 group-hover:w-full"
                />
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              className="w-9 h-9 flex items-center justify-center rounded-xl
                border border-white/10 bg-white/5
                text-[#5DE4FF] dark:text-[#5DE4FF]
                [html:not(.dark)_&]:border-black/10 [html:not(.dark)_&]:bg-black/5
                hover:scale-110 transition-all duration-300"
            >
              {theme === "dark" ? <BsSun size={16} /> : <BsMoon size={16} />}
            </button>

            {/* Mobile hamburger */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden flex flex-col justify-center items-center w-9 h-9"
            >
              <motion.span
                animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.25 }}
                className="w-7 h-[2px] bg-white dark:bg-white [html:not(.dark)_&]:bg-gray-800 block rounded"
              />
              <motion.span
                animate={open ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="w-7 h-[2px] bg-white dark:bg-white [html:not(.dark)_&]:bg-gray-800 block rounded my-1"
              />
              <motion.span
                animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.25 }}
                className="w-7 h-[2px] bg-white dark:bg-white [html:not(.dark)_&]:bg-gray-800 block rounded"
              />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="md:hidden flex flex-col gap-4
                bg-[#0c0c0c]/60 dark:bg-[#0c0c0c]/60 [html:not(.dark)_&]:bg-white/80
                backdrop-blur-xl border-t border-white/10 [html:not(.dark)_&]:border-black/10
                px-6 py-4 rounded-b-2xl"
            >
              {["About", "Projects", "Experience", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className="text-gray-200 dark:text-gray-200 [html:not(.dark)_&]:text-gray-700 text-lg"
                >
                  {item}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}