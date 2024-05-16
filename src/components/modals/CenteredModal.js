"use client";
import { Modal, Box } from "@mui/material";
import TaskForm from "../forms/TaskForm";

function CenteredModal({ projectId, open, handleClose }) {
  const modalContentStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    borderRadius: 15,
    boxShadow: 24,
    p: 4,
  };
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={modalContentStyle}>
        <TaskForm
          projectId={projectId}
          type="projectTasks"
          onSubmit={handleClose}
        />
      </Box>
    </Modal>
  );
}

export default CenteredModal;
