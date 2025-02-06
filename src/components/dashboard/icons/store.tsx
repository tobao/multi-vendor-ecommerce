import React from "react";

const StoreIcon: React.FC = () => {
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
        <linearGradient id="storeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF9800" />
          <stop offset="100%" stopColor="#FFC107" />
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
            fill="url(#storeGradient)"
            d="M128 160h768q20 0 34 14t14 34v224q0 26-19 45t-45 19H160q-26 0-45-19t-19-45V208q0-20 14-34t34-14zm768 64H128v160h768V224zm-256 352h128q13 0 22.5 9.5T800 608v256q0 13-9.5 22.5T768 896H576q-13 0-22.5-9.5T544 864V608q0-13 9.5-22.5T576 576zm-384 0h256q13 0 22.5 9.5T480 608v256q0 13-9.5 22.5T448 896H192q-13 0-22.5-9.5T160 864V608q0-13 9.5-22.5T192 576zm32 64v192h192V640H224zm384 0v192h128V640H608z"
          />
        </g>
      </svg>
    </svg>
  );
};

export default StoreIcon;