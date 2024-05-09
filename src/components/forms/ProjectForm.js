import { createProject } from "@/serverActions/projectActions";
import {
  TextField,
  Button,
} from '@mui/material';
import TemplateSelect from '@/components/inputs/TemplateSelect';
import { ClientDatePicker } from "../inputs/ClientDatePicker";
import { FormBody } from "../inputs/FormBody";
export function ProjectForm() {
  return (
    <FormBody action={createProject} title='Create New Project'>
      <TextField name='name' label='Name' required/>
      <ClientDatePicker name='startDate' label='Start Date' required/>
      <TemplateSelect />
      <Button type='submit'>Create</Button>
    </FormBody>
  )
}

export default ProjectForm;

