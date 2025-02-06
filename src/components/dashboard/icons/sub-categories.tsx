import React from "react";

const SubCategoriesIcon: React.FC = () => {
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
        <linearGradient id="subCategoriesGradient" x1="0%" y1="0%" x2="100%" y2="100%">
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
            fill="url(#subCategoriesGradient)"
            d="M256 128h128q13 0 22.5 9.5T416 160v256q0 13-9.5 22.5T384 448H256q-13 0-22.5-9.5T224 416V160q0-13 9.5-22.5T256 128zm0 64q-13 0-22.5 9.5T224 192v256q0 13 9.5 22.5T256 480h128q13 0 22.5-9.5T416 448V192q0-13-9.5-22.5T384 160H256zm256 0h128q13 0 22.5 9.5T672 160v256q0 13-9.5 22.5T640 448H512q-13 0-22.5-9.5T480 416V160q0-13 9.5-22.5T512 128zm0 64q-13 0-22.5 9.5T480 192v256q0 13 9.5 22.5T512 480h128q13 0 22.5-9.5T672 448V192q0-13-9.5-22.5T640 160H512zM256 576h128q13 0 22.5 9.5T416 608v256q0 13-9.5 22.5T384 896H256q-13 0-22.5-9.5T224 864V608q0-13 9.5-22.5T256 576zm0 64q-13 0-22.5 9.5T224 640v256q0 13 9.5 22.5T256 896h128q13 0 22.5-9.5T416 864V640q0-13-9.5-22.5T384 608H256z"
          />
        </g>
      </svg>
    </svg>
  );
};

export default SubCategoriesIcon;