import {
    Stack,
    Typography,
} from '@mui/material';
import TemplateListing from '@/components/templates/TemplateListing';
import TemplateForm from '@/components/templates/TemplateForm';

export default async function TemplateListingPage () {

    return (
        <Stack>
            <Typography variant='h3'>Project Templates</Typography>
            <TemplateListing />
            <TemplateForm />
        </Stack>
    )
}