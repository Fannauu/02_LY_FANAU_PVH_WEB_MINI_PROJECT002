import CardComponent from "@/components/card";
import { getTaskByWorkspaceId } from "../../../../../services/work-space";
import NewTaskButton from "@/components/ui/create-button";

export default async function workspaceTask({ params }) {
  const { workspaceId } = await params;
  const workspaceTasks = await getTaskByWorkspaceId(workspaceId);

  if (!workspaceId) {
    return <></>;
  }

  return (
    <div className="  w-full">
      <div className=" overflow-y-auto h-[300px]">
        <CardComponent workspaceTasks={workspaceTasks} />
      </div>

      <div className="mt-60 px-10">
        <NewTaskButton workspaceId={workspaceId} />
      </div>
    </div>
  );
}
