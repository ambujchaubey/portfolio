"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { ArrowUp } from "lucide-react";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 10 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-50 group"
          aria-label="Scroll to top"
        >
          <div className="relative">
            <svg className="h-11 w-11 -rotate-90" viewBox="0 0 44 44">
              <circle cx="22" cy="22" r="19" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gray-200 dark:text-gray-800" />
              <motion.circle
                cx="22" cy="22" r="19" fill="none" stroke="url(#progress-gradient)" strokeWidth="1.5"
                strokeLinecap="round"
                style={{ pathLength: scrollYProgress }}
                strokeDasharray="1"
                strokeDashoffset="0"
              />
              <defs>
                <linearGradient id="progress-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#6366f1" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <ArrowUp className="h-4 w-4 text-gray-500 transition-colors group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
            </div>
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
