import {
    TextField,
    IconButton
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { createTemplate } from '@/serverActions/templateActions';
import FormBody from '@/components/inputs/FormBody';

export function TemplateForm() {
    return (
        <FormBody action={createTemplate} title='Create Template'>
            <TextField name='name' required label='Template Name' />
            <IconButton type='submit'>
                <AddIcon />
            </IconButton>
        </FormBody>
    )
}

export default TemplateForm;
