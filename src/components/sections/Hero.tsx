"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { useLang } from "@/contexts/LangContext";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/ui/SocialIcons";

const socials = [
  { href: "https://github.com/paulo2606",     icon: GithubIcon,    label: "GitHub" },
  { href: "https://linkedin.com/in/henriqpa", icon: LinkedinIcon,  label: "LinkedIn" },
  { href: "https://instagram.com/paulo.js__", icon: InstagramIcon, label: "Instagram" },
];

const keywords = [
  "C#", ".NET", "React", "Next.js", "TypeScript",
  "SQL Server", "Java", "Clean Architecture",
  "Microservices", "Azure DevOps", "PostgreSQL", "API RESTful",
];

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function Hero() {
  const { t } = useLang();

  return (
    <section id="hero" className="relative h-screen flex flex-col overflow-hidden pt-14 md:pt-0">

      {/* Main content */}
      <motion.div
        className="flex-1 flex flex-col justify-center px-8 md:px-14"
        variants={stagger}
        initial="hidden"
        animate="visible"
      >
        {/* Giant editorial name */}
        <motion.div variants={fadeUp}>
          <h1
            className="font-heading font-black leading-[0.88] tracking-[-0.03em] text-[var(--text)]"
            style={{ fontSize: "clamp(3.8rem, 11vw, 9.5rem)" }}
          >
            Paulo
            <br />
            <span className="text-[var(--accent)]">Henrique</span>
            <span className="text-[var(--accent)] cursor-blink">_</span>
          </h1>
        </motion.div>

        {/* Rule */}
        <motion.div
          variants={fadeUp}
          className="w-full h-px bg-[var(--border)] my-7 md:my-8"
        />

        {/* Two-column */}
        <motion.div
          variants={fadeUp}
          className="grid md:grid-cols-2 gap-8 items-end"
        >
          {/* Left */}
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--muted)] mb-6">
              {t.hero.title}
            </p>
            <div className="flex flex-wrap gap-3">
              <motion.a
                href="#about"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-6 py-2.5 bg-[var(--accent)] text-black font-semibold rounded-xl text-sm hover:bg-[var(--accent-dark)] transition-colors duration-200"
              >
                {t.hero.cta}
              </motion.a>
              <motion.a
                href="/cv-paulo.pdf"
                download
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-6 py-2.5 rounded-xl border border-[var(--border)] text-sm text-[var(--muted)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-200"
              >
                <Download size={13} />
                {t.hero.downloadCv}
              </motion.a>
            </div>
          </div>

          {/* Right */}
          <div>
            <p className="text-[var(--muted)] text-[14px] leading-[1.8] mb-5">
              {t.hero.subtitle}
            </p>
            {/* Socials visible on mobile (desktop has them in BottomNav socials) */}
            <div className="flex items-center gap-5 md:hidden">
              {socials.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors duration-200"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Marquee */}
      <motion.div
        className="border-t border-[var(--border)] py-3 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <div
          className="flex whitespace-nowrap"
          style={{ animation: "marquee 32s linear infinite" }}
        >
          {[...keywords, ...keywords].map((kw, i) => (
            <span key={i} className="inline-flex items-center gap-5 px-5">
              <span className="font-mono text-[11px] text-[var(--muted)]">{kw}</span>
              <span className="text-[var(--accent)] text-xs leading-none">·</span>
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
