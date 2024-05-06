import { getProject, getUsers } from '@/serverActions/projectActions';
import {
  Box,
  Typography,
} from '@mui/material';
import Link from 'next/link';
import TaskStages from '@/model/TaskStages';

export default async function TaskEditor ({params}) {
  const taskId = params.taskId;
  const projectId = params.id;

  const proj = await getProject(projectId);
  const users = await getUsers();

  const task = proj.tasks.find(task => task.id === parseInt(taskId));
  const stage = TaskStages.getStageString(task.stage || 0);
  const assignedUser = users.find(u => u.id === task.assignee)
  return (
    <Box>
      <Link href={`/project/${projectId}`}>{proj.name}</Link>
      <Typography variant="h3">{task.name}</Typography>
      <Typography variant='body1'>{task.description}</Typography>
      <Typography variant='body1'>Stage: {stage}</Typography>
      <Typography variant='body1'>Due by: {task.dueDate}</Typography>
      <Typography variant='body1'>Assigned To: {assignedUser.name}</Typography>
      <Typography variant='body1'>Completed: {task.completed ? 'Yes' : 'No'}</Typography>
      <Typography variant='body1'>Resources: None</Typography>
    </Box>
  );
}