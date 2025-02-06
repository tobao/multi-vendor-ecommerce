import React from "react";

const ShippingIcon: React.FC = () => {
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
        <linearGradient id="shippingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4CAF50" />
          <stop offset="100%" stopColor="#8BC34A" />
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
            fill="url(#shippingGradient)"
            d="M160 160h512q26 0 45 19t19 45v160h128q20 0 37 9.5t29 26.5l96 128q11 14 11 32v128q0 26-19 45t-45 19h-64q-26 0-45-19t-19-45h-256q0 26-19 45t-45 19H192q-26 0-45-19t-19-45V224q0-26 19-45t45-19zm128 576q26 0 45-19t19-45-19-45-45-19-45 19-19 45 19 45 45 19zm512 0q26 0 45-19t19-45-19-45-45-19-45 19-19 45 19 45 45 19zM192 224v384h28q19-36 54-57.5t78-21.5q43 0 78 21.5t54 57.5h164v-384H192zm576 256h157l-69-92H768v92zm0 128h96q0 26 19 45t45 19h64v-64H768v-64z"
          />
        </g>
      </svg>
    </svg>
  );
};

export default ShippingIcon;