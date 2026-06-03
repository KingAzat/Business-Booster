export default function Logo({ className = "h-9 w-auto", theme = "light" }: { className?: string, theme?: "light" | "dark" }) {
  const textColor = theme === "dark" ? "white" : "#1C2957";
  const boosterColor = theme === "dark" ? "#60A5FA" : "#2563EB";
  const dividerColor = theme === "dark" ? "#334155" : "#CBD5E1";

  return (
    <svg viewBox="0 0 160 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Icon Background */}
      <rect x="0" y="0" width="40" height="40" rx="8" fill={theme === "dark" ? "#2563EB" : "#1C2957"} />
      {/* BB Text */}
      <text x="20" y="27" fill="white" fontFamily="Georgia, serif" fontWeight="bold" fontSize="22" textAnchor="middle">BB</text>
      
      {/* Divider */}
      <path d="M48 8 L48 32 M47 8 L49 8 M47 32 L49 32" stroke={dividerColor} strokeWidth="1.5" strokeLinecap="round" />
      
      {/* Business Text */}
      <text x="58" y="18" fill={textColor} fontFamily="var(--font-sans)" fontWeight="700" fontSize="16">Business</text>
      {/* Booster Text */}
      <text x="58" y="35" fill={boosterColor} fontFamily="var(--font-sans)" fontWeight="700" fontSize="16">Booster</text>
    </svg>
  );
}
