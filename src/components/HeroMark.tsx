"use client";

import { motion } from "framer-motion";

export function HeroMark({ className = "" }: { className?: string }) {
  return (
    <motion.div
      className={className}
      animate={{ y: [0, -14, 0] }}
      transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
    >
      <svg
        aria-hidden="true"
        role="presentation"
        viewBox="0 0 360 360"
        fill="none"
        className="h-full w-full"
      >
        <circle cx="180" cy="180" r="179" stroke="var(--brand-green)" strokeOpacity="0.12" />
        <circle cx="180" cy="180" r="132" stroke="var(--gold)" strokeOpacity="0.18" />
        <circle cx="180" cy="180" r="86" stroke="var(--brand-green)" strokeOpacity="0.22" />
        <rect
          x="156"
          y="156"
          width="48"
          height="48"
          rx="10"
          transform="rotate(45 180 180)"
          fill="var(--gold)"
          fillOpacity="0.25"
        />
      </svg>
    </motion.div>
  );
}
