import React from 'react';

export default function FlowerIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-4 h-8 text-[#F5A3B7] ${className}`}
    >
      <path
        d="M12 2C12 2 15 6 15 9C15 10.6569 13.6569 12 12 12C10.3431 12 9 10.6569 9 9C9 6 12 2 12 2Z"
        fill="currentColor"
      />
      <path
        d="M22 12C22 12 18 15 15 15C13.3431 15 12 13.6569 12 12C12 10.3431 13.3431 9 15 9C18 9 22 12 22 12Z"
        fill="currentColor"
        opacity="0.8"
      />
      <path
        d="M12 22C12 22 9 18 9 15C9 13.3431 10.3431 12 12 12C13.6569 12 15 13.3431 15 15C15 18 12 22 12 22Z"
        fill="currentColor"
      />
      <path
        d="M2 12C2 12 6 9 9 9C10.6569 9 12 10.3431 12 12C12 13.6569 10.6569 15 9 15C6 15 2 12 2 12Z"
        fill="currentColor"
        opacity="0.8"
      />
      <circle cx="12" cy="12" r="2.5" fill="#383838" />
    </svg>
  );
}
