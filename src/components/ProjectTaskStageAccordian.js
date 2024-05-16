import TaskStages from "@/model/TaskStages";
import { ArrowForwardIosSharp } from "@mui/icons-material";
import Task from "@/components/TaskSummary";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Stack,
  Typography,
} from "@mui/material";
import TaskHeader from "./TaskHeader";

export function ProjectTaskStageAccordian({
  tasks,
  stage,
  users,
  expanded,
  onChange,
}) {
  const stageName = TaskStages.getStageString(stage);
  const tasksInStage = tasks
    .filter((task) => task.stage === stage)
    .map((task) => (
      <Task
        key={task.id}
        id={task.id}
        projectId={task.projectId}
        name={task.name}
        description={task.description}
        stage={task.stage}
        assignee={users.find((user) => user.id === task.assignee)}
        completed={task.completed}
        dueDate={task.dueDate}
        docRef={task.docRef}
      />
    ));

  const style = {
    "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
      transform: "rotate(90deg)",
    },
    flexDirection: "row-reverse",
  };
  return (
    <Accordion
      expanded={expanded}
      onChange={onChange}
      slotProps={{ transition: { unmountOnExit: true } }}
    >
      <AccordionSummary sx={style} expandIcon={<ArrowForwardIosSharp />}>
        <Stack
          width="100%"
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="body1">Stage: {stageName}</Typography>
          <Typography variant="body1">{tasksInStage.length}</Typography>
        </Stack>
      </AccordionSummary>
      <AccordionDetails>
        <Stack>
          <TaskHeader />
          {tasksInStage}
        </Stack>
      </AccordionDetails>
    </Accordion>
  );
}

export default ProjectTaskStageAccordian;
