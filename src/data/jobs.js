export const mockJobs = [
    {
      id: "CONS-789123",
      type: "consolidation",
      template: "Consolidation",
      currentStage: "Origin Handling",
      status: "In Progress",
      origin: "Shanghai",
      destination: "Los Angeles",
      totalJobs: 3,
      createdAt: "2025-01-15",
      weight: "2100 kg"
    },
    {
      id: "JOB-123456",
      template: "Import LCL",
      currentStage: "Origin Handling",
      status: "In Progress",
      poNumber: "PO-2025-001",
      parentConsolidation: "CONS-789123"
    },
    {
      id: "JOB-123457",
      template: "Import LCL",
      currentStage: "Origin Handling",
      status: "In Progress",
      poNumber: "PO-2025-002",
      parentConsolidation: "CONS-789123"
    },
    {
      id: "JOB-456789",
      template: "Export FCL",
      currentStage: "Completion",
      status: "Completed",
      poNumber: "PO-2024-003"
    },
    {
      id: "CONS-234567",
      type: "consolidation",
      template: "Consolidation",
      currentStage: "Booking & Preparation",
      status: "In Progress",
      totalJobs: 2,
      createdAt: "2025-01-20"
    }
  ];