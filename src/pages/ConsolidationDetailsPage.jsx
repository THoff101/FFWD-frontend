import "react";
import styled from "styled-components";
import { mockConsolidations } from "../data/consolidations";
import ConsolidationStepBasics from "./ConsolidationStepBasics";
import ConsolidationStepDocuments from "./ConsolidationStepDocuments";
import ConsolidationStepParties from "./ConsolidationStepParties";
import ConsolidationStepReview from "./ConsolidationStepReview";

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
`;

const Section = styled.section`
  background: var(--card);
  color: var(--card-foreground);
  padding: 1rem;
  border-radius: var(--radius);
  margin-bottom: 1rem;
  box-shadow: 0 1px 3px rgba(0,0,0,0.05);
`;

const ConsolidationDetailsPage = () => {
  const consolidation = mockConsolidations[0];

  return (
    <PageWrapper>
      <Title>Consolidation Details: {consolidation.name}</Title>

      <Section>
        <ConsolidationStepBasics consolidation={consolidation} />
      </Section>

      <Section>
        <ConsolidationStepDocuments consolidation={consolidation} />
      </Section>

      <Section>
        <ConsolidationStepParties consolidation={consolidation} />
      </Section>

      <Section>
        <ConsolidationStepReview consolidation={consolidation} />
      </Section>
    </PageWrapper>
  );
};

export default ConsolidationDetailsPage;