"use client";

import React from "react";

const marqueeItems = [
  "SEO Optimization",
  "Google & Meta Ads",
  "Social Media Marketing",
  "Content Creation",
  "Web Design",
  "Email Marketing",
  "Video Marketing",
  "Analytics & Reporting",
  "Marketing Automation",
];

// Duplicating items for seamless loop
const allItems = [...marqueeItems, ...marqueeItems];

export function Marquee() {
  return (
    <div className="ticker w-full overflow-hidden">
      <div className="ticker-track">
        {allItems.map((item, index) => (
          <span key={index} className="flex items-center">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
