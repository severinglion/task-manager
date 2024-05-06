'use client'
import IconButton from '@mui/material/IconButton';
import ButtonGroup from '@mui/material/ButtonGroup';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteTask } from '@/serverActions/projectActions';
import { useRouter } from 'next/navigation'


export function TaskEditDeleteButtonGroup({taskId, projectId}) {
    const router = useRouter();
    const handleDelete = async () => {
        await deleteTask(taskId, projectId);
    }

    const taskPageUrl = `/project/${projectId}/task/${taskId}`;
    return (
        <ButtonGroup>
            <IconButton onClick={() => router.push(taskPageUrl)}>
                <EditIcon />
            </IconButton>
            <IconButton>
                <DeleteIcon onClick={handleDelete}/>
            </IconButton>
        </ButtonGroup>
    )
}

export default TaskEditDeleteButtonGroup;
