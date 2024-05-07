import {
  Container,
  Stack,
  Typography,
  Box,
  Button,
  TextField,
  InputAdornment,
  IconButton,
} from '@mui/material';
import { getResource } from '@/serverActions/resourceActions';
import Link from 'next/link';
import { Home, ArrowBack } from '@mui/icons-material';
import ResourceForm from '@/components/ResourceForm';

export default async function ResourceEditPage ({params}) {
  const resource = await getResource(params.id);
  console.log(resource);
  return (
    <Container>
      <Stack>
        <Stack direction='row'>
          <Link href='/'><Home /></Link>
          <Link href='/resources'><ArrowBack /></Link>
          <Typography variant='h3'>Resource</Typography>
          <Link href={resource.href} target='blank'>View Resource</Link>
        </Stack>
        <ResourceForm type='edit' initial={resource}/>

      </Stack>
    </Container>
  )
}