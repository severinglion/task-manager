"use client";

import { Box, Button, Stack } from "@mui/material";
import useBoolean from "@/hooks/useBoolean";
import CenteredModal from "./modals/CenteredModal";
import { TaskForm } from "./forms/TaskForm";
import SeedProjectTasksButton from "./buttons/SeedProjectTasksButton";
import { ProjectTaskTabs } from "./ProjectTaskTabs";
import { useProjectTabs } from "@/hooks/useProjectTabs";
import { isBefore } from "date-fns";
import { ProjectViewTabs } from "@/utils/constants";
import { ProjectTaskDataGrid } from "./ProjectTaskDataGrid";
import { OverdueProjectTaskList } from "./OverdueProjectTaskList";
import ProjectTasksAccordions from "./ProjectTasksAccordions";

export function ProjectPageContent({ projectId, tasks, users }) {
  const [addTaskModal, openModal, closeModal] = useBoolean(false);

  const today = new Date();
  const hasOverDue =
    tasks.filter((t) => isBefore(t.dueDate, today) && !t.completed).length > 0;

  const [currentTab, changeTab] = useProjectTabs(hasOverDue);

  let tabTools = [];
  let contentView = <></>;
  switch (currentTab) {
    case ProjectViewTabs.OVERDUE: {
      contentView = (
        <OverdueProjectTaskList
          tasks={tasks}
          projectId={projectId}
          users={users}
        />
      );
      tabTools = [
        {
          label: "Filter",
          onClick: () => console.log("filter"),
        },
        {
          label: "Sort",
          onClick: () => console.log("sort"),
        },
      ];
      break;
    }
    case ProjectViewTabs.LIST: {
      tabTools = [
        {
          label: "Filter",
          onClick: () => console.log("filter"),
        },
        {
          label: "Sort",
          onClick: () => console.log("sort"),
        },
      ];
      contentView = <ProjectTasksAccordions tasks={tasks} users={users} />;
      break;
    }
    case ProjectViewTabs.GRID: {
      contentView = (
        <ProjectTaskDataGrid
          projectId={projectId}
          tasks={tasks}
          users={users}
        />
      );
      break;
    }
  }

  return (
    <Box>
      <Box>
        <ProjectTaskTabs
          hasOverDue={hasOverDue}
          value={currentTab}
          onChange={changeTab}
        />
      </Box>
      <Box sx={{ display: "flex" }} width="100%">
        <Stack direction="row" width="40%">
          <Button onClick={openModal}>New Task</Button>
          <SeedProjectTasksButton projectId={projectId} />
        </Stack>
        <Stack direction="row-reverse" width="60%">
          {tabTools?.map((tool) => (
            <Button key={tool.label} onClick={tool.onClick}>
              {tool.label}
            </Button>
          ))}
        </Stack>
      </Box>
      <Box>{contentView}</Box>
      <CenteredModal open={addTaskModal} handleClose={closeModal}>
        <TaskForm projectId={projectId} type="project" />
      </CenteredModal>
    </Box>
  );
}

export default ProjectPageContent;
