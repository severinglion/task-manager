import { getProjectListing, createProject } from "@/serverActions/projectActions";
import ProjectSummary from "@/components/ProjectSummary";
import {
  Button,
  TextField,
  Typography,
  Container,
} from '@mui/material';

import ProjectForm from "@/components/forms/ProjectForm";

export default async function Home() {
  const projects = await getProjectListing();

  return (
    <main>
      <Container>
        <Typography variant='h3'>Home</Typography>
        {projects?.map(p => (<ProjectSummary key={p.id} project={p} />))}
        <ProjectForm />
      </Container>
    </main>
  );
}
