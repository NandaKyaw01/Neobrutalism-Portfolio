import React from "react";
import { Project } from "@/data/portfolioData";
import { BrutalButton } from "./BrutalButton";
import { StickerBadge } from "./StickerBadge";
import { IconArrowUpRight, IconGithub, IconTerminal } from "./Icons";

export interface ProjectCardProps {
  project: Project;
  onInspect: (project: Project) => void;
  className?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onInspect,
  className = "",
}) => {
  return (
    <article
      className={`
        border-4 border-black bg-white shadow-[6px_6px_0px_0px_#000000]
        flex flex-col justify-between overflow-hidden
        transition-all duration-150 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_#000000]
        ${className}
      `}
    >
      {/* Top Window Bar */}
      <div
        className="border-b-4 border-black px-4 py-2.5 flex items-center justify-between select-none"
        style={{ backgroundColor: project.color }}
      >
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#FF5F56] border-2 border-black inline-block" />
          <span className="w-3 h-3 rounded-full bg-[#FFBD2E] border-2 border-black inline-block" />
          <span className="w-3 h-3 rounded-full bg-[#27C93F] border-2 border-black inline-block" />
          <span className="ml-2 font-mono text-xs font-bold uppercase tracking-wider text-black truncate max-w-[180px] sm:max-w-xs">
            {project.category}
          </span>
        </div>

        {project.featured && (
          <span className="font-mono text-[11px] font-black uppercase px-2 py-0.5 bg-black text-white border border-black tracking-wider">
            ★ FEATURED
          </span>
        )}
      </div>

      {/* Card Content Area */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-5">
        <div>
          <h3 className="font-heading font-black text-xl sm:text-2xl uppercase tracking-tight text-black">
            {project.title}
          </h3>
          <p className="font-mono text-xs text-neutral-700 font-bold mt-1">
            {project.subtitle}
          </p>

          <p className="font-sans text-sm text-neutral-800 leading-relaxed mt-3">
            {project.description}
          </p>
        </div>

        {/* Hard-Bordered Screenshot / Mockup Frame */}
        <div className="border-2 border-black bg-[#121212] p-3 shadow-[3px_3px_0px_0px_#000000]">
          <div className="flex items-center justify-between border-b border-neutral-700 pb-1.5 mb-2 text-[10px] font-mono text-neutral-400">
            <span className="flex items-center gap-1">
              <IconTerminal className="w-3 h-3 text-[#00F0FF]" />
              <span className="text-[#00F0FF]">LIVE_OUTPUT.LOG</span>
            </span>
            <span className="text-[#00E676] font-bold">ACTIVE</span>
          </div>
          <pre className="font-mono text-[11px] text-[#00E676] overflow-x-auto whitespace-pre-wrap leading-tight">
            {project.mockupSnippet}
          </pre>
        </div>

        {/* Key Metrics Row in JetBrains Mono */}
        <div className="grid grid-cols-3 gap-2 border-2 border-black bg-[#FFFDF5] p-2.5 shadow-[2px_2px_0px_0px_#000000]">
          {project.metrics.map((metric, i) => (
            <div key={i} className="text-center">
              <div className="font-mono text-[9px] font-bold uppercase tracking-wider text-neutral-600 truncate">
                {metric.label}
              </div>
              <div className="font-mono text-xs sm:text-sm font-black text-black mt-0.5 truncate">
                {metric.value}
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.stack.slice(0, 4).map((tech, i) => (
            <StickerBadge key={i} variant="white" size="sm">
              {tech}
            </StickerBadge>
          ))}
          {project.stack.length > 4 && (
            <span className="font-mono text-[10px] font-bold px-1.5 py-0.5 border border-black bg-neutral-100 text-black">
              +{project.stack.length - 4} MORE
            </span>
          )}
        </div>

        {/* Action Row */}
        <div className="pt-3 border-t-2 border-black flex items-center justify-between gap-2">
          <BrutalButton
            variant="black"
            size="sm"
            onClick={() => onInspect(project)}
            icon={<IconArrowUpRight className="w-3.5 h-3.5" />}
          >
            Deep Dive
          </BrutalButton>

          <div className="flex items-center gap-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} on GitHub`}
              className="p-2 border-2 border-black bg-white shadow-[2px_2px_0px_0px_#000000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all duration-100"
            >
              <IconGithub className="w-4 h-4 text-black" />
            </a>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open live demo for ${project.title}`}
              className="p-2 border-2 border-black bg-[#FFE600] shadow-[2px_2px_0px_0px_#000000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all duration-100"
            >
              <IconArrowUpRight className="w-4 h-4 text-black" />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};
