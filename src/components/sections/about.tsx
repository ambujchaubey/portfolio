"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { personalInfo, aboutNarrative } from "@/data/resume";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      className="snap-section relative flex min-h-screen items-center bg-black py-20"
    >
      {/* Background gradient accent */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-purple-600/10 blur-[150px]" />

      <div ref={ref} className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="grid gap-16 lg:grid-cols-[1fr,1.5fr] lg:items-center">
          {/* Left: Visual element */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Large initials */}
            <div className="relative">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="relative z-10"
              >
                <div className="inline-flex items-center justify-center rounded-3xl bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500 p-1">
                  <div className="flex h-32 w-32 items-center justify-center rounded-3xl bg-black text-4xl font-bold text-white sm:h-40 sm:w-40 sm:text-5xl">
                    {personalInfo.initials}
                  </div>
                </div>
              </motion.div>
              
              {/* Floating elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 h-16 w-16 rounded-2xl border border-purple-500/30 bg-purple-500/10 backdrop-blur-sm"
              />
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 h-12 w-12 rounded-xl border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-sm"
              />
            </div>

            {/* Title and company */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-8"
            >
              <p className="text-xl font-semibold text-white">{personalInfo.title}</p>
              <p className="mt-1 text-gray-400">{personalInfo.company}</p>
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
              className="section-number"
            >
              01 — About
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-4 headline text-white"
            >
              Turning Complex Problems into{" "}
              <span className="gradient-text">Elegant Solutions</span>
            </motion.h2>

            <div className="mt-8 space-y-6">
              {aboutNarrative.map((paragraph, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.1, duration: 0.6 }}
                  className={`text-lg leading-relaxed ${
                    i === 0 ? "text-gray-200" : "text-gray-400"
                  }`}
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            {/* Quick stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mt-10 grid grid-cols-3 gap-4"
            >
              {[
                { label: "Years Coding", value: "4+" },
                { label: "Projects Delivered", value: "15+" },
                { label: "Certifications", value: "6+" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur-sm"
                >
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                  <p className="mt-1 text-xs text-gray-500">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
