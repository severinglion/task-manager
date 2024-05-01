import ActionButton from '@/components/ActionButton';
import Task from '@/components/Task';
import TaskHeader from '@/components/TaskHeader';
import {Stack, Container, Button} from '@mui/material';
import {getProject, getUsers, addTask} from '@/serverActions/projectActions'

export const metadata = {
  title: "New Project",
  description: "Create and configure your project here",
};

export default async function ProjectDasboard({params}) {
  const id = params.id;
  const tasks = await getProject(id);
  const users = await getUsers();

  return (
    <main>
      <Container>
        <h1>Project {id}</h1>
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
        <ActionButton action={addTask} title='Add Task' />
      </Container>
    </main>
  )
}
