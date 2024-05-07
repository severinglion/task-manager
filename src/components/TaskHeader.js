import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TaskItem from './TaskItem';

export function TaskHeader () {
  return (
    <Box width='1000px'>
      <Stack direction='row' spacing={0} alignItems='center'>
          <TaskItem type='title' value='Name' />
          <TaskItem type='title' value='Description' />
          <TaskItem type='title' value='Stage' />
          <TaskItem type='title' value='Assigned User' />
          <TaskItem type='title' value='Due By' />
          <TaskItem type='title' value='Completed' />
          <TaskItem type='title' value='Actions' />
      </Stack>
    </Box>
  )
}

export default TaskHeader;