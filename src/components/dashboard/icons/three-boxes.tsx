import React from "react";

const ThreeBoxesIcon: React.FC = () => {
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
        <linearGradient id="threeBoxesGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1E88E5" />
          <stop offset="100%" stopColor="#64B5F6" />
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
            fill="url(#threeBoxesGradient)"
            d="M160 128h256q26 0 45 19t19 45v256q0 26-19 45t-45 19H160q-26 0-45-19t-19-45V192q0-26 19-45t45-19zm0 64q-13 0-22.5 9.5T128 192v256q0 13 9.5 22.5T160 480h256q13 0 22.5-9.5T448 448V192q0-13-9.5-22.5T416 160H160zm448-64h256q26 0 45 19t19 45v256q0 26-19 45t-45 19H608q-26 0-45-19t-19-45V192q0-26 19-45t45-19zm0 64q-13 0-22.5 9.5T576 192v256q0 13 9.5 22.5T608 480h256q13 0 22.5-9.5T896 448V192q0-13-9.5-22.5T864 160H608zM160 544h256q26 0 45 19t19 45v256q0 26-19 45t-45 19H160q-26 0-45-19t-19-45V608q0-26 19-45t45-19zm0 64q-13 0-22.5 9.5T128 608v256q0 13 9.5 22.5T160 896h256q13 0 22.5-9.5T448 864V608q0-13-9.5-22.5T416 576H160z"
          />
        </g>
      </svg>
    </svg>
  );
};

export default ThreeBoxesIcon;