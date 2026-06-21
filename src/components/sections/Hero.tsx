"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { useLang } from "@/contexts/LangContext";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/ui/SocialIcons";

const socials = [
  { href: "https://github.com/paulo2606", icon: GithubIcon, label: "GitHub" },
  { href: "https://linkedin.com/in/henriqpa", icon: LinkedinIcon, label: "LinkedIn" },
  { href: "https://instagram.com/paulo.js__", icon: InstagramIcon, label: "Instagram" },
];

export default function Hero() {
  const { t } = useLang();

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <div className="max-w-2xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          {/* Available badge */}
          <div className="inline-flex items-center gap-2 mb-10 px-3.5 py-1.5 rounded-full border border-[var(--border)] text-xs font-mono text-[var(--muted)]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            {t.hero.available}
          </div>

          {/* Name */}
          <h1 className="font-heading font-bold text-[clamp(3rem,8vw,5.5rem)] leading-[1.05] tracking-tight text-[var(--text)] mb-6">
            Paulo<br />
            <span className="text-[var(--accent)]">Henrique</span>
          </h1>

          {/* Divider with role */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="h-px w-10 bg-[var(--border)]" />
            <span className="font-mono text-xs tracking-widest uppercase text-[var(--muted)]">
              {t.hero.title}
            </span>
            <span className="h-px w-10 bg-[var(--border)]" />
          </div>

          {/* Subtitle */}
          <p className="text-[var(--muted)] text-lg leading-relaxed mb-10 max-w-md mx-auto">
            {t.hero.subtitle}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
            <a
              href="#projects"
              className="px-7 py-3 bg-[var(--accent)] text-black font-semibold rounded-xl text-sm hover:bg-[var(--accent-dark)] transition-colors duration-200"
            >
              {t.hero.cta}
            </a>
            <a
              href="/cv-paulo.pdf"
              download
              className="flex items-center gap-2 px-7 py-3 rounded-xl border border-[var(--border)] text-sm text-[var(--muted)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-200"
            >
              <Download size={14} />
              {t.hero.downloadCv}
            </a>
          </div>

          {/* Socials */}
          <div className="flex items-center justify-center gap-5">
            {socials.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors duration-200"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-10"
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
      >
        <div className="w-px h-12 bg-[var(--border)] mx-auto" />
      </motion.div>
    </section>
  );
}
