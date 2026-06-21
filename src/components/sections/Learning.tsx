"use client";

import { motion } from "framer-motion";
import { useLang } from "@/contexts/LangContext";

export default function Learning() {
  const { t } = useLang();

  return (
    <section id="learning" className="py-24 px-6 bg-[var(--bg-card)]">
      <div className="max-w-6xl mx-auto">
        <span className="text-xs font-mono text-[var(--accent)]">{t.learning.badge}</span>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-[var(--text)] mt-2 mb-3">
          {t.learning.title}
        </h2>
        <p className="text-[var(--muted)] mb-14">{t.learning.subtitle}</p>

        <div className="grid sm:grid-cols-2 gap-5">
          {t.learning.items.map((item, i) => (
            <motion.div
              key={item.name}
              className="bg-[var(--bg)] border border-[var(--border)] rounded-2xl p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-heading font-semibold text-[var(--text)]">{item.name}</span>
                <span className="text-xs font-mono text-[var(--accent)]">{item.progress}%</span>
              </div>
              <p className="text-xs text-[var(--muted)] mb-4 leading-relaxed">{item.description}</p>

              {/* Progress bar */}
              <div className="w-full h-1.5 bg-[var(--border)] rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{ background: "var(--accent)" }}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${item.progress}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: i * 0.1 + 0.3, ease: "easeOut" }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
