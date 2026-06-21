"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useLang } from "@/contexts/LangContext";

const WHATSAPP = "5541998352918";

export default function Contact() {
  const { t, lang } = useLang();
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const hasContent = name.trim() || message.trim();
  const canSend = name.trim() && message.trim();

  const handleSend = () => {
    if (!canSend) return;
    const text = encodeURIComponent(
      `*${t.contact.previewHeader}*\n${t.contact.fromLabel}: ${name}\n\n${message}`
    );
    window.open(`https://wa.me/${WHATSAPP}?text=${text}`, "_blank");
  };

  const now = new Date().toLocaleTimeString(lang === "pt" ? "pt-BR" : "en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <span className="text-xs font-mono text-[var(--accent)]">{t.contact.badge}</span>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-[var(--text)] mt-2 mb-3">
          {t.contact.title}
        </h2>
        <p className="text-[var(--muted)] mb-14">{t.contact.subtitle}</p>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Form */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
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
                className="w-full px-4 py-3 bg-[var(--bg-card)] border border-[var(--border)] rounded-xl text-[var(--text)] placeholder:text-[var(--muted)] focus:outline-none focus:border-[var(--accent)] transition-colors text-sm"
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
                className="w-full px-4 py-3 bg-[var(--bg-card)] border border-[var(--border)] rounded-xl text-[var(--text)] placeholder:text-[var(--muted)] focus:outline-none focus:border-[var(--accent)] transition-colors resize-none text-sm"
              />
            </div>

            <button
              onClick={handleSend}
              disabled={!canSend}
              className="w-full flex items-center justify-center gap-2.5 py-3.5 bg-[#25D366] hover:bg-[#20bd5a] disabled:opacity-40 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-colors duration-200 text-sm"
            >
              <MessageCircle size={17} />
              {t.contact.sendBtn}
            </button>
          </motion.div>

          {/* Terminal preview */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="rounded-2xl border border-[#2A2A2A] overflow-hidden bg-[#0D0D10] font-mono flex flex-col min-h-[320px]">
              {/* Terminal titlebar */}
              <div className="flex items-center gap-2 px-4 py-3 bg-[#161620] border-b border-[#2A2A2A]">
                <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                <span className="w-3 h-3 rounded-full bg-[#28C840]" />
                <span className="text-[11px] text-[#555] ml-2 select-none">
                  {t.contact.terminalTitle}
                </span>
              </div>

              {/* Terminal body */}
              <div className="flex-1 p-5 text-sm">
                <div className="mb-1">
                  <span className="text-[#4EC9B0]">paulo</span>
                  <span className="text-[#555]">@portfolio</span>
                  <span className="text-[#555]">:~$</span>{" "}
                  <span className="text-[#DCDCAA]">{t.contact.terminalPrompt}</span>
                </div>

                <div className="mt-5">
                  {hasContent ? (
                    <div className="bg-[#111118] border border-[#2A2A2A] rounded-xl p-4">
                      {/* WhatsApp bubble style */}
                      <div className="bg-[#005C4B] rounded-xl rounded-tl-sm p-3 inline-block max-w-full">
                        <p className="text-[10px] text-[#25D366] font-bold mb-1.5">
                          {t.contact.previewHeader}
                        </p>
                        {name && (
                          <p className="text-xs text-[#E9EDEF]">
                            <span className="text-[#53BDEB]">{t.contact.fromLabel}:</span>{" "}
                            {name}
                          </p>
                        )}
                        {message && (
                          <p className="text-xs text-[#E9EDEF] mt-2 whitespace-pre-wrap leading-relaxed">
                            {message}
                          </p>
                        )}
                        <p className="text-[9px] text-[#8696A0] text-right mt-2">
                          {now} ✓✓
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 text-[var(--muted)] text-xs">
                      <span className="inline-block w-2 h-4 bg-[var(--accent)] opacity-70 animate-pulse rounded-sm" />
                      <span>{t.contact.terminalEmpty}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
