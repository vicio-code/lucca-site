// src/components/icons/BriefcaseIcon.tsx
import React from "react";

interface BriefcaseIconProps {
  className?: string; // Optional className for Tailwind styling
}

const BriefcaseIcon: React.FC<BriefcaseIconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className} // Allow Tailwind classes to be passed
  >
    <path d="M22 9v11h-20v-11h20zm2-2h-24v15h24v-15zm-15-5c-1.104 0-2 .896-2 2v2h2v-1.5c0-.276.224-.5.5-.5h5c.276 0 .5.224.5.5v1.5h2v-2c0-1.104-.896-2-2-2h-6z" />
  </svg>
);

export default BriefcaseIcon;
