"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { toast } from "react-toastify";

export default function Contact() {

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const form = e.target;

    try {
      const formData = new FormData(form);

      await fetch("https://formsubmit.co/michaeladetola40@gmail.com", {
        method: "POST",
        body: formData,
      });

      toast.success("Message sent successfully! 🎉");
      form.reset();
    } catch (error) {
      toast.error("Oops! Something went wrong.");
    }
  };

  return (
    <section className="w-full py-15 md:py-20 flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <h2
        className="text-center text-white text-4xl md:text-5xl font-semibold"
        >
            Contact Me
        </h2>

        <div className="w-24 h-[3px] bg-[#a55bff] mt-3 mx-auto rounded-full" />

      </motion.div>
      

      {/* CARD */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-2xl bg-[#0d0d0d]/70 backdrop-blur-2xl
        border border-white/10 rounded-2xl p-10 relative"
      >
        <div className="absolute inset-0 -z-10 blur-3xl bg-[#5DE4FF]/10 opacity-40" />

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <input type="hidden" name="_captcha" value="false" />

          <div className="flex flex-col">
            <label className="text-gray-300 mb-1">Name</label>
            <input
              name="name"
              required
              className="bg-[#111]/60 border border-white/10 rounded-lg p-3 outline-none text-white focus:border-[#5DE4FF]"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-300 mb-1">Email</label>
            <input
              type="email"
              name="email"
              required
              className="bg-[#111]/60 border border-white/10 rounded-lg p-3 outline-none text-white focus:border-[#5DE4FF]"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-300 mb-1">Message</label>
            <textarea
              name="message"
              rows={5}
              required
              className="bg-[#111]/60 border border-white/10 rounded-lg p-3 outline-none text-white focus:border-[#5DE4FF]"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 mt-2 text-black font-medium rounded-xl
            bg-gradient-to-br from-[#5DE4FF] to-[#B57BFF]
            shadow-[0_0_20px_rgba(93,228,255,0.25)]
            hover:shadow-[0_0_28px_rgba(93,228,255,0.35)]
            hover:scale-[1.03] transition-all duration-300"
          >
            Send Message
          </button>
        </form>

        <a
          href="https://wa.me/+2349053267316"
          target="_blank"
          className="mt-6 flex items-center justify-center gap-2 text-[#5DE4FF] hover:text-white transition text-sm pt-4"
        >
          <FaWhatsapp size={16} /> Message me on WhatsApp
        </a>
      </motion.div>
    </section>
  );
}
