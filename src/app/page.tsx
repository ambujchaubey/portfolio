"use client";

import { useState, useEffect } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { CommandPalette } from "@/components/layout/command-palette";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { Skills } from "@/components/sections/skills";
import { Contact } from "@/components/sections/contact";
import { Certifications } from "@/components/sections/certifications";
import { CurrentWork } from "@/components/sections/current-work";
import { EngineeringPhilosophy } from "@/components/sections/engineering-philosophy";

export default function Home() {
  const [commandOpen, setCommandOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setCommandOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setCommandOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <Navbar onCommandOpen={() => setCommandOpen(true)} />
      <CommandPalette open={commandOpen} onClose={() => setCommandOpen(false)} />

      <main>
        {/* Main snap sections */}
        <Hero />
        <About />
        <FeaturedProjects />
        <Skills />
        
        {/* Additional sections (scrollable) */}
        <CurrentWork />
        <Certifications />
        <EngineeringPhilosophy />
        
        {/* Contact at the end */}
        <Contact />
      </main>

      <Footer />
    </>
  );
}
