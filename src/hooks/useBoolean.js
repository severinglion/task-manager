"use client";

import { useState } from "react";

export function useBoolean(initialState) {
  const [value, setValue] = useState(initialState);

  const setTrue = () => setValue(true);
  const setFalse = () => setValue(false);

  return [value, setTrue, setFalse];
}

export default useBoolean;
