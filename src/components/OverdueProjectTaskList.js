import { Box, AccordionDetails, AccordionSummary, Stack } from "@mui/material";
import Task from "@/components/TaskSummary";
import TaskHeader from "@/components/TaskHeader";
import { isBefore } from "date-fns";

export function OverdueProjectTaskList({ tasks, users }) {
  const today = new Date();
  const overDueTasks = tasks
    .filter((t) => isBefore(t.dueDate, today) && !t.completed)
    .map((task) => (
      <Task
        key={task.id}
        id={task.id}
        projectId={task.projectId}
        name={task.name}
        description={task.description}
        stage={task.stage}
        assignee={users?.find((user) => user.id === task.assignee)}
        completed={task.completed}
        dueDate={task.dueDate}
        docRef={task.docRef}
      />
    ));
  return (
    <Stack>
      <Box sx={{ color: "red" }}>
        <TaskHeader />
      </Box>
      {overDueTasks}
    </Stack>
  );
}

export default OverdueProjectTaskList;
