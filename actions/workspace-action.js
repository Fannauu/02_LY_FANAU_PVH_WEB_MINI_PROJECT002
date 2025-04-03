"use server";

import { revalidateTag } from "next/cache";
import { createWorkspace } from "../services/work-space";

export async function workspaceAction(_, formData) {
  const workspaceName = formData.get("name");
  if (!workspaceName) {
    return { error: "Workspace name is required" };
  }
  try {
    const res = await createWorkspace({ workspaceName });
    // Revalidate the "workspaces" tag to refresh any cached workspace data
    revalidateTag("workspaces");
    return { success: true, payload: res };
  } catch (error) {
    return { error: error.message };
  }
}
