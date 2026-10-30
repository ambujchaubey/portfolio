"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Blocks, Repeat, GitBranch, Target, Puzzle } from "lucide-react";
import { engineeringPhilosophy } from "@/data/resume";

const iconMap = { Blocks, Repeat, GitBranch, Target, Puzzle } as const;

const gradients = [
  "from-blue-500 to-cyan-500",
  "from-purple-500 to-pink-500",
  "from-emerald-500 to-teal-500",
  "from-amber-500 to-orange-500",
  "from-indigo-500 to-purple-500",
];

export function EngineeringPhilosophy() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative bg-black py-32">
      {/* Background */}
      <div className="absolute left-0 top-0 h-[400px] w-[400px] rounded-full bg-cyan-600/10 blur-[150px]" />

      <div ref={ref} className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="section-number">Philosophy</span>
          <h2 className="mt-4 headline text-white">
            How I{" "}
            <span className="gradient-text">Think</span>
          </h2>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {engineeringPhilosophy.map((principle, i) => {
            const Icon = iconMap[principle.iconName as keyof typeof iconMap];
            return (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.1, duration: 0.6 }}
                className="group bold-card p-6"
              >
                <div className={`mb-4 inline-flex rounded-xl bg-gradient-to-r ${gradients[i]} p-3`}>
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-white">
                  {principle.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-400">
                  {principle.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
