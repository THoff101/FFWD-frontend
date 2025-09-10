import styled from "styled-components";
import { ModernSidebar } from "./modern-sidebar";
import { TrackingProgress } from "./modern-progress";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { 
  ArrowLeft,
  Play, 
  Pause, 
  Edit, 
  FileText, 
  Upload, 
  Settings, 
  CheckCircle, 
  Clock, 
  AlertCircle,
  Package,
  Plus,
  ExternalLink,
  History
} from "lucide-react";

// Styled Components
const PageContainer = styled.div`
  min-height: 100vh;
  background-color: #f9fafb;
  display: flex;
`;

const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  background-color: white;
  border-bottom: 1px solid #e5e7eb;
  padding: 1.5rem;
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HeaderLeft = styled.div``;

const HeaderTop = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.75rem;
`;

const BackButton = styled(Button)`
  color: #4b5563;
  
  &:hover {
    color: #111827;
  }
`;

const BackIcon = styled(ArrowLeft)`
  width: 1rem;
  height: 1rem;
  margin-right: 0.5rem;
`;

const Divider = styled.div`
  height: 1.5rem;
  width: 1px;
  background-color: #d1d5db;
`;

const StatusBadge = styled(Badge)`
  background-color: #dbeafe;
  color: #1d4ed8;
  border: 1px solid #bfdbfe;
`;

const TypeBadge = styled(Badge)`
  background-color: #f3e8ff;
  color: #7c3aed;
  border: 1px solid #e9d5ff;
`;

const PackageIcon = styled(Package)`
  width: 0.75rem;
  height: 0.75rem;
  margin-right: 0.25rem;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  color: #111827;
  margin: 0;
`;

const Subtitle = styled.p`
  color: #4b5563;
  margin: 0;
`;

const HeaderRight = styled.div`
  display: flex;
  gap: 0.75rem;
`;

const EditButton = styled(Button)`
  background-color: white;
  border: 1px solid #d1d5db;
  color: #374151;
  
  &:hover {
    background-color: #f9fafb;
  }
`;

const EditIcon = styled(Edit)`
  width: 1rem;
  height: 1rem;
  margin-right: 0.5rem;
`;

const SettingsIcon = styled(Settings)`
  width: 1rem;
  height: 1rem;
  margin-right: 0.5rem;
`;

const ContentArea = styled.div`
  flex: 1;
  padding: 1.5rem;
  overflow: auto;
`;

const ContentWrapper = styled.div`
  max-width: 96rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const SummaryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const SummaryCard = styled(Card)`
  border: 1px solid #e5e7eb;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
`;

const SummaryCardContent = styled(CardContent)`
  padding: 1rem;
`;

const SummaryLabel = styled.div`
  font-size: 0.875rem;
  color: #6b7280;
`;

const SummaryValue = styled.div`
  font-weight: 600;
  color: #111827;
`;

const CurrentStageCard = styled(Card)`
  border: 2px solid #bfdbfe;
  background-color: #eff6ff;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
`;

const CurrentStageContent = styled(CardContent)`
  padding: 1.5rem;
`;

const CurrentStageContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`;

const StageIconContainer = styled.div`
  flex-shrink: 0;
  width: 2.5rem;
  height: 2.5rem;
  background-color: #dbeafe;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #bfdbfe;
`;

const ClockIcon = styled(Clock)`
  width: 1.25rem;
  height: 1.25rem;
  color: #2563eb;
`;

const StageContent = styled.div`
  flex: 1;
`;

const StageTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: #1e40af;
  margin: 0 0 0.5rem 0;
`;

const TasksSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const TasksTitle = styled.h4`
  font-weight: 500;
  color: #1e40af;
  margin: 0;
`;

const TasksGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 0.75rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const TaskCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem;
  background-color: white;
  border-radius: 0.5rem;
  border: 1px solid #bfdbfe;
`;

const TaskLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const TaskDot = styled.div<{ $urgent: boolean }>`
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background-color: ${props => props.$urgent ? '#ef4444' : '#eab308'};
`;

const TaskName = styled.span`
  font-size: 0.875rem;
  font-weight: 500;
  color: #111827;
`;

const UrgentBadge = styled(Badge)`
  background-color: #fee2e2;
  color: #dc2626;
  border: 1px solid #fecaca;
  font-size: 0.75rem;
`;

const TaskActions = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const GenerateButton = styled(Button)`
  background-color: #eff6ff;
  border: 1px solid #bfdbfe;
  color: #1d4ed8;
  
  &:hover {
    background-color: #dbeafe;
  }
`;

const UploadButton = styled(Button)`
  background-color: #f9fafb;
  border: 1px solid #e5e7eb;
  color: #374151;
  
  &:hover {
    background-color: #f3f4f6;
  }
`;

const GenerateIcon = styled(Settings)`
  width: 0.75rem;
  height: 0.75rem;
  margin-right: 0.25rem;
`;

const UploadIcon = styled(Upload)`
  width: 0.75rem;
  height: 0.75rem;
  margin-right: 0.25rem;
`;

const ActionButtonsContainer = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-top: 1.5rem;
`;

const ResumeButton = styled(Button)`
  background-color: #16a34a;
  color: white;
  
  &:hover {
    background-color: #15803d;
  }
`;

const PauseButton = styled(Button)`
  background-color: white;
  border: 1px solid #d1d5db;
  color: #374151;
  
  &:hover {
    background-color: #f9fafb;
  }
`;

const PlayIcon = styled(Play)`
  width: 1rem;
  height: 1rem;
  margin-right: 0.5rem;
`;

const PauseIcon = styled(Pause)`
  width: 1rem;
  height: 1rem;
  margin-right: 0.5rem;
`;

const TwoColumnGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1.5rem;
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const DocumentsCard = styled(Card)`
  border: 1px solid #e9d5ff;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
`;

const DocumentsHeader = styled(CardHeader)`
  background-color: #f3e8ff;
  border-bottom: 1px solid #e9d5ff;
`;

const DocumentsTitle = styled(CardTitle)`
  font-size: 1.125rem;
  color: #7c3aed;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const FileIcon = styled(FileText)`
  width: 1.25rem;
  height: 1.25rem;
`;

const DocumentsContent = styled(CardContent)`
  padding: 1.5rem;
`;

const DocumentsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const DocumentCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem;
  background-color: white;
  border-radius: 0.5rem;
  border: 1px solid #e5e7eb;
`;

const DocumentName = styled.span`
  font-size: 0.875rem;
  font-weight: 500;
  color: #111827;
`;

const DocumentActions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const DocumentBadge = styled(Badge)<{ $color: 'green' | 'yellow' | 'red' }>`
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
    }
  }}
`;

const DocumentButton = styled(Button)`
  background-color: #f9fafb;
  border: 1px solid #e5e7eb;
  color: #374151;
  
  &:hover {
    background-color: #f3f4f6;
  }
`;

const AddDocumentSection = styled.div`
  margin-top: 1rem;
  padding-top: 1rem;
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

const PlusIcon = styled(Plus)`
  width: 1rem;
  height: 1rem;
  margin-right: 0.5rem;
`;

const JobsCard = styled(Card)`
  border: 1px solid #c7d2fe;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
`;

const JobsHeader = styled(CardHeader)`
  background-color: #eef2ff;
  border-bottom: 1px solid #c7d2fe;
`;

const JobsTitle = styled(CardTitle)`
  font-size: 1.125rem;
  color: #4338ca;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const JobsContent = styled(CardContent)`
  padding: 1.5rem;
`;

const JobsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const JobCard = styled.div`
  padding: 1rem;
  background-color: white;
  border-radius: 0.5rem;
  border: 1px solid #e5e7eb;
  transition: border-color 0.2s;
  
  &:hover {
    border-color: #c7d2fe;
  }
`;

const JobHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const JobLeft = styled.div``;

const JobTop = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.25rem;
`;

const JobId = styled.span`
  font-weight: 500;
  color: #111827;
`;

const JobBadge = styled(Badge)`
  background-color: #eff6ff;
  color: #1d4ed8;
  border: 1px solid #bfdbfe;
  font-size: 0.75rem;
`;

const JobDetails = styled.div`
  font-size: 0.875rem;
  color: #4b5563;
`;

const JobSubDetails = styled.div`
  font-size: 0.75rem;
  color: #6b7280;
  margin-top: 0.25rem;
`;

const ViewJobButton = styled(Button)`
  background-color: #eef2ff;
  border: 1px solid #c7d2fe;
  color: #4338ca;
  
  &:hover {
    background-color: #e0e7ff;
  }
`;

const ExternalIcon = styled(ExternalLink)`
  width: 0.75rem;
  height: 0.75rem;
  margin-right: 0.25rem;
`;

const HistoryCard = styled(Card)`
  border: 1px solid #fed7aa;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
`;

const HistoryHeader = styled(CardHeader)`
  background-color: #fff7ed;
  border-bottom: 1px solid #fed7aa;
`;

const HistoryTitle = styled(CardTitle)`
  font-size: 1.125rem;
  color: #c2410c;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const HistoryIcon = styled(History)`
  width: 1.25rem;
  height: 1.25rem;
`;

const HistoryContent = styled(CardContent)`
  padding: 1.5rem;
`;

const HistoryList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-height: 16rem;
  overflow-y: auto;
`;

const HistoryItem = styled.div`
  display: flex;
  gap: 1rem;
  padding: 0.75rem;
  background-color: white;
  border-radius: 0.5rem;
  border: 1px solid #e5e7eb;
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
  justify-content: space-between;
  align-items: flex-start;
`;

const HistoryItemLeft = styled.div``;

const HistoryEventName = styled.p`
  font-weight: 500;
  font-size: 0.875rem;
  color: #111827;
  margin: 0;
`;

const HistoryEventDetails = styled.p`
  font-size: 0.875rem;
  color: #4b5563;
  margin-top: 0.25rem;
  margin-bottom: 0;
`;

const HistoryTimestamp = styled.div`
  font-size: 0.75rem;
  color: #6b7280;
  white-space: nowrap;
  margin-left: 1rem;
`;

const HistoryUser = styled.p`
  font-size: 0.75rem;
  color: #6b7280;
  margin: 0.25rem 0 0 0;
`;

interface ConsolidationDetailsPageProps {
  data: any;
  onBackToJobs: () => void;
  onViewJob: (jobData: any) => void;
}

export function ConsolidationDetailsPage({ data, onBackToJobs, onViewJob }: ConsolidationDetailsPageProps) {
  const progressStages = [
    { 
      name: "Booking & Preparation", 
      status: "current" as const, 
      description: "Setting up consolidation documentation and booking confirmation"
    },
    { 
      name: "Origin Handling", 
      status: "pending" as const, 
      description: "Collection and consolidation at origin location"
    },
    { 
      name: "Departure & Transit", 
      status: "pending" as const, 
      description: "Consolidated cargo in transit to destination"
    },
    { 
      name: "Arrival Notification", 
      status: "pending" as const, 
      description: "Notification of consolidation arrival at destination"
    },
    { 
      name: "Destination Clearance", 
      status: "pending" as const,
      description: "Customs clearance and regulatory approvals"
    },
    { 
      name: "Destination Handling", 
      status: "pending" as const, 
      description: "Deconsolidation and final delivery preparations"
    },
    { 
      name: "Completion & Settlement", 
      status: "pending" as const, 
      description: "Final documentation and payment settlement"
    }
  ];

  const currentStageIndex = progressStages.findIndex(stage => stage.status === 'current');
  const currentStage = progressStages[currentStageIndex];

  const pendingTasks = [
    { name: "Generate MBL (Master Bill of Lading)", type: "generate", urgent: true },
    { name: "Upload Consolidation Invoice", type: "upload", urgent: false },
    { name: "Generate LCL Manifest", type: "generate", urgent: true },
    { name: "Complete Customs Entry", type: "upload", urgent: false }
  ];

  const historyLog = [
    { timestamp: data.createdAt, event: "Consolidation Created", user: "System", details: `Consolidation ${data.id} created successfully` },
    { timestamp: data.createdAt, event: "Template Applied", user: "System", details: `Consolidation template applied` },
    { timestamp: data.createdAt, event: "Stage Advanced", user: "System", details: "Advanced to Booking & Preparation" },
    { timestamp: data.createdAt, event: "Individual Job Added", user: "System", details: "JOB-123456 added to consolidation" },
    { timestamp: data.createdAt, event: "Individual Job Added", user: "System", details: "JOB-123457 added to consolidation" }
  ];

  const formatDateTime = (dateString: string) => {
    return new Date(dateString).toLocaleString();
  };

  return (
    <PageContainer>
      {/* Sidebar */}
      <ModernSidebar currentPage="jobs" />
      
      {/* Main Content */}
      <MainContent>
        {/* Header */}
        <Header>
          <HeaderContent>
            <HeaderLeft>
              <HeaderTop>
                <BackButton
                  variant="ghost"
                  size="sm"
                  onClick={onBackToJobs}
                >
                  <BackIcon />
                  Back to Jobs
                </BackButton>
                <Divider />
                <StatusBadge>
                  {data.status}
                </StatusBadge>
                <TypeBadge variant="outline">
                  <PackageIcon />
                  Consolidation
                </TypeBadge>
              </HeaderTop>
              <Title>{data.id}</Title>
              <Subtitle>
                {data.template} • {data.origin?.city} → {data.destination?.city} • Created {formatDateTime(data.createdAt)}
              </Subtitle>
            </HeaderLeft>
            <HeaderRight>
              <EditButton variant="outline" size="sm">
                <EditIcon />
                Edit Details
              </EditButton>
              <EditButton variant="outline" size="sm">
                <SettingsIcon />
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
                    {data.totalWeight || '0'} kg
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
                    Stage {currentStageIndex + 1} of {progressStages.length}
                  </SummaryValue>
                </SummaryCardContent>
              </SummaryCard>
            </SummaryGrid>

            {/* Progress Timeline */}
            <TrackingProgress 
              currentStage={currentStageIndex + 1} 
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
                              {task.urgent && <UrgentBadge variant="destructive">Urgent</UrgentBadge>}
                            </TaskLeft>
                            <TaskActions>
                              {task.type === 'generate' ? (
                                <GenerateButton variant="outline" size="sm">
                                  <GenerateIcon />
                                  Generate
                                </GenerateButton>
                              ) : (
                                <UploadButton variant="outline" size="sm">
                                  <UploadIcon />
                                  Upload
                                </UploadButton>
                              )}
                            </TaskActions>
                          </TaskCard>
                        ))}
                      </TasksGrid>
                    </TasksSection>
                    
                    <ActionButtonsContainer>
                      <ResumeButton>
                        <PlayIcon />
                        Resume Progress
                      </ResumeButton>
                      <PauseButton variant="outline">
                        <PauseIcon />
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
                    <FileIcon />
                    Consolidation Documents
                  </DocumentsTitle>
                </DocumentsHeader>
                <DocumentsContent>
                  <DocumentsList>
                    {[
                      { name: "MBL (Master Bill of Lading)", status: "Pending", color: "yellow" as const },
                      { name: "LCL Manifest", status: "Pending", color: "yellow" as const },
                      { name: "Delivery Order LCL", status: "Generated", color: "green" as const },
                      { name: "Consolidation Invoice", status: "Pending", color: "yellow" as const },
                      { name: "Customs Entry", status: "Missing", color: "red" as const }
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
                      <PlusIcon />
                      Add Custom Document
                    </AddDocumentButton>
                  </AddDocumentSection>
                </DocumentsContent>
              </DocumentsCard>

              {/* Individual Jobs */}
              <JobsCard>
                <JobsHeader>
                  <JobsTitle>
                    <PackageIcon />
                    Individual Jobs Within Consolidation
                  </JobsTitle>
                </JobsHeader>
                <JobsContent>
                  <JobsList>
                    {data.individualJobs?.map((job: any, index: number) => (
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
                              PO: {job.poNumber} • Stage: {progressStages[job.currentStage - 1]?.name}
                            </JobDetails>
                            <JobSubDetails>
                              {job.shipper?.company} → {job.consignee?.company}
                            </JobSubDetails>
                          </JobLeft>
                          <ViewJobButton 
                            variant="outline" 
                            size="sm"
                            onClick={() => onViewJob(job)}
                          >
                            <ExternalIcon />
                            View Details
                          </ViewJobButton>
                        </JobHeader>
                      </JobCard>
                    ))}
                  </JobsList>
                </JobsContent>
              </JobsCard>
            </TwoColumnGrid>

            {/* Activity History */}
            <HistoryCard>
              <HistoryHeader>
                <HistoryTitle>
                  <HistoryIcon />
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
      </MainContent>
    </PageContainer>
  );
}