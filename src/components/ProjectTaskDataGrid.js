import {
  Box,
} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { getProject, getUsers } from '@/serverActions/projectActions';
import TaskStages from '@/model/TaskStages';

export async function ProjectTaskDataGrid({ projectId }) {
  const project = await getProject(projectId);
  const users = await getUsers();

  const tasks = [...project.tasks];

  for (let i = 0; i < tasks.length; i++) {
    const t = tasks[i];
    const user = users.find(u => u.id === t.assignee);
    t.assignee = user.name;
    t.stage = TaskStages.getStageString(t.stage) || 'None';
    t.completed = t.completed ? 'Yes' : 'No';
  }

  const columns = [
    {
      field: 'name',
      headerName: 'Task',
      width: 250,
    },
    {
      field: 'description',
      headerName: 'Description',
      width: 300,
    },
    {
      field: 'stage',
      headerName: 'Stage',
    },
    {
      field: 'assignee',
      headerName: 'Assigned User',
      width: 200,

    },
    {
      field: 'dueDate',
      headerName: 'Due Date'
    },
    {
      field: 'completed',
      headerName: 'Completed'
    }
  ]
  return (
    <Box sx={{ height: 225 }}>
      <DataGrid
        columns={columns}
        rows={tasks}
      />
    </Box>
  );
}