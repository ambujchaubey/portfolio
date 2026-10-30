"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { otherProjects } from "@/data/resume";

function GlowCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      el.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
      el.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
    };
    el.addEventListener("mousemove", handleMove);
    return () => el.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div ref={ref} className={`glow-card ${className}`}>
      {children}
    </div>
  );
}

export function OtherProjects() {
  return (
    <section className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <h2 className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500">
            Other Projects
          </h2>
          <div className="h-px w-8 bg-gradient-to-r from-blue-500 to-indigo-500" />
        </motion.div>

        <div className="grid gap-3 sm:grid-cols-2">
          {otherProjects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
            >
              <GlowCard className="rounded-2xl border border-gray-200/30 bg-white/50 p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 dark:border-gray-800/30 dark:bg-gray-900/50">
                <div className="relative z-10">
                  <div className="mb-2 flex items-start justify-between">
                    <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                      {project.title}
                    </h3>
                    <span className="flex-shrink-0 rounded-full bg-gray-100 px-2.5 py-0.5 text-[9px] font-medium text-gray-500 dark:bg-gray-800 dark:text-gray-400">
                      {project.category}
                    </span>
                  </div>
                  <p className="mb-4 text-xs leading-relaxed text-gray-500 dark:text-gray-400">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((t) => (
                      <span key={t} className="rounded-full bg-gray-100/80 px-2 py-0.5 text-[10px] font-medium text-gray-500 dark:bg-gray-800/80 dark:text-gray-400">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
