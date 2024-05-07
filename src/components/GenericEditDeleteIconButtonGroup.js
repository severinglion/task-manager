'use client'
import IconButton from '@mui/material/IconButton';
import ButtonGroup from '@mui/material/ButtonGroup';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useRouter } from 'next/navigation'


export function GenericEditDeleteIconButtonGroup({deleteAction, editHref}) {
    const router = useRouter();
    const handleDelete = async () => {
        await deleteAction();
    }
    return (
        <ButtonGroup>
            <IconButton onClick={() => router.push(editHref)}>
                <EditIcon />
            </IconButton>
            <IconButton>
                <DeleteIcon onClick={handleDelete}/>
            </IconButton>
        </ButtonGroup>
    )
}

export default GenericEditDeleteIconButtonGroup;
