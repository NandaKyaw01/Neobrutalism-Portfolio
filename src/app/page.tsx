"use client";

import React, { useState } from "react";
import { PROJECTS, Project } from "@/data/portfolioData";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { MarqueeBanner } from "@/components/MarqueeBanner";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectModal } from "@/components/ProjectModal";
import { TerminalWidget } from "@/components/TerminalWidget";
import { SkillsSection } from "@/components/SkillsSection";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { StickerBadge } from "@/components/StickerBadge";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const categories = ["ALL", "Systems / Backend", "Full-Stack", "Cloud / DevOps"];

  const filteredProjects =
    selectedCategory === "ALL"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#FFFDF5] text-black flex flex-col">
      {/* Top Sticky Navigation */}
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection />

        {/* Marquee Banner separating Hero from Projects */}
        <MarqueeBanner
          bgColor="bg-[#FFE600]"
          borderWidth="4"
          className="shadow-[0px_4px_0px_0px_#000000]"
        />

        {/* Projects Grid Section */}
        <section id="projects" className="py-16 sm:py-24 bg-[#FFFDF5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header & Filter Controls */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <StickerBadge variant="yellow" size="sm" rotation="-rotate-1">
                    PRODUCTION DEPLOYMENTS
                  </StickerBadge>
                </div>
                <h2 className="text-3xl sm:text-5xl font-heading font-black tracking-tight uppercase text-black">
                  FLAGSHIP SYSTEMS & CODE
                </h2>
                <p className="font-mono text-sm sm:text-base font-bold text-neutral-700 mt-2 uppercase tracking-wider">
                  REAL-WORLD DISTRIBUTED ENGINES, CLOUD GATEWAYS, AND RESILIENT APPS
                </p>
              </div>

              {/* Filter Tabs */}
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`
                      font-mono text-xs font-bold uppercase px-3.5 py-1.5
                      border-2 border-black transition-all cursor-pointer
                      ${
                        selectedCategory === cat
                          ? "bg-[#FFE600] text-black shadow-[3px_3px_0px_0px_#000000] translate-x-[1px] translate-y-[1px]"
                          : "bg-white text-black shadow-[3px_3px_0px_0px_#000000] hover:bg-neutral-100 hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_#000000]"
                      }
                      active:translate-x-[3px] active:translate-y-[3px] active:shadow-none
                    `}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Bento Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onInspect={(p) => setActiveProject(p)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Interactive Shell / Terminal Section */}
        <section id="terminal" className="py-16 sm:py-24 bg-[#FFFDF5] border-t-4 border-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10 text-center max-w-3xl mx-auto">
              <div className="inline-flex justify-center mb-3">
                <StickerBadge variant="teal" size="sm" rotation="-rotate-2">
                  RUN REALTIME ROUTINES
                </StickerBadge>
              </div>
              <h2 className="text-3xl sm:text-5xl font-heading font-black tracking-tight uppercase text-black">
                DEVELOPER CLI PLAYGROUND
              </h2>
              <p className="font-mono text-xs sm:text-sm font-bold text-neutral-700 mt-2 uppercase tracking-wider">
                EXECUTE REAL COMMANDS TO AUDIT EXPERTISE, STATS, ARCHITECTURE PHILOSOPHY & EASTER EGGS
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <TerminalWidget />
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <SkillsSection />

        {/* Secondary Marquee Banner */}
        <MarqueeBanner
          bgColor="bg-[#FF66B2]"
          borderWidth="4"
          separator="◆"
          className="shadow-[0px_4px_0px_0px_#000000]"
        />

        {/* Career Experience Timeline */}
        <ExperienceTimeline />

        {/* Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Project Deep Dive Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </div>
  );
}
