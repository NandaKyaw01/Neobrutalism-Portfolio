"use client";

import React, { useState, useRef, useEffect } from "react";
import { TERMINAL_COMMANDS } from "@/data/portfolioData";
import { IconTerminal } from "./Icons";

interface TerminalHistoryItem {
  id: string;
  command: string;
  output: string;
}

export const TerminalWidget: React.FC = () => {
  const [inputVal, setInputVal] = useState("");
  const [history, setHistory] = useState<TerminalHistoryItem[]>([
    {
      id: "init",
      command: "welcome",
      output: `ALEX_CHEN_SHELL v2.4.0 (x86_64-antigravity-linux)
Type "help" to view executable commands, or click the quick action chips below.`,
    },
  ]);
  const screenRef = useRef<HTMLDivElement>(null);
  const isMountedRef = useRef(false);

  useEffect(() => {
    // Only scroll the internal terminal container on subsequent commands, never on initial page load
    if (!isMountedRef.current) {
      isMountedRef.current = true;
      return;
    }
    if (screenRef.current) {
      screenRef.current.scrollTop = screenRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (cmdText: string) => {
    const trimmed = cmdText.trim().toLowerCase();
    if (!trimmed) return;

    if (trimmed === "clear") {
      setHistory([]);
      setInputVal("");
      return;
    }

    const output =
      TERMINAL_COMMANDS[trimmed] ||
      `bash: command not found: "${trimmed}". Type "help" for a list of available routines.`;

    setHistory((prev) => [
      ...prev,
      {
        id: Math.random().toString(36).substring(7),
        command: cmdText,
        output,
      },
    ]);
    setInputVal("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleCommand(inputVal);
  };

  return (
    <div className="w-full border-4 border-black bg-white shadow-[6px_6px_0px_0px_#000000] overflow-hidden">
      {/* Window Title Bar */}
      <div className="bg-[#FFE600] border-b-4 border-black px-4 py-2.5 flex items-center justify-between select-none">
        <div className="flex items-center gap-2">
          <span className="w-3.5 h-3.5 rounded-full bg-[#FF5F56] border-2 border-black inline-block" />
          <span className="w-3.5 h-3.5 rounded-full bg-[#FFBD2E] border-2 border-black inline-block" />
          <span className="w-3.5 h-3.5 rounded-full bg-[#27C93F] border-2 border-black inline-block" />
          <span className="ml-2 font-mono text-xs font-black uppercase tracking-wider text-black flex items-center gap-1.5">
            <IconTerminal className="w-3.5 h-3.5" />
            <span>DEV_SHELL // INTERACTIVE TERMINAL</span>
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-1 text-[11px] font-mono font-bold bg-white px-2 py-0.5 border-2 border-black shadow-[2px_2px_0px_0px_#000000]">
          <span className="w-2 h-2 rounded-full bg-[#00E676] animate-pulse inline-block" />
          <span>CONNECTED</span>
        </div>
      </div>

      {/* Quick Action Chips */}
      <div className="bg-[#FFFDF5] border-b-2 border-black px-4 py-2 flex flex-wrap items-center gap-2">
        <span className="font-mono text-[10px] uppercase font-bold text-neutral-600 mr-1">
          QUICK RUN:
        </span>
        {["help", "whoami", "skills", "projects", "uptime", "matrix", "clear"].map((cmd) => (
          <button
            key={cmd}
            type="button"
            onClick={() => handleCommand(cmd)}
            className="font-mono text-xs font-bold uppercase px-2.5 py-0.5 bg-white border border-black shadow-[2px_2px_0px_0px_#000000] hover:bg-[#FFE600] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_#000000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all cursor-pointer"
          >
            ${cmd}
          </button>
        ))}
      </div>

      {/* Terminal Screen */}
      <div
        ref={screenRef}
        className="bg-[#121212] p-4 sm:p-6 font-mono text-xs sm:text-sm text-neutral-200 min-h-[260px] max-h-[380px] overflow-y-auto"
      >
        <div className="space-y-4">
          {history.map((item) => (
            <div key={item.id} className="space-y-1">
              <div className="flex items-center gap-2 text-white">
                <span className="text-[#00F0FF] font-bold">alex@engineer</span>
                <span className="text-neutral-500">:</span>
                <span className="text-[#FFE600] font-bold">~</span>
                <span className="text-neutral-400">$</span>
                <span className="text-white font-bold">{item.command}</span>
              </div>
              <div className="text-[#00E676] whitespace-pre-wrap pl-4 border-l-2 border-neutral-700 leading-relaxed">
                {item.output}
              </div>
            </div>
          ))}
        </div>

        {/* Input prompt */}
        <form onSubmit={handleSubmit} className="flex items-center gap-2 mt-4 pt-2 border-t border-neutral-800">
          <span className="text-[#00F0FF] font-bold">alex@engineer</span>
          <span className="text-neutral-500">:</span>
          <span className="text-[#FFE600] font-bold">~</span>
          <span className="text-neutral-400">$</span>
          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="type command (e.g. 'skills', 'help')..."
            className="flex-1 bg-transparent text-white font-mono text-xs sm:text-sm outline-none placeholder:text-neutral-600"
            autoCapitalize="off"
            autoCorrect="off"
            spellCheck="false"
          />
        </form>
      </div>
    </div>
  );
};
