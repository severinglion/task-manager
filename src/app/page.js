import { getProjectListing, createProject } from "@/serverActions/projectActions";
import Image from "next/image";
import ProjectSummary from "@/components/ProjectSummary";
import {
  Button,
  TextField,
  Typography,
  Container,
} from '@mui/material';

import ProjectForm from "@/components/ProjectForm";
import Link from "next/link";

export default async function Home() {
  const projects = await getProjectListing();

  return (
    <main>
      <Container>
        <Typography variant='h3'>Home</Typography>
        <Link href='/resources'>Resources</Link>
        {projects?.map(p => (<ProjectSummary key={p.id} project={p} />))}
        <ProjectForm />
      </Container>
    </main>
  );
}
