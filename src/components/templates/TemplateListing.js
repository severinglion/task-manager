import { listTemplates } from '@/serverActions/templateActions';
import {
    Stack,
    Typography
} from '@mui/material';
import TemplateSummary from '@/components/templates/TemplateSummary';

export async function TemplateListing() {
    const templates = await listTemplates();
    const summaries = templates?.map(t => <TemplateSummary key={t.id} template={t} />)
    return (
        <Stack>
            <Typography variant='h6'>Templates</Typography>
            {summaries}
        </Stack>
    )
}

export default TemplateListing;
