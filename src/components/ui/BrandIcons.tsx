import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export function InstagramIcon({ size = 18, className = "", ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export function LinkedInIcon({ size = 18, className = "", ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function BehanceIcon({ size = 18, className = "", ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* 'B' letter */}
      <path d="M4 6h4.5a3 3 0 0 1 2.5 4.6A3.2 3.2 0 0 1 12 14a3.5 3.5 0 0 1-3.5 3.5H4V6z" />
      <line x1="4" y1="11.5" x2="10.5" y2="11.5" />
      {/* 'e' mark */}
      <path d="M14.5 13.5a2.5 2.5 0 1 0 5 0c0-1.5-1-2.5-2.5-2.5s-2.5 1-2.5 2.5zm0 0h5" />
      <line x1="15" y1="8" x2="19" y2="8" />
    </svg>
  );
}

export function FloralFusionEmblem({ size = 18, className = "", ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Botanical floral petal structure */}
      <path d="M12 2C13.5 6 16 8.5 20 10C16 11.5 13.5 14 12 18C10.5 14 8 11.5 4 10C8 8.5 10.5 6 12 2Z" />
      <circle cx="12" cy="10" r="1.5" />
      <path d="M12 18V22" />
      <path d="M9 20C10.5 20.5 12 20.5 12 20.5" />
    </svg>
  );
}

export function KhairaEmblem({ size = 18, className = "", ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Spindle & needlework haute couture emblem */}
      <path d="M12 2L15 8L21 9L16.5 13.5L18 20L12 16.5L6 20L7.5 13.5L3 9L9 8L12 2Z" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}
