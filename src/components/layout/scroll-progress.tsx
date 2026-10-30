"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600"
        style={{ scaleX }}
      />
      <motion.div
        className="fixed top-0 left-0 right-0 z-[59] h-[2px] origin-left bg-gradient-to-r from-blue-600/30 via-indigo-500/30 to-purple-600/30 blur-sm"
        style={{ scaleX }}
      />
    </>
  );
}
