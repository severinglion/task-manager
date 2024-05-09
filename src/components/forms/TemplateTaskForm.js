'use client'
import {
    Box,
    TextField,
    IconButton,
    Typography
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import UserSelect from '@/components/UserSelect';
import { addTemplateTask } from '@/serverActions/templateActions';
import StageSelect from '@/components/StageSelect';
export function TemplateTaskForm ({templateId}) {
    return (
        <Box>
            <Typography variant='h6'>Add Task</Typography>
            <form action={addTemplateTask}>
                <input hidden name='templateId' value={templateId} readOnly />
                <TextField name='name' label='Name' required/>
                <TextField name='description' label='Description' />
                <UserSelect />
                <StageSelect />
                <TextField name='docRef' label='Process URL' type='url' />
                <TextField name='dayOffset' label='Day Offset' defaultValue={0} type='number' />
                <IconButton type='submit'>
                    <AddIcon />
                </IconButton>
            </form>
        </Box>
    )
}