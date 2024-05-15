'use client'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import { setTaskCompleteStatus } from '@/serverActions/projectActions'

export function TaskItem({ taskId, projectId, value, type }) {
  async function handleCheckmark(e) {
    setTaskCompleteStatus(taskId, projectId, e.target.checked);
  }

  let item;
  if (type === 'checkbox')
    item = (<Checkbox checked={value} onChange={handleCheckmark} />)
  if (type === 'text')
    item = (<Typography variant='body1'>{value}</Typography>)
  if (type === 'title')
    item = (<Typography variant='h6'>{value}</Typography>)
  return (
    <Box sx={{ width: 150 }}>
      {item}
    </Box>
  )
}

export default TaskItem;