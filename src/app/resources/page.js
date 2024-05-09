import { 
  Stack,
  Typography,
  Container
 } from "@mui/material";
import ResourceForm from "@/components/forms/ResourceForm";
import { ResourceListing } from "@/components/ResourceListing";

export default async function ResourcePage () {
  return (
    <Container>
      <Stack spacing={3}>
        <Stack direction='row'>
          <Typography variant='h3'>Resources</Typography>
        </Stack>
        <ResourceListing />
        <ResourceForm type='create'/>
      </Stack>
    </Container>
  )
}