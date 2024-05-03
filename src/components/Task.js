import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Link from 'next/link';
import TaskItem from './TaskItem';

export function Task ({
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
          <TaskItem type='checkbox'  value={completed} />
      </Stack>
    </Box>
  )
}

export default Task;