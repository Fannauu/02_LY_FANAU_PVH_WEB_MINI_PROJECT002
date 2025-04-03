"use server";

import createTask from "../services/task-service";

// export async function tasksAction(workspaceId, _, formData) {
//   console.log("workspaceId : ", workspaceId);
//   const title = formData.get("title");
//   const description = formData.get("description");
//   const priority = formData.get("priority");
//   const dueDate = formData.get("dueDate");

//   const res = await createTask({ workspaceId, title, description, priority, dueDate });
//   console.log("ress", res);

//   return res.json();
// }

// "use server";

// import createTask from "../services/task-service";

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
  revalidateTag("workspaces");

  return res.json();
}
