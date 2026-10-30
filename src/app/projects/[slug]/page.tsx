import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { featuredProjects } from "@/data/resume";
import { ProjectContent } from "./project-content";

export function generateStaticParams() {
  return featuredProjects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = featuredProjects.find((p) => p.slug === params.slug);
  if (!project) return {};
  return {
    title: `${project.title} — Ambuj Kumar Chaubey`,
    description: project.overview,
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = featuredProjects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      {/* Nav */}
      <div className="mx-auto max-w-4xl px-4 pt-8 sm:px-6">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-1.5 text-sm text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to portfolio
        </Link>
      </div>

      {/* Hero banner */}
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <div className={`mb-4 h-1 w-16 rounded-full bg-gradient-to-r ${project.gradient}`} />
        <h1 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
          {project.title}
        </h1>
        <p className="max-w-2xl text-base text-gray-500 dark:text-gray-400 sm:text-lg">
          {project.overview}
        </p>
      </div>

      <ProjectContent project={project} />
    </main>
  );
}
