"use client";

import { useEffect, useState } from "react";
import {
  Home,
  User,
  Briefcase,
  FolderGit2,
  Cpu,
  Mail,
  FileDown,
  Sun,
  Moon,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";
import { useTheme } from "next-themes";
import { personalInfo } from "@/data/resume";

interface CommandPaletteProps {
  open: boolean;
  onClose: () => void;
}

const commands = [
  { icon: Home, label: "Home", action: "#home" },
  { icon: User, label: "About", action: "#about" },
  { icon: Briefcase, label: "Work", action: "#work" },
  { icon: FolderGit2, label: "Projects", action: "#projects" },
  { icon: Cpu, label: "Skills", action: "#skills" },
  { icon: Mail, label: "Contact", action: "#contact" },
];

export function CommandPalette({ open, onClose }: CommandPaletteProps) {
  const [search, setSearch] = useState("");
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    if (open) {
      setSearch("");
    }
  }, [open]);

  const filtered = commands.filter((c) =>
    c.label.toLowerCase().includes(search.toLowerCase())
  );

  const handleSelect = (action: string) => {
    onClose();
    const el = document.querySelector(action);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[20vh]">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative w-full max-w-lg rounded-xl border border-gray-200/50 bg-white shadow-2xl dark:border-gray-700/50 dark:bg-gray-900 mx-4">
        <input
          autoFocus
          type="text"
          placeholder="Type a command or search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-t-xl border-b border-gray-200 bg-transparent px-4 py-3 text-sm text-gray-900 placeholder-gray-400 outline-none dark:border-gray-700 dark:text-white"
          onKeyDown={(e) => {
            if (e.key === "Escape") onClose();
          }}
        />
        <div className="max-h-72 overflow-y-auto p-2">
          <p className="px-2 py-1.5 text-xs font-medium text-gray-400">
            Navigation
          </p>
          {filtered.map((cmd) => (
            <button
              key={cmd.label}
              onClick={() => handleSelect(cmd.action)}
              className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
            >
              <cmd.icon className="h-4 w-4 text-gray-400" />
              {cmd.label}
            </button>
          ))}

          <div className="my-1 border-t border-gray-200 dark:border-gray-700" />
          <p className="px-2 py-1.5 text-xs font-medium text-gray-400">
            Actions
          </p>

          <button
            onClick={() => {
              setTheme(theme === "dark" ? "light" : "dark");
              onClose();
            }}
            className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4 text-gray-400" />
            ) : (
              <Moon className="h-4 w-4 text-gray-400" />
            )}
            Toggle Theme
          </button>

          <a
            href={personalInfo.resumeUrl}
            download
            onClick={onClose}
            className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
          >
            <FileDown className="h-4 w-4 text-gray-400" />
            Download Resume
          </a>

          <a
            href={personalInfo.social.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
          >
            <GithubIcon className="h-4 w-4 text-gray-400" />
            Open GitHub
          </a>

          <a
            href={personalInfo.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
          >
            <LinkedinIcon className="h-4 w-4 text-gray-400" />
            Open LinkedIn
          </a>
        </div>

        <div className="border-t border-gray-200 px-4 py-2 dark:border-gray-700">
          <p className="text-xs text-gray-400">
            Press <kbd className="rounded bg-gray-100 px-1.5 py-0.5 text-xs dark:bg-gray-800">Esc</kbd> to close
          </p>
        </div>
      </div>
    </div>
  );
}
