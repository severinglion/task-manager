import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Link from 'next/link';
import TaskItem from '@/components/TaskItem'
import TaskEditDeleteButtonGroup from '@/components/TaskEditDeleteButtonGroup'
export function TaskSummary ({
  id,
  projectId,
  name,
  description,
  completed,
  dueDate,
  assignee,
  docRef
}) {
  const mailToLink = assignee ? `mailto:${assignee.email}` : '';
  return (
    <Box  width='1000px'>
      <Stack direction='row' spacing={0} alignItems='center'>
          <Link href={docRef}>
            <TaskItem type='text' value={name} />
          </Link>
          <TaskItem type='text' value={description} />
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