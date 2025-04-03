"use client";

import { useEffect, useRef, useState } from "react";
import { WorkspaceForm } from "./workspace-form";
import Link from "next/link";
import { getWorkspaceById } from "../../../services/work-space";
import { useRouter } from "next/navigation";

export const WorkspaceSidebar = ({
  workspace,
  onAddWorkspace,
  onRenameWorkspace,
  
}) => {
  const workspaceList = workspace.payload;
  const [showPopup, setShowPopup] = useState(false);
  const [activeDropdownIndex, setActiveDropdownIndex] = useState(null);
  const [workspaceName, setWorkspaceName] = useState("");
  const [selectedWorkspaceIndex, setSelectedWorkspaceIndex] = useState(null);
  const [popupMode, setPopupMode] = useState("add"); // "add" or "rename"

  const dropdownRef = useRef(null);

  const colorMap = {
    0: "#FF6B6B", // Red
    1: "#4D7CFE", // Blue
    2: "#1ABC9C", // Green
    3: "#A06AF9", // Purple
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdownIndex(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleOpenAddPopup = () => {
    setPopupMode("add");
    setWorkspaceName("");
    setShowPopup(true);
  };

  const handleOpenRenamePopup = (index, currentName) => {
    setPopupMode("rename");
    setSelectedWorkspaceIndex(index);
    setWorkspaceName(currentName);
    setShowPopup(true);
    setActiveDropdownIndex(null);
  };

  const handleSubmitWorkspace = () => {
    if (workspaceName.trim()) {
      if (popupMode === "add") {
        onAddWorkspace(workspaceName);
      } else if (popupMode === "rename" && selectedWorkspaceIndex !== null) {
        onRenameWorkspace(selectedWorkspaceIndex, workspaceName);
      }
      setWorkspaceName("");
      setShowPopup(false);
    }
  };

  const toggleDropdown = (index) => {
    setActiveDropdownIndex(activeDropdownIndex === index ? null : index);
  };

  const router = useRouter();
  
  const handleNavigate = (workspaceId) => {
    router.push(`/dashboard/${workspaceId}`);
  };




  return (
    <>
      <div className="p-4 bg-white h-full relative">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl text-gray-400 font-medium">Workspace</h2>
          <button
            className="text-gray-400 rounded-md p-1 hover:bg-gray-100"
            onClick={handleOpenAddPopup}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </button>
        </div>

        <div className="space-y-4">
          {workspaceList.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-2 rounded-md hover:bg-gray-100">
              <div className="flex items-center">
                <div
                  className="w-2 h-2 rounded-full mr-3"
                  style={{
                    backgroundColor:
                      colorMap[index % Object.keys(colorMap).length],
                  }}></div>

                <p
                  onClick={() => handleNavigate(item.workspaceId)}
                  className="text-gray-800 font-medium">
                  {item.workspaceName}
                </p>
              </div>
              <div className="relative">
                <button
                  className="text-gray-400"
                  onClick={() => toggleDropdown(index)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round">
                    <circle cx="12" cy="12" r="1"></circle>
                    <circle cx="19" cy="12" r="1"></circle>
                    <circle cx="5" cy="12" r="1"></circle>
                  </svg>
                </button>

                {activeDropdownIndex === index && (
                  <div
                    ref={dropdownRef}
                    className="absolute right-0 mt-2 bg-white rounded-md shadow-lg z-10 w-48 py-1 border border-gray-200">
                    <button
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() =>
                        handleOpenRenamePopup(index, item.workspaceName)
                      }>
                      Rename Workspace
                    </button>
                    <button
                      type="submit"
                      className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100">
                      Delete Workspace
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <WorkspaceForm
        showPopup={showPopup}
        setShowPopup={setShowPopup}
        popupMode={popupMode}
        workspaceName={workspaceName}
        setWorkspaceName={setWorkspaceName}
        handleSubmitWorkspace={handleSubmitWorkspace}
      />
    </>
  );
};
