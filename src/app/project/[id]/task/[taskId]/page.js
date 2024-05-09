import { getProject, getUsers } from '@/serverActions/projectActions';
import {
  Box,
  Typography,
} from '@mui/material';
import Link from 'next/link';
import TaskStages from '@/model/TaskStages';
import { ResourceListing } from '@/components/ResourceListing';
import ResourceProjectTaskMappingForm from '@/components/forms/ResourceProjectTaskMappingForm';

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
      <Typography variant='h4'>
        <Link href={`/project/${projectId}`}>{proj.name}</Link>
        : {task.name}
      </Typography>
      <Typography variant='body1'>{task.description}</Typography>
      <Typography variant='body1'>Stage: {stage}</Typography>
      <Typography variant='body1'>Due by: {task.dueDate}</Typography>
      <Typography variant='body1'>Assigned To: {assignedUser.name}</Typography>
      <Typography variant='body1'>Completed: {task.completed ? 'Yes' : 'No'}</Typography>
      <ResourceListing type='project' projectId={projectId} taskId={taskId} />
      <ResourceProjectTaskMappingForm projectId={projectId} taskId={taskId} />
    </Box>
  );
}