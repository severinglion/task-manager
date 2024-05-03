'use client'
import { useEffect, useSyncExternalStore } from "react";
import { getProject } from "@/serverActions/projectActions";

/**
 * 
 * @param {async function} serverAction 
 * @param {Array} args 
 * @returns 
 */
export default function useProjectTaskListing (id) {
  const subscribe = useCallback(() => getProject(id), [id]);
  const getSnapshot = 
  const project = useSyncExternalStore()
  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const data = await serverAction(...args);
      setData(data);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  }, [serverAction, args]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error, fetchData };
}
