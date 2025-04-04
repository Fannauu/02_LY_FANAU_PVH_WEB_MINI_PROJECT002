"use client"


import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Clock, Ellipsis } from "lucide-react";

// Expect `card` as a single task object
export default function CardComponent({ card, onStatusChange }) {
  const [status, setStatus] = useState(card.status || "NOT_STARTED");

  const handleStatusChange = (newStatus) => {
    setStatus(newStatus);
    // Call the parent function to handle the status change (optional)
    if (onStatusChange) {
      onStatusChange(card.taskId, newStatus);
    }
  };

  return (
    <div className="w-full border border-gray-300 rounded-xl mt-8 col-span-1">
      <div className="p-5">
        <div className="flex justify-between">
          <h2 className="text-xl font-bold capitalize">{card.taskTitle}</h2>
          <Ellipsis />
        </div>

        {/* Task details */}
        <p className="line-clamp-2 text-light-steel-blue my-2 h-12">
          {card.taskDetails}
        </p>

        <div className="flex justify-between items-center mt-4">
          {/* Tag */}
          <p className="bg-purple-100 text-purple-500 py-1.5 px-3 rounded-lg">
            {card.tag}
          </p>

          {/* Status */}
          <div className={`rounded-full w-8 h-8 bg-watermelon-red`}></div>
        </div>
      </div>

      {/* Progress */}
      <div className="flex justify-between items-center border-t border-t-gray-300 p-5">
        <Select value={status} onValueChange={handleStatusChange}>
          <SelectTrigger className="w-36 truncate border-watermelon-red text-watermelon-red">
            <SelectValue placeholder={status} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="NOT_STARTED">NOT_STARTED</SelectItem>
            <SelectItem value="IN_PROGRESS">IN_PROGRESS</SelectItem>
            <SelectItem value="FINISHED">FINISHED</SelectItem>
          </SelectContent>
        </Select>

        {/* Date */}
        <p className="flex gap-3 text-light-steel-blue">
          <Clock size={22} /> {card.dueDate || "Mar 23, 2025"}
        </p>
      </div>
    </div>
  );
}
