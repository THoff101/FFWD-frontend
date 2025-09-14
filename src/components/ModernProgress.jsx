import styled from "styled-components";
import { Check, Clock, AlertCircle } from "lucide-react";

// Styled Components for ModernProgress
const ProgressContainer = styled.div`
  width: 100%;
  background-color: var(--background);
  border-bottom: 1px solid var(--border);
  padding: 1.5rem;
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
`;

const ProgressLine = styled.div`
  position: absolute;
  top: 1.5rem;
  left: 0;
  width: 100%;
  height: 0.25rem;
  background-color: var(--border);
  border-radius: 9999px;
`;

const ProgressFill = styled.div`
  height: 100%;
  background: linear-gradient(to right, var(--primary), var(--primary-foreground));
  border-radius: 9999px;
  transition: all 0.5s ease-out;
  width: ${props => props.width};
`;

const StepContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 10;
  max-width: 8rem;
`;

const StepCircle = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  border: 2px solid;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  background-color: var(--background);
  
  ${props => {
    switch (props.$status) {
      case 'completed':
        return `
          background-color: #dcfce7;
          border-color: var(--success);
          color: var(--success);
        `;
      case 'current':
        return `
          background-color: #dbeafe;
          border-color: var(--primary);
          color: var(--primary-foreground);
          box-shadow: 0 0 0 4px #dbeafe, 0 10px 15px -3px rgb(0 0 0 / 0.1);
          transform: scale(1.1);
        `;
      default:
        return `
          background-color: var(--muted-background, #f3f4f6);
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
    font-size: 0.875rem;
    font-weight: ${props => props.$status === 'current' ? '600' : '500'};
  }
`;

const CheckIcon = styled(Check)`
  width: 1rem;
  height: 1rem;
  color: var(--success);
`;

const ClockIcon = styled(Clock)`
  width: 1rem;
  height: 1rem;
  color: var(--primary);
`;

const StepLabelContainer = styled.div`
  margin-top: 0.75rem;
  text-align: center;
`;

const StepNumber = styled.p`
  font-size: 0.75rem;
  font-weight: 500;
  margin: 0;
  color: ${props => props.$status === 'current' ? 'var(--primary)' : 'var(--muted-foreground)'};
`;

const StepLabel = styled.p`
  font-size: 0.875rem;
  margin: 0.25rem 0 0 0;
  line-height: 1.25;
  color: ${props => {
    switch (props.$status) {
      case 'current':
        return 'var(--foreground)';
      case 'completed':
        return 'var(--success)';
      default:
        return 'var(--muted-foreground)';
    }
  }};
  font-weight: ${props => props.$status === 'current' ? '600' : '400'};
`;

// Styled Components for TrackingProgress
const TrackingContainer = styled.div`
  background-color: var(--background);
  border-radius: 0.75rem;
  border: 1px solid var(--border);
  padding: 1.5rem;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
`;

const TrackingTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--foreground);
  margin: 0 0 1.5rem 0;
`;

const TrackingContent = styled.div`
  position: relative;
`;

const TrackingProgressLine = styled.div`
  position: absolute;
  top: 1.5rem;
  left: 0;
  width: 100%;
  height: 0.25rem;
  background-color: var(--border);
  border-radius: 9999px;
`;

const TrackingProgressFill = styled.div`
  height: 100%;
  background: linear-gradient(to right, var(--primary), var(--primary-foreground));
  border-radius: 9999px;
  transition: all 0.5s ease-out;
  width: ${props => props.width};
`;

const StagesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 10;
`;

const StageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 5rem;
`;

const StageCircle = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  border: 2px solid;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  background-color: var(--background);
  
  ${props => {
    switch (props.$status) {
      case 'completed':
        return `
          background-color: #dcfce7;
          border-color: var(--success);
          color: var(--success);
        `;
      case 'current':
        return `
          background-color: #dbeafe;
          border-color: var(--primary);
          color: var(--primary-foreground);
          box-shadow: 0 0 0 4px #dbeafe, 0 10px 15px -3px rgb(0 0 0 / 0.1);
          transform: scale(1.1);
        `;
      case 'external':
        return `
          background-color: var(--muted-background, #f3f4f6);
          border-color: var(--muted-foreground);
          color: var(--muted-foreground);
        `;
      case 'issue':
        return `
          background-color: #fee2e2;
          border-color: var(--danger);
          color: var(--danger);
        `;
      default:
        return `
          background-color: var(--muted-background, #fafafa);
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
    font-size: 0.875rem;
    font-weight: 500;
  }
`;

const StageCheckIcon = styled(Check)`
  width: 1rem;
  height: 1rem;
  color: var(--success);
`;

const StageClockIcon = styled(Clock)`
  width: 1rem;
  height: 1rem;
  color: var(--primary);
`;

const StageAlertIcon = styled(AlertCircle)`
  width: 1rem;
  height: 1rem;
  color: var(--danger);
`;

const StageLabelContainer = styled.div`
  margin-top: 0.75rem;
  text-align: center;
`;

const StageLabel = styled.p`
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1.25;
  margin: 0;
  color: ${props => {
    switch (props.$status) {
      case 'current':
        return 'var(--primary)';
      case 'completed':
        return 'var(--success)';
      case 'issue':
        return 'var(--danger)';
      default:
        return 'var(--muted-foreground)';
    }
  }};
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

  return (
    <ProgressContainer>
      <ProgressWrapper>
        <ProgressContent>
          {/* Progress line */}
          <ProgressLine>
            <ProgressFill width={`${((currentStep - 1) / (totalSteps - 1)) * 100}%`} />
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

  return (
    <TrackingContainer>
      <TrackingTitle>Progress Timeline</TrackingTitle>
      
      <TrackingContent>
        {/* Progress line */}
        <TrackingProgressLine>
          <TrackingProgressFill 
            width={`${(stages.filter((_, index) => index < currentStage).length / (stages.length - 1)) * 100}%`}
          />
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
              </StageLabelContainer>
            </StageContainer>
          ))}
        </StagesContainer>
      </TrackingContent>
    </TrackingContainer>
  );
}