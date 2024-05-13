'use client'
import {
  Button,
  TextField
} from '@mui/material';
import {addProjectTask} from '@/serverActions/projectActions'
import UserSelect from '../UserSelect';
import StageSelect from '@/components/StageSelect'
import FormBody from '@/components/inputs/FormBody';
import { ClientDatePicker } from '@/components/inputs/ClientDatePicker';
export function TaskForm({id, type}) {
  const handleSubmit = async (formData) => {
    await addProjectTask(formData);
  }
  return (
        <FormBody action={handleSubmit} title='Create Task'>
          <input hidden readOnly name='id' value={id} />
          <input hidden readOnly name='type' value={type} />
          <TextField name='name' label='Name' inputProps={{id: 'name'}} required/>
          <TextField name='description' label='Description' />
          <UserSelect />
          <StageSelect />
          <TextField name='docRef' label='Training Link' type='url'/>
          <ClientDatePicker name='dueDate' label='Due Date' />
          <Button
            variant="text"
            color="primary"
            type='submit'
          >
            Submit
          </Button>
        </FormBody>

  )
}
