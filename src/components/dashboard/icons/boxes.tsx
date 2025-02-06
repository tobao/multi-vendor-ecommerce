import React from "react";

const BoxesIcon: React.FC = () => {
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
        <linearGradient id="boxesGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8BC34A" />
          <stop offset="100%" stopColor="#FFEB3B" />
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
            fill="url(#boxesGradient)"
            d="M160 96h256q26 0 45 19t19 45v256q0 26-19 45t-45 19H160q-26 0-45-19t-19-45V160q0-26 19-45t45-19zm0 64q-13 0-22.5 9.5T128 160v256q0 13 9.5 22.5T160 448h256q13 0 22.5-9.5T448 416V160q0-13-9.5-22.5T416 128H160zm448 0h256q26 0 45 19t19 45v256q0 26-19 45t-45 19H608q-26 0-45-19t-19-45V160q0-26 19-45t45-19zm0 64q-13 0-22.5 9.5T576 160v256q0 13 9.5 22.5T608 448h256q13 0 22.5-9.5T896 416V160q0-13-9.5-22.5T864 128H608zM160 544h256q26 0 45 19t19 45v256q0 26-19 45t-45 19H160q-26 0-45-19t-19-45V608q0-26 19-45t45-19zm0 64q-13 0-22.5 9.5T128 608v256q0 13 9.5 22.5T160 896h256q13 0 22.5-9.5T448 864V608q0-13-9.5-22.5T416 576H160z"
          />
        </g>
      </svg>
    </svg>
  );
};

export default BoxesIcon;