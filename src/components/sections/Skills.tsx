"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useLang } from "@/contexts/LangContext";
import {
  SiDotnet, SiTypescript, SiOpenjdk,
  SiReact, SiNextdotjs, SiBlazor,
  SiPostgresql, SiMongodb, SiRedis,
  SiGit, SiDocker, SiKubernetes,
} from "react-icons/si";
import type { IconType } from "react-icons";

function CSharpIcon({ size = 20, style }: { size?: number; style?: React.CSSProperties }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" style={style}>
      <path d="M1.194 7.543v8.913c0 1.103.588 2.122 1.544 2.674l7.718 4.456c.955.552 2.133.552 3.088 0l7.718-4.456c.956-.552 1.544-1.571 1.544-2.674V7.543c0-1.103-.588-2.122-1.544-2.674L13.544.413c-.955-.552-2.133-.552-3.088 0L2.738 4.869C1.782 5.421 1.194 6.44 1.194 7.543zm13.863 5.069-.546.316c-.054.031-.09.086-.09.148v.613c0 .063.036.118.09.149l.546.316c.054.031.12.031.174 0l.547-.316c.054-.031.09-.086.09-.149v-.613c0-.063-.036-.118-.09-.148l-.547-.316c-.054-.031-.12-.031-.174 0zm-2.31-1.334-.546.316c-.054.031-.09.086-.09.148v.613c0 .063.036.118.09.149l.546.316c.054.031.12.031.174 0l.547-.316c.054-.031.09-.086.09-.149v-.613c0-.063-.036-.118-.09-.148l-.547-.316c-.054-.031-.12-.031-.174 0zm2.31-1.334-.546.316c-.054.031-.09.086-.09.148v.613c0 .063.036.118.09.149l.546.316c.054.031.12.031.174 0l.547-.316c.054-.031.09-.086.09-.149v-.613c0-.063-.036-.118-.09-.148l-.547-.316c-.054-.031-.12-.031-.174 0zM12 5.588l5.09 2.94v5.942L12 17.41l-5.09-2.94V8.528L12 5.588z" />
    </svg>
  );
}

type AnyIcon = IconType | typeof CSharpIcon;
interface Skill { name: string; Icon: AnyIcon; color: string; }

// 12 skills → grid 4 × 3 perfeito
const SKILLS: Skill[] = [
  { name: "C#",         Icon: CSharpIcon,   color: "#9B4993" },
  { name: ".NET",       Icon: SiDotnet,     color: "#7B5EA7" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  { name: "Java",       Icon: SiOpenjdk,    color: "#ED8B00" },
  { name: "React",      Icon: SiReact,      color: "#61DAFB" },
  { name: "Next.js",    Icon: SiNextdotjs,  color: "#AAAAAA" },
  { name: "Blazor",     Icon: SiBlazor,     color: "#512BD4" },
  { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
  { name: "MongoDB",    Icon: SiMongodb,    color: "#47A248" },
  { name: "Redis",      Icon: SiRedis,      color: "#DC382D" },
  { name: "Docker",     Icon: SiDocker,     color: "#2496ED" },
  { name: "Kubernetes", Icon: SiKubernetes, color: "#326CE5" },
];

function SkillCard({ skill }: { skill: Skill }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative flex flex-col items-center justify-center gap-3 py-7 px-3 cursor-default overflow-hidden transition-colors duration-150"
      style={{ backgroundColor: hovered ? `${skill.color}18` : "var(--bg)" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* radial glow no hover */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-150"
        style={{
          opacity: hovered ? 1 : 0,
          background: `radial-gradient(circle at center, ${skill.color}22 0%, transparent 68%)`,
        }}
      />

      <skill.Icon
        size={34}
        style={{
          color: hovered ? skill.color : "var(--muted)",
          filter: hovered ? `drop-shadow(0 0 8px ${skill.color}99)` : "none",
          transition: "color 0.15s ease, filter 0.15s ease",
          position: "relative",
          zIndex: 1,
          transform: hovered ? "scale(1.15) translateY(-2px)" : "scale(1)",
          transitionProperty: "color, filter, transform",
        }}
      />
      <span
        className="font-mono text-[10px] text-center leading-tight whitespace-nowrap"
        style={{
          color: hovered ? skill.color : "var(--muted)",
          transition: "color 0.15s ease",
          position: "relative",
          zIndex: 1,
        }}
      >
        {skill.name}
      </span>
    </div>
  );
}

const TITLE_LINES: Record<"pt" | "en", string[]> = {
  pt: ["HABI", "LIDA", "DES"],
  en: ["TECH", "STACK"],
};

export default function Skills() {
  const { t, lang } = useLang();
  const lines = TITLE_LINES[lang];

  return (
    <section id="skills" className="h-screen overflow-hidden pt-16 md:pt-24 px-6 md:px-14 border-t border-[var(--border)] flex flex-col justify-center">
      <div className="max-w-5xl mx-auto w-full">

        {/* Badge */}
        <div className="relative mb-10">
          <span
            aria-hidden="true"
            className="absolute -top-3 -left-1 font-heading font-black leading-none select-none pointer-events-none text-[var(--text)]"
            style={{ fontSize: "clamp(5rem, 13vw, 8rem)", opacity: 0.04 }}
          >
            03
          </span>
          <span className="relative text-xs font-mono text-[var(--accent)]">{t.skills.badge}</span>
        </div>

        {/* Layout: título lateral | grid */}
        <div className="flex items-center gap-12">

          {/* ── Título quebrado por sílabas ── */}
          <motion.div
            className="flex-shrink-0 select-none leading-[0.82] tracking-[-0.04em] font-heading font-black"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {lines.map((line, i) => (
              <div
                key={line}
                style={{
                  fontSize: "clamp(3.8rem, 7.5vw, 6.5rem)",
                  color: i === lines.length - 1 ? "var(--accent)" : "var(--text)",
                }}
              >
                {line}
              </div>
            ))}
          </motion.div>

          {/* ── Grid grudado, sem bordas individuais ── */}
          <motion.div
            className="flex-1 rounded-2xl overflow-hidden"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "1px",
              backgroundColor: "var(--border)",
            }}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          >
            {SKILLS.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
