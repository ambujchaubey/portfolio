"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase, Zap } from "lucide-react";
import { currentWork, previousExperience } from "@/data/resume";

export function CurrentWork() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative bg-black py-32">
      {/* Background */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-purple-600/10 blur-[150px]" />

      <div ref={ref} className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="section-number">Experience</span>
          <h2 className="mt-4 headline text-white">
            Where I{" "}
            <span className="gradient-text">Work</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Main info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bold-card p-8"
          >
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-purple-600 to-blue-600">
                <Briefcase className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">{currentWork.role}</h3>
                <p className="text-gray-400">{currentWork.company} • {currentWork.duration}</p>
              </div>
            </div>

            <p className="mb-6 text-gray-300 leading-relaxed">
              {currentWork.domain}
            </p>

            <div className="space-y-3">
              {currentWork.responsibilities.map((r, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-purple-500" />
                  <p className="text-sm text-gray-400">{r}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Impact & Tech */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="bold-card p-6"
            >
              <div className="mb-4 flex items-center gap-2">
                <Zap className="h-4 w-4 text-amber-500" />
                <span className="text-sm font-semibold text-gray-400">Impact</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {currentWork.impact.map((item) => (
                  <div key={item.description}>
                    <p className="text-2xl font-bold text-white">{item.metric}</p>
                    <p className="mt-1 text-xs text-gray-500">{item.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="bold-card p-6"
            >
              <h4 className="mb-4 text-sm font-semibold text-gray-400">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {currentWork.technologies.map((t) => (
                  <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-gray-300">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Previous */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="border-t border-white/5 pt-6"
            >
              <h4 className="mb-4 text-sm font-semibold text-gray-500">Previous Experience</h4>
              <div className="space-y-3">
                {previousExperience.map((exp) => (
                  <div key={exp.company} className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-300">{exp.role}</p>
                      <p className="text-xs text-gray-500">{exp.company}</p>
                    </div>
                    <span className="text-xs text-gray-600">{exp.duration}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
