import React from "react";

export type BadgeRotation =
  | "-rotate-3"
  | "-rotate-2"
  | "-rotate-1"
  | "rotate-0"
  | "rotate-1"
  | "rotate-2"
  | "rotate-3";

export type BadgeVariant =
  | "yellow"
  | "pink"
  | "teal"
  | "green"
  | "purple"
  | "orange"
  | "white"
  | "black";

export interface StickerBadgeProps {
  children: React.ReactNode;
  rotation?: BadgeRotation;
  variant?: BadgeVariant;
  pulse?: boolean;
  pulseColor?: string;
  icon?: React.ReactNode;
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
}

const variantStyles: Record<BadgeVariant, string> = {
  yellow: "bg-[#FFE600] text-black",
  pink: "bg-[#FF66B2] text-black",
  teal: "bg-[#00F0FF] text-black",
  green: "bg-[#00E676] text-black",
  purple: "bg-[#B388FF] text-black",
  orange: "bg-[#FF5E3A] text-black",
  white: "bg-[#FFFFFF] text-black",
  black: "bg-[#000000] text-white",
};

const sizeStyles = {
  sm: "px-2 py-0.5 text-[11px]",
  md: "px-3 py-1 text-xs",
  lg: "px-4 py-1.5 text-sm",
};

export const StickerBadge: React.FC<StickerBadgeProps> = ({
  children,
  rotation = "rotate-0",
  variant = "yellow",
  pulse = false,
  pulseColor = "bg-[#00E676]",
  icon,
  size = "md",
  className = "",
  onClick,
}) => {
  const isClickable = !!onClick;

  return (
    <span
      onClick={onClick}
      className={`
        inline-flex items-center gap-1.5
        font-mono font-bold uppercase tracking-wider
        border-2 border-black
        shadow-[2px_2px_0px_0px_#000000]
        select-none whitespace-nowrap
        ${rotation}
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${
          isClickable
            ? "cursor-pointer transition-transform hover:scale-105 active:scale-95 active:shadow-none"
            : ""
        }
        ${className}
      `.trim().replace(/\s+/g, " ")}
    >
      {pulse && (
        <span className="relative flex h-2 w-2 mr-0.5">
          <span
            className={`animate-ping absolute inline-flex h-full w-full rounded-full ${pulseColor} opacity-75`}
          />
          <span
            className={`relative inline-flex rounded-full h-2 w-2 border border-black ${pulseColor}`}
          />
        </span>
      )}
      {icon && <span className="inline-flex shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};
