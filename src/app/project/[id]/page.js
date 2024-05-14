import Task from "@/components/TaskSummary";
import TaskHeader from "@/components/TaskHeader";
import { Stack, Typography } from "@mui/material";
import { getProject, getUsers } from "@/serverActions/projectActions";
import { TaskForm } from "@/components/forms/TaskForm";

export const metadata = {
  title: "New Project",
  description: "Create and configure your project here",
};

export default async function ProjectDasboard({ params }) {
  const id = params.id;
  const program = await getProject(id);
  const tasks = program.tasks;
  const users = await getUsers();

  return (
    <Stack spacing={3}>
      <Stack direction="row">
        <Typography variant="h3">{program.name}</Typography>
      </Stack>
      <Stack overflow="auto">
        <TaskHeader />
        {tasks.map((task) => (
          <Task
            key={task.id}
            id={task.id}
            projectId={task.projectId}
            name={task.name}
            description={task.description}
            stage={task.stage}
            assignee={users.find((user) => user.id === task.assignee)}
            completed={task.completed}
            dueDate={task.dueDate}
            docRef={task.docRef}
          />
        ))}
      </Stack>
      <TaskForm id={id} type="project" />
    </Stack>
  );
}
