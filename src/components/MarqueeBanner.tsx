import React from "react";
import { MARQUEE_ITEMS } from "@/data/portfolioData";

export interface MarqueeBannerProps {
  items?: string[];
  bgColor?: string;
  textColor?: string;
  borderWidth?: "2" | "4";
  separator?: string;
  speed?: "fast" | "normal" | "slow";
  className?: string;
}

export const MarqueeBanner: React.FC<MarqueeBannerProps> = ({
  items = MARQUEE_ITEMS,
  bgColor = "bg-[#FFE600]",
  textColor = "text-black",
  borderWidth = "4",
  separator = "★",
  className = "",
}) => {
  const borderClass = borderWidth === "4" ? "border-y-4 border-black" : "border-y-2 border-black";

  // Duplicate items 4 times to ensure seamless infinite looping on ultra-wide screens
  const repeatedItems = [...items, ...items, ...items, ...items];

  return (
    <div
      className={`
        relative w-full overflow-hidden select-none py-3 sm:py-4
        ${borderClass}
        ${bgColor}
        ${textColor}
        ${className}
      `}
      aria-hidden="true"
    >
      <div className="flex animate-marquee whitespace-nowrap">
        {repeatedItems.map((item, index) => (
          <div key={index} className="inline-flex items-center gap-4 sm:gap-6 mx-3 sm:mx-4">
            <span className="font-heading font-black text-sm sm:text-base md:text-lg tracking-widest uppercase">
              {item}
            </span>
            <span className="text-black font-mono text-sm sm:text-base opacity-75">
              {separator}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
