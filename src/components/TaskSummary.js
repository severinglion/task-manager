import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Link from "next/link";
import TaskItem from "@/components/TaskItem";
import TaskEditDeleteButtonGroup from "@/components/TaskEditDeleteButtonGroup";
import TaskStages from "@/model/TaskStages";
import {
  Accordion,
  Tooltip,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
export function TaskSummary({
  id,
  projectId,
  name,
  description,
  stage,
  completed,
  dueDate,
  assignee,
  docRef,
}) {
  const mailToLink = assignee ? `mailto:${assignee.email}` : "";
  const stageName = TaskStages.getStageString(stage || 0);
  const nameElement = docRef ? (
    <Tooltip title={docRef}>
      <Link href={docRef}>
        <TaskItem type="text" value={name} />
      </Link>
    </Tooltip>
  ) : (
    <TaskItem type="text" value={name} />
  );

  let normalizedDueDate = dueDate;
  if (
    typeof dueDate === "string" &&
    dueDate.split("/").length !== 3 &&
    parseInt(dueDate)
  ) {
    normalizedDueDate = parseInt(dueDate);
  }

  const dueDateString = dueDate
    ? new Date(normalizedDueDate).toLocaleDateString()
    : "";

  return (
    <Box sx={{ width: 1100, "&:hover": { background: "lightgray" } }}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`task-${id}-description`}
          id={`task-${id}-header`}
        >
          <Stack direction="row" spacing={0}>
            {nameElement}
            <TaskItem type="text" value={stageName} />
            <Tooltip title={mailToLink}>
              <Link href={mailToLink}>
                <TaskItem type="text" value={assignee?.name || "Unassigned"} />
              </Link>
            </Tooltip>
            <TaskItem type="text" value={dueDateString} />
            <TaskItem
              type="checkbox"
              taskId={id}
              projectId={projectId}
              value={completed}
            />
            <TaskEditDeleteButtonGroup taskId={id} projectId={projectId} />
          </Stack>
        </AccordionSummary>
        <AccordionDetails>{description}</AccordionDetails>
      </Accordion>
    </Box>
  );
}
export default TaskSummary;
