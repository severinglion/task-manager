import ActionButton from '@/components/ActionButton';
import Task from '@/components/Task';
import TaskHeader from '@/components/TaskHeader';
import {
  Stack,
  Container,
  Button,
  TextField,
  
} from '@mui/material';
import {getProject, getUsers} from '@/serverActions/projectActions'
import { TaskForm } from '@/components/TaskForm';

export const metadata = {
  title: "New Project",
  description: "Create and configure your project here",
};



export default async function ProjectDasboard({params}) {
  const id = params.id;
  const program = await getProject(id);
  const tasks = program.tasks.tasks;
  const users = await getUsers();
  return (
    <main>
      <Container>
        <h1>{program.name}</h1>
        <Stack overflow='auto'>
          <TaskHeader />
          {
            tasks.map(task => (
              <Task 
                key={task.id}
                name={task.name}
                description={task.description}
                assignee={users.find(user => user.id === task.assignee)}
                completed={task.completed}
                dueDate={task.dueDate}
                docRef={task.docRef}
              />
            ))
          }
        </Stack>
        <TaskForm 
          id={id}
          type='project'
        />
      </Container>
    </main>
  )
}
