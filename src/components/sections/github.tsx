"use client";

import { motion } from "framer-motion";
import { ExternalLink, Star, Trophy } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";
import { personalInfo, githubData } from "@/data/resume";

export function GitHub() {
  return (
    <section className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mb-14 flex items-end justify-between">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500">
              Open Source
            </h2>
            <div className="h-px w-8 bg-gradient-to-r from-blue-500 to-indigo-500" />
          </motion.div>
          <a
            href={personalInfo.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="animated-underline flex items-center gap-1.5 text-xs text-gray-400 transition-colors hover:text-gray-900 dark:text-gray-500 dark:hover:text-white"
          >
            @{githubData.username}
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>

        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {/* Stats card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-2xl border border-gray-200/30 bg-white/50 p-5 backdrop-blur-sm dark:border-gray-800/30 dark:bg-gray-900/50 lg:col-span-2"
          >
            <div className="mb-3 flex items-center gap-2">
              <GithubIcon className="h-4 w-4 text-gray-700 dark:text-gray-300" />
              <h3 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500">
                Activity
              </h3>
            </div>
            <div className="space-y-2">
              <div className="rounded-xl overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://github-readme-stats.vercel.app/api?username=${githubData.username}&show_icons=true&theme=transparent&hide_border=true&title_color=3b82f6&icon_color=6366f1&text_color=6b7280&hide_title=true&hide_rank=true`}
                  alt="GitHub Stats"
                  className="w-full dark:hidden"
                  loading="lazy"
                />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://github-readme-stats.vercel.app/api?username=${githubData.username}&show_icons=true&theme=transparent&hide_border=true&title_color=60a5fa&icon_color=818cf8&text_color=9ca3af&hide_title=true&hide_rank=true`}
                  alt="GitHub Stats"
                  className="w-full hidden dark:block"
                  loading="lazy"
                />
              </div>
              <div className="rounded-xl overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://github-readme-streak-stats.herokuapp.com/?user=${githubData.username}&theme=transparent&hide_border=true&ring=3b82f6&fire=6366f1&currStreakLabel=6b7280&sideLabels=6b7280&dates=9ca3af`}
                  alt="GitHub Streak"
                  className="w-full dark:hidden"
                  loading="lazy"
                />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://github-readme-streak-stats.herokuapp.com/?user=${githubData.username}&theme=transparent&hide_border=true&ring=60a5fa&fire=818cf8&currStreakLabel=9ca3af&sideLabels=9ca3af&dates=4b5563`}
                  alt="GitHub Streak"
                  className="w-full hidden dark:block"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>

          {/* Pinned + Achievements */}
          <div className="space-y-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl border border-gray-200/30 bg-white/50 p-5 backdrop-blur-sm dark:border-gray-800/30 dark:bg-gray-900/50"
            >
              <div className="mb-4 flex items-center gap-2">
                <Star className="h-3.5 w-3.5 text-amber-500" />
                <h3 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500">
                  Pinned
                </h3>
              </div>
              <div className="space-y-3">
                {githubData.pinnedRepos.map((repo) => (
                  <div key={repo.name} className="group">
                    <p className="text-xs font-semibold text-gray-900 group-hover:text-blue-600 transition-colors dark:text-white dark:group-hover:text-blue-400">{repo.name}</p>
                    <p className="text-[10px] text-gray-500 dark:text-gray-400">{repo.description}</p>
                    <span className="mt-1 inline-flex items-center gap-1 rounded-full bg-gray-100/80 px-2 py-0.5 text-[9px] font-medium text-gray-500 dark:bg-gray-800/80 dark:text-gray-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                      {repo.language}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl border border-gray-200/30 bg-white/50 p-5 backdrop-blur-sm dark:border-gray-800/30 dark:bg-gray-900/50"
            >
              <div className="mb-4 flex items-center gap-2">
                <Trophy className="h-3.5 w-3.5 text-amber-500" />
                <h3 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500">
                  Achievements
                </h3>
              </div>
              <div className="space-y-2.5">
                {githubData.achievements.map((ach, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <span className="mt-0.5 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-[8px] font-bold text-white">
                      {i + 1}
                    </span>
                    <p className="text-xs leading-relaxed text-gray-600 dark:text-gray-300">{ach}</p>
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
