"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { education } from "@/data/resume";

export function EducationSection() {
  return (
    <section className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <h2 className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500">
            Education
          </h2>
          <div className="h-px w-8 bg-gradient-to-r from-blue-500 to-indigo-500" />
        </motion.div>

        <div className="flex flex-col gap-0">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="group flex items-center gap-4 border-b border-gray-100 py-4 last:border-0 dark:border-gray-800/30"
            >
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-gray-100 text-gray-400 transition-colors group-hover:bg-blue-50 group-hover:text-blue-500 dark:bg-gray-800 dark:group-hover:bg-blue-900/20 dark:group-hover:text-blue-400">
                <GraduationCap className="h-4 w-4" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-gray-900 dark:text-white">{edu.institution}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{edu.degree}</p>
              </div>
              <span className="flex-shrink-0 text-xs text-gray-400 dark:text-gray-500 font-mono">
                {edu.duration}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
