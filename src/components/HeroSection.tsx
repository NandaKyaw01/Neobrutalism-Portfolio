"use client";

import React, { useState } from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { BrutalButton } from "./BrutalButton";
import { StickerBadge } from "./StickerBadge";
import { IconCopy, IconCheck, IconArrowUpRight, IconTerminal, IconSparkles } from "./Icons";

export const HeroSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section className="relative w-full py-12 sm:py-20 lg:py-24 bg-[#FFFDF5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Headline, Bio & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            {/* Badges Bar */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <StickerBadge variant="yellow" rotation="-rotate-2" size="md">
                ⚡ SENIOR ARCHITECT
              </StickerBadge>
              <StickerBadge variant="pink" rotation="rotate-2" size="md">
                👾 DISTRIBUTED SYSTEMS
              </StickerBadge>
              <StickerBadge variant="teal" rotation="-rotate-1" size="md">
                🚀 NEXT.JS SPECIALIST
              </StickerBadge>
            </div>

            {/* Main Title */}
            <div>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-heading font-black tracking-tight uppercase text-black leading-[1.05]">
                BUILDING <span className="bg-[#FFE600] px-2 border-2 border-black inline-block -rotate-1">BULLETPROOF</span> SYSTEMS & BOLD WEBSITES.
              </h1>
              <p className="font-mono text-sm sm:text-base font-bold text-neutral-700 uppercase mt-4 tracking-wider">
                {PERSONAL_INFO.tagline}
              </p>
            </div>

            {/* Bio paragraph */}
            <p className="text-base sm:text-lg text-neutral-900 leading-relaxed font-sans max-w-2xl">
              {PERSONAL_INFO.bio}
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              <BrutalButton
                variant="yellow"
                size="lg"
                href="#projects"
                icon={<IconArrowUpRight className="w-5 h-5" />}
                iconPosition="right"
              >
                Explore Projects
              </BrutalButton>

              <BrutalButton
                variant="white"
                size="lg"
                onClick={handleCopyEmail}
                icon={copied ? <IconCheck className="w-5 h-5 text-[#00AA55]" /> : <IconCopy className="w-5 h-5" />}
                iconPosition="left"
              >
                {copied ? "Email Copied!" : "Copy Email"}
              </BrutalButton>

              <BrutalButton
                variant="teal"
                size="lg"
                href="#terminal"
                icon={<IconTerminal className="w-5 h-5" />}
                iconPosition="right"
              >
                Run Terminal
              </BrutalButton>
            </div>
          </div>

          {/* Right Column: Hero Graphic Card & Live Stats */}
          <div className="lg:col-span-5 space-y-5">
            {/* Developer Identity Card */}
            <div className="border-4 border-black bg-white shadow-[8px_8px_0px_0px_#000000] overflow-hidden">
              {/* Window Bar */}
              <div className="bg-[#FF66B2] border-b-4 border-black px-4 py-2.5 flex items-center justify-between select-none">
                <div className="flex items-center gap-2">
                  <span className="w-3.5 h-3.5 rounded-full bg-[#FF5F56] border-2 border-black inline-block" />
                  <span className="w-3.5 h-3.5 rounded-full bg-[#FFBD2E] border-2 border-black inline-block" />
                  <span className="w-3.5 h-3.5 rounded-full bg-[#27C93F] border-2 border-black inline-block" />
                  <span className="ml-2 font-mono text-xs font-black uppercase tracking-wider text-black">
                    PROFILE_V2.BIN
                  </span>
                </div>
                <span className="font-mono text-[10px] font-bold uppercase bg-black text-white px-2 py-0.5 border border-black">
                  ONLINE
                </span>
              </div>

              {/* Graphic Body */}
              <div className="p-6 bg-[#FFFDF5] space-y-4">
                <div className="relative border-4 border-black bg-[#FFE600] p-6 shadow-[4px_4px_0px_0px_#000000] flex items-center gap-4">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-black text-white border-2 border-black flex items-center justify-center font-black font-heading text-2xl sm:text-3xl shrink-0 shadow-[3px_3px_0px_0px_#000000]">
                    AC
                  </div>
                  <div>
                    <div className="font-heading font-black text-xl sm:text-2xl uppercase tracking-tight text-black">
                      {PERSONAL_INFO.name}
                    </div>
                    <div className="font-mono text-xs font-bold text-neutral-800">
                      {PERSONAL_INFO.handle}
                    </div>
                    <div className="mt-1">
                      <StickerBadge variant="green" pulse size="sm">
                        AVAILABLE NOW
                      </StickerBadge>
                    </div>
                  </div>
                </div>

                {/* Key Metrics Grid */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  {PERSONAL_INFO.stats.map((stat, i) => (
                    <div
                      key={i}
                      className="border-2 border-black bg-white p-3 shadow-[3px_3px_0px_0px_#000000]"
                    >
                      <div className="font-mono text-[10px] font-bold uppercase text-neutral-600 tracking-wider">
                        {stat.label}
                      </div>
                      <div className="font-mono text-lg sm:text-xl font-black text-black mt-0.5">
                        {stat.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Micro Callout */}
            <div className="border-2 border-black bg-[#00F0FF] p-3 shadow-[4px_4px_0px_0px_#000000] flex items-center justify-between">
              <span className="font-mono text-xs font-bold uppercase text-black flex items-center gap-2">
                <IconSparkles className="w-4 h-4" />
                <span>ARCHITECTURAL PRINCIPLE: ZERO FLUFF, MAXIMUM SPEED</span>
              </span>
              <span className="font-mono text-xs font-black text-black">100%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
