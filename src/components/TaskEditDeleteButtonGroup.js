"use client";
import IconButton from "@mui/material/IconButton";
import ButtonGroup from "@mui/material/ButtonGroup";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteTask } from "@/serverActions/projectActions";
import { useRouter } from "next/navigation";

export function TaskEditDeleteButtonGroup({ taskId, projectId }) {
  const router = useRouter();
  const taskPageUrl = `/project/${projectId}/task/${taskId}`;

  const handleRouteNav = (e) => {
    e.stopPropagation();
    router.push(taskPageUrl);
  };

  const handleDelete = async (e) => {
    e.stopPropagation();
    await deleteTask(taskId, projectId);
  };

  return (
    <ButtonGroup>
      <IconButton onClick={handleRouteNav}>
        <EditIcon />
      </IconButton>
      <IconButton>
        <DeleteIcon onClick={handleDelete} />
      </IconButton>
    </ButtonGroup>
  );
}

export default TaskEditDeleteButtonGroup;
