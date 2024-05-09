"use client"
import {
  Box,
  AppBar,
  Typography,
  IconButton,
  Toolbar
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image';
import {useState} from 'react';
import AppDrawer from '@/components/navigation/AppDrawer';


export function HeaderAppBar ({}) {
  const [drawer, setDrawer] = useState(false);
  const openDrawer = () => {
    setDrawer(true);
  }
  const closeDrawer = () => {
    setDrawer(false);
  }
  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            onClick={openDrawer}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' component='div'>
              <Box
                width={50}
                height={50}
              >
                <Image
                  width={50}
                  height={50}
                  src='https://future-focus.ca/wp-content/uploads/2022/12/cropped-FutureFocus_icon.png'
                  alt='Future Focus Inc'
                  priority={false}
                />
              </Box>
            </Typography>
            <Typography
              variant='h6'
              component='div'
              sx={{flexGrow: 1}}
            >
              Process Management
            </Typography>
        </Toolbar>
      </AppBar>
      <AppDrawer open={drawer} onClose={closeDrawer} />
    </Box>
  )
}

export default HeaderAppBar;
