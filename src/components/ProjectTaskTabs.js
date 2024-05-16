import { Tab, Tabs } from "@mui/material";
import { ProjectViewTabs } from "@/utils/constants";
export function ProjectTaskTabs({ hasOverDue, value, onChange }) {
  return (
    <Tabs value={value} onChange={onChange}>
      <Tab
        label="Overdue"
        value={ProjectViewTabs.OVERDUE}
        disabled={!hasOverDue}
      />
      <Tab label="List" value={ProjectViewTabs.LIST} />
      <Tab label="Grid" value={ProjectViewTabs.GRID} />
    </Tabs>
  );
}
