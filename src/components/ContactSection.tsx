"use client";

import React, { useState } from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { BrutalButton } from "./BrutalButton";
import { StickerBadge } from "./StickerBadge";
import { IconMail, IconCopy, IconCheck, IconGithub, IconExternalLink } from "./Icons";

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "Full-Stack Development",
    message: "",
  });

  const handleCopy = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#FFFDF5] border-t-4 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Left Column: Direct Info & Social Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <StickerBadge variant="green" pulse size="sm" rotation="-rotate-2">
                  DIRECT ACCESS
                </StickerBadge>
              </div>
              <h2 className="text-3xl sm:text-5xl font-heading font-black tracking-tight uppercase text-black">
                LET&apos;S TALK ARCHITECTURE
              </h2>
              <p className="font-mono text-sm sm:text-base font-bold text-neutral-700 mt-2 uppercase tracking-wider">
                LOOKING FOR A LEAD ARCHITECT, SENIOR FULL-STACK CRAFTSMAN, OR HIGH-OCTANE CONSULTANT?
              </p>
            </div>

            <p className="text-sm sm:text-base text-neutral-900 leading-relaxed font-sans">
              I am currently accepting select contract engagements, distributed systems architectural reviews, and full-time technical leadership opportunities.
            </p>

            {/* Email Box */}
            <div className="border-4 border-black bg-[#FFE600] p-4 sm:p-5 shadow-[6px_6px_0px_0px_#000000] space-y-3">
              <div className="font-mono text-xs font-black uppercase text-black">
                DIRECT INBOX TRANSMISSION:
              </div>
              <div className="font-mono text-sm sm:text-base font-bold text-black break-all">
                {PERSONAL_INFO.email}
              </div>
              <BrutalButton
                variant="white"
                size="sm"
                onClick={handleCopy}
                icon={copied ? <IconCheck className="w-4 h-4 text-[#00AA55]" /> : <IconCopy className="w-4 h-4" />}
                iconPosition="left"
              >
                {copied ? "Address Copied!" : "Copy Email Address"}
              </BrutalButton>
            </div>

            {/* Social Links */}
            <div className="space-y-2 pt-2">
              <div className="font-mono text-xs font-bold uppercase text-black">
                VERIFIED PROFILES:
              </div>
              <div className="flex flex-wrap gap-2.5">
                <BrutalButton
                  variant="white"
                  size="sm"
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  icon={<IconGithub className="w-4 h-4" />}
                  iconPosition="left"
                >
                  GitHub
                </BrutalButton>
                <BrutalButton
                  variant="white"
                  size="sm"
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  icon={<IconExternalLink className="w-4 h-4" />}
                  iconPosition="left"
                >
                  LinkedIn
                </BrutalButton>
                <BrutalButton
                  variant="white"
                  size="sm"
                  href={PERSONAL_INFO.twitter}
                  target="_blank"
                  icon={<IconExternalLink className="w-4 h-4" />}
                  iconPosition="left"
                >
                  Twitter / X
                </BrutalButton>
              </div>
            </div>
          </div>

          {/* Right Column: Transmission Form */}
          <div className="lg:col-span-7">
            <div className="border-4 border-black bg-white shadow-[8px_8px_0px_0px_#000000] overflow-hidden">
              {/* Window Header */}
              <div className="bg-[#00F0FF] border-b-4 border-black px-4 py-2.5 flex items-center justify-between select-none">
                <div className="flex items-center gap-2">
                  <span className="w-3.5 h-3.5 rounded-full bg-[#FF5F56] border-2 border-black inline-block" />
                  <span className="w-3.5 h-3.5 rounded-full bg-[#FFBD2E] border-2 border-black inline-block" />
                  <span className="w-3.5 h-3.5 rounded-full bg-[#27C93F] border-2 border-black inline-block" />
                  <span className="ml-2 font-mono text-xs font-black uppercase tracking-wider text-black">
                    SEND_MESSAGE.EXE
                  </span>
                </div>
                <span className="font-mono text-[10px] font-bold uppercase bg-white border border-black px-2 py-0.5">
                  TLS ENCRYPTED
                </span>
              </div>

              {/* Form Content */}
              <div className="p-6 sm:p-8">
                {submitted ? (
                  <div className="bg-[#FFE600] border-4 border-black p-6 sm:p-8 text-center space-y-4 shadow-[4px_4px_0px_0px_#000000]">
                    <div className="w-12 h-12 bg-black text-[#00E676] border-2 border-black flex items-center justify-center mx-auto shadow-[3px_3px_0px_0px_#000000]">
                      <IconCheck className="w-7 h-7" />
                    </div>
                    <h3 className="font-heading font-black text-2xl uppercase tracking-tight text-black">
                      TRANSMISSION RECEIVED!
                    </h3>
                    <p className="font-mono text-xs sm:text-sm text-neutral-900 leading-relaxed font-bold">
                      Thank you, {formData.name}. Your packet was logged successfully. I will inspect your specs and respond within 24 hours.
                    </p>
                    <BrutalButton
                      variant="black"
                      size="sm"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: "", email: "", projectType: "Full-Stack Development", message: "" });
                      }}
                    >
                      Send Another Transmission
                    </BrutalButton>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name Input */}
                      <div>
                        <label
                          htmlFor="name"
                          className="block font-mono text-xs font-black uppercase text-black mb-1.5"
                        >
                          YOUR NAME *
                        </label>
                        <input
                          id="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Linus Torvalds"
                          className="w-full bg-[#FFFDF5] border-2 border-black p-3 font-mono text-sm text-black placeholder:text-neutral-500 shadow-[3px_3px_0px_0px_#000000] focus:shadow-[5px_5px_0px_0px_#000000] focus:outline-none transition-all"
                        />
                      </div>

                      {/* Email Input */}
                      <div>
                        <label
                          htmlFor="email"
                          className="block font-mono text-xs font-black uppercase text-black mb-1.5"
                        >
                          YOUR EMAIL *
                        </label>
                        <input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="e.g. linus@kernel.org"
                          className="w-full bg-[#FFFDF5] border-2 border-black p-3 font-mono text-sm text-black placeholder:text-neutral-500 shadow-[3px_3px_0px_0px_#000000] focus:shadow-[5px_5px_0px_0px_#000000] focus:outline-none transition-all"
                        />
                      </div>
                    </div>

                    {/* Project Scope */}
                    <div>
                      <label
                        htmlFor="projectType"
                        className="block font-mono text-xs font-black uppercase text-black mb-1.5"
                      >
                        PROJECT SCOPE / ROLE TYPE
                      </label>
                      <select
                        id="projectType"
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full bg-[#FFFDF5] border-2 border-black p-3 font-mono text-sm text-black shadow-[3px_3px_0px_0px_#000000] focus:shadow-[5px_5px_0px_0px_#000000] focus:outline-none transition-all cursor-pointer"
                      >
                        <option value="Full-Stack Development">Full-Stack Application Development</option>
                        <option value="Distributed Systems">Distributed Systems & API Architecture</option>
                        <option value="Technical Leadership">Full-Time Staff / Lead Role</option>
                        <option value="Performance Audit">Latency & Infrastructure Performance Audit</option>
                      </select>
                    </div>

                    {/* Message Textarea */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block font-mono text-xs font-black uppercase text-black mb-1.5"
                      >
                        PROJECT SPECIFICATION & TIMELINE *
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Brief summary of your product goals, architectural constraints, timeline, and stack requirements..."
                        className="w-full bg-[#FFFDF5] border-2 border-black p-3 font-mono text-sm text-black placeholder:text-neutral-500 shadow-[3px_3px_0px_0px_#000000] focus:shadow-[5px_5px_0px_0px_#000000] focus:outline-none transition-all resize-y"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <BrutalButton
                        type="submit"
                        variant="yellow"
                        size="lg"
                        fullWidth
                        icon={<IconMail className="w-5 h-5" />}
                        iconPosition="right"
                      >
                        Dispatch Message
                      </BrutalButton>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
