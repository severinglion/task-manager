import { Box, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import {
  createResourceProjectTaskMapping,
  createResourceTemplateTaskMapping,
} from "@/serverActions/resourceActions";
import { ResourceSelect } from "@/components/ResourceSelect";
import FormBody from "@/components/inputs/FormBody";

export function ResourceTaskMappingForm({
  type,
  projectId,
  templateId,
  taskId,
}) {
  if (type === "project") {
    return (
      <FormBody action={createResourceProjectTaskMapping} title="Add Resource">
        <input
          type="number"
          hidden
          name="projectId"
          value={projectId}
          readOnly
        />
        <input type="number" hidden name="taskId" value={taskId} readOnly />
        <ResourceSelect />
        <IconButton type="submit">
          <AddIcon />
        </IconButton>
      </FormBody>
    );
  } else if (type === "template") {
    return (
      <FormBody action={createResourceTemplateTaskMapping} title="Add Resource">
        <input
          type="number"
          hidden
          name="templateId"
          value={templateId}
          readOnly
        />
        <input type="number" hidden name="taskId" value={taskId} readOnly />
        <ResourceSelect />
        <IconButton type="submit">
          <AddIcon />
        </IconButton>
      </FormBody>
    );
  } else {
    return <Box>Type not provided</Box>;
  }
}

export default ResourceTaskMappingForm;
