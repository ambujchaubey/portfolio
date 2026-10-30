"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import type { FeaturedProject } from "@/data/resume";

function Section({ title, children, delay = 0 }: { title: string; children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay }}
    >
      <h2 className="mb-4 text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500">
        {title}
      </h2>
      {children}
    </motion.div>
  );
}

export function ProjectContent({ project }: { project: FeaturedProject }) {
  return (
    <div className="mx-auto max-w-4xl space-y-16 px-4 pb-24 sm:px-6">
      {/* Business Problem */}
      <Section title="Business Problem">
        <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300 sm:text-base">
          {project.businessProblem}
        </p>
      </Section>

      {/* Technical Challenge */}
      <Section title="Technical Challenge" delay={0.05}>
        <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300 sm:text-base">
          {project.technicalChallenge}
        </p>
      </Section>

      {/* Architecture */}
      <Section title="Architecture" delay={0.1}>
        <div className="rounded-2xl border border-gray-200/50 bg-gray-50/50 p-6 dark:border-gray-800/50 dark:bg-gray-900/30">
          {project.architectureSteps.map((step, i) => (
            <div key={step.label}>
              <motion.div
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="flex items-start gap-4"
              >
                <div className="flex flex-col items-center">
                  <div className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-r ${project.gradient} text-xs font-bold text-white`}>
                    {i + 1}
                  </div>
                  {i < project.architectureSteps.length - 1 && (
                    <div className="h-6 w-px bg-gray-200 dark:bg-gray-700" />
                  )}
                </div>
                <div className="pb-6">
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">{step.label}</p>
                  <p className="mt-0.5 text-xs text-gray-500 dark:text-gray-400">{step.description}</p>
                </div>
              </motion.div>
              {i < project.architectureSteps.length - 1 && (
                <div className="ml-4 -mt-6 mb-2">
                  <ChevronDown className="h-3 w-3 text-gray-300 dark:text-gray-600" />
                </div>
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* Implementation */}
      <Section title="Implementation" delay={0.15}>
        <ul className="space-y-2">
          {project.implementation.map((item, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-gray-600 dark:text-gray-300">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" />
              {item}
            </li>
          ))}
        </ul>
      </Section>

      {/* Engineering Decisions */}
      <Section title="Engineering Decisions" delay={0.2}>
        <ul className="space-y-2">
          {project.engineeringDecisions.map((d, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-gray-600 dark:text-gray-300">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-500" />
              {d}
            </li>
          ))}
        </ul>
      </Section>

      {/* Impact + Tech */}
      <div className="grid gap-6 sm:grid-cols-2">
        <Section title="Impact" delay={0.25}>
          <div className="rounded-xl bg-gray-50/50 p-6 dark:bg-gray-900/30">
            <p className={`text-4xl font-bold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
              {project.impact.metric}
            </p>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{project.impact.label}</p>
          </div>
        </Section>

        <Section title="Technologies" delay={0.3}>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((t) => (
              <span key={t} className="rounded-lg border border-gray-200/60 bg-white/60 px-3 py-1.5 text-xs font-medium text-gray-600 dark:border-gray-800/60 dark:bg-gray-900/60 dark:text-gray-400">
                {t}
              </span>
            ))}
          </div>
        </Section>
      </div>

      {/* Lessons Learned */}
      <Section title="Lessons Learned" delay={0.35}>
        <ul className="space-y-2">
          {project.lessonsLearned.map((lesson, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-gray-600 dark:text-gray-300">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-500" />
              {lesson}
            </li>
          ))}
        </ul>
      </Section>
    </div>
  );
}
