"use client";

import { motion } from "framer-motion";
import { Server, Monitor, Database, Zap } from "lucide-react";
import { useLang } from "@/contexts/LangContext";

const iconMap = { Server, Monitor, Database, Zap } as const;

export default function Services() {
  const { t } = useLang();

  return (
    <section id="services" className="py-24 px-6 bg-[var(--bg-card)]">
      <div className="max-w-6xl mx-auto">
        <span className="text-xs font-mono text-[var(--accent)]">{t.services.badge}</span>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-[var(--text)] mt-2 mb-14">
          {t.services.title}
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {t.services.items.map((item, i) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={item.title}
                className="bg-[var(--bg)] rounded-2xl border border-[var(--border)] p-6 hover:border-[var(--accent)] transition-colors duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <div className="w-10 h-10 rounded-xl bg-[var(--accent)]/10 flex items-center justify-center mb-5 group-hover:bg-[var(--accent)]/20 transition-colors">
                  <Icon size={20} className="text-[var(--accent)]" />
                </div>
                <h3 className="font-heading font-semibold text-[var(--text)] mb-2 text-sm leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-[var(--muted)] leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
