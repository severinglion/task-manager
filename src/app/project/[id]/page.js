import { Stack, Typography } from "@mui/material";
import { getProject, getUsers } from "@/serverActions/projectActions";
import ProjectPageContent from "@/components/ProjectPageContent";

export const metadata = {
  title: "View Project",
  description: "View and edit an in-progress project",
};

export default async function ProjectDasboard({ params }) {
  const id = params.id;
  const program = await getProject(id);
  const users = await getUsers();

  return (
    <Stack spacing={3}>
      <Stack direction="row" spacing={3}>
        <Typography variant="h3">{program.name}</Typography>
      </Stack>
      <ProjectPageContent projectId={id} tasks={program.tasks} users={users} />
    </Stack>
  );
}
