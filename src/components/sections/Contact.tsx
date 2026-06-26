"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Mail } from "lucide-react";
import { useLang } from "@/contexts/LangContext";

const WHATSAPP = "5541998352918";

export default function Contact() {
  const { t, lang } = useLang();
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const canSend = name.trim() && message.trim();
  const hasContent = name.trim() || message.trim();

  const handleSend = () => {
    if (!canSend) return;
    const text = encodeURIComponent(
      `*${t.contact.previewHeader}*\n${t.contact.fromLabel}: ${name}\n\n${message}`
    );
    window.open(`https://wa.me/${WHATSAPP}?text=${text}`, "_blank");
  };

  const handleEmail = () => {
    if (!canSend) return;
    const subject = encodeURIComponent(`${t.contact.previewHeader} — ${name}`);
    const body = encodeURIComponent(`${t.contact.fromLabel}: ${name}\n\n${message}`);
    window.location.href = `mailto:paulohpereira@outlook.com.br?subject=${subject}&body=${body}`;
  };

  const now = new Date().toLocaleTimeString(lang === "pt" ? "pt-BR" : "en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <section id="contact" className="min-h-screen md:h-screen md:overflow-hidden pt-20 md:pt-24 px-6 md:px-14 border-t border-[var(--border)] flex flex-col justify-center">
      <div className="max-w-5xl mx-auto">
        <div className="relative mb-3">
          <span
            aria-hidden="true"
            className="absolute -top-3 -left-1 font-heading font-black leading-none select-none pointer-events-none text-[var(--text)]"
            style={{ fontSize: "clamp(5rem, 13vw, 8rem)", opacity: 0.04 }}
          >
            07
          </span>
          <span className="text-xs font-mono text-[var(--accent)]">{t.contact.badge}</span>
          <h2 className="relative font-heading text-3xl font-bold text-[var(--text)] mt-2">
            {t.contact.title}
          </h2>
        </div>
        <p className="text-[var(--muted)] text-sm mb-12">{t.contact.subtitle}</p>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Form */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <div>
              <label className="block text-xs font-mono text-[var(--muted)] mb-2">
                {t.contact.nameLabel}
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={t.contact.namePlaceholder}
                className="w-full px-4 py-3 border border-[var(--border)] rounded-xl bg-transparent text-[var(--text)] placeholder:text-[var(--muted)]/50 focus:outline-none focus:border-[var(--accent)] transition-colors text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-mono text-[var(--muted)] mb-2">
                {t.contact.messageLabel}
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={t.contact.messagePlaceholder}
                rows={6}
                className="w-full px-4 py-3 border border-[var(--border)] rounded-xl bg-transparent text-[var(--text)] placeholder:text-[var(--muted)]/50 focus:outline-none focus:border-[var(--accent)] transition-colors resize-none text-sm"
              />
            </div>
            <div className="flex flex-col gap-3">
              <button
                onClick={handleSend}
                disabled={!canSend}
                className="w-full flex items-center justify-center gap-2 py-3.5 bg-[#25D366] hover:bg-[#1fb85a] disabled:opacity-40 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-colors duration-200 text-sm"
              >
                <MessageCircle size={16} />
                {t.contact.sendBtn}
              </button>
              <button
                onClick={handleEmail}
                disabled={!canSend}
                className="w-full flex items-center justify-center gap-2 py-3.5 border border-[var(--border)] hover:border-[var(--accent)] hover:text-[var(--accent)] disabled:opacity-40 disabled:cursor-not-allowed text-[var(--muted)] font-semibold rounded-xl transition-all duration-200 text-sm"
              >
                <Mail size={16} />
                {t.contact.emailBtn}
              </button>
            </div>
          </motion.div>

          {/* Terminal preview */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.08 }}
          >
            <div className="rounded-2xl border border-[#222] overflow-hidden bg-[#0D0D10] font-mono flex flex-col min-h-[300px]">
              {/* Titlebar */}
              <div className="flex items-center gap-1.5 px-4 py-3 bg-[#161618] border-b border-[#222]">
                <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                <span className="w-3 h-3 rounded-full bg-[#28C840]" />
                <span className="ml-2 text-[11px] text-[#444] select-none">{t.contact.terminalTitle}</span>
              </div>

              {/* Body */}
              <div className="flex-1 p-5 text-sm">
                <div className="mb-4 text-xs">
                  <span className="text-[#4EC9B0]">paulo</span>
                  <span className="text-[#444]">@portfolio:~$</span>{" "}
                  <span className="text-[#DCDCAA]">{t.contact.terminalPrompt}</span>
                </div>

                {hasContent ? (
                  <div className="mt-2">
                    <div className="inline-block bg-[#005C4B] rounded-xl rounded-tl-sm p-3.5 max-w-full">
                      <p className="text-[10px] text-[#25D366] font-bold mb-2">
                        {t.contact.previewHeader}
                      </p>
                      {name && (
                        <p className="text-xs text-[#E9EDEF]">
                          <span className="text-[#53BDEB]">{t.contact.fromLabel}:</span> {name}
                        </p>
                      )}
                      {message && (
                        <p className="text-xs text-[#E9EDEF] mt-2 whitespace-pre-wrap leading-relaxed">
                          {message}
                        </p>
                      )}
                      <p className="text-[9px] text-[#8696A0] text-right mt-2">{now} ✓✓</p>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center gap-2 text-[#444] text-xs">
                    <span className="w-2 h-4 bg-[var(--accent)] opacity-60 animate-pulse rounded-sm" />
                    <span>{t.contact.terminalEmpty}</span>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
