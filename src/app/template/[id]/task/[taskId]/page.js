import { ResourceListing } from "@/components/ResourceListing";
import ResourceTaskMappingForm from "@/components/forms/ResourceTaskMappingForm";
import TaskStages from "@/model/TaskStages";
import { getUsers } from "@/serverActions/projectActions";
import { getTemplateTask } from "@/serverActions/templateActions";
import { Box, Stack, Typography } from "@mui/material";
export default async function TemplateTaskPage({ params }) {
  const task = await getTemplateTask(params.id, params.taskId);
  const users = await getUsers();
  const asigneeName = users.find((u) => u.id === task.assignee).name;

  return (
    <Box>
      <Stack>
        <Typography variant="h3">Task: {task.name}</Typography>
        <Typography variant="body1">Description: {task.description}</Typography>
        <Typography variant="body1">
          Stage: {TaskStages.getStageString(task.stage)}
        </Typography>
        <Typography variant="body1">Assigned To: {asigneeName}</Typography>
        <Typography variant="body1">
          Offset Value: {task.dayOffset || 0}
        </Typography>
        <ResourceListing
          type="template"
          templateId={params.id}
          taskId={params.taskId}
        />
        <ResourceTaskMappingForm
          type="template"
          templateId={params.id}
          taskId={params.taskId}
        />
      </Stack>
    </Box>
  );
}
