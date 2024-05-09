import {
    Box,
    Stack,
    Typography,
} from '@mui/material';


export function FormBody ({action, children, title}) {
    const formStyle = {
        width: 400,
        border: 'solid',
        borderRadius: 3,
        paddingLeft: 5,
        paddingRight: 5,
        paddingTop: 2,
        paddingBottom: 2,
    }
    return (
        <Box sx={formStyle}>
            <form action={action}>
                <Stack spacing={3}>
                    <Typography variant='h6'>{title}</Typography>
                    {...children}
                </Stack>
            </form>
        </Box>
    )
}

export default FormBody;