import React from "react";

const CategoriesIcon: React.FC = () => {
  return (
    <svg
      width={50}
      height={50}
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      style={{ color: "currentColor" }}
      className="h-8 w-8 scale-90"
    >
      <defs>
        <linearGradient id="categoriesGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4CAF50" />
          <stop offset="100%" stopColor="#81C784" />
        </linearGradient>
      </defs>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1024 1024"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="currentColor">
          <path
            fill="url(#categoriesGradient)"
            d="M160 96h256q13 0 22.5 9.5T448 128v256q0 13-9.5 22.5T416 416H160q-13 0-22.5-9.5T128 384V128q0-13 9.5-22.5T160 96zm0 416h256q13 0 22.5 9.5T448 544v256q0 13-9.5 22.5T416 832H160q-13 0-22.5-9.5T128 800V544q0-13 9.5-22.5T160 512zm416-416h256q13 0 22.5 9.5T896 128v256q0 13-9.5 22.5T864 416H608q-13 0-22.5-9.5T576 384V128q0-13 9.5-22.5T608 96zm0 416h256q13 0 22.5 9.5T896 544v256q0 13-9.5 22.5T864 832H608q-13 0-22.5-9.5T576 800V544q0-13 9.5-22.5T608 512z"
          />
        </g>
      </svg>
    </svg>
  );
};

export default CategoriesIcon;