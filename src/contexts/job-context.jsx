import { createContext, useContext, useState, useCallback } from "react";
import { mockIndividualJobs, createStandaloneJob, addJobToConsolidation } from "../data/mock-jobs";

const JobContext = createContext();

export function useJobs() {
  const context = useContext(JobContext);
  if (!context) throw new Error("useJobs must be used within JobProvider");
  return context;
}

export function JobProvider({ children }) {
  const [jobs, setJobs] = useState(mockIndividualJobs);

  const createJob = useCallback(async (data) => {
    const job = await createStandaloneJob(data);
    setJobs(prev => [job, ...prev]);
    return job;
  }, []);

  const attachToConsolidation = useCallback(async (jobId, consId) => {
    const updatedConsolidation = await addJobToConsolidation(jobId, consId);
    setJobs(prev => prev.filter(j => j.id !== jobId)); // remove from standalone list
    return updatedConsolidation;
  }, []);

  return (
    <JobContext.Provider value={{ jobs, createJob, attachToConsolidation }}>
      {children}
    </JobContext.Provider>
  );
}