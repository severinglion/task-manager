import { Box, Typography, Stack, LinearProgress, Button } from "@mui/material";
import Link from "next/link";
import DeleteProjectButton from "@/components/buttons/DeleteProjectButton";

export default function ProjectSummary({ project }) {
  const projectPageUrl = `/project/${project.id}`;
  const defaultItemWidth = 250;
  const summaryStyle = {
    height: 75,
    width: "100%",
    "&:hover": {
      backgroundColor: "lightgrey",
    },
  };

  const itemStyle = {
    width: defaultItemWidth,
  };

  const progress =
    (project.totalTasks === 0
      ? 0
      : project.completedTasks / project.totalTasks) * 100;
  return (
    <Box sx={summaryStyle}>
      <Stack direction="row" spacing={3}>
        <Link
          href={projectPageUrl}
          style={{ textDecoration: "none", color: "black" }}
        >
          <Box sx={itemStyle}>
            <Button>
              <Typography variant="h6">{project.name}</Typography>
            </Button>
          </Box>
        </Link>
        <Box sx={itemStyle}>
          <Typography variant="body1">
            {project.startDate || "No Start Date"}
          </Typography>
        </Box>
        <Box sx={itemStyle}>
          <LinearProgress variant="determinate" value={progress} />
          <Typography variant="body1">
            {project.completedTasks}/{project.totalTasks}
          </Typography>
        </Box>
        <DeleteProjectButton projectId={project.id} />
      </Stack>
    </Box>
  );
}
