import { auth } from "../auth";

export const workspaceService = async () => {
  try {
    // const cookieStore = await cookies();
    // const token = cookieStore.get("authjs.session-token");
    // console.log("tokenData", token.value);
    const session = await auth();

    const res = await fetch(
      `http://96.9.81.187:8080/api/v1/workspaces?pageNo=0&pageSize=10&sortBy=workspaceId&sortDirection=ASC`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session?.token}`,
        },
        next: {
          tags: ["workspaces"], // Tag this request for revalidation
          revalidate: 0, // Do not cache the response (always fetch fresh)
        },
      }
    );
    // console.log("resWorkspace", res);
    const data = await res.json();
    // console.log("getWorkspace", data);
    return data;
  } catch (error) {
    console.error("Error fetching workspace:", error.message);
    return null;
  }
};

export async function createWorkspace({ workspaceName }) {
  try {
    // Validate input
    if (!workspaceName || typeof workspaceName !== "string") {
      throw new Error("Invalid workspace name");
    }

    console.log("Creating workspace:", workspaceName);
    const session = await auth();

    if (!session?.token) {
      throw new Error("Authentication token not found");
    }

    const res = await fetch(`http://96.9.81.187:8080/api/v1/workspace`, {
      method: "POST",
      headers: {
        Accept: "*/*",
        Authorization: `Bearer ${session.token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        workspaceName: workspaceName.trim(), // Remove leading/trailing whitespace
      }),
      next: {
        tags: ["workspaces"], // Tag this request for revalidation
        revalidate: 0, // Do not cache the response
      },
    });

    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(
        `Failed to create workspace: ${res.status} - ${errorText}`
      );
    }

    const data = await res.json();
    return data.payload;
  } catch (error) {
    console.error("Error creating workspace:", error);
    throw error;
  }
}

export async function getTaskByWorkspaceId(workspaceTasksid) {
  console.log("workspace id", workspaceTasksid);

  try {
    // if (!workspaceId || typeof workspaceId !== "string") {
    //   throw new Error("Invalid workspace ID");
    // }

    const session = await auth();
    if (!session?.token) {
      throw new Error("Authentication token not found");
    }

    const res = await fetch(
      `http://96.9.81.187:8080/api/v1/tasks/workspace/${workspaceTasksid}?pageNo=0&pageSize=10&sortBy=taskId&sortDirection=ASC`,
      {
        method: "GET",
        headers: {
          Accept: "*/*",
          Authorization: `Bearer ${session.token}`,
          "Content-Type": "application/json",
        },
        next: {
          tags: [`workspace-${workspaceTasksid}`],
          revalidate: 60,
        },
      }
    );

    // if (!res.ok) {
    //   const errorText = await res.text();
    //   throw new Error(
    //     `Failed to fetch workspace: ${res.status} - ${errorText}`
    //   );
    // }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error(
      `Error fetching workspace with ID ${workspaceTasksid}:`,
      error
    );
    throw error;
  }
}
