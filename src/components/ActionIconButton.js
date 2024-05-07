'use client'

import IconButton from '@mui/material/IconButton';

export function ActionIconButton ({action, icon}) {
  return (
    <IconButton onClick={action}>
      {icon}
    </IconButton>
  );
}

export default ActionIconButton;