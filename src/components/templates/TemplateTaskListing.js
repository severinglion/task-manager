import {
    Stack,
    Typography,
} from '@mui/material';
import TemplateTaskSummary from './TemplateTaskSummary';
import { getTemplate } from '@/serverActions/templateActions';

export async function TemplateTaskListing({templateId}) {
    const template = await getTemplate(templateId);
    const tasks = template.tasks;
    const summaries = tasks?.map(t => <TemplateTaskSummary key={t.id} task={t}/>)
    return (
        <Stack>
            <Typography variant='h6'>Tasks</Typography>
            {summaries}
        </Stack>
    )
}