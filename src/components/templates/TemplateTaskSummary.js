import TaskStages from '@/model/TaskStages';
import { getUsers } from '@/serverActions/projectActions';
import {
    Stack,
    Typography,
} from '@mui/material';
import TaskItem from '../TaskItem';
import { removeTemplateTask } from '@/serverActions/templateActions';
import GenericEditDeleteIconButtonGroup from '../GenericEditDeleteIconButtonGroup';

export async function TemplateTaskSummary({task}) {
    const users = await getUsers();
    const taskUser = users.find(u => u.id === task.assignee);
    const stage = TaskStages.getStageString(task.stage);
    const editHref = `/template/${task.templateId}/task/${task.id}`
    const handleDelete = async () => {
        "use server"
        await removeTemplateTask(task.templateId, task.id);
    }
    return (
        <Stack direction='row'>
            <TaskItem type='text' value={task.name} />
            <TaskItem type='text' value={task.description} />
            <TaskItem type='text' value={stage} />
            <TaskItem type='text' value={taskUser?.name || 'None'} />
            <TaskItem type='text' value={task.docRef} />
            <GenericEditDeleteIconButtonGroup editHref={editHref} deleteAction={handleDelete} />
        </Stack>
    )
}

export default TemplateTaskSummary;