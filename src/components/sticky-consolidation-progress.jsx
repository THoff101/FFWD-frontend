import { useState, useEffect } from "react";
import styled from "styled-components";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { 
  ChevronDown,
  ChevronUp,
  Package,
  CheckCircle,
  Clock,
  AlertCircle,
  ExternalLink
} from "lucide-react";
import { jobStages } from "../data/job-stages";

const StickyContainer = styled.div`
  position: sticky;
  top: 0;
  z-index: 50;
  background-color: var(--card);
  border-bottom: 2px solid var(--border);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const ConsolidationInfo = styled.div`
  padding: clamp(0.75rem, 2vw, 1rem);
  border-bottom: 1px solid var(--border);
  background-color: var(--card);
`;

const ConsolidationHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

const ConsolidationLeft = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: clamp(0.5rem, 1.5vw, 0.75rem);
`;

const ConsolidationTitle = styled.h2`
  font-size: clamp(1rem, 3vw, 1.25rem);
  color: var(--foreground);
  margin: 0;
`;

const ConsolidationBadges = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const StatusBadge = styled(Badge)`
  background-color: #dbeafe;
  color: #1d4ed8;
  border: 1px solid #bfdbfe;
  font-size: clamp(0.625rem, 1.5vw, 0.75rem);
`;

const RouteBadge = styled(Badge)`
  background-color: var(--muted);
  color: var(--muted-foreground);
  border: 1px solid var(--border);
  font-size: clamp(0.625rem, 1.5vw, 0.75rem);
`;

const ConsolidationRight = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const ToggleButton = styled(Button)`
  background-color: var(--secondary);
  border: 1px solid var(--border);
  color: var(--secondary-foreground);
  
  &:hover {
    background-color: var(--muted);
  }
`;

const ProgressContainer = styled.div`
  padding: clamp(0.75rem, 2vw, 1rem);
  background-color: var(--background);
  transition: max-height 0.3s ease, opacity 0.3s ease;
  max-height: ${props => props.$collapsed ? '0' : '500px'};
  opacity: ${props => props.$collapsed ? '0' : '1'};
  overflow: hidden;
`;

const MainProgressWrapper = styled.div`
  margin-bottom: clamp(1rem, 3vw, 1.5rem);
`;

const MainProgressTitle = styled.h3`
  font-size: clamp(0.875rem, 2.5vw, 1rem);
  color: var(--foreground);
  margin: 0 0 clamp(0.5rem, 1.5vw, 0.75rem) 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const ProgressTimeline = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  
  @media (min-width: 768px) {
    flex-direction: row;
    gap: 0;
  }
`;

const ProgressStep = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  flex: 1;
  min-width: 0;
  
  @media (max-width: 767px) {
    flex-direction: row;
    align-items: flex-start;
    margin-bottom: 1rem;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const ProgressStepIcon = styled.div`
  width: clamp(1.5rem, 4vw, 2rem);
  height: clamp(1.5rem, 4vw, 2rem);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
  flex-shrink: 0;
  
  ${props => {
    switch (props.$status) {
      case 'completed':
        return `
          background-color: #22c55e;
          color: white;
        `;
      case 'current':
        return `
          background-color: #3b82f6;
          color: white;
        `;
      case 'pending':
        return `
          background-color: var(--muted);
          color: var(--muted-foreground);
          border: 2px solid var(--border);
        `;
      default:
        return `
          background-color: var(--muted);
          color: var(--muted-foreground);
          border: 2px solid var(--border);
        `;
    }
  }}
`;

const ProgressStepContent = styled.div`
  text-align: center;
  margin-top: 0.5rem;
  flex: 1;
  
  @media (max-width: 767px) {
    text-align: left;
    margin-top: 0;
    margin-left: 1rem;
  }
`;

const ProgressStepName = styled.div`
  font-size: clamp(0.625rem, 1.5vw, 0.75rem);
  color: ${props => props.$status === 'current' ? 'var(--foreground)' : 'var(--muted-foreground)'};
  line-height: 1.2;
`;

const ProgressConnector = styled.div`
  position: absolute;
  background-color: ${props => props.$completed ? '#22c55e' : 'var(--border)'};
  
  @media (min-width: 768px) {
    top: 50%;
    left: 50%;
    right: -50%;
    height: 2px;
    transform: translateY(-50%);
  }
  
  @media (max-width: 767px) {
    left: 50%;
    top: 100%;
    bottom: -1rem;
    width: 2px;
    transform: translateX(-50%);
  }
  
  &:last-child {
    display: none;
  }
`;

const JobsSection = styled.div`
  border-top: 1px solid var(--border);
  padding-top: clamp(0.75rem, 2vw, 1rem);
`;

const JobsSectionTitle = styled.h4`
  font-size: clamp(0.75rem, 2vw, 0.875rem);
  color: var(--foreground);
  margin: 0 0 clamp(0.5rem, 1.5vw, 0.75rem) 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const JobsList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(0.5rem, 1.5vw, 0.75rem);
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const JobCard = styled.div`
  padding: clamp(0.5rem, 1.5vw, 0.75rem);
  background-color: var(--card);
  border: 1px solid var(--border);
  border-radius: 0.5rem;
  transition: all 0.2s ease;
  
  &:hover {
    border-color: var(--primary);
    transform: translateY(-1px);
  }
`;

const JobHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;

const JobId = styled.span`
  font-size: clamp(0.75rem, 2vw, 0.875rem);
  color: var(--foreground);
`;

const JobStageIndicator = styled.div`
  width: clamp(0.5rem, 1.5vw, 0.75rem);
  height: clamp(0.5rem, 1.5vw, 0.75rem);
  border-radius: 50%;
  
  ${props => {
    switch (props.$status) {
      case 'completed':
        return 'background-color: #22c55e;';
      case 'current':
        return 'background-color: #3b82f6;';
      case 'pending':
        return 'background-color: var(--muted-foreground);';
      case 'delayed':
        return 'background-color: #ef4444;';
      default:
        return 'background-color: var(--muted-foreground);';
    }
  }}
`;

const JobDetails = styled.div`
  font-size: clamp(0.625rem, 1.5vw, 0.75rem);
  color: var(--muted-foreground);
  line-height: 1.3;
`;

const JobProgress = styled.div`
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const JobStageName = styled.span`
  font-size: clamp(0.625rem, 1.5vw, 0.75rem);
  color: var(--muted-foreground);
`;

const ViewJobButton = styled(Button)`
  padding: 0.25rem 0.5rem;
  height: auto;
  font-size: clamp(0.625rem, 1.5vw, 0.75rem);
  background-color: transparent;
  color: var(--primary);
  border: none;
  
  &:hover {
    background-color: var(--muted);
  }
`;

export function StickyConsolidationProgress({ 
  consolidationData, 
  onJobClick,
  className 
}) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Auto-collapse when scrolling down past certain point
      // if (currentScrollY > 100 && currentScrollY > lastScrollY) {
      //   setIsCollapsed(true);
      // }
      
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!consolidationData) return null;

  const progressStages = jobStages.map((stage, index) => ({
    name: stage.name,
    status: index < (consolidationData.currentStage || 1) ? 'completed' : 
            index === (consolidationData.currentStage || 1) - 1 ? 'current' : 'pending'
  }));

  const getJobStageStatus = (jobStage, consolidationStage) => {
    if (jobStage > consolidationStage) return 'pending';
    if (jobStage === consolidationStage) return 'current';
    return 'completed';
  };

  return (
    <StickyContainer className={className}>
      {/* Consolidation Info Bar */}
      <ConsolidationInfo>
        <ConsolidationHeader>
          <ConsolidationLeft>
            <ConsolidationTitle>{consolidationData.id}</ConsolidationTitle>
            <ConsolidationBadges>
              <StatusBadge>{consolidationData.status || 'In Progress'}</StatusBadge>
              <RouteBadge>
                {consolidationData.origin?.city || 'Origin'} → {consolidationData.destination?.city || 'Destination'}
              </RouteBadge>
            </ConsolidationBadges>
          </ConsolidationLeft>
          <ConsolidationRight>
            <ToggleButton
              variant="ghost"
              size="sm"
              onClick={() => setIsCollapsed(!isCollapsed)}
            >
              {isCollapsed ? 
                <ChevronDown style={{ width: '1rem', height: '1rem' }} /> : 
                <ChevronUp style={{ width: '1rem', height: '1rem' }} />
              }
            </ToggleButton>
          </ConsolidationRight>
        </ConsolidationHeader>
      </ConsolidationInfo>

      {/* Progress Timeline */}
      <ProgressContainer $collapsed={isCollapsed}>
        <MainProgressWrapper>
          <MainProgressTitle>
            <Package style={{ width: '1rem', height: '1rem' }} />
            Consolidation Progress
          </MainProgressTitle>
          <ProgressTimeline>
            {progressStages.map((stage, index) => (
              <ProgressStep key={index}>
                <ProgressStepIcon $status={stage.status}>
                  {stage.status === 'completed' && (
                    <CheckCircle style={{ width: '0.75rem', height: '0.75rem' }} />
                  )}
                  {stage.status === 'current' && (
                    <Clock style={{ width: '0.75rem', height: '0.75rem' }} />
                  )}
                  {stage.status === 'pending' && (
                    <div style={{ 
                      width: '0.5rem', 
                      height: '0.5rem', 
                      backgroundColor: 'currentColor', 
                      borderRadius: '50%' 
                    }} />
                  )}
                </ProgressStepIcon>
                <ProgressStepContent>
                  <ProgressStepName $status={stage.status}>
                    {stage.name}
                  </ProgressStepName>
                </ProgressStepContent>
                {index < progressStages.length - 1 && (
                  <ProgressConnector $completed={stage.status === 'completed'} />
                )}
              </ProgressStep>
            ))}
          </ProgressTimeline>
        </MainProgressWrapper>

        {/* Individual Jobs */}
        {consolidationData.individualJobs && consolidationData.individualJobs.length > 0 && (
          <JobsSection>
            <JobsSectionTitle>
              Individual Jobs ({consolidationData.individualJobs.length})
            </JobsSectionTitle>
            <JobsList>
              {consolidationData.individualJobs.map((job, index) => (
                <JobCard key={index}>
                  <JobHeader>
                    <JobId>{job.id}</JobId>
                    <JobStageIndicator 
                      $status={getJobStageStatus(
                        job.currentStage || 1, 
                        consolidationData.currentStage || 1
                      )} 
                    />
                  </JobHeader>
                  <JobDetails>
                    PO: {job.poNumber}<br />
                    {job.shipper?.company} → {job.consignee?.company}
                  </JobDetails>
                  <JobProgress>
                    <JobStageName>
                      Stage {job.currentStage || 1}/{jobStages.length}
                    </JobStageName>
                    <ViewJobButton
                      variant="ghost"
                      size="sm"
                      onClick={() => onJobClick(job.id)}
                    >
                      <ExternalLink style={{ width: '0.75rem', height: '0.75rem' }} />
                    </ViewJobButton>
                  </JobProgress>
                </JobCard>
              ))}
            </JobsList>
          </JobsSection>
        )}
      </ProgressContainer>
    </StickyContainer>
  );
}