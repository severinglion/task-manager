import {
    Box,
    Typography,
    Stack,
    LinearProgress,
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
    const defaultItemWidth = 250;
    const summaryStyle = {
        height: 75,
        width: '100%',
        '&:hover': {
            backgroundColor: 'lightgrey',
        }
    }

    const itemStyle={
        width: defaultItemWidth,
    }

    const progress = (project.totalTasks === 0 ? 0 : project.completedTasks / project.totalTasks) * 100
    console.log('progress', progress);
    return (
        <Link href={projectPageUrl} style={{textDecoration: 'none', color: 'black'}}>
            <Box sx={summaryStyle}>
                <Stack direction='row' spacing={3}>
                    <Box sx={itemStyle}>
                            <Typography variant='h6'>{project.name}</Typography>
                    </Box>
                    <Box sx={itemStyle}>
                        <Typography variant='body1'>{project.startDate || 'No Start Date'}</Typography>
                    </Box>
                    <Box sx={itemStyle}>
                        <LinearProgress variant='determinate' value={progress} />
                        <Typography variant='body1'>{project.completedTasks}/{project.totalTasks}</Typography>
                    </Box>
                    <ActionIconButton action={deleteProjectWrapper} icon={(<DeleteIcon />)} />
                </Stack>
            </Box>
        </Link>
    )
}