import React from "react";

const InventoryIcon: React.FC = () => {
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
        <linearGradient id="inventoryGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#673AB7" />
          <stop offset="100%" stopColor="#9575CD" />
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
            fill="url(#inventoryGradient)"
            d="M192 96h640q26 0 45 19t19 45v704q0 26-19 45t-45 19H192q-26 0-45-19t-19-45V160q0-26 19-45t45-19zm0 64q-13 0-22.5 9.5T160 192v704q0 13 9.5 22.5T192 928h640q13 0 22.5-9.5T864 896V192q0-13-9.5-22.5T832 160H192zm128 224h256q13 0 22.5 9.5T608 416v64q0 13-9.5 22.5T576 512H320q-13 0-22.5-9.5T288 480v-64q0-13 9.5-22.5T320 384zm0 192h256q13 0 22.5 9.5T608 608v64q0 13-9.5 22.5T576 704H320q-13 0-22.5-9.5T288 672v-64q0-13 9.5-22.5T320 608z"
          />
        </g>
      </svg>
    </svg>
  );
};

export default InventoryIcon;