"use client"
import Link from 'next/link';
import { 
  deleteResource, 
  deleteResourceProjectTaskMapping,
  deleteResourceTemplateTaskMapping 
} from '@/serverActions/resourceActions';
import {
  GenericEditDeleteIconButtonGroup
} from './GenericEditDeleteIconButtonGroup';
import {
  Stack,
  Typography,
} from '@mui/material';

function getEditHref (resource, isProjectMapping, isTemplateMapping) {
  const basePath = '/resources';
  if(isProjectMapping || isTemplateMapping) {
    return `${basePath}/${resource.resourceId}`
  }
  return `${basePath}/${resource.id}`;
}

export function ResourceSummary ({resource, isProjectMapping, isTemplateMapping}) {
  const {name, href, id} = resource;
  const handleDelete = async () => {
    if(isProjectMapping) {
      const {projectId, taskId} = resource;
      await deleteResourceProjectTaskMapping(projectId, taskId, id);
    } else if (isTemplateMapping) {
      const {templateId, taskId} = resource;
      await deleteResourceTemplateTaskMapping(templateId, taskId, id);
    } else {
      await deleteResource(id);
    }
  }

  const editHref = getEditHref(
    resource, 
    isProjectMapping, 
    isTemplateMapping
  );

  return (
    <Stack direction='row' spacing={4}>
      <Typography>{name}</Typography>
      <Link href={href} target="blank">
        <Typography>View</Typography>
      </Link>
      <GenericEditDeleteIconButtonGroup editHref={editHref} deleteAction={handleDelete} />
    </Stack>
  )
}