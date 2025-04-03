"use client";

import React, { useActionState, useState } from "react";
import { Plus, X } from "lucide-react";
import { tasksAction } from "../../../actions/task-action";

const NewTaskButton = ({ workspaceId }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  // const handleSubmit = (task) => {
  //   onTaskCreate(task);
  //   closeModal();
  // };

  return (
    <div className="relative">
      <div className="flex items-center gap-3 absolute right-20 bottom-6">
        <button
          onClick={openModal}
          className="flex items-center gap-2 bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition-colors">
          <Plus size={18} className="text-white" />
          <span className="font-medium">New Task</span>
        </button>

        <div className="flex gap-1">
          <div className="w-2 h-2 rounded-full bg-red-500"></div>
          <div className="w-2 h-2 rounded-full bg-green-500"></div>
          <div className="w-2 h-2 rounded-full bg-blue-500"></div>
        </div>
      </div>

      {isOpen && (
        <TaskFormModal onClose={closeModal} workspaceId={workspaceId} />
      )}
    </div>
  );
};

const TaskFormModal = ({ onClose, workspaceId }) => {
  // const [taskData, setTaskData] = useState({
  //   title: "",
  //   description: "",
  //   priority: "medium",
  //   dueDate: "",
  // });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setTaskData((prev) => ({ ...prev, [name]: value }));
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   onSubmit(taskData);
  // };

  const [state, formAction, isPending] = useActionState(
    tasksAction.bind(null, workspaceId),
    null
  );

  // console.log("stata", state);
  // console.log("isPending", isPending);
  return (
    <div className="fixed inset-0  bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold">Create New Task</h2>
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-gray-100">
            <X size={20} />
          </button>
        </div>

        <form action={formAction} className="p-4">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Task Title
            </label>
            <input
              type="text"
              name="title"
              placeholder="Enter task title"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              name="description"
              placeholder="Enter task description"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-24"
            />
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Priority
              </label>
              <select
                name="priority"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="design">DESIGN</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Due Date
              </label>
              <input
                type="date"
                name="dueDate"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="flex justify-end gap-2 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
              Create Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewTaskButton;
