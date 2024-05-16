import { Box, Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckmarkIcon from "@mui/icons-material/CheckBox";
import {
  deleteTask,
  setTaskCompleteStatus,
} from "@/serverActions/projectActions";
import {
  DataGrid,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarDensitySelector,
  GridToolbarContainer,
} from "@mui/x-data-grid";
import TaskStages from "@/model/TaskStages";
import { useRouter } from "next/navigation";
import { useState } from "react";
import useWindowSize from "@/hooks/useWindowSize";

export function ProjectTaskDataGrid({ projectId, tasks, users }) {
  const router = useRouter();
  const windowSize = useWindowSize();
  const [rowSelectionModel, setRowSelectionModel] = useState([]);

  const handleEditClick = () => {
    if (rowSelectionModel.length > 0) {
      router.push(`/project/${projectId}/task/${rowSelectionModel[0]}`);
    }
  };

  const handleCompletedClick = async () => {
    if (rowSelectionModel.length > 0) {
      for (let i = 0; i < rowSelectionModel.length; i++) {
        const taskId = rowSelectionModel[i];
        await setTaskCompleteStatus(taskId, projectId, true);
      }
    }
  };

  const handleDeleteClick = async () => {
    if (rowSelectionModel.length > 0) {
      try {
        for (let i = 0; i < rowSelectionModel.length; i++) {
          await deleteTask(rowSelectionModel[i], projectId);
        }
      } catch (e) {
        console.error(e);
        alert(e.message);
      }
    }
  };

  const columns = [
    {
      field: "name",
      headerName: "Task",
      width: 175,
    },
    {
      field: "description",
      headerName: "Description",
      width: 400,
    },
    {
      field: "stage",
      headerName: "Stage",
      width: 175,
      valueGetter: (value) => {
        return TaskStages.getStageString(value);
      },
    },
    {
      field: "assignee",
      headerName: "Assigned User",
      width: 150,
      valueGetter: (value) => {
        const user = users.find((u) => u.id === value);
        const name = user ? user.name : "Unassigned";
        return name;
      },
    },
    {
      field: "dueDate",
      headerName: "Due Date",
    },
    {
      field: "completed",
      headerName: "Completed",
      valueGetter: (value) => {
        return Boolean(value) ? "Yes" : "No";
      },
    },
  ];

  function GridToolbarEditButton() {
    return (
      <Button variant="text" startIcon={<EditIcon />} onClick={handleEditClick}>
        Edit
      </Button>
    );
  }

  function GridToolbarDeleteButton() {
    return (
      <Button
        variant="text"
        startIcon={<DeleteIcon />}
        onClick={handleDeleteClick}
      >
        Delete
      </Button>
    );
  }

  function GridToolbarCompletedButton() {
    return (
      <Button
        variant="text"
        startIcon={<CheckmarkIcon />}
        onClick={handleCompletedClick}
      >
        Mark Completed
      </Button>
    );
  }

  function CustomToolbar(handleEditClick, handleDeleteClick) {
    return (
      <GridToolbarContainer>
        <GridToolbarColumnsButton />
        <GridToolbarFilterButton />
        <GridToolbarDensitySelector />
        <GridToolbarEditButton />
        <GridToolbarDeleteButton />
        <GridToolbarCompletedButton />
      </GridToolbarContainer>
    );
  }
  return (
    <Box sx={{ height: (windowSize.height || 1000) - 300 }}>
      <DataGrid
        checkboxSelection
        onRowSelectionModelChange={(newModel) => setRowSelectionModel(newModel)}
        rowSelectionModel={rowSelectionModel}
        columns={columns}
        rows={tasks}
        slots={{ toolbar: CustomToolbar }}
      />
    </Box>
  );
}
