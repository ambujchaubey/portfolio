"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ArrowRight, ExternalLink, ChevronDown } from "lucide-react";
import Link from "next/link";
import { featuredProjects } from "@/data/resume";

export function FeaturedProjects() {
  const [expandedSlug, setExpandedSlug] = useState<string | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const toggle = (slug: string) => {
    setExpandedSlug((prev) => (prev === slug ? null : slug));
  };

  return (
    <section
      id="projects"
      className="snap-section relative flex min-h-screen items-center bg-black py-20"
    >
      {/* Background gradient */}
      <div className="absolute right-0 top-1/3 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[150px]" />
      <div className="absolute left-0 bottom-1/3 h-[400px] w-[400px] rounded-full bg-purple-600/10 blur-[150px]" />

      <div ref={ref} className="relative z-10 mx-auto max-w-6xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="section-number">02 — Projects</span>
          <h2 className="mt-4 headline text-white">
            Enterprise-Grade{" "}
            <span className="gradient-text">Solutions</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-gray-400">
            Production systems solving real business problems at scale
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="space-y-4">
          {featuredProjects.map((project, i) => {
            const isExpanded = expandedSlug === project.slug;

            return (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.6 }}
                className={`bold-card overflow-hidden ${
                  isExpanded ? "ring-1 ring-purple-500/50" : ""
                }`}
              >
                {/* Gradient top border */}
                <div className={`h-1 bg-gradient-to-r ${project.gradient}`} />

                {/* Header - always visible */}
                <button
                  onClick={() => toggle(project.slug)}
                  className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-white/[0.02]"
                >
                  <div className="flex items-center gap-6">
                    {/* Project number */}
                    <span className={`text-4xl font-bold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        {project.title}
                      </h3>
                      <p className="mt-1 text-sm text-gray-400 line-clamp-1">
                        {project.overview}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    {/* Impact metric */}
                    <div className="hidden text-right sm:block">
                      <p className={`text-2xl font-bold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                        {project.impact.metric}
                      </p>
                      <p className="text-xs text-gray-500">{project.impact.label}</p>
                    </div>

                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="rounded-full border border-white/10 p-2 text-gray-400"
                    >
                      <ChevronDown className="h-5 w-5" />
                    </motion.div>
                  </div>
                </button>

                {/* Expanded content */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-white/5 p-6">
                        <div className="grid gap-8 lg:grid-cols-2">
                          {/* Left: Problem & Challenge */}
                          <div className="space-y-6">
                            <div>
                              <h4 className="text-xs font-semibold uppercase tracking-wider text-purple-400">
                                Business Problem
                              </h4>
                              <p className="mt-2 text-sm leading-relaxed text-gray-300">
                                {project.businessProblem}
                              </p>
                            </div>
                            <div>
                              <h4 className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                                Technical Challenge
                              </h4>
                              <p className="mt-2 text-sm leading-relaxed text-gray-300">
                                {project.technicalChallenge}
                              </p>
                            </div>
                          </div>

                          {/* Right: Architecture & Tech */}
                          <div className="space-y-6">
                            <div>
                              <h4 className="text-xs font-semibold uppercase tracking-wider text-blue-400">
                                Architecture
                              </h4>
                              <div className="mt-3 space-y-2">
                                {project.architectureSteps.slice(0, 5).map((step, si) => (
                                  <div key={si} className="flex items-center gap-3">
                                    <span className={`flex h-6 w-6 items-center justify-center rounded-lg bg-gradient-to-r ${project.gradient} text-xs font-bold text-white`}>
                                      {si + 1}
                                    </span>
                                    <span className="text-sm text-gray-400">{step.label}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            <div>
                              <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
                                Technologies
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {project.techStack.map((tech) => (
                                  <span
                                    key={tech}
                                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Footer */}
                        <div className="mt-6 flex items-center justify-between border-t border-white/5 pt-6">
                          <div className="flex items-center gap-4 sm:hidden">
                            <p className={`text-2xl font-bold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                              {project.impact.metric}
                            </p>
                            <p className="text-xs text-gray-500">{project.impact.label}</p>
                          </div>
                          
                          <Link
                            href={`/projects/${project.slug}`}
                            className="group inline-flex items-center gap-2 rounded-full bg-white/5 px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-white/10"
                          >
                            View Case Study
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
