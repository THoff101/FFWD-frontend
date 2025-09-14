import { useState } from "react";
import styled from "styled-components";
import {ModernProgress} from "../components/ModernProgress";
import { Button} from "../ui";
import ConsolidationStepBasics from "./ConsolidationStepBasics";
import ConsolidationStepParties from "./ConsolidationStepParties";
import ConsolidationStepDocuments from "./ConsolidationStepDocuments";
import ConsolidationStepReview from "./ConsolidationStepReview";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Container = styled.div`
  display: flex;
  height: 100%;
  background: var(--background);
`;

const SidebarWrapper = styled.div`
  width: 280px;
  border-right: 1px solid var(--border);
  background: var(--card);
`;

const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Header = styled.header`
  padding: 1rem 1.5rem;
  border-bottom: 1px solid var(--border);
  background: var(--card);
`;

const Title = styled.h1`
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-bold);
  color: var(--foreground);
  margin: 0;
`;

const ProgressContainer = styled.div`
  padding: 1rem 1.5rem;
  background: var(--card);
  border-bottom: 1px solid var(--border);
`;

const MainContent = styled.main`
  flex: 1;
  padding: 2rem;
  overflow-y: auto;
`;

const Navigation = styled.nav`
  padding: 1rem 1.5rem;
  border-top: 1px solid var(--border);
  background: var(--card);
  display: flex;
  justify-content: space-between;
`;

export default function ConsolidationCreationProcess() {
  const steps = [
    { id: "basics", title: "Basics", component: ConsolidationStepBasics },
    { id: "parties", title: "Parties", component: ConsolidationStepParties },
    { id: "documents", title: "Documents", component: ConsolidationStepDocuments },
    { id: "review", title: "Review", component: ConsolidationStepReview },
  ];

  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [formData, setFormData] = useState({});

  const CurrentStepComponent = steps[currentStepIndex].component;

  const updateData = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const goNext = () => {
    if (currentStepIndex < steps.length - 1) {
      setCurrentStepIndex(currentStepIndex + 1);
    }
  };

  const goBack = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(currentStepIndex - 1);
    }
  };

  return (
    <Container>
      <ContentWrapper>
        <Header>
          <Title>New Consolidation Shipment</Title>
        </Header>
        <ProgressContainer>
          <ModernProgress 
            currentStep={currentStepIndex + 1}
            totalSteps={steps.length}
            stepLabels={steps.map(step => step.title)}
            variant="creation"
          />
        </ProgressContainer>
        <MainContent>
          <CurrentStepComponent data={formData} updateData={updateData} />
        </MainContent>
        <Navigation>
          <Button variant="secondary" onClick={goBack} disabled={currentStepIndex === 0} icon={<ChevronLeft size={16} />}>
            Back
          </Button>
          <Button variant="primary" onClick={goNext} disabled={currentStepIndex === steps.length - 1}>
            Next <ChevronRight size={16} />
          </Button>
        </Navigation>
      </ContentWrapper>
    </Container>
  );
}