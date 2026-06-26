"use client";

import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";
import { useLang } from "@/contexts/LangContext";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/ui/SocialIcons";

const navLinks = [
  { href: "#about", key: "about" },
  { href: "#services", key: "services" },
  { href: "#experience", key: "experience" },
  { href: "#skills", key: "skills" },
  { href: "#projects", key: "projects" },
  { href: "#contact", key: "contact" },
] as const;

const socials = [
  { href: "https://linkedin.com/in/henriqpa", icon: LinkedinIcon, label: "LinkedIn" },
  { href: "https://github.com/paulo2606", icon: GithubIcon, label: "GitHub" },
  { href: "https://instagram.com/paulo.js__", icon: InstagramIcon, label: "Instagram" },
];

export default function Footer() {
  const { t } = useLang();
  const nav = t.nav as Record<string, string>;

  return (
    <footer className="border-t border-[var(--border)] pt-16 pb-8 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Top grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-16"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Brand column */}
          <div className="md:col-span-1">
            <span className="font-heading font-bold text-xl text-[var(--text)]">
              Paulo<span className="text-[var(--accent)]">.</span>
            </span>
            <p className="mt-3 text-xs text-[var(--muted)] leading-relaxed">
              {t.footer.tagline}
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="text-xs font-mono text-[var(--accent)] mb-4 uppercase tracking-widest">
              {t.footer.nav}
            </p>
            <ul className="space-y-2.5">
              {navLinks.map(({ href, key }) => (
                <li key={key}>
                  <a
                    href={href}
                    className="text-xs text-[var(--muted)] hover:text-[var(--accent)] transition-colors duration-200"
                  >
                    {nav[key]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <p className="text-xs font-mono text-[var(--accent)] mb-4 uppercase tracking-widest">
              {t.footer.social}
            </p>
            <ul className="space-y-2.5">
              {socials.map(({ href, icon: Icon, label }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs text-[var(--muted)] hover:text-[var(--accent)] transition-colors duration-200"
                  >
                    <Icon size={13} />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-mono text-[var(--accent)] mb-4 uppercase tracking-widest">
              {t.footer.contactTitle}
            </p>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${t.footer.email}`}
                  className="flex items-center gap-2 text-xs text-[var(--muted)] hover:text-[var(--accent)] transition-colors duration-200 break-all"
                >
                  <Mail size={12} className="shrink-0" />
                  {t.footer.email}
                </a>
              </li>
              <li className="flex items-start gap-2 text-xs text-[var(--muted)]">
                <MapPin size={12} className="shrink-0 mt-0.5" />
                {t.footer.location}
              </li>
              <li className="flex items-center gap-2 text-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                <span className="text-[var(--muted)]">{t.footer.available}</span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 border-t border-[var(--border)]">
          <p className="text-[11px] text-[var(--muted)]">{t.footer.rights}</p>
          <p className="text-[11px] text-[var(--muted)]">{t.footer.made}</p>
        </div>
      </div>
    </footer>
  );
}
