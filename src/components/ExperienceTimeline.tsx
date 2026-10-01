import React from "react";
import { EXPERIENCES } from "@/data/portfolioData";
import { BrutalCard } from "./BrutalCard";
import { StickerBadge } from "./StickerBadge";

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="py-16 sm:py-24 bg-[#FFFDF5] border-t-4 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-3">
            <StickerBadge variant="teal" size="sm" rotation="-rotate-1">
              CAREER LOGS
            </StickerBadge>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-black tracking-tight uppercase text-black">
            EXPERIENCE & TRACK RECORD
          </h2>
          <p className="font-mono text-sm sm:text-base font-bold text-neutral-700 mt-2 uppercase tracking-wider">
            7+ YEARS SCALING INFRASTRUCTURE AND LEADING ENGINEERING TEAMS
          </p>
        </div>

        {/* Timeline List */}
        <div className="space-y-8">
          {EXPERIENCES.map((exp, idx) => (
            <BrutalCard
              key={exp.id}
              variant="window"
              title={`${exp.company.toUpperCase()} // ${exp.period}`}
              headerBg={
                exp.accentColor === "#FFE600"
                  ? "bg-[#FFE600]"
                  : exp.accentColor === "#00F0FF"
                  ? "bg-[#00F0FF]"
                  : "bg-[#FF66B2]"
              }
              borderWidth="4"
              shadowSize="lg"
              className="bg-white"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b-2 border-black">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="font-mono text-xs font-black uppercase px-2 py-0.5 bg-black text-white border border-black">
                      {exp.period}
                    </span>
                    <span className="font-mono text-xs font-bold text-neutral-600">
                      📍 {exp.location}
                    </span>
                  </div>
                  <h3 className="font-heading font-black text-2xl uppercase tracking-tight text-black">
                    {exp.role}
                  </h3>
                  <div className="font-mono text-sm font-bold text-neutral-800">
                    @ {exp.company}
                  </div>
                </div>

                <div className="hidden sm:block">
                  <StickerBadge variant="white" size="sm">
                    {exp.type}
                  </StickerBadge>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-neutral-900 leading-relaxed font-sans my-4">
                {exp.description}
              </p>

              {/* Achievements */}
              <div className="space-y-2 mb-5">
                <div className="font-mono text-xs font-black uppercase text-black tracking-wider">
                  KEY ACHIEVEMENTS:
                </div>
                {exp.achievements.map((ach, aIdx) => (
                  <div key={aIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-800">
                    <span className="font-mono font-black text-black shrink-0 mt-0.5">▶</span>
                    <span>{ach}</span>
                  </div>
                ))}
              </div>

              {/* Technologies */}
              <div className="pt-3 border-t-2 border-black flex flex-wrap items-center gap-1.5">
                <span className="font-mono text-[11px] font-bold text-neutral-600 mr-1">
                  STACK:
                </span>
                {exp.technologies.map((t, tIdx) => (
                  <span
                    key={tIdx}
                    className="font-mono text-[11px] font-bold px-2 py-0.5 border border-black bg-[#FFFDF5] text-black shadow-[1px_1px_0px_0px_#000000]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </BrutalCard>
          ))}
        </div>
      </div>
    </section>
  );
};
