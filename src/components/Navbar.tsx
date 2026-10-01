"use client";

import React, { useState } from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { BrutalButton } from "./BrutalButton";
import { StickerBadge } from "./StickerBadge";
import { IconMail } from "./Icons";

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "PROJECTS", href: "#projects" },
    { label: "TERMINAL", href: "#terminal" },
    { label: "SKILLS", href: "#skills" },
    { label: "EXPERIENCE", href: "#experience" },
    { label: "CONTACT", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-[#FFFDF5] border-b-4 border-black select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-[#FFE600] border-2 border-black shadow-[3px_3px_0px_0px_#000000] flex items-center justify-center font-black font-heading text-lg group-hover:translate-x-[2px] group-hover:translate-y-[2px] group-hover:shadow-[1px_1px_0px_0px_#000000] transition-all">
            AC
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-black text-lg tracking-tight uppercase leading-none">
              {PERSONAL_INFO.name}
            </span>
            <span className="font-mono text-[10px] text-neutral-600 font-bold uppercase tracking-wider">
              FULL-STACK SYSTEMS
            </span>
          </div>
        </a>

        {/* Desktop Status Badge */}
        <div className="hidden lg:flex items-center">
          <StickerBadge variant="green" pulse size="sm" rotation="-rotate-1">
            OPEN TO NEW CONTRACTS & ROLES
          </StickerBadge>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-heading font-bold text-sm tracking-wider uppercase text-black hover:text-black hover:underline decoration-4 underline-offset-8 transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden sm:block">
          <BrutalButton
            variant="yellow"
            size="sm"
            href="#contact"
            icon={<IconMail className="w-4 h-4" />}
            iconPosition="right"
          >
            Hire Me
          </BrutalButton>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          className="md:hidden p-2 bg-white border-2 border-black shadow-[3px_3px_0px_0px_#000000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all cursor-pointer"
        >
          <div className="w-5 h-4 flex flex-col justify-between">
            <span className="w-full h-0.5 bg-black" />
            <span className="w-full h-0.5 bg-black" />
            <span className="w-full h-0.5 bg-black" />
          </div>
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t-2 border-black bg-[#FFFDF5] p-4 space-y-3">
          <div className="pb-2">
            <StickerBadge variant="green" pulse size="sm">
              OPEN TO NEW CONTRACTS & ROLES
            </StickerBadge>
          </div>
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 border-2 border-black bg-white font-heading font-bold uppercase text-sm shadow-[2px_2px_0px_0px_#000000] active:translate-x-[1px] active:translate-y-[1px]"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-2">
            <BrutalButton
              variant="yellow"
              size="md"
              fullWidth
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
            >
              Hire Me
            </BrutalButton>
          </div>
        </div>
      )}
    </header>
  );
};
