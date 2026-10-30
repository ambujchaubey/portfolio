"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";
import { personalInfo, heroHook, impactMetrics } from "@/data/resume";
import { ParticlesBackground } from "@/components/ui/particles-background";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  return (
    <section
      ref={containerRef}
      id="home"
      className="snap-section relative flex min-h-screen items-center justify-center overflow-hidden bg-black"
    >
      {/* Particle background */}
      <ParticlesBackground />

      {/* Gradient orbs */}
      <div className="absolute inset-0 -z-5 overflow-hidden">
        <motion.div
          className="absolute -top-1/4 -left-1/4 h-[600px] w-[600px] rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-[120px]"
          style={{ x: mousePos.x, y: mousePos.y }}
        />
        <motion.div
          className="absolute -bottom-1/4 -right-1/4 h-[500px] w-[500px] rounded-full bg-gradient-to-r from-cyan-500/20 to-pink-500/20 blur-[100px]"
          style={{ x: -mousePos.x, y: -mousePos.y }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-purple-600/10 blur-[80px] float"
        />
      </div>

      <motion.div
        style={{ opacity, scale, y }}
        className="relative z-10 mx-auto max-w-6xl px-6 text-center"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 backdrop-blur-sm"
        >
          <Sparkles className="h-4 w-4 text-purple-400" />
          <span className="text-sm font-medium text-purple-300">
            Data Engineer • Building at Scale
          </span>
        </motion.div>

        {/* Main headline */}
        <div className="mb-6 overflow-hidden">
          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="display-text text-white"
          >
            <span className="block">I Build</span>
            <span className="block gradient-text-animated">Systems That</span>
            <span className="block">Scale</span>
          </motion.h1>
        </div>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mx-auto mb-12 max-w-xl text-lg text-gray-400 leading-relaxed"
        >
          {heroHook}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mb-16 flex flex-wrap items-center justify-center gap-4"
        >
          <button
            onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
            className="magnetic-btn"
          >
            <span className="flex items-center gap-2">
              View My Work
              <ArrowDown className="h-4 w-4" />
            </span>
          </button>
          
          <a
            href={personalInfo.resumeUrl}
            download
            className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-white/40 hover:bg-white/10"
          >
            Download Resume
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-8 sm:gap-16"
        >
          {impactMetrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 + i * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <p className="text-3xl font-bold text-white sm:text-4xl">
                {metric.value}
              </p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-gray-500">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          className="mt-12 flex items-center justify-center gap-3"
        >
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
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-gray-500">
            Scroll
          </span>
          <div className="h-8 w-[1px] bg-gradient-to-b from-purple-500 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
