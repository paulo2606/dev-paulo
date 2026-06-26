"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { Sun, Moon, X, Mail, Phone } from "lucide-react";
import { useLang } from "@/contexts/LangContext";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/ui/SocialIcons";

// hero incluído como 00
const FULL_NAV = [
  { id: "hero",       num: "00" },
  { id: "about",      num: "01" },
  { id: "experience", num: "02" },
  { id: "skills",     num: "03" },
  { id: "projects",   num: "04" },
  { id: "learning",   num: "05" },
  { id: "contact",    num: "06" },
] as const;

type NavId = (typeof FULL_NAV)[number]["id"];

const ALL_IDS = FULL_NAV.map((n) => n.id);

const LABELS: Record<NavId, { pt: string; en: string }> = {
  hero:       { pt: "Home",        en: "Home" },
  about:      { pt: "Sobre",       en: "About" },
  experience: { pt: "Experiência", en: "Experience" },
  skills:     { pt: "Skills",      en: "Skills" },
  projects:   { pt: "Projetos",    en: "Projects" },
  learning:   { pt: "Learning",    en: "Learning" },
  contact:    { pt: "Contato",     en: "Contact" },
};

const SOCIALS = [
  { href: "https://github.com/paulo2606",      label: "GitHub",    Icon: GithubIcon },
  { href: "https://linkedin.com/in/henriqpa",  label: "LinkedIn",  Icon: LinkedinIcon },
  { href: "https://instagram.com/paulo.js__",  label: "Instagram", Icon: InstagramIcon },
];

const EMAIL = "paulohpereira@outlook.com.br";
const PHONE = "+55 (41) 99835-2918";

function smoothScroll(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function BottomNav() {
  const { lang, toggleLang } = useLang();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [active, setActive] = useState<string>("hero");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const noScroll = (e: Event) => e.preventDefault();
    const noKey = (e: KeyboardEvent) => {
      if (["ArrowUp", "ArrowDown", "PageUp", "PageDown", " ", "Home", "End"].includes(e.key)) {
        e.preventDefault();
      }
    };
    window.addEventListener("wheel", noScroll, { passive: false });
    window.addEventListener("touchmove", noScroll, { passive: false });
    document.addEventListener("keydown", noKey);
    return () => {
      window.removeEventListener("wheel", noScroll);
      window.removeEventListener("touchmove", noScroll);
      document.removeEventListener("keydown", noKey);
    };
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    ALL_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const label = (id: NavId) => LABELS[id][lang];

  return (
    <>
      {/* ── Desktop: logo top-left ── */}
      <motion.a
        href="#hero"
        onClick={(e) => { e.preventDefault(); smoothScroll("hero"); }}
        className="hidden md:block fixed top-8 left-10 z-50 font-heading font-bold text-3xl leading-none text-[var(--text)]"
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.45 }}
      >
        ph<span className="text-[var(--accent)]">.</span>
      </motion.a>

      {/* ── Desktop: right sidebar ── */}
      <motion.aside
        className="hidden md:flex fixed right-0 top-0 h-screen w-72 flex-col border-l border-[var(--border)] px-7 py-10 z-50"
        style={{ backgroundColor: "var(--bg)" }}
        initial={{ opacity: 0, x: 24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.45 }}
      >
        {/* Nav links */}
        <nav aria-label="Sections" className="flex-1 flex flex-col justify-center">
          <ul className="space-y-1">
            {FULL_NAV.map(({ id, num }, i) => {
              const isActive = active === id;
              return (
                <motion.li
                  key={id}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.35 + i * 0.055, duration: 0.35, ease: "easeOut" }}
                >
                  <a
                    href={`#${id}`}
                    onClick={(e) => { e.preventDefault(); smoothScroll(id); }}
                    className="relative flex items-center gap-3 group -mx-7 px-7 py-2"
                  >
                    {/* Bloco sólido: começa na borda e sangra para fora no hover */}
                    <span className="absolute -left-6 right-0 top-0 bottom-0 bg-[var(--accent)] opacity-0 translate-x-6 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 ease-out pointer-events-none" />

                    <span className={`font-mono text-xs relative z-10 transition-all duration-200 ease-out group-hover:-translate-x-1 group-hover:text-black ${
                      isActive ? "text-[var(--accent)]" : "text-[var(--muted)]"
                    }`}>
                      {num}
                    </span>
                    <span className={`text-base font-medium relative z-10 transition-all duration-200 ease-out group-hover:-translate-x-1 group-hover:text-black border-b-2 pb-[1px] ${
                      isActive
                        ? "text-[var(--accent)] border-[var(--accent)] group-hover:border-black"
                        : "text-[var(--text)] border-transparent"
                    }`}>
                      {label(id)}
                    </span>
                  </a>
                </motion.li>
              );
            })}
          </ul>
        </nav>

        {/* ── Contact card ── */}
        <div className="mt-6 rounded-xl border border-[var(--accent)] p-4 space-y-3">
          <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--accent)]">
            {lang === "pt" ? "Contato" : "Contact"}
          </p>
          <a
            href={`mailto:${EMAIL}`}
            className="flex items-center gap-2 text-xs text-[var(--text)] hover:text-[var(--accent)] transition-colors duration-150 whitespace-nowrap"
          >
            <Mail size={13} className="shrink-0 text-[var(--accent)]" />
            {EMAIL}
          </a>
          <div className="flex items-center gap-2 text-xs text-[var(--muted)] whitespace-nowrap">
            <Phone size={13} className="shrink-0 text-[var(--accent)]" />
            {PHONE}
          </div>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); smoothScroll("contact"); }}
            className="flex items-center justify-center w-full py-2 rounded-lg bg-[var(--accent)] text-black text-sm font-semibold hover:opacity-90 transition-opacity duration-150"
          >
            {lang === "pt" ? "Fale comigo" : "Get in touch"}
          </a>
        </div>

        {/* ── Social icons (centralizados) ── */}
        <div className="mt-5 border-t border-[var(--border)] pt-5">
          <ul className="flex items-center justify-center gap-6">
            {SOCIALS.map(({ href, label: lbl, Icon }) => (
              <li key={lbl}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={lbl}
                  className="block text-[var(--muted)] hover:text-[var(--accent)] transition-colors duration-150"
                >
                  <Icon size={20} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Controls + identity ── */}
        <div className="mt-5 border-t border-[var(--border)] pt-5 space-y-4">
          <div className="flex items-center justify-between">
            <button
              onClick={toggleLang}
              className="font-mono text-sm text-[var(--muted)] hover:text-[var(--accent)] transition-colors duration-150"
            >
              {lang === "pt" ? "EN" : "PT"}
            </button>
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                aria-label="Toggle theme"
                className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors duration-150"
              >
                {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            )}
          </div>
          <div className="space-y-0.5">
            <p className="text-xs text-[var(--muted)]">Paulo Henrique</p>
            <p className="text-xs text-[var(--muted)]">Dev Fullstack · Pinhais, PR</p>
            <p className="text-[10px] text-[var(--muted)] opacity-30 pt-1">© 2026</p>
          </div>
        </div>
      </motion.aside>

      {/* ── Mobile: fixed top bar ── */}
      <div
        className="md:hidden fixed top-0 left-0 w-full z-50 flex items-center justify-between px-5 h-14 border-b border-[var(--border)]"
        style={{ backgroundColor: "var(--bg)" }}
      >
        <a
          href="#hero"
          onClick={(e) => { e.preventDefault(); smoothScroll("hero"); setMobileOpen(false); }}
          className="font-heading font-bold text-lg text-[var(--text)]"
        >
          ph<span className="text-[var(--accent)]">.</span>
        </a>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
          className="p-1.5 text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
        >
          {mobileOpen
            ? <X size={20} />
            : <span className="flex flex-col gap-[5px]">
                <span className="block w-5 h-px bg-current" />
                <span className="block w-5 h-px bg-current" />
                <span className="block w-5 h-px bg-current" />
              </span>
          }
        </button>
      </div>

      {/* ── Mobile: full-screen overlay ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed inset-0 z-40 flex flex-col justify-between px-6 pt-20 pb-10"
            style={{ backgroundColor: "var(--bg)" }}
          >
            <nav>
              <ul className="space-y-5">
                {FULL_NAV.map(({ id, num }, i) => {
                  const isActive = active === id;
                  return (
                    <motion.li
                      key={id}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04, duration: 0.3 }}
                    >
                      <a
                        href={`#${id}`}
                        onClick={(e) => { e.preventDefault(); smoothScroll(id); setMobileOpen(false); }}
                        className="flex items-end gap-3 group"
                      >
                        <span className="font-mono text-xs text-[var(--muted)] group-hover:text-[var(--accent)] transition-colors mb-1">
                          {num}
                        </span>
                        <span className={`font-heading font-black text-3xl leading-tight transition-colors ${
                          isActive ? "text-[var(--accent)]" : "text-[var(--text)] group-hover:text-[var(--accent)]"
                        }`}>
                          {label(id)}
                        </span>
                      </a>
                    </motion.li>
                  );
                })}
              </ul>
            </nav>

            <div>
              <div className="flex items-center gap-6 mb-5">
                {SOCIALS.map(({ href, label: lbl, Icon }) => (
                  <a
                    key={lbl}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={lbl}
                    className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
                  >
                    <Icon size={22} />
                  </a>
                ))}
              </div>
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--accent)] transition-colors mb-5"
              >
                <Mail size={14} className="text-[var(--accent)]" />
                {EMAIL}
              </a>
              <div className="flex items-center gap-2 text-sm text-[var(--muted)] mb-5">
                <Phone size={14} className="text-[var(--accent)]" />
                {PHONE}
              </div>
              <div className="flex gap-4 pt-4 border-t border-[var(--border)]">
                <button
                  onClick={toggleLang}
                  className="font-mono text-sm text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
                >
                  {lang === "pt" ? "EN" : "PT"}
                </button>
                {mounted && (
                  <button
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
                  >
                    {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
