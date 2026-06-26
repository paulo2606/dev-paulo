"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useLang } from "@/contexts/LangContext";

const SECTIONS = [
  { id: "hero" },
  { id: "about" },
  { id: "services" },
  { id: "experience" },
  { id: "skills" },
  { id: "projects" },
  { id: "learning" },
  { id: "contact" },
] as const;

type SectionId = (typeof SECTIONS)[number]["id"];

const LABELS: Record<SectionId, { pt: string; en: string }> = {
  hero:       { pt: "Início",      en: "Home" },
  about:      { pt: "Sobre",       en: "About" },
  services:   { pt: "Serviços",    en: "Services" },
  experience: { pt: "Experiência", en: "Experience" },
  skills:     { pt: "Habilidades", en: "Skills" },
  projects:   { pt: "Projetos",    en: "Projects" },
  learning:   { pt: "Aprendendo",  en: "Learning" },
  contact:    { pt: "Contato",     en: "Contact" },
};

export default function SideNav() {
  const { lang, toggleLang } = useLang();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [active, setActive] = useState<SectionId>("hero");
  const [hovered, setHovered] = useState<SectionId | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    SECTIONS.forEach(({ id }) => {
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

  const label = (id: SectionId) => LABELS[id][lang];

  return (
    <>
      {/* ── Desktop: dots only (controls are in LeftPanel) ── */}
      <nav className="hidden md:flex fixed right-6 top-1/2 -translate-y-1/2 z-50 flex-col items-end">
        <div className="relative flex flex-col items-end gap-5">
          {/* Connecting line */}
          <motion.div
            className="absolute right-[3px] top-0 bottom-0 w-px origin-top"
            style={{ backgroundColor: "var(--border)" }}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.55, delay: 0.1, ease: "easeInOut" }}
          />

          {SECTIONS.map(({ id }, i) => {
            const isActive = active === id;
            const isHovered = hovered === id;

            return (
              <motion.a
                key={id}
                href={`#${id}`}
                className="relative flex items-center gap-2.5"
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + i * 0.055, duration: 0.35, ease: "easeOut" }}
                onMouseEnter={() => setHovered(id)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Label */}
                <motion.span
                  className="font-mono text-[10px] whitespace-nowrap pointer-events-none select-none"
                  style={{ color: isActive ? "var(--accent)" : "var(--muted)" }}
                  animate={{
                    opacity: isActive || isHovered ? 1 : 0,
                    x: isActive || isHovered ? 0 : 5,
                  }}
                  transition={{ duration: 0.15 }}
                >
                  {label(id)}
                </motion.span>

                {/* Dot */}
                <motion.div
                  className="relative z-10 rounded-full flex-shrink-0"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    delay: 0.32 + i * 0.065,
                    type: "spring",
                    stiffness: 480,
                    damping: 14,
                  }}
                  style={{
                    width:  isActive ? 8 : isHovered ? 6 : 4,
                    height: isActive ? 8 : isHovered ? 6 : 4,
                    backgroundColor: isActive ? "var(--accent)" : isHovered ? "var(--text)" : "var(--muted)",
                    transition: "width 0.18s ease, height 0.18s ease, background-color 0.18s ease",
                  }}
                />
              </motion.a>
            );
          })}
        </div>
      </nav>

      {/* ── Mobile: hamburger ── */}
      <div className="md:hidden fixed top-5 right-5 z-50">
        <motion.button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="p-2.5 rounded-xl border border-[var(--border)] text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
          style={{ backgroundColor: "var(--bg)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {mobileOpen ? <X size={17} /> : <Menu size={17} />}
        </motion.button>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -6, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -6, scale: 0.95 }}
              transition={{ duration: 0.18 }}
              className="absolute top-12 right-0 border border-[var(--border)] rounded-2xl p-4 min-w-[160px] shadow-xl"
              style={{ backgroundColor: "var(--bg)" }}
            >
              <ul className="flex flex-col gap-3 mb-4">
                {SECTIONS.map(({ id }) => (
                  <li key={id}>
                    <a
                      href={`#${id}`}
                      onClick={() => setMobileOpen(false)}
                      className="font-mono text-xs block transition-colors"
                      style={{ color: active === id ? "var(--accent)" : "var(--muted)" }}
                    >
                      {label(id)}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-between pt-3 border-t border-[var(--border)]">
                <button
                  onClick={toggleLang}
                  className="font-mono text-[11px] text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
                >
                  {lang === "pt" ? "EN" : "PT"}
                </button>
                {mounted && (
                  <button
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
                  >
                    {theme === "dark" ? <Sun size={13} /> : <Moon size={13} />}
                  </button>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
