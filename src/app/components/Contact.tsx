"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

type SendStatus = "idle" | "sending" | "success";

const StatusModal = ({
  status,
  onClose,
}: {
  status: SendStatus;
  onClose: () => void;
}) => {
  return (
    <AnimatePresence>
      {status !== "idle" && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.85, opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="relative z-10 bg-[#0d0d12] border border-white/10 rounded-2xl 
            p-10 w-[90%] max-w-sm text-center shadow-[0_0_40px_rgba(0,0,0,0.45)]"
          >
            {status === "sending" && (
              <>
                <motion.div
                  className="w-12 h-12 mx-auto mb-6 rounded-full 
                  border-4 border-[#5DE4FF]/30 border-t-[#5DE4FF]"
                  animate={{ rotate: 360 }}
                  transition={{
                    repeat: Infinity,
                    duration: 1,
                    ease: "linear",
                  }}
                />
                <h3 className="text-white text-xl font-semibold">
                  Sending message…
                </h3>
                <p className="text-gray-400 text-sm mt-1">
                  Please wait a moment
                </p>
              </>
            )}

            {status === "success" && (
              <>
                <motion.svg
                  width="78"
                  height="78"
                  viewBox="0 0 70 70"
                  className="mx-auto mb-6"
                >
                  <motion.circle
                    cx="35"
                    cy="35"
                    r="30"
                    stroke="#5DE4FF"
                    strokeWidth="4"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.7 }}
                  />
                  <motion.path
                    d="M20 36 L30 46 L50 26"
                    stroke="#B57BFF"
                    strokeWidth="4"
                    fill="none"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  />
                </motion.svg>

                <h3 className="text-white text-xl font-semibold mb-1">
                  Message Sent!
                </h3>
                <p className="text-gray-400 text-sm">
                  Thanks for reaching out. 
                </p>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default function Contact() {
  const [status, setStatus] = useState<SendStatus>("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    try {
      setStatus("sending");

      const formData = new FormData(form);

      const payload = {
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
      };

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Failed to send");

      form.reset();
      setStatus("success");
      setTimeout(() => setStatus("idle"), 3000);
    } catch (err) {
      console.error(err);
      setStatus("idle");
    }
  };

  return (
    <section
      className="w-full py-24 flex flex-col items-center relative"
      id="contact"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="text-white text-4xl md:text-5xl font-semibold">
          Contact Me
        </h2>
        <div className="w-24 h-[3px] bg-[#5DE4FF] mt-3 mx-auto rounded-full" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-xl bg-[#0c0c10]/80 backdrop-blur-xl 
        border border-white/10 rounded-2xl p-10 shadow-[0_0_40px_rgba(0,0,0,0.35)]"
      >
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-gray-300 text-sm">Name</label>
            <input
              name="name"
              required
              className="border border-white/10 rounded-xl p-4 bg-[#111115] 
              text-white outline-none focus:border-[#5DE4FF]"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-gray-300 text-sm">Email</label>
            <input
              type="email"
              name="email"
              required
              className="border border-white/10 rounded-xl p-4 bg-[#111115] 
              text-white outline-none focus:border-[#5DE4FF]"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-gray-300 text-sm">Message</label>
            <textarea
              name="message"
              rows={5}
              required
              className="border border-white/10 rounded-xl p-4 bg-[#111115] 
              text-white outline-none resize-none focus:border-[#5DE4FF]"
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="
              w-full py-3 mt-2 rounded-xl
              bg-[#111115]
              border border-[#5DE4FF]/40
              text-[#5DE4FF] font-medium
              shadow-[0_0_0_rgba(93,228,255,0)]
              hover:shadow-[0_0_25px_rgba(93,228,255,0.25)]
              hover:bg-[#0f1118]
              hover:scale-[1.02]
              active:scale-[0.99]
              transition-all duration-300
              disabled:opacity-50 disabled:hover:scale-100
            "
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>
        </form>

        <a
          href="https://wa.me/+2349053267316"
          target="_blank"
          className="mt-6 flex items-center justify-center gap-2 text-[#5DE4FF] 
          hover:text-white transition text-sm pt-4"
        >
          <FaWhatsapp size={16} /> Message me on WhatsApp
        </a>
      </motion.div>

      <StatusModal status={status} onClose={() => setStatus("idle")} />
    </section>
  );
}

/* I’ll respond soon. */

