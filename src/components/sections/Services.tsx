"use client";

import { motion } from "framer-motion";
import { Server, Monitor, Database, Zap } from "lucide-react";
import { useLang } from "@/contexts/LangContext";

const iconMap = { Server, Monitor, Database, Zap } as const;

export default function Services() {
  const { t } = useLang();

  return (
    <section id="services" className="min-h-screen pt-16 md:pt-24 pb-36 md:pb-40 px-6 md:px-14 border-t border-[var(--border)] flex flex-col justify-center">
      <div className="max-w-5xl mx-auto">
        <div className="relative mb-12">
          <span
            aria-hidden="true"
            className="absolute -top-3 -left-1 font-heading font-black leading-none select-none pointer-events-none text-[var(--text)]"
            style={{ fontSize: "clamp(5rem, 13vw, 8rem)", opacity: 0.04 }}
          >
            02
          </span>
          <span className="text-xs font-mono text-[var(--accent)]">{t.services.badge}</span>
          <h2 className="relative font-heading text-3xl font-bold text-[var(--text)] mt-2">
            {t.services.title}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {t.services.items.map((item, i) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={item.title}
                className="p-6 rounded-2xl border border-[var(--border)] hover:border-[var(--accent)]/60 transition-colors duration-300 group"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -4 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
              >
                <Icon
                  size={20}
                  className="text-[var(--accent)] mb-4"
                />
                <h3 className="font-heading font-semibold text-[var(--text)] text-sm mb-2">
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
