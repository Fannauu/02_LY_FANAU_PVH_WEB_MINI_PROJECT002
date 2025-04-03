"use client";

import React, { useState, useRef, useEffect, useActionState } from "react";
import { workspaceAction } from "../../../actions/workspace-action";

// WorkspaceForm Component
export const WorkspaceForm = ({
  showPopup,
  setShowPopup,
  popupMode,
  workspaceName,
  setWorkspaceName,
  handleSubmitWorkspace,
}) => {

  const [state, formAction, isPending] = useActionState(workspaceAction, null)
  console.log("state",state)
  

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSubmitWorkspace();
  };

  return (
    <>
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-80 animate-fade-in">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">
                {popupMode === "add" ? "Add New Workspace" : "Rename Workspace"}
              </h3>
              <button
                onClick={() => setShowPopup(false)}
                className="text-gray-400 hover:text-gray-600">
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
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            <form action={formAction}
              >
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-medium mb-2"
                  htmlFor="workspace-name">
                  {popupMode === "add"
                    ? "Workspace Name"
                    : "New Workspace Name"}
                </label>
                <input
                  name="name"
                  id="workspace-name"
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder={
                    popupMode === "add"
                      ? "Enter workspace name"
                      : "Enter new workspace name"
                  }
                  value={workspaceName}
                  onChange={(e) => setWorkspaceName(e.target.value)}
                  autoFocus
                  required
                />
              </div>
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  className="px-4 py-2 text-sm text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50"
                  onClick={() => setShowPopup(false)}>
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-sm text-white bg-blue-600 rounded-md hover:bg-blue-700">
                  {popupMode === "add" ? "Add Workspace" : "Rename"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
