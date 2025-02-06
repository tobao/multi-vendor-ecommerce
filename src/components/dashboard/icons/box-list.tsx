import React from "react";

const BoxListIcon: React.FC = () => {
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
        <linearGradient id="boxListGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#6A1B9A" />
          <stop offset="100%" stopColor="#AB47BC" />
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
            fill="url(#boxListGradient)"
            d="M256 96h512q26 0 45 19t19 45v704q0 26-19 45t-45 19H256q-26 0-45-19t-19-45V160q0-26 19-45t45-19zm0 64q-13 0-22.5 9.5T224 192v704q0 13 9.5 22.5T256 928h512q13 0 22.5-9.5T800 896V192q0-13-9.5-22.5T768 160H256zm96 128h320q8 0 14 6t6 14v32q0 8-6 14t-14 6H352q-8 0-14-6t-6-14v-32q0-8 6-14t14-6zm0 160h320q8 0 14 6t6 14v32q0 8-6 14t-14 6H352q-8 0-14-6t-6-14v-32q0-8 6-14t14-6zm0 160h320q8 0 14 6t6 14v32q0 8-6 14t-14 6H352q-8 0-14-6t-6-14v-32q0-8 6-14t14-6z"
          />
        </g>
      </svg>
    </svg>
  );
};

export default BoxListIcon;