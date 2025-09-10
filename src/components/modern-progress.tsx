import styled from "styled-components";
import { Check, Clock, AlertCircle } from "lucide-react";

// Styled Components for ModernProgress
const ProgressContainer = styled.div`
  width: 100%;
  background-color: white;
  border-bottom: 1px solid #e5e7eb;
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
  background-color: #e5e7eb;
  border-radius: 9999px;
`;

const ProgressFill = styled.div<{ width: string }>`
  height: 100%;
  background: linear-gradient(to right, #3b82f6, #2563eb);
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

const StepCircle = styled.div<{ $status: string }>`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  border: 2px solid;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  background-color: white;
  
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
          border-color: #3b82f6;
          color: #1d4ed8;
          box-shadow: 0 0 0 4px #dbeafe, 0 10px 15px -3px rgb(0 0 0 / 0.1);
          transform: scale(1.1);
        `;
      default:
        return `
          background-color: #f3f4f6;
          border-color: #d1d5db;
          color: #6b7280;
        `;
    }
  }}
`;

const StepIconContainer = styled.div<{ $status: string }>`
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
  color: #16a34a;
`;

const ClockIcon = styled(Clock)`
  width: 1rem;
  height: 1rem;
  color: #2563eb;
`;

const StepLabelContainer = styled.div`
  margin-top: 0.75rem;
  text-align: center;
`;

const StepNumber = styled.p<{ $status: string }>`
  font-size: 0.75rem;
  font-weight: 500;
  margin: 0;
  color: ${props => props.$status === 'current' ? '#2563eb' : '#6b7280'};
`;

const StepLabel = styled.p<{ $status: string }>`
  font-size: 0.875rem;
  margin: 0.25rem 0 0 0;
  line-height: 1.25;
  color: ${props => {
    switch (props.$status) {
      case 'current':
        return '#111827';
      case 'completed':
        return '#374151';
      default:
        return '#6b7280';
    }
  }};
  font-weight: ${props => props.$status === 'current' ? '600' : '400'};
`;

// Styled Components for TrackingProgress
const TrackingContainer = styled.div`
  background-color: white;
  border-radius: 0.75rem;
  border: 1px solid #e5e7eb;
  padding: 1.5rem;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
`;

const TrackingTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: #111827;
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
  background-color: #e5e7eb;
  border-radius: 9999px;
`;

const TrackingProgressFill = styled.div<{ width: string }>`
  height: 100%;
  background: linear-gradient(to right, #3b82f6, #2563eb);
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

const StageCircle = styled.div<{ $status: string }>`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  border: 2px solid;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  background-color: white;
  
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
          border-color: #3b82f6;
          color: #1d4ed8;
          box-shadow: 0 0 0 4px #dbeafe, 0 10px 15px -3px rgb(0 0 0 / 0.1);
          transform: scale(1.1);
        `;
      case 'external':
        return `
          background-color: #f3f4f6;
          border-color: #9ca3af;
          color: #4b5563;
        `;
      case 'issue':
        return `
          background-color: #fee2e2;
          border-color: #ef4444;
          color: #dc2626;
        `;
      default:
        return `
          background-color: #fafafa;
          border-color: #d1d5db;
          color: #6b7280;
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
  color: #16a34a;
`;

const StageClockIcon = styled(Clock)`
  width: 1rem;
  height: 1rem;
  color: #2563eb;
`;

const StageAlertIcon = styled(AlertCircle)`
  width: 1rem;
  height: 1rem;
  color: #dc2626;
`;

const StageLabelContainer = styled.div`
  margin-top: 0.75rem;
  text-align: center;
`;

const StageLabel = styled.p<{ $status: string }>`
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1.25;
  margin: 0;
  color: ${props => {
    switch (props.$status) {
      case 'current':
        return '#2563eb';
      case 'completed':
        return '#16a34a';
      case 'issue':
        return '#dc2626';
      default:
        return '#6b7280';
    }
  }};
`;

interface ModernProgressProps {
  currentStep: number;
  totalSteps: number;
  stepLabels: string[];
  variant?: 'creation' | 'tracking';
}

export function ModernProgress({ currentStep, totalSteps, stepLabels, variant = 'creation' }: ModernProgressProps) {
  const getStepStatus = (stepNumber: number) => {
    if (stepNumber < currentStep) return 'completed';
    if (stepNumber === currentStep) return 'current';
    return 'pending';
  };

  const getStepIcon = (status: string, stepNumber: number) => {
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

interface TrackingProgressProps {
  currentStage: number;
  stages: Array<{
    name: string;
    status: 'completed' | 'current' | 'pending' | 'external' | 'issue';
    description?: string;
  }>;
}

export function TrackingProgress({ currentStage, stages }: TrackingProgressProps) {
  const getStageIcon = (status: string, index: number) => {
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