import { getProject } from '@/serverActions/projectActions';
import {
  Box,
  Typography,
} from '@mui/material';


export default function TaskEditor ({params}) {
  const taskId = params.taskId;
  const projectId = params.id;

  const tasks = getProject(projectId);
  const task = tasks.find(task => task.id === taskId);
  console.log(task);
  return (
    <Box>
      <Typography variant="h3">Task Editor</Typography>

    </Box>
  )

}