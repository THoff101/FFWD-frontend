import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { TrackingProgress } from "./modern-progress";
import { useConsolidation } from "../contexts/consolidation-context";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { useState, useEffect } from "react";
import { fetchJobById } from "../data/mock-jobs";
import { 
  ArrowLeft,
  Play, 
  Pause,
  Edit, 
  FileText, 
  Upload, 
  Settings, 
  Clock, 
  Package,
  Plus,
  History,
  ExternalLink
} from "lucide-react";
import { jobStages } from "../data/job-stages";


// --- Tasks Section styles (mirroring consolidation) ---
const TasksSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(0.5rem, 2vw, 0.75rem);
`;

const TasksTitle = styled.h4`
  color: #1e40af;
  margin: 0;
  font-size: clamp(0.875rem, 2.5vw, 1rem);
`;

const TasksGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(0.5rem, 2vw, 0.75rem);
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const TaskCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: clamp(0.5rem, 2vw, 0.75rem);
  background-color: var(--card);
  border-radius: 0.5rem;
  border: 1px solid #bfdbfe;
  
  @media (min-width: 640px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

const TaskLeft = styled.div`
  display: flex;
  align-items: center;
  gap: clamp(0.5rem, 2vw, 0.75rem);
  flex: 1;
  min-width: 0;
`;

const TaskDot = styled.div`
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background-color: ${props => props.$urgent ? '#ef4444' : '#eab308'};
  flex-shrink: 0;
`;

const TaskName = styled.span`
  font-size: clamp(0.75rem, 2vw, 0.875rem);
  color: var(--foreground);
  flex: 1;
  min-width: 0;
`;

const UrgentBadge = styled(Badge)`
  background-color: #fee2e2;
  color: #dc2626;
  border: 1px solid #fecaca;
  font-size: clamp(0.625rem, 1.5vw, 0.75rem);
  white-space: nowrap;
`;

const TaskActions = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-shrink: 0;
`;

const TaskButton = styled(Button)`
  font-size: clamp(0.75rem, 2vw, 0.875rem);
  white-space: nowrap;
  
  &.generate {
    background-color: #eff6ff;
    border: 1px solid #bfdbfe;
    color: #1d4ed8;
    
    &:hover {
      background-color: #dbeafe;
    }
  }
  
  &.upload {
    background-color: var(--secondary);
    border: 1px solid var(--border);
    color: var(--secondary-foreground);
    
    &:hover {
      background-color: var(--muted);
    }
  }
`;

const PageContainer = styled.div`
  min-height: 100vh;
  background-color: var(--background);
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Header = styled.div`
  background-color: var(--card);
  border-bottom: 1px solid var(--border);
  padding: clamp(1rem, 3vw, 1.5rem);
`;

const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    gap: 0;
  }
`;

const HeaderLeft = styled.div`
  flex: 1;
  min-width: 0;
`;

const HeaderTop = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: clamp(0.5rem, 2vw, 1rem);
  margin-bottom: clamp(0.5rem, 2vw, 0.75rem);
`;

const BackButton = styled(Button)`
  color: var(--muted-foreground);
  font-size: clamp(0.875rem, 2.5vw, 1rem);
  
  &:hover {
    color: var(--foreground);
    background-color: var(--muted);
  }
`;

const Divider = styled.div`
  height: 1.5rem;
  width: 1px;
  background-color: var(--border);
  display: none;
  
  @media (min-width: 640px) {
    display: block;
  }
`;

const StatusBadge = styled(Badge)`
  background-color: #dbeafe;
  color: #1d4ed8;
  border: 1px solid #bfdbfe;
  font-size: clamp(0.625rem, 1.5vw, 0.75rem);
  white-space: nowrap;
`;

const TemplateBadge = styled(Badge)`
  background-color: var(--secondary);
  color: var(--secondary-foreground);
  border: 1px solid var(--border);
  font-size: clamp(0.625rem, 1.5vw, 0.75rem);
  white-space: nowrap;
`;

const ConsolidationBadge = styled(Badge)`
  background-color: #f3e8ff;
  color: #7c3aed;
  border: 1px solid #e9d5ff;
  font-size: clamp(0.625rem, 1.5vw, 0.75rem);
  white-space: nowrap;
`;

const Title = styled.h1`
  font-size: clamp(1.25rem, 4vw, 1.5rem);
  color: var(--foreground);
  margin: 0;
  word-break: break-word;
`;

const Subtitle = styled.p`
  color: var(--muted-foreground);
  margin: 0;
  font-size: clamp(0.75rem, 2vw, 0.875rem);
  line-height: 1.4;
`;

const HeaderRight = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: clamp(0.5rem, 2vw, 0.75rem);
`;

const EditButton = styled(Button)`
  background-color: var(--secondary);
  border: 1px solid var(--border);
  color: var(--secondary-foreground);
  font-size: clamp(0.875rem, 2.5vw, 1rem);
  white-space: nowrap;
  
  &:hover {
    background-color: var(--muted);
  }
`;

const ContentArea = styled.div`
  flex: 1;
  padding: clamp(0.75rem, 3vw, 1.5rem);
  overflow: auto;
  background-color: var(--muted);
`;

const ContentWrapper = styled.div`
  max-width: 96rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: clamp(1rem, 3vw, 1.5rem);
`;

const SummaryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: clamp(0.75rem, 2vw, 1rem);
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const SummaryCard = styled(Card)`
  border: 1px solid var(--border);
  background-color: var(--card);
`;

const SummaryCardContent = styled(CardContent)`
  padding: clamp(0.75rem, 3vw, 1rem);
`;

const SummaryLabel = styled.div`
  font-size: clamp(0.75rem, 2vw, 0.875rem);
  color: var(--muted-foreground);
  margin-bottom: 0.25rem;
`;

const SummaryValue = styled.div`
  color: var(--foreground);
  font-size: clamp(0.875rem, 2.5vw, 1rem);
  word-break: break-word;
`;

const CurrentStageCard = styled(Card)`
  border: 2px solid #bfdbfe;
  background-color: #eff6ff;
`;

const CurrentStageContent = styled(CardContent)`
  padding: clamp(1rem, 3vw, 1.5rem);
`;

const CurrentStageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  
  @media (min-width: 640px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

const StageIconContainer = styled.div`
  align-self: center;
  width: clamp(2rem, 6vw, 2.5rem);
  height: clamp(2rem, 6vw, 2.5rem);
  background-color: #dbeafe;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #bfdbfe;
  flex-shrink: 0;
`;

const ClockIcon = styled(Clock)`
  width: clamp(1rem, 3vw, 1.25rem);
  height: clamp(1rem, 3vw, 1.25rem);
  color: #2563eb;
`;

const StageContent = styled.div`
  flex: 1;
  min-width: 0;
`;

const StageTitle = styled.h3`
  font-size: clamp(1rem, 3vw, 1.125rem);
  color: #1e40af;
  margin: 0 0 clamp(0.5rem, 2vw, 0.75rem) 0;
`;

const StageDescription = styled.p`
  color: var(--muted-foreground);
  margin: 0 0 clamp(0.75rem, 2vw, 1rem) 0;
  font-size: clamp(0.875rem, 2.5vw, 1rem);
  line-height: 1.4;
`;

const ExternalNotice = styled.div`
  padding: clamp(0.5rem, 2vw, 0.75rem);
  background-color: #fef3c7;
  border: 1px solid #fde68a;
  border-radius: 0.5rem;
  margin: clamp(0.75rem, 2vw, 1rem) 0;
`;

const ExternalText = styled.p`
  color: #d97706;
  margin: 0;
  font-size: clamp(0.75rem, 2vw, 0.875rem);
  line-height: 1.4;
`;

const ActionButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: clamp(1rem, 3vw, 1.5rem);
  
  @media (min-width: 640px) {
    flex-direction: row;
  }
`;

const ResumeButton = styled(Button)`
  background-color: #16a34a;
  color: white;
  flex: 1;
  
  &:hover {
    background-color: #15803d;
  }
`;

const PauseButton = styled(Button)`
  background-color: var(--secondary);
  border: 1px solid var(--border);
  color: var(--secondary-foreground);
  flex: 1;
  
  &:hover {
    background-color: var(--muted);
  }
`;

const ViewConsolidationButton = styled(Button)`
  background-color: var(--secondary);
  border: 1px solid var(--border);
  color: var(--secondary-foreground);
  flex: 1;
  
  &:hover {
    background-color: var(--muted);
  }
`;

const TwoColumnGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(1rem, 3vw, 1.5rem);
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const JobDetailsCard = styled(Card)`
  border: 1px solid #c7d2fe;
  background-color: var(--card);
`;

const JobDetailsHeader = styled(CardHeader)`
  background-color: #eef2ff;
  border-bottom: 1px solid #c7d2fe;
  padding: clamp(1rem, 3vw, 1.5rem);
`;

const JobDetailsTitle = styled(CardTitle)`
  font-size: clamp(1rem, 3vw, 1.125rem);
  color: #4338ca;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const JobDetailsContent = styled(CardContent)`
  padding: clamp(1rem, 3vw, 1.5rem);
`;

const DetailsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(0.75rem, 2vw, 1rem);
`;

const DetailGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(0.5rem, 2vw, 0.75rem);
`;

const DetailGroupTitle = styled.h4`
  color: var(--foreground);
  margin: 0;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--border);
  font-size: clamp(0.875rem, 2.5vw, 1rem);
`;

const DetailItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: clamp(0.25rem, 1vw, 0.5rem) 0;
  
  @media (min-width: 640px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

const DetailLabel = styled.span`
  color: var(--muted-foreground);
  font-size: clamp(0.75rem, 2vw, 0.875rem);
  min-width: 120px;
`;

const DetailValue = styled.span`
  color: var(--foreground);
  font-size: clamp(0.75rem, 2vw, 0.875rem);
  flex: 1;
  word-break: break-word;
  
  @media (min-width: 640px) {
    text-align: right;
  }
`;

const DocumentsCard = styled(Card)`
  border: 1px solid #e9d5ff;
  background-color: var(--card);
`;

const DocumentsHeader = styled(CardHeader)`
  background-color: #f3e8ff;
  border-bottom: 1px solid #e9d5ff;
  padding: clamp(1rem, 3vw, 1.5rem);
`;

const DocumentsTitle = styled(CardTitle)`
  font-size: clamp(1rem, 3vw, 1.125rem);
  color: #7c3aed;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const DocumentsContent = styled(CardContent)`
  padding: clamp(1rem, 3vw, 1.5rem);
`;

const DocumentsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(0.5rem, 2vw, 0.75rem);
`;

const DocumentCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: clamp(0.5rem, 2vw, 0.75rem);
  background-color: var(--card);
  border-radius: 0.5rem;
  border: 1px solid var(--border);
  
  @media (min-width: 640px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const DocumentName = styled.span`
  font-size: clamp(0.75rem, 2vw, 0.875rem);
  color: var(--foreground);
  flex: 1;
`;

const DocumentActions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

const DocumentBadge = styled(Badge)`
  font-size: clamp(0.625rem, 1.5vw, 0.75rem);
  
  ${props => {
    switch (props.$color) {
      case 'green':
        return `
          background-color: #dcfce7;
          color: #15803d;
          border: 1px solid #bbf7d0;
        `;
      case 'yellow':
        return `
          background-color: #fef3c7;
          color: #a16207;
          border: 1px solid #fde68a;
        `;
      case 'red':
        return `
          background-color: #fee2e2;
          color: #dc2626;
          border: 1px solid #fecaca;
        `;
      default:
        return `
          background-color: var(--muted);
          color: var(--muted-foreground);
          border: 1px solid var(--border);
        `;
    }
  }}
`;

const DocumentButton = styled(Button)`
  background-color: var(--secondary);
  border: 1px solid var(--border);
  color: var(--secondary-foreground);
  font-size: clamp(0.75rem, 2vw, 0.875rem);
  
  &:hover {
    background-color: var(--muted);
  }
`;

const AddDocumentSection = styled.div`
  margin-top: clamp(0.75rem, 2vw, 1rem);
  padding-top: clamp(0.75rem, 2vw, 1rem);
  border-top: 1px solid #e9d5ff;
`;

const AddDocumentButton = styled(Button)`
  width: 100%;
  background-color: #f3e8ff;
  border: 1px solid #e9d5ff;
  color: #7c3aed;
  
  &:hover {
    background-color: #e9d5ff;
  }
`;

const HistoryCard = styled(Card)`
  border: 1px solid #fed7aa;
  background-color: var(--card);
`;

const HistoryHeader = styled(CardHeader)`
  background-color: #fff7ed;
  border-bottom: 1px solid #fed7aa;
  padding: clamp(1rem, 3vw, 1.5rem);
`;

const HistoryTitle = styled(CardTitle)`
  font-size: clamp(1rem, 3vw, 1.125rem);
  color: #c2410c;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const HistoryContent = styled(CardContent)`
  padding: clamp(1rem, 3vw, 1.5rem);
`;

const HistoryList = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(0.75rem, 2vw, 1rem);
  max-height: clamp(12rem, 40vh, 16rem);
  overflow-y: auto;
`;

const HistoryItem = styled.div`
  display: flex;
  gap: clamp(0.75rem, 2vw, 1rem);
  padding: clamp(0.5rem, 2vw, 0.75rem);
  background-color: var(--card);
  border-radius: 0.5rem;
  border: 1px solid var(--border);
`;

const HistoryDot = styled.div`
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background-color: #ea580c;
  margin-top: 0.5rem;
  flex-shrink: 0;
`;

const HistoryItemContent = styled.div`
  flex: 1;
  min-width: 0;
`;

const HistoryItemHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  
  @media (min-width: 640px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

const HistoryItemLeft = styled.div`
  flex: 1;
  min-width: 0;
`;

const HistoryEventName = styled.p`
  font-size: clamp(0.75rem, 2vw, 0.875rem);
  color: var(--foreground);
  margin: 0;
`;

const HistoryEventDetails = styled.p`
  font-size: clamp(0.75rem, 2vw, 0.875rem);
  color: var(--muted-foreground);
  margin: 0.25rem 0 0 0;
  line-height: 1.3;
`;

const HistoryTimestamp = styled.div`
  font-size: clamp(0.625rem, 1.5vw, 0.75rem);
  color: var(--muted-foreground);
  white-space: nowrap;
`;

const HistoryUser = styled.p`
  font-size: clamp(0.625rem, 1.5vw, 0.75rem);
  color: var(--muted-foreground);
  margin: 0.25rem 0 0 0;
`;

export function IndividualJobDetailsPage() {
  const { consolidationId, jobId } = useParams();
  const navigate = useNavigate();
  const { getConsolidation, getJob } = useConsolidation();
  const [jobData, setJobData] = useState(null);
  const [consolidationData, setConsolidationData] = useState(null);

  useEffect(() => {
    if (consolidationId) {
      const cons = getConsolidation(consolidationId);
      const job = getJob(consolidationId, jobId);
      setConsolidationData(cons);
      setJobData(job);
    } else {
      // standalone job lookup
      fetchJobById(jobId).then(setJobData);
    }
  }, [consolidationId, jobId, getConsolidation, getJob]);

  if (!jobData) {
    return (
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <h2>Job not found</h2>
        <button onClick={() => navigate("/jobs")}>Back to Jobs</button>
      </div>
    );
  }

  // Handler to navigate back to consolidation details
  const handleBack = () => {
    if (consolidationData) {
       navigate(`/consolidation/${consolidationData.id}`);
     } else {
       navigate("/jobs");
     }
  };
  const progressStages = jobStages.map((stage, index) => {
    const jobStage = jobData.currentStage || 1;
    return {
      name: stage.name,
      status: index < jobStage ? 'completed' : 
              index === jobStage - 1 ? 'current' : 
              stage.name === 'Destination Clearance' ? 'external' : 'pending',
      description: stage.description
    };
  });

  const currentStageIndex = progressStages.findIndex(stage => stage.status === 'current');
  const currentStage = progressStages[currentStageIndex] || progressStages[0];

  // Pending tasks logic
  let pendingTasks = [];
  if (consolidationData) {
    // Placeholder: derive tasks based on consolidation’s stage (reuse as in consolidation)
    pendingTasks = [
      { name: "Generate MBL (Master Bill of Lading)", type: "generate", urgent: true },
      { name: "Upload Consolidation Invoice", type: "upload", urgent: false },
      { name: "Generate LCL Manifest", type: "generate", urgent: true },
      { name: "Complete Customs Entry", type: "upload", urgent: false }
    ];
  } else {
    // Standalone job: placeholder tasks for document uploads etc.
    pendingTasks = [
      { name: "Upload Commercial Invoice", type: "upload", urgent: false },
      { name: "Upload Packing List", type: "upload", urgent: false },
      { name: "Generate Job Instructions", type: "generate", urgent: false }
    ];
  }

  // Placeholder: determine if progress can be advanced (disabled if in consolidation and not all jobs done)
  let progressDisabled = false;
  let progressTooltip = "";
  if (consolidationData) {
    // Placeholder: disable if not all jobs in consolidation at this stage are complete
    // This would check actual job statuses in a real app.
    progressDisabled = true;
    progressTooltip = "Complete all jobs in this consolidation at the current stage to proceed.";
  }
  const historyLog = [
    { 
      timestamp: jobData.createdAt || new Date().toISOString(), 
      event: "Job Created", 
      user: "System", 
      details: `Individual job ${jobData.id} created and added to consolidation` 
    },
    { 
      timestamp: jobData.createdAt || new Date().toISOString(), 
      event: "Added to Consolidation", 
      user: "System", 
      details: `Job assigned to consolidation ${consolidationData?.id || "Standalone"}` 
    },
    { 
      timestamp: jobData.updatedAt || new Date().toISOString(), 
      event: "Documentation Started", 
      user: "System", 
      details: "Job documentation preparation initiated" 
    },
    { 
      timestamp: jobData.updatedAt || new Date().toISOString(), 
      event: "Stage Advanced", 
      user: "System", 
      details: `Advanced to ${currentStage?.name}` 
    }
  ];

  const formatDateTime = (dateString) => {
    return new Date(dateString).toLocaleString();
  };

  return (
    <PageContainer>
        {/* Header */}
        <Header>
          <HeaderContent>
            <HeaderLeft>
              <HeaderTop>
                <BackButton
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={handleBack}
                >
                  <ArrowLeft style={{width: '1rem', height: '1rem', marginRight: '0.5rem'}} />
                  {consolidationData ? "Back to Consolidation" : "Back to Jobs"}
                </BackButton>
                <Divider />
                <StatusBadge>
                  {jobData.status || 'In Progress'}
                </StatusBadge>
                <TemplateBadge variant="outline">
                  {jobData.template}
                </TemplateBadge>
                {consolidationData ? (
                   <ConsolidationBadge variant="outline">
                     <Package style={{width: '0.75rem', height: '0.75rem', marginRight: '0.25rem'}} />
                     Part of {consolidationData?.id || "Standalone"}
                   </ConsolidationBadge>
                 ) : (
                   <ConsolidationBadge variant="outline">
                     <Package style={{width: '0.75rem', height: '0.75rem', marginRight: '0.25rem'}} />
                     Standalone Job
                   </ConsolidationBadge>
                 )}
                {/* <ConsolidationBadge variant="outline">
                  <Package style={{width: '0.75rem', height: '0.75rem', marginRight: '0.25rem'}} />
                  Part of {consolidationData.id}
                </ConsolidationBadge> */}
              </HeaderTop>
              <Title>{jobData.id}</Title>
              <Subtitle>
                PO: {jobData.poNumber} • {jobData.template} {consolidationData ? ` • Part of consolidation ${consolidationData?.id || "Standalone"}` : " • Standalone Job"}
              </Subtitle>
            </HeaderLeft>
            <HeaderRight>
              <EditButton variant="outline" size="sm">
                <Edit style={{width: '1rem', height: '1rem', marginRight: '0.5rem'}} />
                Edit Details
              </EditButton>
              <EditButton variant="outline" size="sm">
                <Settings style={{width: '1rem', height: '1rem', marginRight: '0.5rem'}} />
                Modify Progress
              </EditButton>
            </HeaderRight>
          </HeaderContent>
        </Header>

        {/* Content Area */}
        <ContentArea>
          <ContentWrapper>
            {/* Summary Cards */}
            <SummaryGrid>
              <SummaryCard>
                <SummaryCardContent>
                  <SummaryLabel>PO Number</SummaryLabel>
                  <SummaryValue>{jobData.poNumber}</SummaryValue>
                </SummaryCardContent>
              </SummaryCard>
              
              <SummaryCard>
                <SummaryCardContent>
                  <SummaryLabel>Template</SummaryLabel>
                  <SummaryValue>{jobData.template}</SummaryValue>
                </SummaryCardContent>
              </SummaryCard>
              
              <SummaryCard>
                <SummaryCardContent>
                  <SummaryLabel>Current Stage</SummaryLabel>
                  <SummaryValue>{consolidationData?.id || "Stage 1 | Booking & Preparation"}</SummaryValue>
                </SummaryCardContent>
              </SummaryCard>
              
              <SummaryCard>
                <SummaryCardContent>
                  <SummaryLabel>Consolidation</SummaryLabel>
                  <SummaryValue>{consolidationData?.id || "Standalone"}</SummaryValue>
                </SummaryCardContent>
              </SummaryCard>
            </SummaryGrid>

            {/* Progress Timeline */}
            <TrackingProgress 
              currentStage={jobData.currentStage || 1} 
              stages={progressStages}
            />

            {/* Current Stage Alert */}
            <CurrentStageCard>
              <CurrentStageContent>
                <CurrentStageContainer>
                  <StageIconContainer>
                    <ClockIcon />
                  </StageIconContainer>
                  <StageContent>
                    <StageTitle>
                      Current Stage: {currentStage?.name}
                    </StageTitle>
                    <StageDescription>
                      {currentStage?.description}
                    </StageDescription>

                    {/* Explanatory notice always shown above tasks */}
                    <ExternalNotice>
                      <ExternalText>
                        {consolidationData
                          ? `📋 This individual job follows the progress of its parent consolidation ${consolidationData?.id || "Standalone"}. Most actions are managed at the consolidation level.`
                          : "📋 This is a standalone job. It can be managed independently or added to a consolidation later."}
                      </ExternalText>
                    </ExternalNotice>

                    {/* Tasks Section */}
                    <TasksSection>
                      <TasksTitle>Pending Tasks:</TasksTitle>
                      <TasksGrid>
                        {pendingTasks.map((task, idx) => (
                          <TaskCard key={idx}>
                            <TaskLeft>
                              <TaskDot $urgent={task.urgent} />
                              <TaskName>{task.name}</TaskName>
                              {task.urgent && <UrgentBadge>Urgent</UrgentBadge>}
                            </TaskLeft>
                            <TaskActions>
                              <TaskButton
                                className={task.type}
                                variant="outline"
                                size="sm"
                              >
                                {task.type === 'generate' ? (
                                  <>
                                    <Settings style={{width: '0.75rem', height: '0.75rem', marginRight: '0.25rem'}} />
                                    Generate
                                  </>
                                ) : (
                                  <>
                                    <Upload style={{width: '0.75rem', height: '0.75rem', marginRight: '0.25rem'}} />
                                    Upload
                                  </>
                                )}
                              </TaskButton>
                            </TaskActions>
                          </TaskCard>
                        ))}
                      </TasksGrid>
                    </TasksSection>

                    <ActionButtonsContainer>
                      {consolidationData ? (
                        <>
                          <ResumeButton
                            disabled={progressDisabled}
                            title={progressDisabled ? progressTooltip : undefined}
                          >
                            <Play style={{width: '1rem', height: '1rem', marginRight: '0.5rem'}} />
                            Resume Progress
                          </ResumeButton>
                          <PauseButton variant="outline">
                            <Pause style={{width: '1rem', height: '1rem', marginRight: '0.5rem'}} />
                            Job Paused
                          </PauseButton>
                        </>
                      ) : (
                        <ResumeButton>
                          <Play style={{width: '1rem', height: '1rem', marginRight: '0.5rem'}} />
                          Progress Job
                        </ResumeButton>
                      )}
                      <ViewConsolidationButton
                        type="button"
                        variant="outline"
                        onClick={handleBack}
                      >
                        <ExternalLink style={{width: '1rem', height: '1rem', marginRight: '0.5rem'}} />
                        {consolidationData ? "View Consolidation" : "Back to Jobs"}
                      </ViewConsolidationButton>
                    </ActionButtonsContainer>
                  </StageContent>
                </CurrentStageContainer>
              </CurrentStageContent>
            </CurrentStageCard>

            <TwoColumnGrid>
              {/* Job Details */}
              <JobDetailsCard>
                <JobDetailsHeader>
                  <JobDetailsTitle>
                    <Package style={{width: '1.25rem', height: '1.25rem'}} />
                    Individual Job Details
                  </JobDetailsTitle>
                </JobDetailsHeader>
                <JobDetailsContent>
                  <DetailsList>
                    <DetailGroup>
                      <DetailGroupTitle>Basic Information</DetailGroupTitle>
                      <DetailItem>
                        <DetailLabel>Job ID:</DetailLabel>
                        <DetailValue>{jobData.id}</DetailValue>
                      </DetailItem>
                      <DetailItem>
                        <DetailLabel>PO Number:</DetailLabel>
                        <DetailValue>{jobData.poNumber}</DetailValue>
                      </DetailItem>
                      <DetailItem>
                        <DetailLabel>Template:</DetailLabel>
                        <DetailValue>{jobData.template}</DetailValue>
                      </DetailItem>
                      <DetailItem>
                        <DetailLabel>Status:</DetailLabel>
                        <DetailValue>{jobData.status || 'In Progress'}</DetailValue>
                      </DetailItem>
                    </DetailGroup>

                    <DetailGroup>
                      <DetailGroupTitle>Consolidation Info</DetailGroupTitle>
                      <DetailItem>
                        <DetailLabel>Parent Consolidation:</DetailLabel>
                        <DetailValue>{consolidationData?.id || "Standalone"}</DetailValue>
                      </DetailItem>
                      <DetailItem>
                        <DetailLabel>Route:</DetailLabel>
                        <DetailValue>
                          {(consolidationData?.origin?.city || 'N/A')} → {(consolidationData?.destination?.city || 'N/A')}
                        </DetailValue>
                      </DetailItem>
                    </DetailGroup>

                    <DetailGroup>
                      <DetailGroupTitle>Parties</DetailGroupTitle>
                      <DetailItem>
                        <DetailLabel>Shipper:</DetailLabel>
                        <DetailValue>{jobData.shipper?.company || 'Not specified'}</DetailValue>
                      </DetailItem>
                      <DetailItem>
                        <DetailLabel>Consignee:</DetailLabel>
                        <DetailValue>{jobData.consignee?.company || 'Not specified'}</DetailValue>
                      </DetailItem>
                    </DetailGroup>

                    <DetailGroup>
                      <DetailGroupTitle>Cargo Details</DetailGroupTitle>
                      <DetailItem>
                        <DetailLabel>Weight:</DetailLabel>
                        <DetailValue>{jobData.cargo?.weight || jobData.weight || '0'} kg</DetailValue>
                      </DetailItem>
                      <DetailItem>
                        <DetailLabel>Volume:</DetailLabel>
                        <DetailValue>{jobData.cargo?.volume || jobData.volume || '0'} m³</DetailValue>
                      </DetailItem>
                      <DetailItem>
                        <DetailLabel>Description:</DetailLabel>
                        <DetailValue>{jobData.cargo?.description || 'Not specified'}</DetailValue>
                      </DetailItem>
                    </DetailGroup>
                  </DetailsList>
                </JobDetailsContent>
              </JobDetailsCard>

              {/* Documents */}
              <DocumentsCard>
                <DocumentsHeader>
                  <DocumentsTitle>
                    <FileText style={{width: '1.25rem', height: '1.25rem'}} />
                    Job Documents
                  </DocumentsTitle>
                </DocumentsHeader>
                <DocumentsContent>
                  <DocumentsList>
                    {[
                      { name: "Commercial Invoice", status: "Generated", color: "green" },
                      { name: "Packing List", status: "Generated", color: "green" },
                      { name: "Job Instructions", status: "Pending", color: "yellow" },
                    ].map((doc, index) => (
                      <DocumentCard key={index}>
                        <DocumentName>{doc.name}</DocumentName>
                        <DocumentActions>
                          <DocumentBadge $color={doc.color}>
                            {doc.status}
                          </DocumentBadge>
                          {doc.status !== 'Generated' ? (
                            <DocumentButton variant="outline" size="sm">
                              {doc.status === 'Pending' ? 'Generate' : 'Upload'}
                            </DocumentButton>
                          ) : (
                            <DocumentButton variant="outline" size="sm">
                              {"View"}
                            </DocumentButton>
                          )}
                        </DocumentActions>
                      </DocumentCard>
                    ))}
                  </DocumentsList>
                  
                  <AddDocumentSection>
                    <AddDocumentButton variant="outline">
                      <Plus style={{width: '1rem', height: '1rem', marginRight: '0.5rem'}} />
                      Add Job-Specific Document
                    </AddDocumentButton>
                  </AddDocumentSection>
                </DocumentsContent>
              </DocumentsCard>
            </TwoColumnGrid>

            {/* Activity History */}
            <HistoryCard>
              <HistoryHeader>
                <HistoryTitle>
                  <History style={{width: '1.25rem', height: '1.25rem'}} />
                  Job Activity History
                </HistoryTitle>
              </HistoryHeader>
              <HistoryContent>
                <HistoryList>
                  {historyLog.map((log, index) => (
                    <HistoryItem key={index}>
                      <HistoryDot />
                      <HistoryItemContent>
                        <HistoryItemHeader>
                          <HistoryItemLeft>
                            <HistoryEventName>{`${index + 1}. ${log.event}`}</HistoryEventName>
                            <HistoryEventDetails>{log.details}</HistoryEventDetails>
                          </HistoryItemLeft>
                          <HistoryTimestamp>
                            {formatDateTime(log.timestamp)}
                          </HistoryTimestamp>
                        </HistoryItemHeader>
                        <HistoryUser>by {log.user}</HistoryUser>
                      </HistoryItemContent>
                    </HistoryItem>
                  ))}
                </HistoryList>
              </HistoryContent>
            </HistoryCard>
          </ContentWrapper>
        </ContentArea>
    </PageContainer>
  );
}