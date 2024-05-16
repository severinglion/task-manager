"use client";

import { Button } from "@mui/material";
import { seedProjectTasks } from "@/serverActions/seedActions";

export function SeedProjectTasksButton({ projectId }) {
  return (
    <Button
      onClick={() => {
        seedProjectTasks(projectId);
      }}
    >
      Seed Tasks
    </Button>
  );
}

export default SeedProjectTasksButton;
