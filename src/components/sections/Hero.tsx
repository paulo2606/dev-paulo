"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import { useLang } from "@/contexts/LangContext";
import Avatar from "@/components/Avatar";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/ui/SocialIcons";

const socials = [
  { href: "https://github.com/paulo2606", icon: GithubIcon, label: "GitHub" },
  { href: "https://linkedin.com/in/henriqpa", icon: LinkedinIcon, label: "LinkedIn" },
  { href: "https://instagram.com/paulo.js__", icon: InstagramIcon, label: "Instagram" },
];

export default function Hero() {
  const { t } = useLang();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-16 px-6 overflow-hidden"
      style={{
        backgroundImage:
          "radial-gradient(circle, var(--border) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
      }}
    >
      {/* Glow orb */}
      <div className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full bg-[var(--accent)] opacity-5 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center py-16">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Available badge */}
          <div className="inline-flex items-center gap-2 mb-7 px-3 py-1.5 rounded-full border border-[var(--border)] bg-[var(--bg-card)]">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs font-mono text-[var(--muted)]">
              {t.hero.available}
            </span>
          </div>

          <p className="font-mono text-sm text-[var(--muted)] mb-2">
            {t.hero.greeting}
          </p>

          <h1 className="font-heading text-5xl md:text-6xl font-bold text-[var(--text)] leading-tight mb-4">
            Paulo
            <br />
            <span className="text-[var(--accent)]">Henrique</span>
          </h1>

          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-8 bg-[var(--border)]" />
            <span className="font-mono text-sm text-[var(--muted)]">
              {t.hero.title}
            </span>
          </div>

          <p className="text-[var(--muted)] text-lg leading-relaxed mb-8 max-w-md">
            {t.hero.subtitle}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3 mb-8">
            <a
              href="#projects"
              className="px-6 py-3 bg-[var(--accent)] text-black font-semibold rounded-xl hover:bg-[var(--accent-hover)] transition-colors duration-200 text-sm"
            >
              {t.hero.cta}
            </a>
            <a
              href="/cv-paulo.pdf"
              download
              className="flex items-center gap-2 px-6 py-3 border border-[var(--border)] text-[var(--muted)] rounded-xl hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-200 text-sm"
            >
              <Download size={15} />
              {t.hero.downloadCv}
            </a>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-1">
            {socials.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2.5 rounded-lg text-[var(--muted)] hover:text-[var(--accent)] hover:bg-[var(--bg-card)] transition-all duration-200"
              >
                <Icon size={19} />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            {/* Background circle */}
            <div className="absolute inset-0 rounded-full bg-[var(--navy)] opacity-60" />
            {/* Dashed ring */}
            <div
              className="absolute inset-[-8px] rounded-full border-2 border-dashed border-[var(--accent)] opacity-30"
              style={{ animation: "spin 24s linear infinite" }}
            />
            {/* Accent glow */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-[var(--accent)] opacity-20 blur-2xl rounded-full" />
            <Avatar className="relative z-10 w-full h-full drop-shadow-xl" />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 7, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
      >
        <ArrowDown size={18} className="text-[var(--muted)]" />
      </motion.div>

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </section>
  );
}
