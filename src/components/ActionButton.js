'use client'

import Button from '@mui/material/Button';

export function ActionButton ({action, title}) {
  return (
    <Button variant="contained" onClick={action}>
      {title}
    </Button>
  );
}

export default ActionButton;