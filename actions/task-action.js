"use server";

import { revalidateTag } from "next/cache";
import createTask from "../services/task-service";

export async function tasksAction(workspaceId, _, formData) {
  console.log("workspaceId:", workspaceId);
  console.log("formData", formData);
  const taskTitle = formData.get("title");
  const taskDetails = formData.get("description");
  const tag = formData.get("priority");
  const endDate = formData.get("dueDate");

  const res = await createTask({
    workspaceId,
    taskTitle,
    taskDetails,
    tag,
    endDate,
  });
  revalidateTag("tasks");
  return res;
}
