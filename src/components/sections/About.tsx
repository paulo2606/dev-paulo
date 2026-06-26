"use client";

import { motion } from "framer-motion";
import { useLang } from "@/contexts/LangContext";

export default function About() {
  const { t } = useLang();

  return (
    <section id="about" className="min-h-screen md:h-screen md:overflow-hidden pt-20 md:pt-24 px-6 md:px-14 border-t border-[var(--border)] flex flex-col justify-center">
      <div className="max-w-5xl mx-auto">
        <div className="relative mb-12">
          <span
            aria-hidden="true"
            className="absolute -top-3 -left-1 font-heading font-black leading-none select-none pointer-events-none text-[var(--text)]"
            style={{ fontSize: "clamp(5rem, 13vw, 8rem)", opacity: 0.04 }}
          >
            01
          </span>
          <SectionLabel>{t.about.badge}</SectionLabel>
          <h2 className="relative font-heading text-3xl font-bold text-[var(--text)] mt-2">
            {t.about.title}
          </h2>
        </div>

        <div className="grid md:grid-cols-5 gap-10 items-start">
          <motion.div
            className="md:col-span-3 space-y-4"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-[1.05rem] text-[var(--muted)] leading-[1.85]">{t.about.text1}</p>
            <p className="text-[1.05rem] text-[var(--muted)] leading-[1.85]">{t.about.text2}</p>
            <p className="text-[1.05rem] text-[var(--muted)] leading-[1.85]">{t.about.text3}</p>
          </motion.div>

          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="border border-[var(--border)] rounded-2xl overflow-hidden">
              {t.about.facts.map((fact, i) => (
                <div
                  key={fact.label}
                  className={`flex justify-between items-center px-6 py-5 ${
                    i < t.about.facts.length - 1 ? "border-b border-[var(--border)]" : ""
                  }`}
                >
                  <span className="text-sm font-mono text-[var(--muted)]">{fact.label}</span>
                  <span className="text-base font-medium text-[var(--text)]">{fact.value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <span className="text-xs font-mono text-[var(--accent)] tracking-wide">{children}</span>;
}
