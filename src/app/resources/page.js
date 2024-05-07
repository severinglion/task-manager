import { listResources, deleteResource } from "@/serverActions/resourceActions";
import { 
  Stack,
  Typography,
  Container
 } from "@mui/material";
import { Home } from "@mui/icons-material";
import Link from "next/link";
import ResourceForm from "@/components/ResourceForm";
import { ResourceSummary } from "@/components/ResourceSummary";

export default async function ResourcePage () {
  const resources = await listResources();
  const resourceElements = resources.map(r => (
    <ResourceSummary resource={r} key={r.id} />
  ));
  return (
    <Container>
      <Stack>
        <Stack direction='row'>
          <Link href='/'><Home/></Link>
          <Typography variant='h3'>Resources</Typography>
        </Stack>
        {resourceElements}
        <ResourceForm type='create'/>
      </Stack>
    </Container>
  )
}