"use client";

import React, { useEffect } from "react";
import { Project } from "@/data/portfolioData";
import { BrutalButton } from "./BrutalButton";
import { StickerBadge } from "./StickerBadge";
import { IconClose, IconExternalLink, IconGithub, IconTerminal, IconCheck } from "./Icons";

export interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/75 backdrop-none"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl my-auto bg-[#FFFDF5] border-4 border-black shadow-[8px_8px_0px_0px_#000000] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Retro Window Bar */}
        <div
          className="border-b-4 border-black px-4 py-3 flex items-center justify-between select-none"
          style={{ backgroundColor: project.color }}
        >
          <div className="flex items-center gap-2">
            <span className="w-3.5 h-3.5 rounded-full bg-[#FF5F56] border-2 border-black inline-block" />
            <span className="w-3.5 h-3.5 rounded-full bg-[#FFBD2E] border-2 border-black inline-block" />
            <span className="w-3.5 h-3.5 rounded-full bg-[#27C93F] border-2 border-black inline-block" />
            <span className="ml-2 font-mono text-xs font-bold uppercase tracking-wider text-black">
              SYS://ARCH_INSPECTION/{project.id.toUpperCase()}.TSX
            </span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="w-8 h-8 flex items-center justify-center bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none active:translate-x-[2px] active:translate-y-[2px] transition-all cursor-pointer"
          >
            <IconClose className="w-4 h-4 text-black" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-8 max-h-[80vh] overflow-y-auto space-y-6">
          {/* Header Title & Badges */}
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <StickerBadge variant="white" size="sm">
                {project.category}
              </StickerBadge>
              {project.featured && (
                <StickerBadge variant="yellow" size="sm" rotation="-rotate-1">
                  ★ FEATURED ARCHITECTURE
                </StickerBadge>
              )}
            </div>
            <h2
              id="modal-project-title"
              className="text-2xl sm:text-3xl font-heading font-black uppercase tracking-tight text-black"
            >
              {project.title}
            </h2>
            <p className="font-mono text-xs sm:text-sm font-semibold text-neutral-700 mt-1">
              {project.subtitle}
            </p>
          </div>

          {/* Hard Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {project.metrics.map((metric, i) => (
              <div
                key={i}
                className="bg-white border-2 border-black p-3 shadow-[3px_3px_0px_0px_#000000]"
              >
                <div className="font-mono text-[10px] uppercase tracking-wider text-neutral-600 font-bold">
                  {metric.label}
                </div>
                <div className="font-mono text-lg sm:text-xl font-black text-black mt-0.5">
                  {metric.value}
                </div>
              </div>
            ))}
          </div>

          {/* Description */}
          <div className="bg-[#FFE600]/15 border-2 border-black p-4">
            <h3 className="font-heading font-bold uppercase text-sm mb-1 text-black">
              System Overview
            </h3>
            <p className="text-sm leading-relaxed text-neutral-900 font-sans">
              {project.description}
            </p>
          </div>

          {/* Architectural Deep Dive */}
          <div className="space-y-4">
            <h3 className="font-heading font-black text-lg uppercase tracking-wide border-b-2 border-black pb-1">
              Engineering Breakdown
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border-2 border-black bg-white p-4 shadow-[3px_3px_0px_0px_#000000]">
                <div className="font-mono text-xs font-black uppercase text-[#FF5F56] mb-1">
                  [!] CHALLENGE & BOTTLENECK
                </div>
                <p className="text-xs sm:text-sm text-neutral-800 leading-relaxed font-sans">
                  {project.architectureDetails.problem}
                </p>
              </div>

              <div className="border-2 border-black bg-white p-4 shadow-[3px_3px_0px_0px_#000000]">
                <div className="font-mono text-xs font-black uppercase text-[#00AA55] mb-1">
                  [✓] ARCHITECTURAL SOLUTION
                </div>
                <p className="text-xs sm:text-sm text-neutral-800 leading-relaxed font-sans">
                  {project.architectureDetails.solution}
                </p>
              </div>
            </div>

            {/* Highlights */}
            <div className="border-2 border-black bg-white p-4 shadow-[3px_3px_0px_0px_#000000]">
              <div className="font-mono text-xs font-black uppercase text-black mb-2">
                KEY TECHNICAL HIGHLIGHTS:
              </div>
              <ul className="space-y-2">
                {project.architectureDetails.keyHighlights.map((hl, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-neutral-900">
                    <span className="font-mono font-bold text-black shrink-0 mt-0.5">▶</span>
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Hard-Bordered Screenshot / Terminal Execution Frame */}
          <div>
            <div className="font-mono text-xs font-bold uppercase text-black mb-1.5 flex items-center gap-1.5">
              <IconTerminal className="w-4 h-4" />
              <span>TERMINAL TELEMETRY / REPLAY SNIPPET</span>
            </div>
            <div className="bg-[#121212] border-2 border-black p-4 text-[#00E676] font-mono text-xs leading-relaxed overflow-x-auto shadow-[4px_4px_0px_0px_#000000]">
              <pre className="whitespace-pre-wrap">{project.mockupSnippet}</pre>
            </div>
          </div>

          {/* Tech Stack Badges */}
          <div>
            <div className="font-mono text-xs font-bold uppercase text-black mb-2">
              DEPLOYED TECH STACK:
            </div>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech, i) => (
                <StickerBadge key={i} variant="white" size="sm">
                  {tech}
                </StickerBadge>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-4 border-t-2 border-black flex flex-wrap items-center justify-end gap-3">
            <BrutalButton
              variant="white"
              size="md"
              href={project.githubUrl}
              target="_blank"
              icon={<IconGithub className="w-4 h-4" />}
              iconPosition="left"
            >
              Source Code
            </BrutalButton>
            <BrutalButton
              variant="yellow"
              size="md"
              href={project.liveUrl}
              target="_blank"
              icon={<IconExternalLink className="w-4 h-4" />}
              iconPosition="right"
            >
              Launch Live Demo
            </BrutalButton>
          </div>
        </div>
      </div>
    </div>
  );
};
