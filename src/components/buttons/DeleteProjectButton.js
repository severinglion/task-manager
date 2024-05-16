"use client";

import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteProject } from "@/serverActions/projectActions";

export function DeleteProjectButton({ projectId }) {
  return (
    <IconButton
      onClick={async (e) => {
        await deleteProject(projectId);
      }}
    >
      <DeleteIcon />
    </IconButton>
  );
}

export default DeleteProjectButton;
