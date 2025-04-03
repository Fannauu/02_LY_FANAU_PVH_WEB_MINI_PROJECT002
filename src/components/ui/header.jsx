import React from "react";
import { ChevronRight } from "lucide-react";

const WorkspaceHeader = ({ space, currentSection }) => {
    console.log("space",space);
    //  const workspaceList = workspace.payload.workspaceName;
    // console.log("workspace", workspaceList);
  return (
    <div className="flex items-center p-4 bg-white border-b border-gray-200 w-full">
      <div className="flex items-center text-sm font-medium">
        <span className="text-gray-600 hover:text-gray-900 cursor-pointer">
          Workspace
        </span>
        <ChevronRight className="h-4 w-4 mx-1 text-gray-400" />
        <span className="text-blue-600 font-medium cursor-pointer">
          {currentSection || space}
        </span>
        {/* <span>{workspace.workspaceName}</span> */}
      </div>
      <div className="ml-auto flex items-center">
        <button className="p-2 rounded-full hover:bg-gray-100">
          {/* <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-gray-600">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.73 21a2 2 0 0 1-3.46 0" />
          </svg> */}
        </button>
      </div>
    </div>
  );
};

export default WorkspaceHeader;
