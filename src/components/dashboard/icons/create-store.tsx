import React from "react";

const CreateStoreIcon: React.FC = () => {
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
        <linearGradient id="createStoreGradient" x1="0%" y1="0%" x2="100%" y2="100%">
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
            fill="url(#createStoreGradient)"
            d="M192 160h640q26 0 45 19t19 45v160q0 26-19 45t-45 19H192q-26 0-45-19t-19-45V224q0-26 19-45t45-19zm-64 416h256q13 0 22.5 9.5T416 608v160q0 13-9.5 22.5T384 800H128q-13 0-22.5-9.5T96 768V608q0-13 9.5-22.5T128 576zm320 0h384q13 0 22.5 9.5T864 608v160q0 13-9.5 22.5T832 800H448q-13 0-22.5-9.5T416 768V608q0-13 9.5-22.5T448 576zM480 320h64q13 0 22.5 9.5T576 352v64h64q13 0 22.5 9.5T672 448v64q0 13-9.5 22.5T640 544h-64v64q0 13-9.5 22.5T544 640h-64q-13 0-22.5-9.5T448 608v-64h-64q-13 0-22.5-9.5T352 512v-64q0-13 9.5-22.5T384 416h64v-64q0-13 9.5-22.5T480 320z"
          />
        </g>
      </svg>
    </svg>
  );
};

export default CreateStoreIcon;