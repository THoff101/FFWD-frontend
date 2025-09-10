import { useState } from "react";
import { ConsolidationCreationProcess } from "./components/consolidation-creation-process";
import { ConsolidationDetailsPage } from "./components/consolidation-details-page";
import { IndividualJobDetailsPage } from "./components/individual-job-details-page";
import { JobsPage } from "./components/jobs-page";
import { toast } from "sonner@2.0.3";

export default function App() {
  const [currentView, setCurrentView] = useState<'jobs' | 'creation' | 'consolidation-details' | 'job-details'>('jobs');
  const [consolidationData, setConsolidationData] = useState<any>(null);
  const [selectedJobData, setSelectedJobData] = useState<any>(null);

  const handleConsolidationCreated = (data: any) => {
    // Generate a consolidation ID
    const consolidationId = `CONS-${Date.now().toString().slice(-6)}`;
    const fullConsolidationData = {
      ...data,
      id: consolidationId,
      status: 'In Progress',
      currentStage: 1,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      individualJobs: [
        {
          id: `JOB-${Date.now().toString().slice(-5)}1`,
          poNumber: 'PO-2024-001',
          template: 'Import LCL',
          status: 'In Progress',
          currentStage: 2,
          shipper: { company: 'ABC Electronics Ltd', city: 'Shanghai' },
          consignee: { company: 'XYZ Corp', city: 'Los Angeles' },
          weight: '750',
          volume: '1.2'
        },
        {
          id: `JOB-${Date.now().toString().slice(-5)}2`,
          poNumber: 'PO-2024-002',
          template: 'Import LCL',
          status: 'In Progress',
          currentStage: 2,
          shipper: { company: 'DEF Manufacturing', city: 'Shanghai' },
          consignee: { company: 'XYZ Corp', city: 'Los Angeles' },
          weight: '850',
          volume: '1.4'
        }
      ]
    };
    
    setConsolidationData(fullConsolidationData);
    setCurrentView('consolidation-details');
    toast.success("Consolidation created successfully! Your freight forwarding process has begun.");
  };

  const handleViewJob = (jobData: any) => {
    setSelectedJobData(jobData);
    setCurrentView('job-details');
  };

  const handleBackToConsolidation = () => {
    setCurrentView('consolidation-details');
    setSelectedJobData(null);
  };

  const handleBackToJobs = () => {
    setCurrentView('jobs');
    setConsolidationData(null);
    setSelectedJobData(null);
  };

  if (currentView === 'creation') {
    return <ConsolidationCreationProcess onConsolidationCreated={handleConsolidationCreated} onBackToJobs={handleBackToJobs} />;
  }

  if (currentView === 'consolidation-details' && consolidationData) {
    return <ConsolidationDetailsPage 
      data={consolidationData} 
      onBackToJobs={handleBackToJobs}
      onViewJob={handleViewJob}
    />;
  }

  if (currentView === 'job-details' && selectedJobData && consolidationData) {
    return <IndividualJobDetailsPage 
      jobData={selectedJobData}
      consolidationData={consolidationData}
      onBackToConsolidation={handleBackToConsolidation}
    />;
  }

  return <JobsPage 
    onCreateNew={() => setCurrentView('creation')}
    onViewConsolidation={(data) => {
      setConsolidationData(data);
      setCurrentView('consolidation-details');
    }}
  />;
}