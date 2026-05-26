"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function ContactForm({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  // Prevent scroll when contact form is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
      onClose();
    }, 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Dark transparent backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black z-[100] cursor-pointer"
          />

          {/* Contact form slide-out drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed right-0 top-0 h-full w-full sm:w-[480px] lg:w-[560px] bg-background text-foreground z-[101] shadow-2xl p-8 lg:p-12 overflow-y-auto flex flex-col justify-between"
          >
            {/* Header: Title and Close button */}
            <div>
              <div className="flex flex-row justify-between items-center mb-8">
                <h2 className="text-3xl font-extrabold uppercase tracking-tight">Let&apos;s talk</h2>
                <button
                  onClick={onClose}
                  className="w-10 h-10 rounded-full border border-foreground/10 flex items-center justify-center hover:bg-foreground hover:text-background transition-all duration-300 cursor-pointer"
                >
                  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-current">
                    <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>

              {/* Form Intro */}
              <p className="text-foreground/70 text-sm leading-relaxed mb-8">
                Leave your contact info and expect to hear from us within 24 hours. We’ll help clarify your needs, shape the requirements, and identify the best solution for you.
              </p>

              {/* Form inputs */}
              {!submitted ? (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-xs uppercase font-mono tracking-widest text-foreground/50">Your name</label>
                    <input
                      required
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full bg-foreground/5 dark:bg-white/5 border border-foreground/10 rounded-2xl py-3.5 px-4 text-sm outline-none focus:border-accent transition-colors duration-300"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-xs uppercase font-mono tracking-widest text-foreground/50">Your email</label>
                    <input
                      required
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full bg-foreground/5 dark:bg-white/5 border border-foreground/10 rounded-2xl py-3.5 px-4 text-sm outline-none focus:border-accent transition-colors duration-300"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="message" className="text-xs uppercase font-mono tracking-widest text-foreground/50">Project details</label>
                    <textarea
                      required
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project, timeline, and goals..."
                      className="w-full bg-foreground/5 dark:bg-white/5 border border-foreground/10 rounded-2xl py-3.5 px-4 text-sm outline-none focus:border-accent transition-colors duration-300 resize-none"
                    />
                  </div>

                  {/* Privacy details */}
                  <p className="text-[10px] text-foreground/50 leading-relaxed mt-2 select-none">
                    By submitting this form, I hereby declare that I have read and understood the Privacy Policy and the terms governing the processing of my personal data by Wonder Makers s.r.o., as the data controller.
                  </p>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full h-14 rounded-full flex items-center justify-between border border-foreground/10 text-sm font-semibold pl-8 pr-2 bg-foreground text-background dark:bg-white dark:text-black hover:bg-accent dark:hover:bg-accent dark:hover:text-black transition-all duration-300 uppercase tracking-widest cursor-pointer mt-2"
                  >
                    Send request
                    <div className="h-10 aspect-square rounded-full flex items-center justify-center text-black bg-accent dark:bg-black dark:text-accent">
                      <svg viewBox="0 0 9 15" fill="none" className="h-2.5 translate-x-[1px]">
                        <path d="M1 13.6953L7.34767 7.34767L1 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </div>
                  </button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 gap-4 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-accent text-black flex items-center justify-center font-bold text-3xl">
                    ✓
                  </div>
                  <h3 className="text-xl font-bold uppercase tracking-tight">Request Sent</h3>
                  <p className="text-sm text-foreground/60">
                    Thank you! We&apos;ve received your request and will get back to you within 24 hours.
                  </p>
                </motion.div>
              )}
            </div>

            {/* Footer: Contacts & Location info */}
            <div className="border-t border-foreground/5 pt-8 mt-12 flex flex-col gap-6 text-sm font-light text-foreground/70">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-mono uppercase tracking-widest text-foreground/40">Want to visit us?</span>
                <a
                  href="https://share.google/TEJUHOFAyJUyoa1pY"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors duration-300 leading-normal"
                >
                  Mezibranska 1668/5, New town<br />110 00 Prague 1, Czech Republic
                </a>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-mono uppercase tracking-widest text-foreground/40">Want to ask something?</span>
                <a href="mailto:team@wondermakers.digital" className="hover:text-accent transition-colors duration-300">team@wondermakers.digital</a>
                <a href="tel:+420603410127" className="hover:text-accent transition-colors duration-300">+420 603 410 127</a>
              </div>
            </div>

          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
