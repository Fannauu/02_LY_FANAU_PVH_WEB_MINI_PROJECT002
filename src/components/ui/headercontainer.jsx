import React from "react";

const HeaderComponent = () => {
  return (
    <div className="w-full ">
      <div className="flex justify-between items-center px-6 py-4">
        <h1 className="text-xl font-semibold text-gray-800">HRD Design</h1>
        <button className="text-gray-400 hover:text-gray-600">
          <svg
            className="w-5 h-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default HeaderComponent;
