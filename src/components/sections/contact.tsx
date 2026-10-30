"use client";

import { useState, useRef, FormEvent } from "react";
import { motion, useInView } from "framer-motion";
import { Send, Mail, ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";
import { personalInfo } from "@/data/resume";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const emailjs = await import("@emailjs/browser");
      await emailjs.send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          to_name: personalInfo.name,
        },
        "YOUR_PUBLIC_KEY"
      );
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
    setTimeout(() => setStatus("idle"), 5000);
  };

  return (
    <section
      id="contact"
      className="snap-section relative flex min-h-screen items-center bg-black py-20"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/20 to-black" />
      <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-purple-600/10 blur-[150px]" />

      <div ref={ref} className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-number">05 — Contact</span>
          <h2 className="mt-4 headline text-white">
            Let&apos;s Build{" "}
            <span className="gradient-text">Something Great</span>
          </h2>
          <p className="mx-auto mt-4 max-w-md text-gray-400">
            Have a project in mind or just want to connect? I&apos;d love to hear from you.
          </p>
        </motion.div>

        {/* Contact form */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          onSubmit={handleSubmit}
          className="mx-auto mt-12 max-w-lg space-y-4"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <input
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Name"
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-gray-500 outline-none transition-all focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20"
            />
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="Email"
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-gray-500 outline-none transition-all focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20"
            />
          </div>
          <textarea
            required
            rows={5}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            placeholder="Your message..."
            className="w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-gray-500 outline-none transition-all focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20"
          />
          
          <button
            type="submit"
            disabled={status === "sending"}
            className="magnetic-btn w-full sm:w-auto"
          >
            <span className="flex items-center justify-center gap-2">
              {status === "sending" ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : status === "sent" ? (
                <>
                  <CheckCircle2 className="h-4 w-4" />
                  Message Sent!
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  Send Message
                </>
              )}
            </span>
          </button>

          {status === "error" && (
            <p className="text-sm text-red-400">
              Failed to send. Email me directly at {personalInfo.email}
            </p>
          )}
        </motion.form>

        {/* Alternative contact */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-12"
        >
          <p className="mb-4 text-sm text-gray-500">Or reach out directly</p>
          
          <a
            href={`mailto:${personalInfo.email}`}
            className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-white transition-all hover:border-purple-500/50 hover:bg-purple-500/10"
          >
            <Mail className="h-4 w-4 text-purple-400" />
            {personalInfo.email}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>

          {/* Social links */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <a
              href={personalInfo.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/10 p-3 text-gray-400 transition-all hover:border-purple-500/50 hover:text-white hover:shadow-[0_0_20px_rgba(139,92,246,0.3)]"
              aria-label="GitHub"
            >
              <GithubIcon className="h-5 w-5" />
            </a>
            <a
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/10 p-3 text-gray-400 transition-all hover:border-cyan-500/50 hover:text-white hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="h-5 w-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
