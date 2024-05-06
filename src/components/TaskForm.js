'use client'
import {
  Box,
  Button,
  TextField
} from '@mui/material';
import {addProjectTask} from '@/serverActions/projectActions'
import { useRef } from 'react';
import UserSelect from './UserSelect';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import StageSelect from '@/components/StageSelect'


export function TaskForm({id, type}) {
  const formRef = useRef();
  const handleSubmit = async (formData) => {
    await addProjectTask(formData);
    formRef.current.reset();
  }
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box>
        <form action={handleSubmit} ref={formRef}>
          <input hidden readOnly name='id' value={id} />
          <input hidden readOnly name='type' value={type} />
          <TextField name='name' label='Name' inputProps={{id: 'name'}} required/>
          <TextField name='description' label='Description' />
          <UserSelect />
          <StageSelect />
          <TextField name='docRef' label='Training Link' type='url'/>
          <DatePicker name='dueDate' label='Due Date' />
          <Button
            variant="text"
            color="primary"
            type='submit'
          >
            Submit
          </Button>
        </form>
      </Box>
    </LocalizationProvider>

  )
}
