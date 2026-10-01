import React from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { BrutalButton } from "./BrutalButton";
import { IconArrowUpRight, IconGithub, IconExternalLink } from "./Icons";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#FFE600] border-t-4 border-black text-black select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-8 border-b-4 border-black">
          {/* Brand & Manifesto */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-black text-white border-2 border-black flex items-center justify-center font-heading font-black text-base shadow-[2px_2px_0px_0px_#000000]">
                AC
              </div>
              <span className="font-heading font-black text-2xl uppercase tracking-tight">
                {PERSONAL_INFO.name}
              </span>
            </div>
            <p className="font-mono text-xs sm:text-sm font-bold text-neutral-900 max-w-md leading-relaxed">
              BUILT WITH NEXT.JS 16, TYPESCRIPT, TAILWIND CSS, AND STRICT NEOBRUTALIST PRINCIPLES:
              ZERO SOFT BLURRED SHADOWS, UNIVERSAL BLACK BORDERS, HARD 4PX OFFSETS.
            </p>
          </div>

          {/* Quick links & Socials */}
          <div className="md:col-span-6 flex flex-col md:items-end gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <BrutalButton
                variant="white"
                size="sm"
                href={PERSONAL_INFO.github}
                target="_blank"
                icon={<IconGithub className="w-3.5 h-3.5" />}
                iconPosition="left"
              >
                GitHub
              </BrutalButton>
              <BrutalButton
                variant="white"
                size="sm"
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                icon={<IconExternalLink className="w-3.5 h-3.5" />}
                iconPosition="left"
              >
                LinkedIn
              </BrutalButton>
              <BrutalButton
                variant="white"
                size="sm"
                href={PERSONAL_INFO.twitter}
                target="_blank"
                icon={<IconExternalLink className="w-3.5 h-3.5" />}
                iconPosition="left"
              >
                Twitter
              </BrutalButton>
            </div>

            <BrutalButton
              variant="black"
              size="sm"
              href="#"
              icon={<IconArrowUpRight className="w-4 h-4 -rotate-45" />}
              iconPosition="right"
            >
              Back To Top
            </BrutalButton>
          </div>
        </div>

        {/* Bottom copyright notice */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs font-bold text-neutral-900">
          <div>
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00E676] border border-black inline-block" />
            <span>ALL SYSTEMS OPERATIONAL // 99.99% SLA</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
