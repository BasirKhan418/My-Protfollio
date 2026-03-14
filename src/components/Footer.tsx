"use client";
import React from "react";

export const Footer = () => {
  return (
    <div className="p-4 text-center justify-center text-xs text-neutral-600 border-t border-neutral-200/70">
      <span className="font-semibold">{new Date().getFullYear()} </span>
      &#8212; Built by Basir Khan
    </div>
  );
};
