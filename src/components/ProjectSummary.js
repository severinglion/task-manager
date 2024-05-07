import {
    Box,
    Typography,
    Stack
} from '@mui/material';
import {deleteProject} from '@/serverActions/projectActions';
import ActionIconButton from '@/components/ActionIconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Link from 'next/link'

export default function ProjectSummary({project}) {
    console.log(project);
    const projectPageUrl = `/project/${project.id}`;
    const deleteProjectWrapper = async () => {
        'use server'
        console.log('delete project', project.id)
        await deleteProject(project.id);
    }
    return (
        <Box>
            <Stack direction='row'>
                <Link href={projectPageUrl}>
                    <Typography variant='h6'>{project.name}</Typography>
                </Link>
                <ActionIconButton action={deleteProjectWrapper} icon={(<DeleteIcon />)} />
            </Stack>
        </Box>
    )
}