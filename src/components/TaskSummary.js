import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Link from 'next/link';
import TaskItem from '@/components/TaskItem'
import TaskEditDeleteButtonGroup from '@/components/TaskEditDeleteButtonGroup'
import TaskStages from '@/model/TaskStages';
export function TaskSummary ({
  id,
  projectId,
  name,
  description,
  stage,
  completed,
  dueDate,
  assignee,
  docRef
}) {
  const mailToLink = assignee ? `mailto:${assignee.email}` : '';
  const stageName = TaskStages.getStageString(stage || 0);
  return (
    <Box  width='1000px'>
      <Stack direction='row' spacing={0} alignItems='center'>
          <Link href={docRef}>
            <TaskItem type='text' value={name} />
          </Link>
          <TaskItem type='text' value={description} />
          <TaskItem type='text' value={stageName} />
          <Link href={mailToLink}>
            <TaskItem type='text' value={assignee?.name || 'Unassigned'} />
          </Link>
          <TaskItem type='text' value={dueDate} />
          <TaskItem type='checkbox' taskId={id} projectId={projectId} value={completed}/>
          <TaskEditDeleteButtonGroup taskId={id} projectId={projectId} />
      </Stack>
    </Box>
  )
}
export default TaskSummary;