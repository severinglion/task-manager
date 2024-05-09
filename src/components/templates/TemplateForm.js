import {
    Box,
    TextField,
    Typography,
    IconButton
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { createTemplate } from '@/serverActions/templateActions';

export function TemplateForm() {
    return (
        <Box>
            <Typography variant='h6'>Create Template</Typography>
            <form action={createTemplate}>
                <TextField name='name' required label='Template Name' />
                <IconButton type='submit'>
                    <AddIcon />
                </IconButton>
            </form>
        </Box>
    )
}

export default TemplateForm;
