import "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
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

const StepReview = () => {
  // ⚡ placeholder review data
  const reviewData = {
    jobTitle: "FCL Export – Sydney to LA",
    client: "ABC Exports Pty Ltd",
    origin: "Sydney, AU",
    destination: "Los Angeles, US",
    status: "Pending"
  };

  return (
    <Wrapper>
      <Title>Step: Review</Title>

      <Section>
        <Label>Job Title:</Label>
        <Value>{reviewData.jobTitle}</Value>
      </Section>

      <Section>
        <Label>Client:</Label>
        <Value>{reviewData.client}</Value>
      </Section>

      <Section>
        <Label>Origin:</Label>
        <Value>{reviewData.origin}</Value>
      </Section>

      <Section>
        <Label>Destination:</Label>
        <Value>{reviewData.destination}</Value>
      </Section>

      <Section>
        <Label>Status:</Label>
        <Value>{reviewData.status}</Value>
      </Section>
    </Wrapper>
  );
};

export default StepReview;