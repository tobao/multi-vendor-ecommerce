import React from "react";

const DashboardIcon: React.FC = () => {
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
        <linearGradient id="dashboardGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2196F3" />
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
            fill="url(#dashboardGradient)"
            d="M192 128h640q26 0 45 19t19 45v640q0 26-19 45t-45 19H192q-26 0-45-19t-19-45V192q0-26 19-45t45-19zm64 128v128q0 13 9.5 22.5T288 416h128q13 0 22.5-9.5T448 384V256q0-13-9.5-22.5T416 224H288q-13 0-22.5 9.5T256 256zm192 320v128q0 13 9.5 22.5T480 736h128q13 0 22.5-9.5T640 704V576q0-13-9.5-22.5T608 544H480q-13 0-22.5 9.5T448 576zM256 576v192q0 13 9.5 22.5T288 800h128q13 0 22.5-9.5T448 768V576q0-13-9.5-22.5T416 544H288q-13 0-22.5 9.5T256 576zm320-320v128q0 13 9.5 22.5T608 416h128q13 0 22.5-9.5T768 384V256q0-13-9.5-22.5T736 224H608q-13 0-22.5 9.5T576 256z"
          />
        </g>
      </svg>
    </svg>
  );
};

export default DashboardIcon;