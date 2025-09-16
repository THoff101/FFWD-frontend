import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { TrackingProgress } from "./modern-progress";
import { useConsolidation } from "../contexts/consolidation-context";
import { StickyConsolidationProgress } from "./sticky-consolidation-progress";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
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
  ExternalLink,
  History
} from "lucide-react";
import { jobStages } from "../data/job-stages";

// Responsive styled components with mobile-first approach
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

const TypeBadge = styled(Badge)`
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

const TwoColumnGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(1rem, 3vw, 1.5rem);
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
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

const JobsCard = styled(Card)`
  border: 1px solid #c7d2fe;
  background-color: var(--card);
`;

const JobsHeader = styled(CardHeader)`
  background-color: #eef2ff;
  border-bottom: 1px solid #c7d2fe;
  padding: clamp(1rem, 3vw, 1.5rem);
`;

const JobsTitle = styled(CardTitle)`
  font-size: clamp(1rem, 3vw, 1.125rem);
  color: #4338ca;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const JobsContent = styled(CardContent)`
  padding: clamp(1rem, 3vw, 1.5rem);
`;

const JobsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(0.5rem, 2vw, 0.75rem);
`;

const JobCard = styled.div`
  padding: clamp(0.75rem, 3vw, 1rem);
  background-color: var(--card);
  border-radius: 0.5rem;
  border: 1px solid var(--border);
  transition: border-color 0.2s;
  
  &:hover {
    border-color: #c7d2fe;
  }
`;

const JobHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  
  @media (min-width: 640px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
  }
`;

const JobLeft = styled.div`
  flex: 1;
  min-width: 0;
`;

const JobTop = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.25rem;
`;

const JobId = styled.span`
  color: var(--foreground);
  font-size: clamp(0.875rem, 2.5vw, 1rem);
`;

const JobBadge = styled(Badge)`
  background-color: #eff6ff;
  color: #1d4ed8;
  border: 1px solid #bfdbfe;
  font-size: clamp(0.625rem, 1.5vw, 0.75rem);
`;

const JobDetails = styled.div`
  font-size: clamp(0.75rem, 2vw, 0.875rem);
  color: var(--muted-foreground);
  line-height: 1.3;
`;

const JobSubDetails = styled.div`
  font-size: clamp(0.625rem, 1.5vw, 0.75rem);
  color: var(--muted-foreground);
  margin-top: 0.25rem;
  line-height: 1.3;
`;

const ViewJobButton = styled(Button)`
  background-color: #eef2ff;
  border: 1px solid #c7d2fe;
  color: #4338ca;
  font-size: clamp(0.75rem, 2vw, 0.875rem);
  white-space: nowrap;
  
  &:hover {
    background-color: #e0e7ff;
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

export function ConsolidationDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getConsolidation } = useConsolidation();
  
  const data = getConsolidation(id);
  
  if (!data) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h2>Consolidation not found</h2>
        <button onClick={() => navigate('/jobs')}>Back to Jobs</button>
      </div>
    );
  }
  const progressStages = jobStages.map((stage, index) => ({
    name: stage.name,
    status: index < (data.currentStage || 1) ? 'completed' : 
            index === (data.currentStage || 1) - 1 ? 'current' : 'pending',
    description: stage.description
  }));

  const currentStageIndex = progressStages.findIndex(stage => stage.status === 'current');
  const currentStage = progressStages[currentStageIndex] || progressStages[0];

  const pendingTasks = [
    { name: "Generate MBL (Master Bill of Lading)", type: "generate", urgent: true },
    { name: "Upload Consolidation Invoice", type: "upload", urgent: false },
    { name: "Generate LCL Manifest", type: "generate", urgent: true },
    { name: "Complete Customs Entry", type: "upload", urgent: false }
  ];

  const historyLog = [
    { 
      timestamp: data.createdAt || new Date().toISOString(), 
      event: "Consolidation Created", 
      user: "System", 
      details: `Consolidation ${data.id} created successfully` 
    },
    { 
      timestamp: data.createdAt || new Date().toISOString(), 
      event: "Template Applied", 
      user: "System", 
      details: `${data.template} template applied` 
    },
    { 
      timestamp: data.updatedAt || new Date().toISOString(), 
      event: "Stage Advanced", 
      user: "System", 
      details: `Advanced to ${currentStage?.name}` 
    }
  ];

  // Add individual job entries
  if (data.individualJobs) {
    data.individualJobs.forEach(job => {
      historyLog.push({
        timestamp: job.createdAt || data.createdAt || new Date().toISOString(),
        event: "Individual Job Added",
        user: "System",
        details: `${job.id} added to consolidation`
      });
    });
  }

  const formatDateTime = (dateString) => {
    return new Date(dateString).toLocaleString();
  };

  // Define onViewJob before return
  const onViewJob = (jobId) => {
    navigate(`/consolidation/${data.id}/job/${jobId}`);
  };

  return (
    <PageContainer>
      {/* Sticky Progress Timeline */}
      <StickyConsolidationProgress 
        consolidationData={data}
        onJobClick={onViewJob}
      />
        {/* Header */}
        <Header>
          <HeaderContent>
            <HeaderLeft>
              <HeaderTop>
                <BackButton
                  variant="ghost"
                  size="sm"
                  onClick={() => navigate('/jobs')}
                >
                  <ArrowLeft style={{width: '1rem', height: '1rem', marginRight: '0.5rem'}} />
                  Back to Jobs
                </BackButton>
                <Divider />
                <StatusBadge>
                  {data.status || 'In Progress'}
                </StatusBadge>
                <TypeBadge variant="outline">
                  <Package style={{width: '0.75rem', height: '0.75rem', marginRight: '0.25rem'}} />
                  Consolidation
                </TypeBadge>
              </HeaderTop>
              <Title>{data.id || data.title}</Title>
              <Subtitle>
                {data.template} • {data.origin?.city} → {data.destination?.city} • 
                Created {formatDateTime(data.createdAt || new Date().toISOString())}
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
                  <SummaryLabel>Route</SummaryLabel>
                  <SummaryValue>
                    {data.origin?.city || 'N/A'} → {data.destination?.city || 'N/A'}
                  </SummaryValue>
                </SummaryCardContent>
              </SummaryCard>
              
              <SummaryCard>
                <SummaryCardContent>
                  <SummaryLabel>Total Weight</SummaryLabel>
                  <SummaryValue>
                    {data.totalWeight || '0 kg'}
                  </SummaryValue>
                </SummaryCardContent>
              </SummaryCard>
              
              <SummaryCard>
                <SummaryCardContent>
                  <SummaryLabel>Individual Jobs</SummaryLabel>
                  <SummaryValue>
                    {data.individualJobs?.length || 0} jobs
                  </SummaryValue>
                </SummaryCardContent>
              </SummaryCard>
              
              <SummaryCard>
                <SummaryCardContent>
                  <SummaryLabel>Current Stage</SummaryLabel>
                  <SummaryValue>
                    Stage {(data.currentStage || 1)} of {progressStages.length}
                  </SummaryValue>
                </SummaryCardContent>
              </SummaryCard>
            </SummaryGrid>

            {/* Progress Timeline */}
            <TrackingProgress 
              currentStage={data.currentStage || 1} 
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
                    
                    <TasksSection>
                      <TasksTitle>Pending Tasks:</TasksTitle>
                      <TasksGrid>
                        {pendingTasks.map((task, index) => (
                          <TaskCard key={index}>
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
                      <ResumeButton>
                        <Play style={{width: '1rem', height: '1rem', marginRight: '0.5rem'}} />
                        Resume Progress
                      </ResumeButton>
                      <PauseButton variant="outline">
                        <Pause style={{width: '1rem', height: '1rem', marginRight: '0.5rem'}} />
                        Pause Consolidation
                      </PauseButton>
                    </ActionButtonsContainer>
                  </StageContent>
                </CurrentStageContainer>
              </CurrentStageContent>
            </CurrentStageCard>

            <TwoColumnGrid>
              {/* Documents */}
              <DocumentsCard>
                <DocumentsHeader>
                  <DocumentsTitle>
                    <FileText style={{width: '1.25rem', height: '1.25rem'}} />
                    Consolidation Documents
                  </DocumentsTitle>
                </DocumentsHeader>
                <DocumentsContent>
                  <DocumentsList>
                    {[
                      { name: "MBL (Master Bill of Lading)", status: "Missing", color: "red" },
                      { name: "Customs Entry", status: "Missing", color: "red" },
                      { name: "LCL Manifest", status: "Pending", color: "yellow" },
                      { name: "Delivery Order LCL", status: "Generated", color: "green" },
                      { name: "Consolidation Invoice", status: "Pending", color: "yellow" }
                    ].map((doc, index) => (
                      <DocumentCard key={index}>
                        <DocumentName>{doc.name}</DocumentName>
                        <DocumentActions>
                          <DocumentBadge $color={doc.color}>
                            {doc.status}
                          </DocumentBadge>
                          {doc.status !== 'Generated' && (
                            <DocumentButton variant="outline" size="sm">
                              {doc.status === 'Pending' ? 'Generate' : 'Upload'}
                            </DocumentButton>
                          )}
                        </DocumentActions>
                      </DocumentCard>
                    ))}
                  </DocumentsList>
                  
                  <AddDocumentSection>
                    <AddDocumentButton variant="outline">
                      <Plus style={{width: '1rem', height: '1rem', marginRight: '0.5rem'}} />
                      Add Custom Document
                    </AddDocumentButton>
                  </AddDocumentSection>
                </DocumentsContent>
              </DocumentsCard>

              {/* Individual Jobs */}
              <JobsCard>
                <JobsHeader>
                  <JobsTitle>
                    <Package style={{width: '1.25rem', height: '1.25rem'}} />
                    Individual Jobs Within Consolidation
                  </JobsTitle>
                </JobsHeader>
                <JobsContent>
                  <JobsList>
                    {data.individualJobs?.map((job, index) => (
                      <JobCard key={index}>
                        <JobHeader>
                          <JobLeft>
                            <JobTop>
                              <JobId>{job.id}</JobId>
                              <JobBadge variant="outline">
                                {job.template}
                              </JobBadge>
                            </JobTop>
                            <JobDetails>
                              PO: {job.poNumber} • Stage: {progressStages[job.currentStage - 1]?.name || 'N/A'}
                            </JobDetails>
                            <JobSubDetails>
                              {job.shipper?.company} → {job.consignee?.company}
                            </JobSubDetails>
                          </JobLeft>
                          <ViewJobButton 
                            variant="outline" 
                            size="sm"
                            onClick={() => navigate(`/consolidation/${data.id}/job/${job.id}`)}
                          >
                            <ExternalLink style={{width: '0.75rem', height: '0.75rem', marginRight: '0.25rem'}} />
                            View Details
                          </ViewJobButton>
                        </JobHeader>
                      </JobCard>
                    )) || (
                      <div style={{color: 'var(--muted-foreground)', textAlign: 'center', padding: '2rem'}}>
                        No individual jobs added yet
                      </div>
                    )}
                  </JobsList>
                </JobsContent>
              </JobsCard>
            </TwoColumnGrid>

            {/* Activity History */}
            <HistoryCard>
              <HistoryHeader>
                <HistoryTitle>
                  <History style={{width: '1.25rem', height: '1.25rem'}} />
                  Activity History
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
                            <HistoryEventName>{log.event}</HistoryEventName>
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