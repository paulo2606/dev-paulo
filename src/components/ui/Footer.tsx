"use client";

import { Heart } from "lucide-react";
import { useLang } from "@/contexts/LangContext";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/ui/SocialIcons";

const socials = [
  { href: "https://linkedin.com/in/henriqpa", icon: LinkedinIcon, label: "LinkedIn" },
  { href: "https://github.com/paulo2606", icon: GithubIcon, label: "GitHub" },
  { href: "https://instagram.com/paulo.js__", icon: InstagramIcon, label: "Instagram" },
];

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="border-t border-[var(--border)] py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-[var(--muted)] flex items-center gap-1.5">
          {t.footer.made}
          <Heart size={13} className="text-[var(--accent)] fill-[var(--accent)]" />
          {t.footer.by}
        </p>

        <div className="flex items-center gap-5">
          {socials.map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors duration-200"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
