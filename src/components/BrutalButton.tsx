import React from "react";

export type ButtonVariant = "yellow" | "pink" | "teal" | "green" | "white" | "black";
export type ButtonSize = "sm" | "md" | "lg";

export interface BrutalButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  target?: string;
  rel?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  yellow: "bg-[#FFE600] text-black hover:bg-[#FFDE00]",
  pink: "bg-[#FF66B2] text-black hover:bg-[#FF4D9E]",
  teal: "bg-[#00F0FF] text-black hover:bg-[#00D9E6]",
  green: "bg-[#00E676] text-black hover:bg-[#00CC68]",
  white: "bg-[#FFFFFF] text-black hover:bg-[#F2F2F2]",
  black: "bg-[#000000] text-[#FFFFFF] hover:bg-[#1A1A1A]",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-3.5 py-1.5 text-xs tracking-wider",
  md: "px-5 py-2.5 text-sm tracking-wide",
  lg: "px-7 py-3.5 text-base tracking-wider",
};

export const BrutalButton: React.FC<BrutalButtonProps> = ({
  variant = "yellow",
  size = "md",
  href,
  target,
  rel,
  icon,
  iconPosition = "right",
  fullWidth = false,
  className = "",
  children,
  disabled,
  ...props
}) => {
  const baseClasses = `
    inline-flex items-center justify-center gap-2
    font-bold uppercase font-heading select-none
    border-2 border-black
    shadow-[4px_4px_0px_0px_#000000]
    translate-x-0 translate-y-0
    hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#000000]
    active:translate-x-[4px] active:translate-y-[4px] active:shadow-none
    transition-all duration-100 ease-out cursor-pointer
    disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-[4px_4px_0px_0px_#000000]
    ${variantStyles[variant]}
    ${sizeStyles[size]}
    ${fullWidth ? "w-full" : "w-auto"}
    ${className}
  `.trim().replace(/\s+/g, " ");

  const content = (
    <>
      {icon && iconPosition === "left" && <span className="inline-flex shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span className="inline-flex shrink-0">{icon}</span>}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : rel}
        className={baseClasses}
      >
        {content}
      </a>
    );
  }

  return (
    <button disabled={disabled} className={baseClasses} {...props}>
      {content}
    </button>
  );
};
