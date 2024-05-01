import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';

export function TaskItem ({value, type}) {
  let item; 
  if (type === 'checkbox')
    item = (<Checkbox checked={value} />)
  if (type === 'text') 
    item = (<Typography variant='body1'>{value}</Typography>)
  if (type==='title') 
    item = (<Typography variant='h6'>{value}</Typography>)
  return (
    <Box width='200px'>
      {item}
    </Box>
  )
}

export default TaskItem;