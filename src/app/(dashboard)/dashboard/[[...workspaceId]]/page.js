import CardComponent from "@/components/card";
import { getTaskByWorkspaceId } from "../../../../../services/work-space";
import NewTaskButton from "@/components/ui/create-button";

export default async function WorkspaceTask({ params }) {
  const { workspaceId } = params;
  const workspaceTasks = await getTaskByWorkspaceId(workspaceId);

  console.log("workspaceTasks data ", workspaceTasks);

  // If workspaceId doesn't exist, return empty
  if (!workspaceId) {
    return <></>;
  }

  // Define the task status types and corresponding colors
  const statusTypes = [
    { status: "NOT_STARTED", color: "#FF6B6B", label: "Not Started" },
    { status: "IN_PROGRESS", color: "#4D7CFE", label: "In Progress" },
    { status: "FINISHED", color: "#1ABC9C", label: "Finished" },
  ];

  // Group tasks by status
  const groupedTasks = statusTypes.reduce((acc, { status, label }) => {
    acc[label] =
      workspaceTasks?.payload?.filter(
        (card) => card.status === status || card.status === label
      ) || [];
    return acc;
  }, {});

  return (
    <div className="w-full px-4">
      <div className="flex gap-4 overflow-x-auto pb-4 h-82 overflow-y-auto">
        {/* Loop over each status column */}
        {statusTypes.map(({ status, color, label }) => (
          <div key={status} className="flex-1 min-w-[300px]">
            <h2
              className="font-medium text-lg mb-3 pb-2"
              style={{ borderBottom: `2px solid ${color}`, color }}>
              {label}
            </h2>
            <div className="space-y-4">
              {groupedTasks[label].map((card) => (
                <CardComponent key={card.taskId} card={card} status={label} />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 px-4">
        <NewTaskButton workspaceId={workspaceId} />
      </div>
    </div>
  );
}
