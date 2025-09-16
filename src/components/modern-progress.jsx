import styled from "styled-components";
import { Check, Clock, AlertCircle } from "lucide-react";

// Responsive styled components with mobile-first approach
const ProgressContainer = styled.div`
  width: 100%;
  background-color: var(--card);
  border-bottom: 1px solid var(--border);
  padding: clamp(0.75rem, 3vw, 1.5rem);
`;

const ProgressWrapper = styled.div`
  max-width: 64rem;
  margin: 0 auto;
`;

const ProgressContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  
  /* Stack vertically on very small screens */
  @media (max-width: 480px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const ProgressLine = styled.div`
  position: absolute;
  top: clamp(1.25rem, 4vw, 1.5rem);
  left: clamp(1.5rem, 6vw, 2rem);
  right: clamp(1.5rem, 6vw, 2rem);
  height: clamp(0.125rem, 0.5vw, 0.25rem);
  background-color: var(--border);
  border-radius: 9999px;
  
  @media (max-width: 480px) {
    display: none;
  }
`;

const ProgressFill = styled.div`
  height: 100%;
  background: linear-gradient(to right, var(--primary), var(--primary));
  border-radius: 9999px;
  transition: all 0.5s ease-out;
  width: ${props => props.width};
  opacity: 0.8;
`;

const StepContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 10;
  max-width: clamp(6rem, 15vw, 8rem);
  
  @media (max-width: 480px) {
    flex-direction: row;
    max-width: none;
    width: 100%;
    gap: 1rem;
    align-items: center;
    justify-content: flex-start;
  }
`;

const StepCircle = styled.div`
  width: clamp(2.5rem, 6vw, 3rem);
  height: clamp(2.5rem, 6vw, 3rem);
  border-radius: 50%;
  border: 2px solid;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  background-color: var(--card);
  
  ${props => {
    switch (props.$status) {
      case 'completed':
        return `
          background-color: #dcfce7;
          border-color: #16a34a;
          color: #15803d;
        `;
      case 'current':
        return `
          background-color: #dbeafe;
          border-color: var(--primary);
          color: var(--primary);
          box-shadow: 0 0 0 clamp(2px, 1vw, 4px) #dbeafe, 0 4px 8px -2px rgba(0, 0, 0, 0.1);
          transform: scale(1.05);
          
          @media (min-width: 768px) {
            transform: scale(1.1);
          }
        `;
      default:
        return `
          background-color: var(--muted);
          border-color: var(--border);
          color: var(--muted-foreground);
        `;
    }
  }}
`;

const StepIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  span {
    font-size: clamp(0.75rem, 2vw, 0.875rem);
    font-weight: ${props => props.$status === 'current' ? '600' : '500'};
  }
`;

const CheckIcon = styled(Check)`
  width: clamp(0.875rem, 2.5vw, 1rem);
  height: clamp(0.875rem, 2.5vw, 1rem);
  color: #16a34a;
`;

const ClockIcon = styled(Clock)`
  width: clamp(0.875rem, 2.5vw, 1rem);
  height: clamp(0.875rem, 2.5vw, 1rem);
  color: var(--primary);
`;

const StepLabelContainer = styled.div`
  margin-top: clamp(0.5rem, 2vw, 0.75rem);
  text-align: center;
  
  @media (max-width: 480px) {
    margin-top: 0;
    text-align: left;
    flex: 1;
  }
`;

const StepNumber = styled.p`
  font-size: clamp(0.625rem, 1.5vw, 0.75rem);
  margin: 0;
  color: ${props => props.$status === 'current' ? 'var(--primary)' : 'var(--muted-foreground)'};
`;

const StepLabel = styled.p`
  font-size: clamp(0.75rem, 2vw, 0.875rem);
  margin: clamp(0.125rem, 0.5vw, 0.25rem) 0 0 0;
  line-height: 1.25;
  color: ${props => {
    switch (props.$status) {
      case 'current':
        return 'var(--foreground)';
      case 'completed':
        return 'var(--foreground)';
      default:
        return 'var(--muted-foreground)';
    }
  }};
  font-weight: ${props => props.$status === 'current' ? '600' : '400'};
`;

// Tracking Progress Components (for job details pages)
const TrackingContainer = styled.div`
  background-color: var(--card);
  border-radius: 0.75rem;
  border: 1px solid var(--border);
  padding: clamp(1rem, 3vw, 1.5rem);
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
`;

const TrackingTitle = styled.h3`
  font-size: clamp(1rem, 3vw, 1.125rem);
  color: var(--foreground);
  margin: 0 0 clamp(1rem, 3vw, 1.5rem) 0;
`;

const TrackingContent = styled.div`
  position: relative;
`;

const TrackingProgressLine = styled.div`
  position: absolute;
  top: clamp(1.25rem, 4vw, 1.5rem);
  left: clamp(1rem, 4vw, 1.5rem);
  right: clamp(1rem, 4vw, 1.5rem);
  height: clamp(0.125rem, 0.5vw, 0.25rem);
  background-color: var(--border);
  border-radius: 9999px;
  
  @media (max-width: 640px) {
    display: none;
  }
`;

const TrackingProgressFill = styled.div`
  height: 100%;
  background: linear-gradient(to right, var(--primary), var(--primary));
  border-radius: 9999px;
  transition: all 0.5s ease-out;
  width: ${props => props.width};
  max-width: 100%;
  opacity: 0.8;
`;

const StagesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(clamp(4rem, 12vw, 5rem), 1fr));
  gap: clamp(0.5rem, 2vw, 1rem);
  position: relative;
  z-index: 10;
  
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }
`;

const StageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media (max-width: 640px) {
    flex-direction: row;
    gap: 1rem;
    align-items: center;
    justify-content: flex-start;
  }
`;

const StageCircle = styled.div`
  width: clamp(2.5rem, 6vw, 3rem);
  height: clamp(2.5rem, 6vw, 3rem);
  border-radius: 50%;
  border: 2px solid;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  background-color: var(--card);
  
  ${props => {
    switch (props.$status) {
      case 'completed':
        return `
          background-color: #dcfce7;
          border-color: #16a34a;
          color: #15803d;
        `;
      case 'current':
        return `
          background-color: #dbeafe;
          border-color: var(--primary);
          color: var(--primary);
          box-shadow: 0 0 0 clamp(2px, 1vw, 4px) #dbeafe, 0 4px 8px -2px rgba(0, 0, 0, 0.1);
          transform: scale(1.05);
        `;
      case 'external':
        return `
          background-color: var(--muted);
          border-color: var(--muted-foreground);
          color: var(--muted-foreground);
        `;
      case 'issue':
        return `
          background-color: #fee2e2;
          border-color: #ef4444;
          color: #dc2626;
        `;
      default:
        return `
          background-color: var(--card);
          border-color: var(--border);
          color: var(--muted-foreground);
        `;
    }
  }}
`;

const StageIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  span {
    font-size: clamp(0.75rem, 2vw, 0.875rem);
    font-weight: 500;
  }
`;

const StageCheckIcon = styled(Check)`
  width: clamp(0.875rem, 2.5vw, 1rem);
  height: clamp(0.875rem, 2.5vw, 1rem);
  color: #16a34a;
`;

const StageClockIcon = styled(Clock)`
  width: clamp(0.875rem, 2.5vw, 1rem);
  height: clamp(0.875rem, 2.5vw, 1rem);
  color: var(--primary);
`;

const StageAlertIcon = styled(AlertCircle)`
  width: clamp(0.875rem, 2.5vw, 1rem);
  height: clamp(0.875rem, 2.5vw, 1rem);
  color: #dc2626;
`;

const StageLabelContainer = styled.div`
  margin-top: clamp(0.5rem, 2vw, 0.75rem);
  text-align: center;
  
  @media (max-width: 640px) {
    margin-top: 0;
    text-align: left;
    flex: 1;
  }
`;

const StageLabel = styled.p`
  font-size: clamp(0.625rem, 2vw, 0.75rem);
  line-height: 1.25;
  margin: 0;
  color: ${props => {
    switch (props.$status) {
      case 'current':
        return 'var(--primary)';
      case 'completed':
        return '#16a34a';
      case 'issue':
        return '#dc2626';
      default:
        return 'var(--muted-foreground)';
    }
  }};
  font-weight: ${props => props.$status === 'current' ? '600' : '500'};
`;

const StageDescription = styled.p`
  font-size: clamp(0.625rem, 1.5vw, 0.75rem);
  color: var(--muted-foreground);
  margin: 0.25rem 0 0 0;
  line-height: 1.2;
  
  @media (max-width: 640px) {
    margin-top: 0.125rem;
  }
`;

export function ModernProgress({ currentStep, totalSteps, stepLabels, variant = 'creation' }) {
  const getStepStatus = (stepNumber) => {
    if (stepNumber < currentStep) return 'completed';
    if (stepNumber === currentStep) return 'current';
    return 'pending';
  };

  const getStepIcon = (status, stepNumber) => {
    switch (status) {
      case 'completed':
        return <CheckIcon />;
      case 'current':
        return variant === 'tracking' ? <ClockIcon /> : <span>{stepNumber}</span>;
      default:
        return <span>{stepNumber}</span>;
    }
  };

  const progressWidth = totalSteps > 1 ? `${((currentStep - 1) / (totalSteps - 1)) * 100}%` : '0%';

  return (
    <ProgressContainer>
      <ProgressWrapper>
        <ProgressContent>
          {/* Progress line */}
          <ProgressLine>
            <ProgressFill width={progressWidth} />
          </ProgressLine>
          
          {/* Steps */}
          {stepLabels.map((label, index) => {
            const stepNumber = index + 1;
            const status = getStepStatus(stepNumber);
            
            return (
              <StepContainer key={index}>
                {/* Step circle */}
                <StepCircle $status={status}>
                  <StepIconContainer $status={status}>
                    {getStepIcon(status, stepNumber)}
                  </StepIconContainer>
                </StepCircle>
                
                {/* Step label */}
                <StepLabelContainer>
                  <StepNumber $status={status}>
                    Step {stepNumber}
                  </StepNumber>
                  <StepLabel $status={status}>
                    {label}
                  </StepLabel>
                </StepLabelContainer>
              </StepContainer>
            );
          })}
        </ProgressContent>
      </ProgressWrapper>
    </ProgressContainer>
  );
}

export function TrackingProgress({ currentStage, stages }) {
  const getStageIcon = (status, index) => {
    switch (status) {
      case 'completed':
        return <StageCheckIcon />;
      case 'current':
        return <StageClockIcon />;
      case 'issue':
        return <StageAlertIcon />;
      default:
        return <span>{index + 1}</span>;
    }
  };

  const completedStages = stages.filter(stage => stage.status === 'completed').length;
  const progressWidth = stages.length > 1 ? `${(completedStages / (stages.length - 1)) * 100}%` : '0%';

  return (
    <TrackingContainer>
      <TrackingTitle>Progress Timeline</TrackingTitle>
      
      <TrackingContent>
        {/* Progress line */}
        <TrackingProgressLine>
          <TrackingProgressFill width={progressWidth} />
        </TrackingProgressLine>
        
        {/* Stages */}
        <StagesContainer>
          {stages.map((stage, index) => (
            <StageContainer key={index}>
              {/* Stage circle */}
              <StageCircle $status={stage.status}>
                <StageIconContainer>
                  {getStageIcon(stage.status, index)}
                </StageIconContainer>
              </StageCircle>
              
              {/* Stage label */}
              <StageLabelContainer>
                <StageLabel $status={stage.status}>
                  {stage.name}
                </StageLabel>
                {stage.description && (
                  <StageDescription>
                    {stage.description}
                  </StageDescription>
                )}
              </StageLabelContainer>
            </StageContainer>
          ))}
        </StagesContainer>
      </TrackingContent>
    </TrackingContainer>
  );
}