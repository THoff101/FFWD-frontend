import styled from "styled-components";
import { ModernSidebar } from "./modern-sidebar";
import { TrackingProgress } from "./modern-progress";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { 
  ArrowLeft,
  Play, 
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

const TemplateBadge = styled(Badge)`
  background-color: #f9fafb;
  color: #374151;
  border: 1px solid #d1d5db;
`;

const ConsolidationBadge = styled(Badge)`
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

const StageDescription = styled.p`
  color: #4b5563;
  margin: 0 0 1rem 0;
`;

const ExternalNotice = styled.div`
  padding: 0.75rem;
  background-color: #fef3c7;
  border: 1px solid #fde68a;
  border-radius: 0.5rem;
  margin: 1rem 0;
`;

const ExternalText = styled.p`
  color: #d97706;
  margin: 0;
  font-size: 0.875rem;
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

const ViewConsolidationButton = styled(Button)`
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

const ExternalIcon = styled(ExternalLink)`
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

const JobDetailsCard = styled(Card)`
  border: 1px solid #c7d2fe;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
`;

const JobDetailsHeader = styled(CardHeader)`
  background-color: #eef2ff;
  border-bottom: 1px solid #c7d2fe;
`;

const JobDetailsTitle = styled(CardTitle)`
  font-size: 1.125rem;
  color: #4338ca;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const JobDetailsContent = styled(CardContent)`
  padding: 1.5rem;
`;

const DetailsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const DetailGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const DetailGroupTitle = styled.h4`
  font-weight: 600;
  color: #374151;
  margin: 0;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #e5e7eb;
`;

const DetailItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0.5rem 0;
`;

const DetailLabel = styled.span`
  color: #6b7280;
  font-size: 0.875rem;
  min-width: 120px;
`;

const DetailValue = styled.span`
  color: #111827;
  font-weight: 500;
  text-align: right;
  flex: 1;
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

interface IndividualJobDetailsPageProps {
  jobData: any;
  consolidationData: any;
  onBackToConsolidation: () => void;
}

export function IndividualJobDetailsPage({ jobData, consolidationData, onBackToConsolidation }: IndividualJobDetailsPageProps) {
  const progressStages = [
    { 
      name: "Booking & Preparation", 
      status: "completed" as const, 
      description: "Job added to consolidation and initial setup complete"
    },
    { 
      name: "Origin Handling", 
      status: "current" as const, 
      description: "Collection and preparation at origin location"
    },
    { 
      name: "Departure & Transit", 
      status: "pending" as const, 
      description: "Cargo in transit as part of consolidation"
    },
    { 
      name: "Arrival Notification", 
      status: "pending" as const, 
      description: "Notification of consolidation arrival"
    },
    { 
      name: "Destination Clearance", 
      status: "external" as const,
      description: "Customs clearance handled by consolidation process"
    },
    { 
      name: "Destination Handling", 
      status: "pending" as const, 
      description: "Deconsolidation and individual delivery"
    },
    { 
      name: "Completion & Settlement", 
      status: "pending" as const, 
      description: "Individual job completion and settlement"
    }
  ];

  const currentStageIndex = progressStages.findIndex(stage => stage.status === 'current');
  const currentStage = progressStages[currentStageIndex];

  const historyLog = [
    { timestamp: "2025-01-15T10:00:00Z", event: "Job Created", user: "System", details: `Individual job ${jobData.id} created and added to consolidation` },
    { timestamp: "2025-01-15T10:05:00Z", event: "Added to Consolidation", user: "System", details: `Job assigned to consolidation ${consolidationData.id}` },
    { timestamp: "2025-01-15T10:10:00Z", event: "Documentation Started", user: "System", details: "Job documentation preparation initiated" },
    { timestamp: "2025-01-15T11:00:00Z", event: "Stage Advanced", user: "System", details: "Advanced to Origin Handling stage" }
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
                  onClick={onBackToConsolidation}
                >
                  <BackIcon />
                  Back to Consolidation
                </BackButton>
                <Divider />
                <StatusBadge>
                  {jobData.status}
                </StatusBadge>
                <TemplateBadge variant="outline">
                  {jobData.template}
                </TemplateBadge>
                <ConsolidationBadge variant="outline">
                  <PackageIcon />
                  Part of {consolidationData.id}
                </ConsolidationBadge>
              </HeaderTop>
              <Title>{jobData.id}</Title>
              <Subtitle>
                PO: {jobData.poNumber} • {jobData.template} • Part of consolidation {consolidationData.id}
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
                  <SummaryValue>Stage {currentStageIndex + 1} of {progressStages.length}</SummaryValue>
                </SummaryCardContent>
              </SummaryCard>
              
              <SummaryCard>
                <SummaryCardContent>
                  <SummaryLabel>Consolidation</SummaryLabel>
                  <SummaryValue>{consolidationData.id}</SummaryValue>
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
                    <StageDescription>
                      {currentStage?.description}
                    </StageDescription>
                    
                    <ExternalNotice>
                      <ExternalText>
                        📋 This individual job follows the progress of its parent consolidation {consolidationData.id}. 
                        Most actions are managed at the consolidation level.
                      </ExternalText>
                    </ExternalNotice>
                    
                    <ActionButtonsContainer>
                      <ResumeButton>
                        <PlayIcon />
                        View Job Progress
                      </ResumeButton>
                      <ViewConsolidationButton variant="outline" onClick={onBackToConsolidation}>
                        <ExternalIcon />
                        View Consolidation
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
                    <PackageIcon />
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
                        <DetailValue>{jobData.status}</DetailValue>
                      </DetailItem>
                    </DetailGroup>

                    <DetailGroup>
                      <DetailGroupTitle>Consolidation Info</DetailGroupTitle>
                      <DetailItem>
                        <DetailLabel>Parent Consolidation:</DetailLabel>
                        <DetailValue>{consolidationData.id}</DetailValue>
                      </DetailItem>
                      <DetailItem>
                        <DetailLabel>Route:</DetailLabel>
                        <DetailValue>{consolidationData.origin?.city} → {consolidationData.destination?.city}</DetailValue>
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
                        <DetailValue>{jobData.weight || '0'} kg</DetailValue>
                      </DetailItem>
                      <DetailItem>
                        <DetailLabel>Volume:</DetailLabel>
                        <DetailValue>{jobData.volume || '0'} cbm</DetailValue>
                      </DetailItem>
                    </DetailGroup>
                  </DetailsList>
                </JobDetailsContent>
              </JobDetailsCard>

              {/* Documents */}
              <DocumentsCard>
                <DocumentsHeader>
                  <DocumentsTitle>
                    <FileIcon />
                    Job Documents
                  </DocumentsTitle>
                </DocumentsHeader>
                <DocumentsContent>
                  <DocumentsList>
                    {[
                      { name: "Commercial Invoice", status: "Generated", color: "green" as const },
                      { name: "Packing List", status: "Generated", color: "green" as const },
                      { name: "Job Instructions", status: "Pending", color: "yellow" as const },
                      { name: "Delivery Receipt", status: "Missing", color: "red" as const }
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
                  <HistoryIcon />
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