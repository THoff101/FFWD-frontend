import "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 1rem;
`;

const Title = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const Section = styled.div`
  margin-bottom: 1rem;
`;

const Label = styled.div`
  font-weight: 500;
`;

const Value = styled.div`
  margin-left: 0.5rem;
`;

const ConsolidationStepReview = ({ consolidation }) => {
  return (
    <Wrapper>
      <Title>Review Summary</Title>

      <Section>
        <Label>Name:</Label>
        <Value>{consolidation.name}</Value>
      </Section>

      <Section>
        <Label>Container:</Label>
        <Value>{consolidation.container}</Value>
      </Section>

      <Section>
        <Label>Status:</Label>
        <Value>{consolidation.status}</Value>
      </Section>
    </Wrapper>
  );
};

export default ConsolidationStepReview;