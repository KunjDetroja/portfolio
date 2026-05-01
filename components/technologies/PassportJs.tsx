import React from "react";

export default function PassportJs({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 128"
      className={className}
      fill="currentColor"
    >
      <path d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64 64-28.7 64-64S99.3 0 64 0zm0 10.5c29.5 0 53.5 24 53.5 53.5S93.5 117.5 64 117.5 10.5 93.5 10.5 64 34.5 10.5 64 10.5z" />
      <path d="M64 19.3c-24.7 0-44.7 20-44.7 44.7s20 44.7 44.7 44.7 44.7-20 44.7-44.7-20-44.7-44.7-44.7zm0 8.4c20 0 36.3 16.3 36.3 36.3S84 100.3 64 100.3 27.7 84 27.7 64 44 27.7 64 27.7z" />
      <circle cx="64" cy="64" r="20" />
    </svg>
  );
}
