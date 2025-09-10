import { useState } from "react";
import styled from "styled-components";
import { ModernProgress } from "./modern-progress";
import { ModernSidebar } from "./modern-sidebar";
import { ConsolidationStepBasics } from "./consolidation-step-basics";
import { ConsolidationStepParties } from "./consolidation-step-parties";
import { ConsolidationStepDocuments } from "./consolidation-step-documents";
import { ConsolidationStepReview } from "./consolidation-step-review";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight, ArrowLeft } from "lucide-react";

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

const HeaderWrapper = styled.div`
  max-width: 64rem;
  margin: 0 auto;
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const BackButton = styled(Button)`
  color: #4b5563;
  
  &:hover {
    color: #111827;
  }
`;

const Divider = styled.div`
  height: 1.5rem;
  width: 1px;
  background-color: #d1d5db;
`;

const HeaderTextContainer = styled.div``;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  color: #111827;
  margin: 0;
`;

const Subtitle = styled.p`
  color: #4b5563;
  margin-top: 0.25rem;
  margin-bottom: 0;
`;

const ContentArea = styled.div`
  flex: 1;
  padding: 1.5rem;
  overflow: auto;
`;

const ContentWrapper = styled.div`
  max-width: 64rem;
  margin: 0 auto;
`;

const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const StepContent = styled.div`
  min-height: 37.5rem;
`;

const NavigationButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1.5rem;
`;

const PreviousButton = styled(Button)`
  background-color: white;
  border: 1px solid #d1d5db;
  color: #374151;
  
  &:hover:not(:disabled) {
    background-color: #f9fafb;
  }
  
  &:disabled {
    opacity: 0.5;
  }
`;

const StepIndicator = styled.div`
  text-align: center;
`;

const StepText = styled.p`
  font-size: 0.875rem;
  color: #6b7280;
  margin: 0;
`;

const NextButton = styled(Button)`
  background-color: #2563eb;
  color: white;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  
  &:hover {
    background-color: #1d4ed8;
  }
`;

const PrevIcon = styled(ChevronLeft)`
  width: 1rem;
  height: 1rem;
  margin-right: 0.5rem;
`;

const NextIcon = styled(ChevronRight)`
  width: 1rem;
  height: 1rem;
  margin-left: 0.5rem;
`;

const BackIcon = styled(ArrowLeft)`
  width: 1rem;
  height: 1rem;
  margin-right: 0.5rem;
`;

interface ConsolidationCreationProcessProps {
  onConsolidationCreated: (data: any) => void;
  onBackToJobs: () => void;
}

export function ConsolidationCreationProcess({ onConsolidationCreated, onBackToJobs }: ConsolidationCreationProcessProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    template: 'Consolidation'
  });

  const stepLabels = ["Basics", "Parties", "Dates & Documents", "Review"];
  const totalSteps = 4;

  const updateFormData = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    onConsolidationCreated(formData);
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return <ConsolidationStepBasics data={formData} updateData={updateFormData} />;
      case 2:
        return <ConsolidationStepParties data={formData} updateData={updateFormData} />;
      case 3:
        return <ConsolidationStepDocuments data={formData} updateData={updateFormData} />;
      case 4:
        return <ConsolidationStepReview data={formData} onSubmit={handleSubmit} onBack={prevStep} />;
      default:
        return <ConsolidationStepBasics data={formData} updateData={updateFormData} />;
    }
  };

  return (
    <PageContainer>
      {/* Sidebar */}
      <ModernSidebar currentPage="jobs" />
      
      {/* Main Content */}
      <MainContent>
        {/* Header */}
        <Header>
          <HeaderWrapper>
            <HeaderContent>
              <HeaderLeft>
                <BackButton
                  variant="ghost"
                  size="sm"
                  onClick={onBackToJobs}
                >
                  <BackIcon />
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
                  <PreviousButton
                    variant="outline"
                    onClick={prevStep}
                    disabled={currentStep === 1}
                  >
                    <PrevIcon />
                    Previous
                  </PreviousButton>

                  <StepIndicator>
                    <StepText>
                      Step {currentStep} of {totalSteps} - {stepLabels[currentStep - 1]}
                    </StepText>
                  </StepIndicator>

                  <NextButton onClick={nextStep}>
                    Next
                    <NextIcon />
                  </NextButton>
                </NavigationButtons>
              )}
            </FormContent>
          </ContentWrapper>
        </ContentArea>
      </MainContent>
    </PageContainer>
  );
}