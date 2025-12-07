"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { useEffect } from "react";



/* SUCCESS MODAL COMPONENT */
const SuccessModal = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.35 }}
        className="relative z-10 bg-[#0d0d12] border border-white/10 rounded-2xl 
          p-10 w-[90%] max-w-sm text-center shadow-[0_0_40px_rgba(0,0,0,0.45)]"
      >
        {/* Animated Checkmark */}
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
          Thanks for reaching out. I’ll respond soon.
        </p>
      </motion.div>
    </div>
  );
};

/* CONTACT SECTION */
export default function Contact() {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (modalOpen) {
      const timer = setTimeout(() => {
        setModalOpen(false);
      }, 3000); // 3 seconds

      return () => clearTimeout(timer);
    }
  }, [modalOpen]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    try {
      const formData = new FormData(form);

      await fetch("https://formsubmit.co/michaeladetola40@gmail.com", {
        method: "POST",
        body: formData,
      });

      form.reset();
      setModalOpen(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="w-full py-24 flex flex-col items-center relative" id="contact">
      {/* TITLE */}
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

      {/* CARD */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-xl bg-[#0c0c10]/80 backdrop-blur-xl 
        border border-white/10 rounded-2xl p-10 shadow-[0_0_40px_rgba(0,0,0,0.35)]"
      >
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <input type="hidden" name="_captcha" value="false" />

          {/* NAME */}
          <div className="flex flex-col gap-2">
            <label className="text-gray-300 text-sm">Name</label>
            <input
              name="name"
              required
              className="border border-white/10 rounded-xl p-4 bg-[#111115] 
              text-white outline-none focus:border-[#5DE4FF] transition-all"
            />
          </div>

          {/* EMAIL */}
          <div className="flex flex-col gap-2">
            <label className="text-gray-300 text-sm">Email</label>
            <input
              type="email"
              name="email"
              required
              className="border border-white/10 rounded-xl p-4 bg-[#111115] 
              text-white outline-none focus:border-[#5DE4FF] transition-all"
            />
          </div>

          {/* MESSAGE */}
          <div className="flex flex-col gap-2">
            <label className="text-gray-300 text-sm">Message</label>
            <textarea
              name="message"
              rows={5}
              required
              className="border border-white/10 rounded-xl p-4 bg-[#111115] 
              text-white outline-none resize-none focus:border-[#5DE4FF] transition-all"
            ></textarea>
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            className="w-full py-3 mt-2 text-black font-semibold rounded-xl
            bg-gradient-to-br from-[#5DE4FF] to-[#B57BFF]
            shadow-[0_0_20px_rgba(93,228,255,0.25)]
            hover:shadow-[0_0_25px_rgba(93,228,255,0.35)]
            hover:scale-[1.03] active:scale-[0.99]
            transition-all duration-300"
          >
            Send Message
          </button>
        </form>

        {/* WHATSAPP */}
        <a
          href="https://wa.me/+2349053267316"
          target="_blank"
          className="mt-6 flex items-center justify-center gap-2 text-[#5DE4FF] 
          hover:text-white transition text-sm pt-4"
        >
          <FaWhatsapp size={16} /> Message me on WhatsApp
        </a>
      </motion.div>

      {/* SUCCESS MODAL */}
      <SuccessModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}

