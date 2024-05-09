import {
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Box,
} from '@mui/material';
import { useRouter } from 'next/navigation';


export function AppDrawer({open, onClose}){
    const navPoints = [
        {
            label: 'Projects',
            path: '/',
        },
        {
            label: 'Resources',
            path: '/resources',
        },
        {
            label: 'Templates',
            path: '/template',
        }
    ]
    const router = useRouter();
    return (
        <Drawer open={open} onClose={onClose}>
            <Box sx={{width: 250}} role='presentation' onClick={onClose}>
                <List>
                    {navPoints.map((n, i) => (
                        <ListItem key={i} disablePadding>
                            <ListItemButton onClick={() => router.push(n.path)}>
                                <ListItemText primary={n.label} />
                            </ListItemButton>
                        </ ListItem>
                    ))}
                </List>
            </Box>
        </Drawer>
    )
}

export default AppDrawer;