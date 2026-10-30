"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { certifications } from "@/data/resume";

const gradients: Record<string, string> = {
  Databricks: "from-orange-500 to-red-500",
  Oracle: "from-red-500 to-rose-500",
  Coursera: "from-blue-500 to-indigo-500",
  NPTEL: "from-green-500 to-emerald-500",
};

export function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const featured = certifications.filter((c) => c.featured);
  const additional = certifications.filter((c) => !c.featured);

  return (
    <section className="relative bg-black py-32">
      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[150px]" />

      <div ref={ref} className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="section-number">04 — Credentials</span>
          <h2 className="mt-4 headline text-white">
            <span className="gradient-text">Certifications</span>
          </h2>
        </motion.div>

        {/* Featured certs */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((cert, i) => {
            const gradient = gradients[cert.issuer] || "from-purple-500 to-blue-500";
            return (
              <motion.a
                key={cert.title}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.1, duration: 0.6 }}
                className="group bold-card overflow-hidden"
              >
                {/* Gradient top */}
                <div className={`h-1 bg-gradient-to-r ${gradient}`} />
                
                <div className="p-6">
                  <div className="mb-4 flex items-start justify-between">
                    <div className={`inline-flex rounded-xl bg-gradient-to-r ${gradient} p-2.5`}>
                      <Award className="h-5 w-5 text-white" />
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-600 transition-colors group-hover:text-purple-400" />
                  </div>
                  
                  <h3 className="mb-2 font-semibold text-white group-hover:text-purple-300 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {cert.issuer} • {cert.date}
                  </p>
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* Additional certs */}
        {additional.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-8 border-t border-white/5 pt-8"
          >
            <h4 className="mb-4 text-sm font-semibold text-gray-500">Additional Certifications</h4>
            <div className="flex flex-wrap gap-3">
              {additional.map((cert) => (
                <a
                  key={cert.title}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-400 transition-all hover:border-purple-500/50 hover:text-white"
                >
                  <Award className="h-3.5 w-3.5" />
                  {cert.title}
                  <span className="text-gray-600">• {cert.issuer}</span>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
