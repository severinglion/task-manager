"use client";

import IconButton from "@mui/material/IconButton";

export function ActionIconButton({ handler, icon }) {
  return (
    <IconButton
      onClick={async (e) => {
        console.log("Action button was clicked");
        await handler(e);
      }}
    >
      {icon}
    </IconButton>
  );
}

export default ActionIconButton;
