"use client";

import { motion } from "framer-motion";
import { useLang } from "@/contexts/LangContext";

export default function Learning() {
  const { t } = useLang();

  return (
    <section id="learning" className="min-h-screen md:h-screen md:overflow-hidden pt-20 md:pt-24 pb-16 md:pb-0 px-6 md:px-14 border-t border-[var(--border)] flex flex-col justify-center">
      <div className="max-w-5xl mx-auto">
        <div className="relative mb-3">
          <span
            aria-hidden="true"
            className="absolute -top-3 -left-1 font-heading font-black leading-none select-none pointer-events-none text-[var(--text)]"
            style={{ fontSize: "clamp(5rem, 13vw, 8rem)", opacity: 0.04 }}
          >
            06
          </span>
          <span className="text-xs font-mono text-[var(--accent)]">{t.learning.badge}</span>
          <h2 className="relative font-heading text-3xl font-bold text-[var(--text)] mt-2">
            {t.learning.title}
          </h2>
        </div>
        <p className="text-[var(--muted)] text-sm mb-12">{t.learning.subtitle}</p>

        <div className="grid sm:grid-cols-2 gap-4">
          {t.learning.items.map((item, i) => (
            <motion.div
              key={item.name}
              className="p-6 rounded-2xl border border-[var(--border)]"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-heading font-semibold text-[var(--text)] text-sm">{item.name}</span>
                <span className="text-xs font-mono text-[var(--accent)]">{item.progress}%</span>
              </div>
              <p className="text-xs text-[var(--muted)] mb-4 leading-relaxed">{item.description}</p>
              <div className="w-full h-1 bg-[var(--border)] rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{ background: "var(--accent)" }}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${item.progress}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: i * 0.08 + 0.25, ease: "easeOut" }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
