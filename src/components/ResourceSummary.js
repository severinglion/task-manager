"use client"
import Link from 'next/link';
import { deleteResource } from '@/serverActions/resourceActions';
import {
  GenericEditDeleteIconButtonGroup
} from './GenericEditDeleteIconButtonGroup';
import {
  Stack,
  Typography,
} from '@mui/material';


export function ResourceSummary ({resource}) {
  const {name, href, id} = resource;
  const handleDelete = async () => {
    await deleteResource(id);
  }
  const editHref = `/resources/${id}`;
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