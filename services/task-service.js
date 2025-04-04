import { auth } from "../auth";

export default async function createTask({
  workspaceId,
  taskTitle,
  taskDetails,
  tag,
  endDate,
}) {
  const session = await auth();
  console.log("session", session);

  const res = await fetch(
    `http://96.9.81.187:8080/api/v1/task/workspace/${workspaceId}`,
    {
      method: "POST",
      headers: {
        Accept: "*/*",
        "Content-Type": "application/json",
        Authorization: `Bearer ${session.token}`,
      },
      next: {
        tags: [`workspace`],
        revalidate: 0,
      },
      body: JSON.stringify({
        taskTitle: taskTitle,
        taskDetails: taskDetails,
        tag: tag,
        endDate: endDate,
      }),
    }
  );

  const data = await res.json();
  return data;
}
