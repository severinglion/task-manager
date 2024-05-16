import { Box, Stack, Typography } from "@mui/material";
import React from "react";
export function FormBody({ action, children, title }, ref) {
  const formStyle = {
    width: 400,
    borderRadius: 3,
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 2,
    paddingBottom: 2,
  };
  return (
    <Box sx={formStyle}>
      <form action={action}>
        <Stack spacing={3}>
          <Typography variant="h6">{title}</Typography>
          {...children}
        </Stack>
      </form>
    </Box>
  );
}

export default React.forwardRef(FormBody);
