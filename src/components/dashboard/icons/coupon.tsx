import React from "react";

const CouponIcon: React.FC = () => {
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
        <linearGradient id="couponsGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4CAF50" />
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
            fill="url(#couponsGradient)"
            d="M856 160h-128V64c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v96H160c-35.3 0-64 28.7-64 64v544c0 35.3 28.7 64 64 64h192v96c0 35.3 28.7 64 64 64h192c35.3 0 64-28.7 64-64v-96h128c35.3 0 64-28.7 64-64V224c0-35.3-28.7-64-64-64zM352 64h192v96H352V64zm320 320H352v192h320V384zm0 320H352v96H192v-96h-32V224h32V128h640v96h32v576h-32v-96H672v96z"
          />
        </g>
      </svg>
    </svg>
  );
};

export default CouponIcon;