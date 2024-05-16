import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import TaskItem from "./TaskItem";

export function TaskHeader() {
  return (
    <Box sx={{ width: 1100, paddingLeft: "16px" }}>
      <Stack direction="row" spacing={0}>
        <TaskItem type="title" value="Name" />
        <TaskItem type="title" value="Stage" />
        <TaskItem type="title" value="Assigned User" />
        <TaskItem type="title" value="Due By" />
        <TaskItem type="title" value="Completed" />
        <TaskItem type="title" value="Actions" />
      </Stack>
    </Box>
  );
}

export default TaskHeader;
