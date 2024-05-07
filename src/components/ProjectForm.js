import { createProject } from "@/serverActions/projectActions";
import {
  TextField,
  Button,
} from '@mui/material';

export function ProjectForm() {
  return (
    <form action={createProject}>
      <TextField name='name'/>
      <Button type='submit'>Create</Button>
    </form>
  )
}

export default ProjectForm;

