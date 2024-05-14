import { Container, Stack, Typography } from "@mui/material";
import { getResource } from "@/serverActions/resourceActions";
import Link from "next/link";
import ResourceForm from "@/components/forms/ResourceForm";
import { PageNotFoundError } from "next/dist/shared/lib/utils";

export default async function ResourceEditPage({ params }) {
  const resource = await getResource(params.id);
  if (!resource) {
    throw new PageNotFoundError("Resource not found");
  }
  return (
    <Container>
      <Stack spacing={3}>
        <Typography variant="h3">Resource</Typography>
        <Link href={resource.href} target="blank">
          View Resource
        </Link>
        <ResourceForm type="edit" initial={resource} />
      </Stack>
    </Container>
  );
}
