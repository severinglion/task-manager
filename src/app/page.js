import { getProjectListing, createProject } from "@/serverActions/projectActions";
import Image from "next/image";
import ProjectSummary from "@/components/ProjectSummary";
import {
  Button,
  TextField
} from '@mui/material';

export default async function Home() {
  const projects = await getProjectListing();

  console.log(projects);
  return (
    <main>
      <h1>Home</h1>
      <form action={createProject}>
        <TextField name='name'/>
        <Button type='submit'>Create</Button>
      </form>
      {projects?.map(p => (<ProjectSummary key={p.id} project={p} />))}
    </main>
  );
}
