"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Database,
  Brain,
  BarChart3,
  Layers,
  Cloud,
  Workflow,
} from "lucide-react";
import { skillPipeline } from "@/data/resume";

const iconMap = { Database, Brain, BarChart3, Layers, Cloud, Workflow } as const;

const gradientColors = [
  "from-blue-500 to-cyan-500",
  "from-purple-500 to-pink-500",
  "from-amber-500 to-orange-500",
  "from-indigo-500 to-blue-500",
  "from-emerald-500 to-teal-500",
  "from-rose-500 to-red-500",
];

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="skills"
      className="snap-section relative flex min-h-screen items-center bg-black py-20"
    >
      {/* Background gradient */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-purple-600/5 blur-[150px]" />

      <div ref={ref} className="relative z-10 mx-auto max-w-6xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="section-number">03 — Skills</span>
          <h2 className="mt-4 headline text-white">
            Technical{" "}
            <span className="gradient-text">Expertise</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-gray-400">
            Technologies organized by engineering domain
          </p>
        </motion.div>

        {/* Skills grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillPipeline.map((stage, i) => {
            const Icon = iconMap[stage.iconName as keyof typeof iconMap];
            const gradient = gradientColors[i % gradientColors.length];

            return (
              <motion.div
                key={stage.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.6 }}
                className="group bold-card p-6"
              >
                {/* Icon and label */}
                <div className="mb-4 flex items-center gap-3">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r ${gradient}`}>
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {stage.label}
                  </h3>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {stage.items.map((item, j) => (
                    <motion.span
                      key={item}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.4 + i * 0.1 + j * 0.02, duration: 0.3 }}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-gray-300 transition-colors hover:border-purple-500/50 hover:bg-purple-500/10 hover:text-white"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
