"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { Sun, Moon, MapPin } from "lucide-react";
import { useLang } from "@/contexts/LangContext";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/ui/SocialIcons";

const socials = [
  { href: "https://github.com/paulo2606",    icon: GithubIcon,    label: "GitHub" },
  { href: "https://linkedin.com/in/henriqpa", icon: LinkedinIcon, label: "LinkedIn" },
  { href: "https://instagram.com/paulo.js__", icon: InstagramIcon, label: "Instagram" },
];

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.15 } },
};
const row = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
};

export default function LeftPanel() {
  const { t, lang, toggleLang } = useLang();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <aside
      className="hidden md:flex fixed left-0 top-0 h-screen w-56 flex-col border-r border-[var(--border)] px-6 py-8 z-40"
      style={{ backgroundColor: "var(--bg)" }}
    >
      <motion.div
        className="flex flex-col h-full"
        variants={stagger}
        initial="hidden"
        animate="visible"
      >
        {/* Monogram */}
        <motion.div variants={row} className="mb-9">
          <a href="#hero" className="font-heading font-bold text-xl text-[var(--text)]">
            ph<span className="text-[var(--accent)]">.</span>
          </a>
        </motion.div>

        {/* Name + role */}
        <motion.div variants={row} className="mb-5">
          <p className="font-heading font-black text-[var(--text)] text-[1.15rem] leading-tight">
            Paulo<br />Henrique
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--muted)] mt-2">
            {t.hero.title}
          </p>
        </motion.div>

        <motion.div variants={row} className="w-full h-px bg-[var(--border)] mb-5" />

        {/* Bio */}
        <motion.p variants={row} className="text-[11px] text-[var(--muted)] leading-relaxed mb-5">
          {t.hero.subtitle}
        </motion.p>

        <motion.div variants={row} className="w-full h-px bg-[var(--border)] mb-5" />

        {/* Status */}
        <motion.div variants={row} className="space-y-2.5 mb-5">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
            <span className="text-[11px] text-[var(--muted)]">{t.hero.available}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={10} className="text-[var(--muted)] flex-shrink-0" />
            <span className="text-[11px] text-[var(--muted)]">Pinhais, PR</span>
          </div>
        </motion.div>

        <motion.div variants={row} className="w-full h-px bg-[var(--border)] mb-5" />

        {/* Socials */}
        <motion.div variants={row} className="flex items-center gap-4">
          {socials.map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors duration-200"
            >
              <Icon size={14} />
            </a>
          ))}
        </motion.div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Controls */}
        <motion.div
          variants={row}
          className="flex items-center justify-between pt-5 border-t border-[var(--border)]"
        >
          <button
            onClick={toggleLang}
            className="font-mono text-[11px] text-[var(--muted)] hover:text-[var(--accent)] transition-colors duration-200"
          >
            {lang === "pt" ? "EN" : "PT"}
          </button>
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
              className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors duration-200"
            >
              {theme === "dark" ? <Sun size={12} /> : <Moon size={12} />}
            </button>
          )}
        </motion.div>
      </motion.div>
    </aside>
  );
}
