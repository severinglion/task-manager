"use client";
import { forwardRef } from "react";
import { Button, TextField } from "@mui/material";
import { addProjectTask } from "@/serverActions/projectActions";
import UserSelect from "../UserSelect";
import StageSelect from "@/components/StageSelect";
import FormBody from "@/components/inputs/FormBody";
import { ClientDatePicker } from "@/components/inputs/ClientDatePicker";

export function TaskForm({ id, type, onSubmit }, ref) {
  const handleSubmit = async (formData) => {
    await addProjectTask(formData);
    if (onSubmit) onSubmit();
  };
  return (
    <FormBody action={handleSubmit} title="Create Task" ref={ref}>
      <input hidden readOnly name="id" value={id} />
      <input hidden readOnly name="type" value={type} />
      <TextField
        name="name"
        label="Name"
        inputProps={{ id: "name" }}
        required
      />
      <TextField name="description" label="Description" />
      <UserSelect />
      <StageSelect />
      <TextField name="docRef" label="Training Link" type="url" />
      <ClientDatePicker name="dueDate" label="Due Date" />
      <Button variant="text" color="primary" type="submit">
        Submit
      </Button>
    </FormBody>
  );
}

export default forwardRef(TaskForm);
