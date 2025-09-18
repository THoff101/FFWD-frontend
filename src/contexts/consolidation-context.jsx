import { createContext, useContext, useState, useCallback } from "react";
import { toast } from "sonner@2.0.3";
import { mockConsolidations } from "../data/mock-jobs";

const ConsolidationContext = createContext();

export function useConsolidation() {
  const context = useContext(ConsolidationContext);
  if (!context) {
    throw new Error("useConsolidation must be used within a ConsolidationProvider");
  }
  return context;
}

export function ConsolidationProvider({ children }) {
  // Seed state with mockConsolidations
  const [consolidations, setConsolidations] = useState(() => {
    const initial = new Map();
    for (const cons of mockConsolidations) {
      initial.set(cons.id, cons);
    }
    return initial;
  });

  const createConsolidation = useCallback((data) => {
    // Basic validation for required fields
    const missing = [];
    if (!data.shipper || !data.shipper.company) missing.push("Shipper");
    if (!data.consignee || !data.consignee.company) missing.push("Consignee");
    if (!data.origin || !data.origin.city || !data.origin.port) missing.push("Origin");
    if (!data.destination || !data.destination.city || !data.destination.port) missing.push("Destination");
    if (missing.length > 0) {
      toast.error(`Missing required fields: ${missing.join(", ")}`);
      return null;
    }
    // Generate a consolidation ID
    const consolidationId = `CONS-${Date.now().toString().slice(-6)}`;
    const fullConsolidationData = {
      ...data,
      id: consolidationId,
      status: 'In Progress',
      currentStage: 1,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      origin: data.origin, // propagate from data
      destination: data.destination, // propagate from data
    };
    setConsolidations(prev => {
      const newMap = new Map(prev);
      newMap.set(consolidationId, fullConsolidationData);
      return newMap;
    });
    toast.success("Consolidation created successfully! Your freight forwarding process has begun.");
    return fullConsolidationData;
  }, []);

  const getConsolidation = useCallback((id) => {
    return consolidations.get(id);
  }, [consolidations]);

  const updateConsolidation = useCallback((id, updates) => {
    setConsolidations(prev => {
      const newMap = new Map(prev);
      const existing = newMap.get(id);
      if (existing) {
        newMap.set(id, { ...existing, ...updates, updatedAt: new Date().toISOString() });
      }
      return newMap;
    });
  }, []);

  const getJob = useCallback((consolidationId, jobId) => {
    const consolidation = consolidations.get(consolidationId);
    if (!consolidation) return null;
    
    return consolidation.individualJobs?.find(job => job.id === jobId);
  }, [consolidations]);

  const updateJob = useCallback((consolidationId, jobId, updates) => {
    setConsolidations(prev => {
      const newMap = new Map(prev);
      const consolidation = newMap.get(consolidationId);
      if (consolidation) {
        const updatedJobs = consolidation.individualJobs.map(job => 
          job.id === jobId 
            ? { ...job, ...updates, updatedAt: new Date().toISOString() }
            : job
        );
        newMap.set(consolidationId, {
          ...consolidation,
          individualJobs: updatedJobs,
          updatedAt: new Date().toISOString()
        });
      }
      return newMap;
    });
  }, []);

  const getAllConsolidations = useCallback(() => {
    return Array.from(consolidations.values());
  }, [consolidations]);

  const value = {
    createConsolidation,
    getConsolidation,
    updateConsolidation,
    getJob,
    updateJob,
    getAllConsolidations
  };

  return (
    <ConsolidationContext.Provider value={value}>
      {children}
    </ConsolidationContext.Provider>
  );
}