"use client"
import {
  Box,
  AppBar,
  Typography,
  Toolbar
} from '@mui/material';
import Image from 'next/image';

export function HeaderAppBar ({}) {
  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static">
        <Toolbar>
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
    </Box>
  )
}

export default HeaderAppBar;
