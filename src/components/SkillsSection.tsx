import React from "react";
import { SKILL_CATEGORIES } from "@/data/portfolioData";
import { BrutalCard } from "./BrutalCard";
import { StickerBadge, BadgeRotation, BadgeVariant } from "./StickerBadge";
import { IconCpu, IconCode, IconDatabase, IconCloud } from "./Icons";

export const SkillsSection: React.FC = () => {
  const categoryIcons: Record<string, React.ReactNode> = {
    "BACKEND & DISTRIBUTED SYSTEMS": <IconCpu className="w-4 h-4" />,
    "FRONTEND & UI ENGINEERING": <IconCode className="w-4 h-4" />,
    "DATABASES & CACHING": <IconDatabase className="w-4 h-4" />,
    "DEVOPS, CLOUD & INFRASTRUCTURE": <IconCloud className="w-4 h-4" />,
  };

  const rotations: BadgeRotation[] = [
    "-rotate-2",
    "rotate-2",
    "-rotate-1",
    "rotate-1",
    "rotate-0",
    "-rotate-3",
    "rotate-3",
  ];

  return (
    <section id="skills" className="py-16 sm:py-24 bg-[#FFFDF5] border-t-4 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-3">
            <StickerBadge variant="purple" size="sm" rotation="-rotate-2">
              SYSTEM CAPABILITIES
            </StickerBadge>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-black tracking-tight uppercase text-black">
            ENGINEERING STACK & ARSENAL
          </h2>
          <p className="font-mono text-sm sm:text-base font-bold text-neutral-700 mt-2 uppercase tracking-wider">
            BATTLE-TESTED TOOLS FOR HIGH-CONCURRENCY ARCHITECTURES
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <BrutalCard
              key={idx}
              variant="window"
              title={cat.category}
              headerBg={
                cat.color === "#FFE600"
                  ? "bg-[#FFE600]"
                  : cat.color === "#00F0FF"
                  ? "bg-[#00F0FF]"
                  : cat.color === "#FF66B2"
                  ? "bg-[#FF66B2]"
                  : "bg-[#00E676]"
              }
              borderWidth="4"
              shadowSize="lg"
              className="bg-white"
            >
              <div className="flex items-center gap-2 mb-4 pb-2 border-b-2 border-black font-mono text-xs font-bold text-black uppercase">
                {categoryIcons[cat.category]}
                <span>MODULE: {cat.category}</span>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {cat.skills.map((skill, sIdx) => {
                  const rotation = rotations[(idx + sIdx) % rotations.length];
                  const badgeVariant: BadgeVariant = skill.highlight ? "yellow" : "white";

                  return (
                    <StickerBadge
                      key={sIdx}
                      rotation={rotation}
                      variant={badgeVariant}
                      size="md"
                      className="cursor-default"
                    >
                      {skill.name}
                      {skill.level === "Expert" && (
                        <span className="text-[9px] font-black text-black ml-1">★</span>
                      )}
                    </StickerBadge>
                  );
                })}
              </div>
            </BrutalCard>
          ))}
        </div>
      </div>
    </section>
  );
};
