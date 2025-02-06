import React from "react";

const ProductsIcon: React.FC = () => {
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
        <linearGradient id="productsGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E53935" />
          <stop offset="100%" stopColor="#FF7043" />
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
            fill="url(#productsGradient)"
            d="M256 96h512q26 0 45 19t19 45v608q0 26-19 45t-45 19H256q-26 0-45-19t-19-45V160q0-26 19-45t45-19zm0 64q-13 0-22.5 9.5T224 192v608q0 13 9.5 22.5T256 832h512q13 0 22.5-9.5T800 800V192q0-13-9.5-22.5T768 160H256zm192 96h128q13 0 22.5 9.5T608 288v64q0 13-9.5 22.5T576 384H320q-13 0-22.5-9.5T288 352v-64q0-13 9.5-22.5T320 256zm0 192h128q13 0 22.5 9.5T608 480v64q0 13-9.5 22.5T576 576H320q-13 0-22.5-9.5T288 544v-64q0-13 9.5-22.5T320 512zm0 192h128q13 0 22.5 9.5T608 768v64q0 13-9.5 22.5T576 864H320q-13 0-22.5-9.5T288 832v-64q0-13 9.5-22.5T320 768z"
          />
        </g>
      </svg>
    </svg>
  );
};

export default ProductsIcon;