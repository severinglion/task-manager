"use client";

import { ProjectViewTabs } from "@/utils/constants";
import { useState } from "react";

export function useProjectTabs(hasOverDue) {
  const [currentTab, setTab] = useState(
    hasOverDue ? ProjectViewTabs.OVERDUE : ProjectViewTabs.LIST
  );

  const changeTab = (event, tab) => {
    const acceptableValues = Object.values(ProjectViewTabs);
    if (acceptableValues.includes(tab)) {
      setTab(tab);
    }
  };

  return [currentTab, changeTab];
}
