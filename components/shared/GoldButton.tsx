import Link from "next/link";

interface GoldButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: "solid" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  type?: "button" | "submit";
  external?: boolean;
}

export default function GoldButton({
  href,
  onClick,
  children,
  variant = "solid",
  size = "md",
  className = "",
  type = "button",
  external = false,
}: GoldButtonProps) {
  const sizeClasses = {
    sm: "px-5 py-2.5 text-sm",
    md: "px-7 py-3.5 text-sm",
    lg: "px-9 py-4 text-base",
  };

  const baseClasses = `inline-flex items-center justify-center gap-2 font-josefin font-500 tracking-[0.12em] uppercase transition-all duration-300 ${sizeClasses[size]} ${className}`;

  const variantClasses =
    variant === "solid"
      ? "bg-gold text-bg hover:bg-gold-accent active:scale-[0.98]"
      : "border border-gold text-gold hover:bg-gold hover:text-bg active:scale-[0.98]";

  const classes = `${baseClasses} ${variantClasses}`;

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
