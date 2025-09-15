import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ModernProgress } from "./modern-progress";
import { useConsolidation } from "../contexts/consolidation-context";
import { ConsolidationStepBasics } from "./consolidation-step-basics";
import { ConsolidationStepParties } from "./consolidation-step-parties";
import { ConsolidationStepDocuments } from "./consolidation-step-documents";
import { ConsolidationStepReview } from "./consolidation-step-review";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight, ArrowLeft, Loader2 } from "lucide-react";

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
  margin-left: clamp(1rem, 3vw, 0);
  
  @media (max-width: 767px) {
    margin-left: 0;
    margin-top: 4rem; /* Account for mobile menu button */
  }
`;

const HeaderWrapper = styled.div`
  max-width: 64rem;
  margin: 0 auto;
`;

const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  
  @media (min-width: 640px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 0;
  }
`;

const HeaderLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  
  @media (min-width: 640px) {
    flex-direction: row;
    align-items: center;
    gap: 1rem;
  }
`;

const BackButton = styled(Button)`
  color: var(--muted-foreground);
  font-size: clamp(0.875rem, 2.5vw, 1rem);
  padding: clamp(0.5rem, 2vw, 0.75rem) clamp(0.75rem, 3vw, 1rem);
  
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

const HeaderTextContainer = styled.div`
  min-width: 0;
`;

const Title = styled.h1`
  font-size: clamp(1.25rem, 4vw, 1.5rem);
  color: var(--foreground);
  margin: 0;
`;

const Subtitle = styled.p`
  color: var(--muted-foreground);
  margin: 0.25rem 0 0 0;
  font-size: clamp(0.875rem, 2.5vw, 1rem);
`;

const ContentArea = styled.div`
  flex: 1;
  padding: clamp(0.75rem, 3vw, 1.5rem);
  overflow: auto;
`;

const ContentWrapper = styled.div`
  max-width: 64rem;
  margin: 0 auto;
`;

const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(1rem, 3vw, 1.5rem);
`;

const StepContent = styled.div`
  min-height: clamp(20rem, 60vh, 37.5rem);
`;

const NavigationButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: clamp(1rem, 3vw, 1.5rem);
  
  @media (min-width: 640px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 0;
  }
`;

const NavigationSection = styled.div`
  display: flex;
  gap: 0.75rem;
  
  @media (min-width: 640px) {
    &:first-child {
      justify-content: flex-start;
    }
    
    &:last-child {
      justify-content: flex-end;
    }
  }
`;

const PreviousButton = styled(Button)`
  background-color: var(--secondary);
  border: 1px solid var(--border);
  color: var(--secondary-foreground);
  font-size: clamp(0.875rem, 2.5vw, 1rem);
  min-height: clamp(2.25rem, 6vw, 2.5rem);
  flex: 1;
  
  @media (min-width: 640px) {
    flex: none;
    min-width: 8rem;
  }
  
  &:hover:not(:disabled) {
    background-color: var(--muted);
  }
  
  &:disabled {
    opacity: 0.5;
  }
`;

const StepIndicator = styled.div`
  text-align: center;
  order: -1;
  
  @media (min-width: 640px) {
    order: 0;
  }
`;

const StepText = styled.p`
  font-size: clamp(0.75rem, 2vw, 0.875rem);
  color: var(--muted-foreground);
  margin: 0;
`;

const NextButton = styled(Button)`
  background-color: var(--primary);
  color: var(--primary-foreground);
  font-size: clamp(0.875rem, 2.5vw, 1rem);
  min-height: clamp(2.25rem, 6vw, 2.5rem);
  flex: 1;
  
  @media (min-width: 640px) {
    flex: none;
    min-width: 8rem;
  }
  
  &:hover {
    background-color: var(--primary);
    opacity: 0.9;
  }
  
  &:disabled {
    opacity: 0.5;
  }
`;

const LoadingButton = styled(NextButton)`
  position: relative;
  
  &:disabled {
    cursor: not-allowed;
  }
`;

const ButtonSpinner = styled(Loader2)`
  animation: spin 1s linear infinite;
  margin-right: 0.5rem;
  
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;

const IconWrapper = styled.span`
  display: inline-flex;
  align-items: center;
`;

export function ConsolidationCreationProcess({ isLoading = false }) {
  const navigate = useNavigate();
  const { createConsolidation } = useConsolidation();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    template: 'Import LCL', // Default template
    individualJobs: []
  });
  const [stepValidation, setStepValidation] = useState({
    1: false,
    2: false,
    3: false,
    4: false
  });

  const stepLabels = ["Basics", "Parties & Locations", "Dates & Documents", "Review & Submit"];
  const totalSteps = 4;

  const updateFormData = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const updateStepValidation = (step, isValid) => {
    setStepValidation(prev => ({ ...prev, [step]: isValid }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps && stepValidation[currentStep]) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1 && !isLoading) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    try {
      const consolidation = createConsolidation(formData);
      navigate(`/consolidation/${consolidation.id}`);
    } catch (error) {
      console.error('Error creating consolidation:', error);
    }
  };

  const renderCurrentStep = () => {
    const commonProps = {
      data: formData,
      updateData: updateFormData,
      updateValidation: updateStepValidation
    };

    switch (currentStep) {
      case 1:
        return <ConsolidationStepBasics {...commonProps} />;
      case 2:
        return <ConsolidationStepParties {...commonProps} />;
      case 3:
        return <ConsolidationStepDocuments {...commonProps} />;
      case 4:
        return (
          <ConsolidationStepReview 
            data={formData} 
            onSubmit={handleSubmit} 
            onBack={prevStep}
            isLoading={isLoading}
          />
        );
      default:
        return <ConsolidationStepBasics {...commonProps} />;
    }
  };

  const canProceed = stepValidation[currentStep];

  return (
    <PageContainer>
        {/* Header */}
        <Header>
          <HeaderWrapper>
            <HeaderContent>
              <HeaderLeft>
                <BackButton
                  variant="ghost"
                  size="sm"
                  onClick={() => navigate('/jobs')}
                  disabled={isLoading}
                >
                  <IconWrapper>
                    <ArrowLeft style={{width: '1rem', height: '1rem', marginRight: '0.5rem'}} />
                  </IconWrapper>
                  Back to Jobs
                </BackButton>
                <Divider />
                <HeaderTextContainer>
                  <Title>Create New Consolidation</Title>
                  <Subtitle>Set up a new freight consolidation with multiple individual jobs</Subtitle>
                </HeaderTextContainer>
              </HeaderLeft>
            </HeaderContent>
          </HeaderWrapper>
        </Header>

        {/* Progress Bar */}
        <ModernProgress 
          currentStep={currentStep} 
          totalSteps={totalSteps} 
          stepLabels={stepLabels}
          variant="creation"
        />
        
        {/* Content Area */}
        <ContentArea>
          <ContentWrapper>
            {/* Form Content */}
            <FormContent>
              {/* Step Content */}
              <StepContent>
                {renderCurrentStep()}
              </StepContent>

              {/* Navigation Buttons - Hidden on Step 4 (Review handles its own) */}
              {currentStep < 4 && (
                <NavigationButtons>
                  <NavigationSection>
                    <PreviousButton
                      variant="outline"
                      onClick={prevStep}
                      disabled={currentStep === 1 || isLoading}
                    >
                      <IconWrapper>
                        <ChevronLeft style={{width: '1rem', height: '1rem', marginRight: '0.5rem'}} />
                      </IconWrapper>
                      Previous
                    </PreviousButton>
                  </NavigationSection>

                  <StepIndicator>
                    <StepText>
                      Step {currentStep} of {totalSteps} - {stepLabels[currentStep - 1]}
                    </StepText>
                  </StepIndicator>

                  <NavigationSection>
                    {isLoading ? (
                      <LoadingButton disabled>
                        <ButtonSpinner style={{width: '1rem', height: '1rem'}} />
                        Processing...
                      </LoadingButton>
                    ) : (
                      <NextButton 
                        onClick={nextStep}
                        disabled={!canProceed}
                      >
                        Next
                        <IconWrapper>
                          <ChevronRight style={{width: '1rem', height: '1rem', marginLeft: '0.5rem'}} />
                        </IconWrapper>
                      </NextButton>
                    )}
                  </NavigationSection>
                </NavigationButtons>
              )}
            </FormContent>
          </ContentWrapper>
        </ContentArea>
    </PageContainer>
  );
}