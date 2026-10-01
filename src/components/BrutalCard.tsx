import React from "react";

export interface BrutalCardProps {
  children: React.ReactNode;
  variant?: "plain" | "window" | "titlebar";
  title?: string;
  badge?: string;
  badgeColor?: string;
  borderWidth?: "2" | "4";
  shadowSize?: "sm" | "md" | "lg" | "xl";
  bgColor?: string;
  headerBg?: string;
  className?: string;
  headerClassName?: string;
  bodyClassName?: string;
  interactive?: boolean;
}

export const BrutalCard: React.FC<BrutalCardProps> = ({
  children,
  variant = "plain",
  title,
  badge,
  badgeColor = "bg-[#FFE600]",
  borderWidth = "2",
  shadowSize = "md",
  bgColor = "bg-white",
  headerBg = "bg-white",
  className = "",
  headerClassName = "",
  bodyClassName = "",
  interactive = false,
}) => {
  const borderClass = borderWidth === "4" ? "border-4 border-black" : "border-2 border-black";

  const shadowClasses: Record<string, string> = {
    sm: "shadow-[2px_2px_0px_0px_#000000]",
    md: "shadow-[4px_4px_0px_0px_#000000]",
    lg: "shadow-[6px_6px_0px_0px_#000000]",
    xl: "shadow-[8px_8px_0px_0px_#000000]",
  };

  const interactiveClasses = interactive
    ? "transition-all duration-150 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_#000000]"
    : "";

  return (
    <div
      className={`
        ${borderClass}
        ${shadowClasses[shadowSize]}
        ${bgColor}
        ${interactiveClasses}
        overflow-hidden flex flex-col
        ${className}
      `}
    >
      {/* Retro Window Bar with 3 Colored Dots */}
      {variant === "window" && (
        <div
          className={`
            border-b-2 border-black px-3 py-2 flex items-center justify-between
            ${headerBg}
            ${headerClassName}
          `}
        >
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#FF5F56] border-2 border-black inline-block" />
            <span className="w-3 h-3 rounded-full bg-[#FFBD2E] border-2 border-black inline-block" />
            <span className="w-3 h-3 rounded-full bg-[#27C93F] border-2 border-black inline-block" />
          </div>
          {title && (
            <span className="font-mono text-xs font-bold tracking-wider uppercase text-black truncate max-w-[200px] sm:max-w-xs">
              {title}
            </span>
          )}
          {badge ? (
            <span
              className={`
                text-[10px] font-mono font-bold uppercase px-1.5 py-0.5
                border border-black ${badgeColor} text-black
              `}
            >
              {badge}
            </span>
          ) : (
            <span className="w-9" />
          )}
        </div>
      )}

      {/* Monospace Title Bar */}
      {variant === "titlebar" && (
        <div
          className={`
            border-b-2 border-black px-4 py-2 flex items-center justify-between
            ${headerBg}
            ${headerClassName}
          `}
        >
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-black tracking-widest uppercase text-black">
              {title || "SYSTEM_MODULE"}
            </span>
          </div>
          {badge && (
            <span
              className={`
                text-[10px] font-mono font-bold uppercase px-2 py-0.5
                border border-black ${badgeColor} text-black
              `}
            >
              {badge}
            </span>
          )}
        </div>
      )}

      {/* Card Content */}
      <div className={`p-4 sm:p-6 flex-1 flex flex-col ${bodyClassName}`}>{children}</div>
    </div>
  );
};
