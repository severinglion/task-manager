import {
    Stack,
    Typography,
} from '@mui/material';
import GenericEditDeleteIconButtonGroup from '../GenericEditDeleteIconButtonGroup';
import { deleteTemplate } from '@/serverActions/templateActions';

export function TemplateSummary({template}) {
    const editHref = `/template/${template.id}`
    const handleDelete = async () => {
        "use server"
        await deleteTemplate(template.id);
    }

    return (
        <Stack direction='row'>
            <Typography>{template.name}</Typography>
            <GenericEditDeleteIconButtonGroup 
                deleteAction={handleDelete} 
                editHref={editHref} 
            />
        </Stack>
    )
}

export default TemplateSummary;