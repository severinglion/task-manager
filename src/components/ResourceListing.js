import { 
    listResources,
    getProjectTaskResources,
    getTemplateTaskResources,

 } from "@/serverActions/resourceActions";
import {
    Stack,
    Typography,
} from '@mui/material';
import { ResourceSummary } from "./ResourceSummary";

export async function ResourceListing ({type, taskId, projectId, templateId}) {
    let resources;
    if(type === 'project') {
        resources = await getProjectTaskResources(projectId, taskId);
    } else if (type === 'template') {
        resources = await getTemplateTaskResources(templateId, taskId);
    } else {
        resources = await listResources();
    }

    const items = resources?.map(r => {
        if(type === 'project') {
            return <ResourceSummary key={r.id} resource={r} isProjectMapping />
        } else if (type === 'template') {
            return <ResourceSummary key={r.id} resource={r} isTemplateMapping />
        } else {
            return <ResourceSummary key={r.id} resource={r} />
        }
    })
    return (
        <Stack>
            <Typography variant='h6'>Resources</Typography>
            {items}
        </Stack>
    )
}