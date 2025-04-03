import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Clock, Ellipsis } from "lucide-react";
import React from "react";
import { getTaskByWorkspaceId } from "../../services/work-space";

export default async function CardComponent(workspaceTasks) {
  const listWorkspaceTasks = await workspaceTasks;

  console.log(
    "workspacetask kokok : ",
    listWorkspaceTasks?.workspaceTasks?.payload
  );
  // console.log("task: ", await workspaceTasks);

  // const data = await workspaceTasks;
  // const data = await tasks;
  // console.log("task", data);
  return (
    <div className="grid grid-cols-3 gap-4">
      {listWorkspaceTasks?.workspaceTasks?.payload?.map((item) => (
        <div
          className="w-full border border-gray-300 rounded-xl mt-8 col-span-1"
          key={item.taskId}>
          <div className="p-5">
            <div className="flex justify-between">
              <h2 className="text-xl font-bold capitalize">{item.taskTitle}</h2>
              <Ellipsis />
            </div>

            {/* task detials */}
            <p className="line-clamp-2 text-light-steel-blue my-2 h-12">
              {item.taskDetails}
            </p>

            <div className="flex justify-between items-center mt-4">
              {/* tag */}
              <p className="bg-purple-100 text-purple-500 py-1.5 px-3 rounded-lg">
                {/* DESIGN */}
                {item.tag}
              </p>

              {/* status */}
              <div className={`rounded-full w-8 h-8 bg-watermelon-red`}></div>
            </div>
          </div>

          {/* progress */}
          <div className="flex justify-between items-center border-t border-t-gray-300 p-5">
            <Select>
              <SelectTrigger
                className={`w-36 truncate border-watermelon-red text-watermelon-red`}>
                <SelectValue placeholder={"NOT_STARTED"} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="NOT_STARTED">NOT_STARTED</SelectItem>
                <SelectItem value="IN_PROGRESS">IN_PROGRESS</SelectItem>
                <SelectItem value="FINISHED">FINISHED</SelectItem>
              </SelectContent>
            </Select>

            {/* date */}
            <p className="flex gap-3 text-light-steel-blue">
              <Clock size={22} /> Mar 23, 2025
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
