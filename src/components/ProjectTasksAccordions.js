"use client";

import TaskStages from "@/model/TaskStages";
import ProjectTaskStageAccordian from "@/components/ProjectTaskStageAccordian";
import { Stack } from "@mui/material";
import { useState } from "react";

export function ProjectTasksAccordions({ users, tasks }) {
  const [expanded, setExpanded] = useState("");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const stages = TaskStages.getOptions();
  const stageAccordians = stages.map((stage) => (
    <ProjectTaskStageAccordian
      key={stage.value}
      stage={stage.value}
      users={users}
      tasks={tasks}
      expanded={expanded === stage.label}
      onChange={handleChange(stage.label)}
    />
  ));

  return <Stack overflow="auto">{stageAccordians}</Stack>;
}

export default ProjectTasksAccordions;
