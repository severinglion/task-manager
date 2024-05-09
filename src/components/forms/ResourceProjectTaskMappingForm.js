import {
    Box,
    IconButton
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add'
import { createResourceProjectTaskMapping } from '@/serverActions/resourceActions';
import { ResourceSelect } from '@/components/ResourceSelect';
import FormBody from '@/components/inputs/FormBody';


export function ResourceProjectTaskMappingForm ({projectId, taskId}) {
    return (
            <FormBody action={createResourceProjectTaskMapping} title='Add Resource'>
                <input type='number' hidden name='projectId' value={projectId} readOnly/>
                <input type='number' hidden name='taskId' value={taskId} readOnly/>
                <ResourceSelect />
                <IconButton type='submit'>
                    <AddIcon />
                </IconButton>
            </FormBody>
    )
}

export default ResourceProjectTaskMappingForm;
