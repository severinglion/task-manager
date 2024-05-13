import {
    Stack,
    Typography
} from '@mui/material';
import { getTemplate } from '@/serverActions/templateActions';
import { TemplateTaskListing } from '@/components/templates/TemplateTaskListing';
import { TemplateTaskForm } from '@/components/forms/TemplateTaskForm';

export default async function EditTemplatePage({params}) {
    const template = await getTemplate(params.id);
    return (
        <Stack spacing={3}>
            <Typography variant='h3'>Template: {template.name}</Typography>
            <TemplateTaskListing templateId={params.id}/>
            <TemplateTaskForm templateId={params.id} />
        </Stack>
    )
}