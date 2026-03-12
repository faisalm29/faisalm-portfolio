import React, { useState, useRef } from "react";

interface TooltipIconProps {
  email: string;
  entryDelay?: number;
  exitDelay?: number;
}

const TooltipIcon: React.FC<TooltipIconProps> = ({
  email,
  entryDelay = 200,
  exitDelay = 300,
}) => {
  const [showTooltip, setShowTooltip] = useState<boolean>(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = (): void => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setShowTooltip(true), entryDelay);
  };

  const handleMouseLeave = (): void => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setShowTooltip(false), exitDelay);
  };

  return (
    <div
      className="relative inline-flex items-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* The Anchor Element */}
      <a
        href={`mailto:${email}`}
        className="text-muted-foreground hover:text-foreground flex items-center justify-center rounded-full p-2 transition-all duration-300 ease-in-out"
        aria-label={`Send email to ${email}`}
        onFocus={handleMouseEnter}
        onBlur={handleMouseLeave}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      </a>

      {/* The Tooltip - Positioned to the Right */}
      {showTooltip && (
        <div
          className="animate-in fade-in slide-in-from-left-1 absolute top-1/2 left-full -translate-y-1/2 pl-3 duration-200"
          role="tooltip"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="bg-primary relative rounded-lg px-3 py-1.5 text-xs font-medium whitespace-nowrap text-white shadow-xl">
            {email}
            {/* Pointer Arrow - Pointing Left */}
            <div className="absolute top-1/2 right-full h-2 w-2 -translate-y-1/2 border-y-[6px] border-r-[6px] border-y-transparent border-r-gray-900" />
          </div>
        </div>
      )}
    </div>
  );
};

export { TooltipIcon };
