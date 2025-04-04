import React from "react";

const FavoriteMenu = () => {
  return (
    <div className="w-full bg-white rounded-xl  p-4">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-xl text-gray-500 font-medium">Favorite</h2>
        <button className="text-gray-500">
          <svg
            className="w-6 h-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
          </svg>
        </button>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between items-center py-3 cursor-pointer">
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-red-500 mr-3"></div>
            <span className="text-gray-800 font-medium">HRD Design</span>
          </div>
          <button className="text-gray-500">⋯</button>
        </div>

        <div className="flex justify-between items-center py-3 cursor-pointer">
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-blue-500 mr-3"></div>
            <span className="text-gray-800 font-medium">Website Design</span>
          </div>
          <button className="text-gray-500">⋯</button>
        </div>
      </div>

      <div className="mt-5 pt-10 border-t border-gray-100">
        <button className="flex items-center text-gray-500">
          <svg
            className="w-5 h-5 mr-2"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
            <polyline points="16 17 21 12 16 7"></polyline>
            <line x1="21" y1="12" x2="9" y2="12"></line>
          </svg>
          Logout
        </button>
      </div>
    </div>
  );
};

export default FavoriteMenu;
